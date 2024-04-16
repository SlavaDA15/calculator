export const saveFile = (base64: string, fileName: string) => {
  const binaryData = atob(base64);

  const arrayBuffer = new ArrayBuffer(binaryData.length);
  const byteArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryData.length; i++) {
    byteArray[i] = binaryData.charCodeAt(i);
  }

  const blob = new Blob([byteArray], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.xlsx`);
  document.body.appendChild(link);

  link.click();
  link.remove();
};
