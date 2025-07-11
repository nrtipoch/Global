import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export class PDFExporter {
  constructor() {
    this.pdf = null;
  }

  async exportDashboard(dashboardData, onProgress) {
    try {
      onProgress(10, 'กำลังเตรียมข้อมูล...');
      
      this.pdf = new jsPDF('p', 'mm', 'a4');
      
      onProgress(25, 'กำลังสร้างหน้า PDF...');
      await this.createHeader();
      
      onProgress(40, 'กำลังเพิ่มข้อมูลสรุป...');
      await this.createSummary(dashboardData);
      
      onProgress(60, 'กำลังสร้างกราฟ...');
      await this.addCharts();
      
      onProgress(80, 'กำลังเพิ่มข้อมูลเทรนด์...');
      await this.createTrendsPage(dashboardData);
      
      onProgress(95, 'กำลังบันทึกไฟล์...');
      const filename = `Innovation-Dashboard-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.pdf`;
      
      this.pdf.save(filename);
      onProgress(100, 'สำเร็จ!');
      
      return { success: true, filename };
    } catch (error) {
      console.error('PDF Export Error:', error);
      return { success: false, error: error.message };
    }
  }

  async createHeader() {
    // Title
    this.pdf.setFontSize(24);
    this.pdf.setTextColor(67, 45, 162);
    this.pdf.text('Global Innovation & Technology Dashboard', 105, 30, { align: 'center' });
    
    // Subtitle
    this.pdf.setFontSize(14);
    this.pdf.setTextColor(100, 100, 100);
    this.pdf.text('Innovation and Technology Report', 105, 40, { align: 'center' });
    
    // Date
    const now = new Date();
    const dateStr = now.toLocaleDateString('th-TH', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    this.pdf.setFontSize(10);
    this.pdf.text(`Generated on: ${dateStr}`, 105, 50, { align: 'center' });
    
    // Separator line
    this.pdf.setDrawColor(78, 205, 196);
    this.pdf.setLineWidth(0.5);
    this.pdf.line(20, 55, 190, 55);
  }

  async createSummary(data) {
    const marketData = data.marketData;
    let y = 70;
    
    // Section title
    this.pdf.setFontSize(16);
    this.pdf.setTextColor(67, 45, 162);
    this.pdf.text('Key Metrics Summary', 20, y);
    y += 15;
    
    // Key metrics
    const metrics = [
      ['Global Tech Market', marketData.globalTechMarket],
      ['Innovation Investment', marketData.innovationInvestment],
      ['Startup Funding', marketData.startupFunding],
      ['Patent Applications', marketData.patentApplications],
      ['R&D Spending', marketData.rdSpending],
      ['Tech Unicorns', marketData.techUnicorns + ' companies']
    ];
    
    this.pdf.setFontSize(12);
    this.pdf.setTextColor(60, 60, 60);
    
    metrics.forEach(([label, value], index) => {
      const row = Math.floor(index / 2);
      const col = index % 2;
      const x = col === 0 ? 20 : 110;
      const currentY = y + (row * 15);
      
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(label + ':', x, currentY);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.setTextColor(78, 205, 196);
      this.pdf.text(value, x, currentY + 5);
      this.pdf.setTextColor(60, 60, 60);
    });
  }

  async addCharts() {
    try {
      // Capture charts if they exist
      const marketChart = document.querySelector('[data-testid="pie-chart"]');
      const trendChart = document.querySelector('[data-testid="line-chart"]');
      
      if (marketChart || trendChart) {
        this.pdf.addPage();
        
        // Charts page title
        this.pdf.setFontSize(16);
        this.pdf.setTextColor(67, 45, 162);
        this.pdf.text('Market Analysis Charts', 20, 30);
        
        let y = 50;
        
        if (marketChart) {
          const canvas = await html2canvas(marketChart);
          const imgData = canvas.toDataURL('image/png');
          this.pdf.text('Market Share Distribution', 20, y);
          this.pdf.addImage(imgData, 'PNG', 20, y + 5, 80, 60);
        }
        
        if (trendChart) {
          const canvas = await html2canvas(trendChart);
          const imgData = canvas.toDataURL('image/png');
          this.pdf.text('Growth Trends', 110, y);
          this.pdf.addImage(imgData, 'PNG', 110, y + 5, 80, 60);
        }
      }
    } catch (error) {
      console.warn('Could not add charts to PDF:', error);
    }
  }

  async createTrendsPage(data) {
    this.pdf.addPage();
    let y = 30;
    
    // Section title
    this.pdf.setFontSize(16);
    this.pdf.setTextColor(67, 45, 162);
    this.pdf.text('Technology Trends Analysis', 20, y);
    y += 15;
    
    const trends = data.techTrends.slice(0, 8); // Top 8 trends
    
    trends.forEach((trend, index) => {
      if (y > 250) {
        this.pdf.addPage();
        y = 30;
      }
      
      // Trend header
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.setTextColor(78, 205, 196);
      this.pdf.text(`${index + 1}. ${trend.category}`, 20, y);
      y += 8;
      
      // Growth and market value
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.setTextColor(60, 60, 60);
      this.pdf.text(`Growth: ${trend.growth}`, 25, y);
      this.pdf.text(`Market Value: ${trend.marketValue}`, 100, y);
      y += 8;
      
      // Key technologies
      const techText = `Technologies: ${trend.trends.join(', ')}`;
      const wrappedTech = this.pdf.splitTextToSize(techText, 160);
      this.pdf.text(wrappedTech, 25, y);
      y += wrappedTech.length * 4 + 5;
    });
    
    // Add AI insights
    y += 10;
    this.pdf.setFontSize(14);
    this.pdf.setTextColor(138, 43, 226);
    this.pdf.text('AI-Powered Insights', 20, y);
    y += 10;
    
    const insights = [
      'AI shows highest growth at 45% despite smaller market size',
      'Clean Energy dominates with $1.1T market value and 52% growth',
      'Technology investment should focus on AI and Clean Energy for long-term returns'
    ];
    
    this.pdf.setFontSize(10);
    this.pdf.setTextColor(60, 60, 60);
    
    insights.forEach(insight => {
      const wrappedText = this.pdf.splitTextToSize(`• ${insight}`, 160);
      this.pdf.text(wrappedText, 25, y);
      y += wrappedText.length * 5 + 3;
    });
  }
}

export default new PDFExporter();
