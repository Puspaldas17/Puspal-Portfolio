import { Button } from "@/components/ui/button";
import { Download, Printer, ArrowLeft } from "lucide-react";
import { Resume } from "@/components/Resume";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Action Bar - Hidden in print */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrint}
                className="gap-2"
              >
                <Printer className="w-4 h-4" />
                Print
              </Button>
              <Button
                onClick={handleDownload}
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 print:p-0">
        <Resume />
      </div>

      {/* Instructions - Hidden in print */}
      <div className="text-center py-8 text-sm text-muted-foreground print:hidden">
        <p>To download as PDF: Click "Download PDF" or use Print → Save as PDF</p>
      </div>
    </div>
  );
};

export default ResumePage;
