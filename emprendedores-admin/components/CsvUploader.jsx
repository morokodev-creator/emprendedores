import React, { useState } from 'react';
import { useClient } from 'sanity';
import Papa from 'papaparse';
import { Card, Text, Button, Stack, Box, Container, Heading } from '@sanity/ui';

export function CsvUploader() {
  const client = useClient({ apiVersion: '2023-01-01' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    setLogs(["Iniciando lectura del archivo CSV..."]);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const data = results.data;
        setLogs(prev => [...prev, `Se encontraron ${data.length} distribuidores.`]);

        for (const row of data) {
          if (!row.name) continue;

          const doc = {
            _type: 'dealer', 
            name: row.name,
            city: row.city,
            address: row.address,
            lat: parseFloat(row.lat) || 0,
            lng: parseFloat(row.lng) || 0,
            email: row.email,
            services: row.services ? row.services.split(',').map(s => s.trim()) : []
          };

          try {
            await client.create(doc);
            setLogs(prev => [...prev, `✅ Subido: ${row.name}`]);
          } catch (error) {
            setLogs(prev => [...prev, `❌ Error en ${row.name}: ${error.message}`]);
          }
        }

        setLoading(false);
        setLogs(prev => [...prev, "🎉 Proceso terminado exitosamente."]);
      },
      error: (error) => {
        setLogs(prev => [...prev, `❌ Error al leer CSV: ${error.message}`]);
        setLoading(false);
      }
    });
  };

  return (
    <Container width={1} padding={4}>
      <Card padding={4} radius={2} shadow={1}>
        <Stack space={4}>
          <Heading as="h1" size={4} style={{ marginBottom: '16px' }}>Subida Masiva de Distribuidores</Heading>
          <Text size={2}>
            Sube un archivo .csv con las siguientes columnas exactas en la primera fila:
            <br/><br/>
            <code style={{ background: '#222', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>name | city | address | lat | lng | email | services</code>
            <br/><br/>
            <i>Nota: Si el distribuidor tiene varios servicios, sepáralos por comas usando las palabras exactas <b>(Ej: Ventas, Repuestos, Servicios)</b>.</i>
          </Text>

          <Card padding={3} border radius={2}>
            <input type="file" accept=".csv" onChange={handleFileChange} />
          </Card>

          <Box>
            <Button 
              fontSize={2} 
              padding={3} 
              tone="primary" 
              text={loading ? "Procesando..." : "Subir Distribuidores"} 
              onClick={handleUpload} 
              disabled={!file || loading}
            />
          </Box>

          {/* Consola de resultados corregida */}
          {logs.length > 0 && (
            <Card padding={4} tone="transparent" border radius={2} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {logs.map((log, index) => (
                  <div key={index} style={{ paddingBottom: '4px', borderBottom: '1px solid #eaeaea' }}>
                    <Text size={2} muted={log.includes('Iniciando')}>{log}</Text>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </Stack>
      </Card>
    </Container>
  );
}