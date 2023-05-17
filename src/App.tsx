import React from 'react';
import './App.css';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontWeight: '900',
    fontSize: '40px',
    lineHeight: '55px',
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
  blueBar: {
    position: 'abolute',
    top: 0,
    padding: 0,
    width: 14,
    height: '100%',
    backgroundColor: '#50B2FA',
  },
});

// Create Document Component
export default function App() {
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.blueBar} />
            <View style={{ marginLeft: 10, marginTop: 30, width: '500px' }}>
              <View style={{ width: 150, backgroundColor: 'red' }}>
                <Text>Health OverView </Text>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text>logo</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
