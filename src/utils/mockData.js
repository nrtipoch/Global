export const generateMockData = () => {
  return {
    techTrends: [
      {
        category: 'Artificial Intelligence',
        trends: ['Generative AI', 'Large Language Models', 'AI Chips', 'Edge AI'],
        growth: '+45%',
        marketValue: '$150B',
        keyPlayers: ['OpenAI', 'Google', 'Microsoft', 'NVIDIA']
      },
      {
        category: 'Clean Energy',
        trends: ['Solar Efficiency', 'Battery Technology', 'Green Hydrogen', 'Wind Power'],
        growth: '+52%',
        marketValue: '$1.1T',
        keyPlayers: ['Tesla', 'BYD', 'First Solar', 'Enphase']
      },
      {
        category: 'Biotechnology',
        trends: ['Gene Editing', 'Personalized Medicine', 'Synthetic Biology', 'mRNA Technology'],
        growth: '+28%',
        marketValue: '$775B',
        keyPlayers: ['Moderna', 'CRISPR', 'Illumina', 'Ginkgo Bioworks']
      },
      {
        category: 'Space Technology',
        trends: ['Commercial Space', 'Satellite Internet', 'Space Manufacturing', 'Space Tourism'],
        growth: '+41%',
        marketValue: '$469B',
        keyPlayers: ['SpaceX', 'Blue Origin', 'Virgin Galactic', 'Rocket Lab']
      },
      {
        category: 'Quantum Computing',
        trends: ['Quantum Supremacy', 'Quantum Internet', 'Quantum Sensors', 'Quantum Cryptography'],
        growth: '+35%',
        marketValue: '$2.4B',
        keyPlayers: ['IBM', 'Google', 'IonQ', 'Rigetti']
      },
      {
        category: 'Extended Reality (XR)',
        trends: ['Virtual Reality', 'Augmented Reality', 'Mixed Reality', 'Metaverse'],
        growth: '+38%',
        marketValue: '$209B',
        keyPlayers: ['Meta', 'Apple', 'Microsoft', 'Unity']
      },
      {
        category: 'Autonomous Vehicles',
        trends: ['Self-Driving Cars', 'Autonomous Delivery', 'Smart Transportation', 'LIDAR Technology'],
        growth: '+33%',
        marketValue: '$186B',
        keyPlayers: ['Tesla', 'Waymo', 'Cruise', 'Aurora']
      },
      {
        category: 'Cybersecurity',
        trends: ['Zero Trust Security', 'AI-Powered Defense', 'Cloud Security', 'Identity Management'],
        growth: '+29%',
        marketValue: '$173B',
        keyPlayers: ['CrowdStrike', 'Palo Alto Networks', 'Cloudflare', 'Zscaler']
      },
      {
        category: 'Internet of Things (IoT)',
        trends: ['Smart Cities', 'Industrial IoT', 'Connected Health', 'Smart Agriculture'],
        growth: '+24%',
        marketValue: '$478B',
        keyPlayers: ['Cisco', 'Amazon', 'Microsoft', 'GE']
      },
      {
        category: 'Blockchain & Web3',
        trends: ['DeFi', 'NFTs', 'Smart Contracts', 'Decentralized Apps'],
        growth: '+18%',
        marketValue: '$67B',
        keyPlayers: ['Ethereum', 'Solana', 'Polygon', 'Chainlink']
      }
    ],
    marketData: {
      globalTechMarket: '$5.2T',
      innovationInvestment: '$743B',
      startupFunding: '$415B',
      patentApplications: '3.4M',
      rdSpending: '$2.4T',
      techUnicorns: 1200
    },
    innovationMetrics: {
      top5: ['Switzerland', 'Sweden', 'Singapore', 'United States', 'United Kingdom'],
      emerging: ['China', 'India', 'Vietnam', 'Ukraine', 'Mongolia'],
      techHubs: [
        { city: 'Silicon Valley', score: 95, focus: 'Software & AI' },
        { city: 'Shenzhen', score: 88, focus: 'Hardware & Manufacturing' },
        { city: 'Tel Aviv', score: 85, focus: 'Cybersecurity & Fintech' },
        { city: 'London', score: 82, focus: 'Fintech & AI' },
        { city: 'Singapore', score: 80, focus: 'Fintech & Smart City' }
      ]
    },
    timestamp: new Date().toISOString()
  };
};

export const getAIInsights = () => {
  return [
    '🔥 AI มีอัตราการเติบโตสูงสุด 45% แม้จะมีมูลค่าตลาดยังเล็กเมื่อเทียบกับสาขาอื่น',
    '🌱 Clean Energy ครองตลาดใหญ่ที่สุดด้วยมูลค่า $1.1T และเติบโต 52%',
    '🧬 Biotechnology มีมูลค่าตลาดสูงเป็นอันดับ 2 แต่การเติบโตชลอตัว',
    '🚀 Space Technology เป็นตลาดใหม่ที่มีศักยภาพสูงด้วยการเติบโต 41%',
    '💡 การลงทุนในเทคโนโลยีควรเน้นที่ AI และ Clean Energy สำหรับผลตอบแทนระยะยาว',
    '⚛️ Quantum Computing ยังเป็นตลาดเล็ก แต่มีศักยภาพเติบโตสูงในอนาคต',
    '🔒 Cybersecurity เป็นสาขาที่สำคัญขึ้นเรื่อยๆ เนื่องจากภัยคุกคามไซเบอร์เพิ่มขึ้น',
    '🌐 IoT มีมูลค่าตลาดสูง แต่การเติบโตชลอลงเนื่องจากตลาดเริ่มอิ่มตัว'
  ];
};
