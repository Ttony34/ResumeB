import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId, filename = 'resume') => {
  try {
    // Find the element to export
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found for PDF export');
    }

    // Create canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      removeContainer: true
    });

    // Calculate dimensions
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save(`${filename}.pdf`);
    
    return { success: true, message: 'PDF exported successfully!' };
  } catch (error) {
    console.error('PDF export error:', error);
    return { success: false, message: 'Failed to export PDF. Please try again.' };
  }
};

export const exportResumeWithNotification = async (elementId, filename, onSuccess, onError) => {
  const result = await exportToPDF(elementId, filename);
  
  if (result.success && onSuccess) {
    onSuccess(result.message);
  } else if (!result.success && onError) {
    onError(result.message);
  }
  
  return result;
};