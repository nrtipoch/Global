import { generateMockData } from './mockData';

class DataService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_DATA_API_URL || '';
    this.geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY || '';
  }

  async fetchTechTrends() {
    try {
      // If API URL is configured, fetch from real API
      if (this.apiUrl) {
        const response = await fetch(`${this.apiUrl}/tech-trends`);
        if (!response.ok) throw new Error('API request failed');
        return await response.json();
      }
      
      // Fallback to mock data
      return generateMockData();
    } catch (error) {
      console.warn('Failed to fetch real data, using mock data:', error);
      return generateMockData();
    }
  }

  async refreshData() {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const data = await this.fetchTechTrends();
      return {
        status: 'success',
        data,
        message: 'ข้อมูลได้รับการอัปเดตแล้ว'
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'เกิดข้อผิดพลาดในการรีเฟรชข้อมูล: ' + error.message
      };
    }
  }

  async initializeSystem() {
    try {
      // Simulate system initialization
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        status: 'success',
        message: 'ระบบได้รับการเริ่มต้นเรียบร้อยแล้ว'
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'เกิดข้อผิดพลาดในการเริ่มต้นระบบ: ' + error.message
      };
    }
  }

  async analyzeWithGemini(data) {
    if (!this.geminiApiKey) {
      console.warn('Gemini API key not configured, using default insights');
      return this.getDefaultInsights();
    }

    try {
      const prompt = `
        วิเคราะห์ข้อมูลนวัตกรรมและเทคโนโลยีต่อไปนี้:
        ${JSON.stringify(data, null, 2)}
        
        กรุณาให้การวิเคราะห์ที่ครอบคลุม:
        1. เทรนด์ที่สำคัญที่สุด 3 อันดับแรก
        2. ผลกระทบต่อเศรษฐกิจโลก
        3. โอกาสและความเสี่ยง
        4. คำแนะนำสำหรับนักลงทุนและผู้ประกอบการ
        5. การคาดการณ์แนวโน้มใน 1-2 ปีข้างหน้า
      `;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.geminiApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 2048
            }
          })
        }
      );

      const result = await response.json();
      
      if (result.candidates && result.candidates[0]) {
        return JSON.parse(result.candidates[0].content.parts[0].text);
      } else {
        throw new Error('No response from Gemini API');
      }
    } catch (error) {
      console.warn('Gemini API error, using default insights:', error);
      return this.getDefaultInsights();
    }
  }

  getDefaultInsights() {
    return {
      topTrends: [
        'Generative AI กำลังปฏิวัติทุกอุตสาหกรรม',
        'Clean Energy เติบโตแรงจากนโยบายสีเขียว',
        'Quantum Computing เข้าสู่ยุคพาณิชย์'
      ],
      economicImpact: 'เทคโนโลยีมีส่วนสนับสนุน GDP โลก 15.8% และสร้างงาน 50+ ล้านตำแหน่ง',
      opportunities: ['การลงทุนใน AI และ Clean Tech', 'พัฒนา Digital Skills', 'สร้าง Innovation Ecosystem'],
      risks: ['ความไม่เท่าเทียมทางดิจิทัล', 'การกำกับดูแลเทคโนโลยี', 'ความปลอดภัยทางไซเบอร์'],
      recommendations: 'เน้นการลงทุนในการศึกษาและพัฒนาทักษะดิจิทัล',
      forecast: 'AI และ Clean Energy จะเป็นตัวขับเคลื่อนการเติบโตหลักในอีก 2 ปีข้างหน้า'
    };
  }
}

export default new DataService();import { generateMockData } from './mockData';

class DataService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_DATA_API_URL || '';
    this.geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY || '';
  }

  async fetchTechTrends() {
    try {
      // If API URL is configured, fetch from real API
      if (this.apiUrl) {
        const response = await fetch(`${this.apiUrl}/tech-trends`);
        if (!response.ok) throw new Error('API request failed');
        return await response.json();
      }
      
      // Fallback to mock data
      return generateMockData();
    } catch (error) {
      console.warn('Failed to fetch real data, using mock data:', error);
      return generateMockData();
    }
  }

  async refreshData() {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const data = await this.fetchTechTrends();
      return {
        status: 'success',
        data,
        message: 'ข้อมูลได้รับการอัปเดตแล้ว'
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'เกิดข้อผิดพลาดในการรีเฟรชข้อมูล: ' + error.message
      };
    }
  }

  async initializeSystem() {
    try {
      // Simulate system initialization
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        status: 'success',
        message: 'ระบบได้รับการเริ่มต้นเรียบร้อยแล้ว'
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'เกิดข้อผิดพลาดในการเริ่มต้นระบบ: ' + error.message
      };
    }
  }

  async analyzeWithGemini(data) {
    if (!this.geminiApiKey) {
      console.warn('Gemini API key not configured, using default insights');
      return this.getDefaultInsights();
    }

    try {
      const prompt = `
        วิเคราะห์ข้อมูลนวัตกรรมและเทคโนโลยีต่อไปนี้:
        ${JSON.stringify(data, null, 2)}
        
        กรุณาให้การวิเคราะห์ที่ครอบคลุม:
        1. เทรนด์ที่สำคัญที่สุด 3 อันดับแรก
        2. ผลกระทบต่อเศรษฐกิจโลก
        3. โอกาสและความเสี่ยง
        4. คำแนะนำสำหรับนักลงทุนและผู้ประกอบการ
        5. การคาดการณ์แนวโน้มใน 1-2 ปีข้างหน้า
      `;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.geminiApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 2048
            }
          })
        }
      );

      const result = await response.json();
      
      if (result.candidates && result.candidates[0]) {
        return JSON.parse(result.candidates[0].content.parts[0].text);
      } else {
        throw new Error('No response from Gemini API');
      }
    } catch (error) {
      console.warn('Gemini API error, using default insights:', error);
      return this.getDefaultInsights();
    }
  }

  getDefaultInsights() {
    return {
      topTrends: [
        'Generative AI กำลังปฏิวัติทุกอุตสาหกรรม',
        'Clean Energy เติบโตแรงจากนโยบายสีเขียว',
        'Quantum Computing เข้าสู่ยุคพาณิชย์'
      ],
      economicImpact: 'เทคโนโลยีมีส่วนสนับสนุน GDP โลก 15.8% และสร้างงาน 50+ ล้านตำแหน่ง',
      opportunities: ['การลงทุนใน AI และ Clean Tech', 'พัฒนา Digital Skills', 'สร้าง Innovation Ecosystem'],
      risks: ['ความไม่เท่าเทียมทางดิจิทัล', 'การกำกับดูแลเทคโนโลยี', 'ความปลอดภัยทางไซเบอร์'],
      recommendations: 'เน้นการลงทุนในการศึกษาและพัฒนาทักษะดิจิทัล',
      forecast: 'AI และ Clean Energy จะเป็นตัวขับเคลื่อนการเติบโตหลักในอีก 2 ปีข้างหน้า'
    };
  }
}

export default new DataService();
