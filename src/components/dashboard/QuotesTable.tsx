/** @format */

"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { useState } from "react";

export default function QuoteItem({quote} : {quote:any}){
const [pdfFileName, setPdfFileName] = useState('download.pdf');
const [fileNameStl, setFileNameStl] = useState('download.stl');
//   const [fileBase64, setFileBase64] = useState('');
//   const [fileType, setFileType] = useState('');

  const downloadFile = (file: any) => {
    const link = document.createElement('a');
    // link.href = `data:application/octet-stream;base64,${file}`;
    link.href = `data:application/sla;base64,${file}`;
    link.download = pdfFileName;
    link.click();
  };

  const downloadStlFile = (file: any) => {
    const link = document.createElement('a');
    // link.href = `data:application/octet-stream;base64,${file}`;
    link.href = `data:application/sla;base64,${file}`;
    link.download = fileNameStl;
    link.click();
  };

//   const downloadFile = (file: any) => {
//     // Decodificar el base64 y determinar el tipo de archivo
//     const byteCharacters = atob(file);
//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);

//     // Determinar el tipo de archivo basándose en los "magic numbers"
//     let detectedFileType = 'application/octet-stream';
//     let detectedFileName = 'downloaded-file.bin';

//     // Magic numbers para archivos conocidos
//     if (byteArray.length >= 4) {
//       if (byteArray[0] === 37 && byteArray[1] === 80 && byteArray[2] === 68 && byteArray[3] === 70) {
//         detectedFileType = 'application/pdf';
//         detectedFileName = 'downloaded-file.pdf';
//       } else if (
//         byteArray[0] === 115 && byteArray[1] === 111 && byteArray[2] === 108 && byteArray[3] === 105 && byteArray[4] === 100
//       ) {
//         detectedFileType = 'application/sla';
//         detectedFileName = 'downloaded-file.stl';
//       } else if (
//         byteArray[0] === 35 && byteArray[1] === 32 && byteArray[2] === 79 && byteArray[3] === 98 && byteArray[4] === 106
//       ) {
//         detectedFileType = 'text/plain'; // .obj are plain text files
//         detectedFileName = 'downloaded-file.obj';
//       } else if (
//         byteArray[0] === 83 && byteArray[1] === 84 && byteArray[2] === 69 && byteArray[3] === 80
//       ) {
//         detectedFileType = 'application/step';
//         detectedFileName = 'downloaded-file.step';
//       }
//     }
//     //setFileType(detectedFileType);
//     //setFileName(detectedFileName);
//     const link = document.createElement('a');
//     link.href = `data:${detectedFileType};base64,${detectedFileName}`;
//     link.download = fileName;
//     link.click();
//   };

    return(
        <>
            <TableRow>
              <TableCell>{quote.usuario.email}</TableCell>
              <TableCell><button onClick={() => downloadStlFile(quote.selected3DFile)}>Download File</button></TableCell>
              <TableCell><button onClick={() => downloadFile(quote.selectedPdfFile)}>Download File</button></TableCell>
              {/* <TableCell>{quote.usuario.email}</TableCell> */}
              <TableCell>{quote.specifications}</TableCell>
            </TableRow>
        </>

    )    
}
