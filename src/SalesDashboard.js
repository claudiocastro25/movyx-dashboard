import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

// Estilos inline para casos onde o Tailwind não carregar
const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#4b5563',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gap: '1rem',
  },
  table: {
    minWidth: '100%',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
  },
  tableHeaderCell: {
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #e5e7eb',
    textAlign: 'left',
  },
  tableCell: {
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #e5e7eb',
  },
  greenText: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  redText: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  highlight: {
    backgroundColor: '#eff6ff',
    border: '2px solid #3b82f6',
  }
};

const SalesDashboard = () => {
  const [includeSaoJose, setIncludeSaoJose] = useState(true);
  const [activeTab, setActiveTab] = useState('vendas'); // 'vendas' ou 'retencoes'
  
  // Monthly branch office data (filiais)
  const branchMonthlyData = {
    oct2024: [
      { filial: 'BELO HORIZONTE', meta: 178772.48, resultado: 314128.00, percentual: 176, crescimento: 12 },
      { filial: 'LONDRINA', meta: 40253.41, resultado: 54978.00, percentual: 137, crescimento: 53 },
      { filial: 'LUZ', meta: 37490.92, resultado: 39807.20, percentual: 106, crescimento: 3 },
      { filial: 'RIO DE JANEIRO', meta: 49724.80, resultado: 62210.60, percentual: 125, crescimento: -8 },
      { filial: 'RIO GRANDE DO SUL', meta: 288088.56, resultado: 322346.72, percentual: 112, crescimento: 7 },
      { filial: 'PARANAVAÍ', meta: 56828.34, resultado: 54342.80, percentual: 96, crescimento: 5 },
      { filial: 'DIVINÓPOLIS', meta: 56828.80, resultado: 51381.20, percentual: 90, crescimento: -5 },
      { filial: 'PATOS DE MINAS', meta: 89978.20, resultado: 49640.00, percentual: 55, crescimento: -21 },
      { filial: 'IPATINGA', meta: 56828.80, resultado: 28639.20, percentual: 50, crescimento: 98 }
    ],
    nov2024: [
      { filial: 'PATOS DE MINAS', meta: 78143.23, resultado: 81017.40, percentual: 103.68, crescimento: 68 },
      { filial: 'PARANAVAÍ', meta: 45966.60, resultado: 70970.00, percentual: 154.39, crescimento: 26 },
      { filial: 'BELO HORIZONTE', meta: 257412.98, resultado: 324617.60, percentual: 126.11, crescimento: 4 },
      { filial: 'DIVINÓPOLIS', meta: 45966.60, resultado: 70994.40, percentual: 154.45, crescimento: 57 },
      { filial: 'LUZ', meta: 78143.23, resultado: 144629.50, percentual: 185.08, crescimento: 191 },
      { filial: 'RIO GRANDE DO SUL', meta: 252816.32, resultado: 180882.96, percentual: 71.55, crescimento: -45 },
      { filial: 'RIO DE JANEIRO', meta: 45966.60, resultado: 75781.40, percentual: 164.86, crescimento: 22 },
      { filial: 'LONDRINA', meta: 45966.60, resultado: 25908.00, percentual: 56.36, crescimento: -57 }
    ],
    dec2024: [
      { filial: 'PARANAVAÍ', meta: 21089.10, resultado: 70458.40, percentual: 334.10, crescimento: null },
      { filial: 'RIO DE JANEIRO', meta: 23198.01, resultado: 38120.40, percentual: 164.33, crescimento: null },
      { filial: 'BELO HORIZONTE', meta: 152244.60, resultado: 225683.72, percentual: 148.24, crescimento: null },
      { filial: 'RIO GRANDE DO SUL', meta: 225004.45, resultado: 286420.46, percentual: 127.30, crescimento: null },
      { filial: 'LONDRINA', meta: 40069.29, resultado: 43108.00, percentual: 107.58, crescimento: null },
      { filial: 'LUZ', meta: 71919.23, resultado: 68194.60, percentual: 94.82, crescimento: null },
      { filial: 'PATOS DE MINAS', meta: 71919.23, resultado: 41418.20, percentual: 57.59, crescimento: null },
      { filial: 'DIVINÓPOLIS', meta: 40069.29, resultado: 19127.60, percentual: 47.74, crescimento: null },
      { filial: 'IPATINGA', meta: 40069.29, resultado: 7062.80, percentual: 17.63, crescimento: null }
    ],
    jan2025: [
      { filial: 'PATOS DE MINAS', meta: 28633.33, resultado: 46696.70, percentual: 163.09, crescimento: null },
      { filial: 'RIO DE JANEIRO', meta: 50540.65, resultado: 64400.00, percentual: 127.42, crescimento: null },
      { filial: 'BELO HORIZONTE', meta: 227432.91, resultado: 254109.20, percentual: 111.73, crescimento: null },
      { filial: 'RIO GRANDE DO SUL', meta: 277973.56, resultado: 268647.56, percentual: 96.65, crescimento: null },
      { filial: 'SÃO JOSÉ DOS CAMPOS', meta: 85919.10, resultado: 78109.20, percentual: 90.91, crescimento: null },
      { filial: 'PARANAVAÍ', meta: 50540.65, resultado: 38714.40, percentual: 76.60, crescimento: null },
      { filial: 'LUZ MG', meta: 85919.10, resultado: 60465.40, percentual: 70.37, crescimento: null },
      { filial: 'DIVINÓPOLIS', meta: 50540.65, resultado: 14097.80, percentual: 27.89, crescimento: null }
    ],
    feb2025: [
      { filial: 'SÃO JOSÉ DOS CAMPOS', meta: 78143.23, resultado: 196888.70, percentual: 251.96, crescimento: 152 },
      { filial: 'LUZ', meta: 78143.23, resultado: 144629.50, percentual: 185.08, crescimento: 139 },
      { filial: 'RIO DE JANEIRO', meta: 45966.60, resultado: 75781.40, percentual: 164.86, crescimento: 18 },
      { filial: 'DIVINÓPOLIS', meta: 45966.60, resultado: 71454.40, percentual: 155.45, crescimento: 407 },
      { filial: 'PARANAVAÍ', meta: 45966.60, resultado: 70970.00, percentual: 154.39, crescimento: 83 },
      { filial: 'BELO HORIZONTE', meta: 206849.72, resultado: 336833.44, percentual: 162.84, crescimento: 33 },
      { filial: 'PATOS DE MINAS', meta: 78143.23, resultado: 75771.40, percentual: 96.96, crescimento: 62 },
      { filial: 'RIO GRANDE DO SUL', meta: 252816.32, resultado: 186061.96, percentual: 73.60, crescimento: -31 },
      { filial: 'LONDRINA', meta: 45966.60, resultado: 25908.00, percentual: 56.36, crescimento: -40 }
    ]
  };

  // Monthly consultant data
  const consultantMonthlyData = {
    oct2024: [
      { tier: 'I', consultor: 'DAVID', filial: 'RIO DE JANEIRO', resultado: 62210.60, percentual: 125.11, crescimento: -8 },
      { tier: 'I', consultor: 'GIVA', filial: 'PARANAVAÍ', resultado: 54342.80, percentual: 95.63, crescimento: 5 },
      { tier: 'I', consultor: 'FÁBIO', filial: 'LONDRINA', resultado: 34166.00, percentual: 84.88, crescimento: 520 },
      { tier: 'I', consultor: 'PÂMELA', filial: 'DIVINÓPOLIS', resultado: 51381.20, percentual: 90.41, crescimento: -5 },
      { tier: 'I', consultor: 'ALEXANDRE FRAGA', filial: 'IPATINGA', resultado: 28639.20, percentual: 50.40, crescimento: 98 },
      { tier: 'I', consultor: 'CARLOS', filial: 'RIO GRANDE DO SUL', resultado: 5195.20, percentual: 9.14, crescimento: -38 },
      { tier: 'II', consultor: 'CAROLINA', filial: 'BELO HORIZONTE', resultado: 51869.40, percentual: 138.35, crescimento: 28 },
      { tier: 'II', consultor: 'LUIZ', filial: 'LUZ', resultado: 39807.20, percentual: 106.18, crescimento: 3 },
      { tier: 'II', consultor: 'ALEXANDRE', filial: 'RIO GRANDE DO SUL', resultado: 113289.76, percentual: 125.91, crescimento: 298 },
      { tier: 'II', consultor: 'RAISLA', filial: 'PATOS DE MINAS', resultado: 49640.00, percentual: 55.17, crescimento: -21 },
      { tier: 'III', consultor: 'LUANA', filial: 'BELO HORIZONTE', resultado: 262258.60, percentual: 185.63, crescimento: 9 },
      { tier: 'III', consultor: 'CEDEMIR', filial: 'RIO GRANDE DO SUL', resultado: 203861.76, percentual: 144.29, crescimento: -21 }
    ],
    feb2025: [
      { tier: 'I', consultor: 'DAVID', filial: 'RIO DE JANEIRO', resultado: 75781.40, percentual: 153.27, crescimento: 12 },
      { tier: 'I', consultor: 'GIVA', filial: 'PARANAVAÍ', resultado: 28509.20, percentual: 57.66, crescimento: -45 },
      { tier: 'I', consultor: 'FÁBIO', filial: 'LONDRINA', resultado: 31810.00, percentual: 64.34, crescimento: 478 },
      { tier: 'I', consultor: 'PÂMELA', filial: 'DIVINÓPOLIS', resultado: 2815.20, percentual: 5.69, crescimento: -95 },
      { tier: 'I', consultor: 'CARLOS', filial: 'RIO GRANDE DO SUL', resultado: 22245.72, percentual: 44.99, crescimento: 164 },
      { tier: 'II', consultor: 'CAROLINA', filial: 'BELO HORIZONTE', resultado: 122563.20, percentual: 145.82, crescimento: 204 },
      { tier: 'II', consultor: 'LUIZ', filial: 'LUZ', resultado: 190366.04, percentual: 226.49, crescimento: 394 },
      { tier: 'II', consultor: 'ALEXANDRE', filial: 'RIO GRANDE DO SUL', resultado: 83126.00, percentual: 98.90, crescimento: 192 },
      { tier: 'III', consultor: 'LUANA', filial: 'BELO HORIZONTE', resultado: 303166.40, percentual: 218.99, crescimento: 26 },
      { tier: 'III', consultor: 'CEDEMIR', filial: 'RIO GRANDE DO SUL', resultado: 381074.16, percentual: 275.27, crescimento: 47 },
      { tier: 'I', consultor: 'LUCAS', filial: 'SÃO JOSÉ DOS CAMPOS', resultado: 196888.70, percentual: 251.96, crescimento: 152 }
    ]
  };

  // Monthly totals
  const monthlyTotals = [
    { month: 'OUT/24', meta: 854794.31, resultado: 977473.72, percentual: 114, crescimento: 8 },
    { month: 'NOV/24', meta: 896348.76, resultado: 974801.26, percentual: 109, crescimento: -2 },
    { month: 'DEZ/24', meta: 757501.72, resultado: 799594.18, percentual: 106, crescimento: -18 },
    { month: 'JAN/25', meta: 908040.60, resultado: 825240.26, percentual: 91, crescimento: 3 },
    { month: 'FEV/25', meta: 923928.73, resultado: 1184298.80, percentual: 128, crescimento: 43 }
  ];

  // Monthly results by branch for trend chart
  const branchTrends = [
    { month: 'OUT/24', 'BELO HORIZONTE': 314128.00, 'RIO DE JANEIRO': 62210.60, 'RIO GRANDE DO SUL': 322346.72, 'LONDRINA': 54978.00, 'PARANAVAÍ': 54342.80, 'SÃO JOSÉ DOS CAMPOS': 0 },
    { month: 'NOV/24', 'BELO HORIZONTE': 324617.60, 'RIO DE JANEIRO': 75781.40, 'RIO GRANDE DO SUL': 180882.96, 'LONDRINA': 25908.00, 'PARANAVAÍ': 70970.00, 'SÃO JOSÉ DOS CAMPOS': 0 },
    { month: 'DEZ/24', 'BELO HORIZONTE': 225683.72, 'RIO DE JANEIRO': 38120.40, 'RIO GRANDE DO SUL': 286420.46, 'LONDRINA': 43108.00, 'PARANAVAÍ': 70458.40, 'SÃO JOSÉ DOS CAMPOS': 0 },
    { month: 'JAN/25', 'BELO HORIZONTE': 254109.20, 'RIO DE JANEIRO': 64400.00, 'RIO GRANDE DO SUL': 268647.56, 'LONDRINA': 0, 'PARANAVAÍ': 38714.40, 'SÃO JOSÉ DOS CAMPOS': 78109.20 },
    { month: 'FEV/25', 'BELO HORIZONTE': 336833.44, 'RIO DE JANEIRO': 75781.40, 'RIO GRANDE DO SUL': 186061.96, 'LONDRINA': 25908.00, 'PARANAVAÍ': 70970.00, 'SÃO JOSÉ DOS CAMPOS': 196888.70 }
  ];

  // Top consultants cumulative results
  const topConsultants = [
    { name: 'LUANA', total: 565425.00, tier: 'III' },
    { name: 'CEDEMIR', total: 584935.92, tier: 'III' },
    { name: 'CAROLINA', total: 174432.60, tier: 'II' },
    { name: 'LUIZ', total: 230173.24, tier: 'II' },
    { name: 'DAVID', total: 137992.00, tier: 'I' },
    { name: 'ALEXANDRE', total: 196415.76, tier: 'II' },
    { name: 'LUCAS', total: 196888.70, tier: 'I' }
  ];

  // Growth rate calculations for February
  const febGrowthRates = [
    { filial: 'SÃO JOSÉ DOS CAMPOS', value: 152 },
    { filial: 'LUZ', value: 139 },
    { filial: 'DIVINÓPOLIS', value: 407 },
    { filial: 'PARANAVAÍ', value: 83 },
    { filial: 'BELO HORIZONTE', value: 33 },
    { filial: 'RIO DE JANEIRO', value: 18 },
    { filial: 'PATOS DE MINAS', value: 62 },
    { filial: 'RIO GRANDE DO SUL', value: -31 },
    { filial: 'LONDRINA', value: -40 }
  ];

  // Oct to Feb growth comparison
  const octToFebGrowth = [
    { filial: 'BELO HORIZONTE', oct: 314128.00, feb: 336833.44, growth: ((336833.44 - 314128.00) / 314128.00 * 100).toFixed(2) },
    { filial: 'RIO DE JANEIRO', oct: 62210.60, feb: 75781.40, growth: ((75781.40 - 62210.60) / 62210.60 * 100).toFixed(2) },
    { filial: 'RIO GRANDE DO SUL', oct: 322346.72, feb: 186061.96, growth: ((186061.96 - 322346.72) / 322346.72 * 100).toFixed(2) },
    { filial: 'LONDRINA', oct: 54978.00, feb: 25908.00, growth: ((25908.00 - 54978.00) / 54978.00 * 100).toFixed(2) },
    { filial: 'PARANAVAÍ', oct: 54342.80, feb: 70970.00, growth: ((70970.00 - 54342.80) / 54342.80 * 100).toFixed(2) },
    { filial: 'DIVINÓPOLIS', oct: 51381.20, feb: 71454.40, growth: ((71454.40 - 51381.20) / 51381.20 * 100).toFixed(2) },
    { filial: 'SÃO JOSÉ DOS CAMPOS', oct: 0, feb: 196888.70, growth: "Novo" }
  ];

  // Month over month growth calculation
  const monthlyGrowthData = [
    { month: 'OUT → NOV', growth: ((974801.26 - 977473.72) / 977473.72 * 100).toFixed(2) },
    { month: 'NOV → DEZ', growth: ((799594.18 - 974801.26) / 974801.26 * 100).toFixed(2) },
    { month: 'DEZ → JAN', growth: ((825240.26 - 799594.18) / 799594.18 * 100).toFixed(2) },
    { month: 'JAN → FEV', growth: ((1184298.80 - 825240.26) / 825240.26 * 100).toFixed(2) },
  ];

  // Retention data
  const retentionData = {
    summary: {
      totalPedidos: 295,
      totalRetencoes: 62,
      cancelamentos: 233,
      taxaRetencao: 21.0,
      valorRetido: 336191.50,
      totalPlacas: 1021,
      mediaPlacas: 16.5,
      valorMedio: 5422.44
    },
    monthly: [
      { month: 'Outubro/24', pedidos: 12, retencoes: 4, cancelamentos: 8, placas: 65, valorRetido: 4514.76, taxaRetencao: 33.3 },
      { month: 'Novembro/24', pedidos: 85, retencoes: 12, cancelamentos: 73, placas: 330, valorRetido: 32178.27, taxaRetencao: 14.1 },
      { month: 'Dezembro/24', pedidos: 75, retencoes: 15, cancelamentos: 60, placas: 231, valorRetido: 54781.23, taxaRetencao: 20.0 },
      { month: 'Janeiro/25', pedidos: 123, retencoes: 31, cancelamentos: 92, placas: 395, valorRetido: 244717.24, taxaRetencao: 25.2 }
    ]
  };

  // Filter data based on the selected view
  const filterData = (data) => {
    if (includeSaoJose) return data;
    return data.filter(item => item.filial !== 'SÃO JOSÉ DOS CAMPOS');
  };

  // Filter branch data for each month
  const filteredBranchData = {
    oct2024: filterData(branchMonthlyData.oct2024),
    nov2024: filterData(branchMonthlyData.nov2024),
    dec2024: filterData(branchMonthlyData.dec2024),
    jan2025: filterData(branchMonthlyData.jan2025),
    feb2025: filterData(branchMonthlyData.feb2025)
  };

  // Filter consultant data
  const filteredConsultantData = {
    oct2024: consultantMonthlyData.oct2024.filter(c => includeSaoJose || c.filial !== 'SÃO JOSÉ DOS CAMPOS'),
    feb2025: consultantMonthlyData.feb2025.filter(c => includeSaoJose || c.filial !== 'SÃO JOSÉ DOS CAMPOS')
  };

  // Filtered trend data
  const filteredTrends = branchTrends.map(month => {
    if (includeSaoJose) return month;
    const newMonth = {...month};
    delete newMonth['SÃO JOSÉ DOS CAMPOS'];
    return newMonth;
  });

  // Filtered growth data
  const filteredFebGrowth = includeSaoJose ? febGrowthRates : febGrowthRates.filter(item => item.filial !== 'SÃO JOSÉ DOS CAMPOS');
  const filteredOctToFebGrowth = includeSaoJose ? octToFebGrowth : octToFebGrowth.filter(item => item.filial !== 'SÃO JOSÉ DOS CAMPOS');
  
  // Color configuration
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  const greenRed = (value) => value >= 0 ? '#4CAF50' : '#F44336';
  
  // Consultant tier colors
  const tierColors = {
    'I': '#8884d8',
    'II': '#82ca9d',
    'III': '#ffc658'
  };

  return (
    <div style={styles.container} className="p-4 bg-gray-100 w-full">
      <div style={styles.card} className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div style={styles.header} className="flex justify-between items-center mb-4">
          <div>
            <h1 style={styles.title} className="text-3xl font-bold mb-2 text-gray-800">Movyx Dashboard</h1>
            <h2 style={styles.subtitle} className="text-xl text-gray-600">Outubro 2024 - Fevereiro 2025</h2>
          </div>
          <div className="flex items-center">
            {activeTab === 'vendas' && (
              <button 
                onClick={() => setIncludeSaoJose(!includeSaoJose)}
                style={{
                  ...styles.button,
                  backgroundColor: includeSaoJose ? '#4CAF50' : '#F44336', 
                }} 
                className="px-4 py-2 rounded font-bold mr-4"
              >
                {includeSaoJose ? '✓ São José dos Campos Incluído' : '✗ São José dos Campos Excluído'}
              </button>
            )}
          </div>
        </div>
        
        {/* Tabs */}
        <div style={{display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem'}} className="flex border-b mb-6">
          <button 
            onClick={() => setActiveTab('vendas')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 'bold',
              borderBottom: activeTab === 'vendas' ? '2px solid #4CAF50' : 'none',
              color: activeTab === 'vendas' ? '#4CAF50' : '#6b7280',
            }}
            className="py-3 px-6 font-bold border-b-2 focus:outline-none"
          >
            Vendas
          </button>
          <button 
            onClick={() => setActiveTab('retencoes')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 'bold',
              borderBottom: activeTab === 'retencoes' ? '2px solid #4CAF50' : 'none',
              color: activeTab === 'retencoes' ? '#4CAF50' : '#6b7280',
            }}
            className="py-3 px-6 font-bold border-b-2 focus:outline-none"
          >
            Retenções
          </button>
        </div>
        
        {activeTab === 'vendas' ? (
        <>
        {/* Monthly Performance Cards - Side by Side */}
        <div style={styles.section} className="mb-8">
          <h2 style={styles.sectionTitle} className="text-2xl font-bold mb-4">Desempenho Mensal</h2>
          <div style={{...styles.grid, gridTemplateColumns: 'repeat(5, 1fr)'}} className="grid grid-cols-5 gap-4">
            {monthlyTotals.map((month, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.card, 
                  padding: '1rem', 
                  ...(month.month === 'FEV/25' ? styles.highlight : {backgroundColor: '#f9fafb'})
                }}
                className={`p-4 rounded-lg shadow ${month.month === 'FEV/25' ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'}`}
              >
                <h3 style={{fontWeight: 'bold', fontSize: '1.125rem'}} className="text-lg font-semibold">{month.month}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem'}} className="flex justify-between items-center mt-2">
                  <span style={{color: '#4b5563'}} className="text-gray-600">Resultado:</span>
                  <span style={{fontWeight: 'bold', fontSize: '1.25rem'}} className="text-xl font-bold">R$ {month.resultado.toLocaleString('pt-BR')}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem'}} className="flex justify-between items-center mt-2">
                  <span style={{color: '#4b5563'}} className="text-gray-600">Meta:</span>
                  <span>R$ {month.meta.toLocaleString('pt-BR')}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem'}} className="flex justify-between items-center mt-2">
                  <span style={{color: '#4b5563'}} className="text-gray-600">% Meta:</span>
                  <span style={month.percentual >= 100 ? styles.greenText : styles.redText} className={`font-semibold ${month.percentual >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                    {month.percentual}%
                  </span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem'}} className="flex justify-between items-center mt-2">
                  <span style={{color: '#4b5563'}} className="text-gray-600">Crescimento:</span>
                  <span style={month.crescimento >= 0 ? styles.greenText : styles.redText} className={`font-semibold ${month.crescimento >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {month.crescimento}%
                  </span>
                </div>
                {month.month === 'FEV/25' && (
                  <div style={{marginTop: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: '#dbeafe', borderRadius: '0.25rem', textAlign: 'center', fontWeight: 'bold', color: '#1e40af'}} className="mt-2 py-1 px-2 bg-blue-100 rounded text-blue-800 text-center font-semibold">
                    Destaque: +43% de crescimento!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Crescimento Entre Mês Atual e Anterior */}
        <div style={styles.section} className="mb-8">
          <h2 style={styles.sectionTitle} className="text-2xl font-bold mb-4">Comparação de Crescimento Entre Meses</h2>
          <div style={{...styles.grid, gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1rem'}} className="grid grid-cols-4 gap-4 mb-4">
            {monthlyGrowthData.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.card, 
                  padding: '1rem', 
                  ...(index === 3 ? styles.highlight : {backgroundColor: '#f9fafb'})
                }}
                className={`p-4 rounded-lg shadow ${index === 3 ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'}`}
              >
                <h4 style={{fontWeight: 'bold', fontSize: '1.125rem'}} className="text-lg font-semibold">{item.month}</h4>
                <div 
                  style={{
                    fontSize: '1.875rem', 
                    fontWeight: 'bold', 
                    marginTop: '0.5rem',
                    color: parseFloat(item.growth) >= 0 ? '#10b981' : '#ef4444'
                  }} 
                  className={`text-3xl font-bold mt-2 ${parseFloat(item.growth) >= 0 ? 'text-green-600' : 'text-red-600'}`}
                >
                  {item.growth}%
                </div>
                {index === 3 && (
                  <div style={{marginTop: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: '#dbeafe', borderRadius: '0.25rem', textAlign: 'center', fontWeight: 'bold', color: '#1e40af'}} className="mt-2 py-1 px-2 bg-blue-100 rounded text-blue-800 text-center font-semibold">
                    Maior crescimento do período!
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{height: '300px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="growth" name="Crescimento (%)" radius={[4, 4, 0, 0]}>
                  {monthlyGrowthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={parseFloat(entry.growth) >= 0 ? '#4CAF50' : '#F44336'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Crescimento Outubro a Fevereiro */}
        <div style={styles.section} className="mb-8">
          <h2 style={styles.sectionTitle} className="text-2xl font-bold mb-4">Crescimento de Outubro até Fevereiro</h2>
          <div style={{height: '300px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredOctToFebGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="filial" />
                <YAxis />
                <Tooltip formatter={(value) => typeof value === "string" ? value : `${value}%`} />
                <Legend />
                <Bar dataKey="growth" name="Crescimento Outubro → Fevereiro (%)">
                  {filteredOctToFebGrowth.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.growth === "Novo" ? '#9C27B0' : (parseFloat(entry.growth) >= 0 ? '#4CAF50' : '#F44336')} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Evolução de Vendas */}
        <div style={{...styles.card, marginBottom: '1.5rem'}} className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}} className="text-xl font-bold mb-4">Evolução de Vendas por Mês</h2>
          <div style={{height: '300px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTotals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                <Legend />
                <Line type="monotone" dataKey="meta" stroke="#8884d8" name="Meta" />
                <Line type="monotone" dataKey="resultado" stroke="#82ca9d" name="Resultado" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Desempenho por Filial */}
        <div style={styles.section} className="mb-8">
          <h2 style={{...styles.sectionTitle, display: 'flex', alignItems: 'center'}} className="text-2xl font-bold mb-4 flex items-center">
            Desempenho por Filial
            {!includeSaoJose && (
              <span style={{marginLeft: '0.75rem', fontSize: '0.875rem', fontWeight: 'normal', color: '#6b7280'}} className="ml-3 text-sm font-normal text-gray-500">
                (São José dos Campos excluído)
              </span>
            )}
          </h2>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Top 5 Filiais - Fevereiro 2025</h3>
            <div style={{overflowX: 'auto'}}>
              <table style={styles.table} className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableHeaderCell}>Filial</th>
                    <th style={styles.tableHeaderCell}>Meta</th>
                    <th style={styles.tableHeaderCell}>Resultado</th>
                    <th style={styles.tableHeaderCell}>% Meta</th>
                    <th style={styles.tableHeaderCell}>Crescimento</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBranchData.feb2025
                    .sort((a, b) => b.percentual - a.percentual)
                    .slice(0, 5)
                    .map((branch, index) => (
                      <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white'}}>
                        <td style={styles.tableCell}>{branch.filial}</td>
                        <td style={styles.tableCell}>R$ {branch.meta.toLocaleString('pt-BR')}</td>
                        <td style={styles.tableCell}>R$ {branch.resultado.toLocaleString('pt-BR')}</td>
                        <td style={{
                          ...styles.tableCell, 
                          fontWeight: 'bold',
                          color: branch.percentual >= 100 ? '#10b981' : '#ef4444'
                        }}>
                          {branch.percentual}%
                        </td>
                        <td style={styles.tableCell}>
                          {branch.crescimento !== null ? (
                            <span style={{
                              fontWeight: 'bold',
                              color: branch.crescimento >= 0 ? '#10b981' : '#ef4444'
                            }}>
                              {branch.crescimento}%
                            </span>
                          ) : 'N/A'}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Evolução das Principais Filiais</h3>
            <div style={{height: '300px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                  <Legend />
                  <Line type="monotone" dataKey="BELO HORIZONTE" stroke="#8884d8" />
                  <Line type="monotone" dataKey="RIO DE JANEIRO" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="RIO GRANDE DO SUL" stroke="#ffc658" />
                  <Line type="monotone" dataKey="PARANAVAÍ" stroke="#ff8042" />
                  <Line type="monotone" dataKey="LONDRINA" stroke="#0088fe" />
                  {includeSaoJose && <Line type="monotone" dataKey="SÃO JOSÉ DOS CAMPOS" stroke="#00C49F" strokeWidth={3} />}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '1.5rem', 
            marginBottom: '1.5rem'
          }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Crescimento por Filial - Fevereiro 2025</h3>
              <div style={{height: '300px'}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredFebGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="filial" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" name="Crescimento (%)">
                      {filteredFebGrowth.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={greenRed(entry.value)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Distribuição de Vendas - Fevereiro 2025</h3>
              <div style={{height: '300px'}}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={filteredBranchData.feb2025}
                      dataKey="resultado"
                      nameKey="filial"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label={(entry) => entry.filial}
                    >
                      {filteredBranchData.feb2025.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Desempenho por Consultor */}
        <div>
          <h2 style={{...styles.sectionTitle, display: 'flex', alignItems: 'center'}} className="text-2xl font-bold mb-4 flex items-center">
            Desempenho por Consultor
            {!includeSaoJose && (
              <span style={{marginLeft: '0.75rem', fontSize: '0.875rem', fontWeight: 'normal', color: '#6b7280'}} className="ml-3 text-sm font-normal text-gray-500">
                (São José dos Campos excluído)
              </span>
            )}
          </h2>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Top Consultores - Fevereiro 2025</h3>
            <div style={{overflowX: 'auto'}}>
              <table style={styles.table} className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableHeaderCell}>Tier</th>
                    <th style={styles.tableHeaderCell}>Consultor</th>
                    <th style={styles.tableHeaderCell}>Filial</th>
                    <th style={styles.tableHeaderCell}>Resultado</th>
                    <th style={styles.tableHeaderCell}>% Meta</th>
                    <th style={styles.tableHeaderCell}>Crescimento</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredConsultantData.feb2025
                    .sort((a, b) => b.percentual - a.percentual)
                    .map((consultant, index) => (
                      <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white'}}>
                        <td style={{
                          ...styles.tableCell, 
                          fontWeight: 'bold',
                          color: tierColors[consultant.tier]
                        }}>
                          {consultant.tier}
                        </td>
                        <td style={styles.tableCell}>{consultant.consultor}</td>
                        <td style={styles.tableCell}>{consultant.filial}</td>
                        <td style={styles.tableCell}>R$ {consultant.resultado.toLocaleString('pt-BR')}</td>
                        <td style={{
                          ...styles.tableCell, 
                          fontWeight: 'bold',
                          color: consultant.percentual >= 100 ? '#10b981' : '#ef4444'
                        }}>
                          {consultant.percentual}%
                        </td>
                        <td style={styles.tableCell}>
                          {consultant.crescimento !== null ? (
                            <span style={{
                              fontWeight: 'bold',
                              color: consultant.crescimento >= 0 ? '#10b981' : '#ef4444'
                            }}>
                              {consultant.crescimento}%
                            </span>
                          ) : 'N/A'}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '1.5rem'
          }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Desempenho por Tier de Consultor</h3>
              <div style={{height: '300px'}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topConsultants.filter(c => includeSaoJose || c.name !== 'LUCAS')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                    <Legend />
                    <Bar dataKey="total" name="Total Vendas">
                      {topConsultants.filter(c => includeSaoJose || c.name !== 'LUCAS').map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={tierColors[entry.tier]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Comparativo Out/24 vs Fev/25</h3>
              <div style={{height: '300px'}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={filteredConsultantData.oct2024
                      .filter(c => filteredConsultantData.feb2025.some(fc => fc.consultor === c.consultor))
                      .map(c => {
                        const feb = filteredConsultantData.feb2025.find(fc => fc.consultor === c.consultor);
                        return {
                          name: c.consultor,
                          out: c.resultado,
                          fev: feb ? feb.resultado : 0,
                          tier: c.tier
                        };
                      })}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                    <Legend />
                    <Bar dataKey="out" name="Outubro 2024" fill="#8884d8" />
                    <Bar dataKey="fev" name="Fevereiro 2025" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        </> 
        ) : (
        <>
        {/* Retention Dashboard */}
        <div style={styles.section} className="mb-8">
          <h2 style={styles.sectionTitle} className="text-2xl font-bold mb-4">Dashboard de Análise de Retenções</h2>
          
          {/* Summary Cards */}
          <div style={{...styles.grid, gridTemplateColumns: 'repeat(4, 1fr)'}} className="grid grid-cols-4 gap-4 mb-6">
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f9fafb'}} className="p-4 rounded-lg shadow bg-gray-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Total de Pedidos</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold'}} className="text-2xl font-bold">{retentionData.summary.totalPedidos}</div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f9fafb'}} className="p-4 rounded-lg shadow bg-gray-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Total de Retenções</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold'}} className="text-2xl font-bold">{retentionData.summary.totalRetencoes}</div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f9fafb'}} className="p-4 rounded-lg shadow bg-gray-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Cancelamentos</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold'}} className="text-2xl font-bold">{retentionData.summary.cancelamentos}</div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f0fdf4'}} className="p-4 rounded-lg shadow bg-green-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Taxa de Retenção</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50'}} className="text-2xl font-bold text-green-600">{retentionData.summary.taxaRetencao}%</div>
            </div>
          </div>
          
          {/* Value Cards */}
          <div style={{...styles.grid, gridTemplateColumns: 'repeat(4, 1fr)'}} className="grid grid-cols-4 gap-4 mb-6">
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f0f9ff'}} className="p-4 rounded-lg shadow bg-blue-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Valor Total Retido</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6'}} className="text-2xl font-bold text-blue-600">
                R$ {retentionData.summary.valorRetido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
              </div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f9fafb'}} className="p-4 rounded-lg shadow bg-gray-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Total de Placas</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold'}} className="text-2xl font-bold">{retentionData.summary.totalPlacas}</div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f9fafb'}} className="p-4 rounded-lg shadow bg-gray-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Média Placas/Retenção</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold'}} className="text-2xl font-bold">{retentionData.summary.mediaPlacas}</div>
            </div>
            <div style={{...styles.card, padding: '1rem', backgroundColor: '#f0f9ff'}} className="p-4 rounded-lg shadow bg-blue-50">
              <h3 style={{fontSize: '1rem', color: '#6b7280'}} className="text-base text-gray-500">Valor Médio/Retenção</h3>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6'}} className="text-2xl font-bold text-blue-600">
                R$ {retentionData.summary.valorMedio.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
              </div>
            </div>
          </div>
          
          {/* Evolução Mensal */}
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Evolução Mensal</h3>
            <div style={{height: '300px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={retentionData.monthly}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'taxaRetencao') return [`${value}%`, 'Taxa de Retenção'];
                    return [value, name === 'pedidos' ? 'Pedidos' : name === 'retencoes' ? 'Retenções' : name];
                  }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="pedidos" fill="#8884d8" name="Pedidos" />
                  <Bar yAxisId="left" dataKey="retencoes" fill="#82ca9d" name="Retenções" />
                  <Line yAxisId="right" type="monotone" dataKey="taxaRetencao" stroke="#ff7300" name="Taxa de Retenção (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Detalhamento Mensal */}
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Detalhamento Mensal</h3>
            <div style={{overflowX: 'auto'}}>
              <table style={styles.table} className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableHeaderCell}>Mês</th>
                    <th style={styles.tableHeaderCell}>Pedidos</th>
                    <th style={styles.tableHeaderCell}>Retenções</th>
                    <th style={styles.tableHeaderCell}>Cancelamentos</th>
                    <th style={styles.tableHeaderCell}>Placas</th>
                    <th style={styles.tableHeaderCell}>Valor Retido</th>
                    <th style={styles.tableHeaderCell}>Taxa Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  {retentionData.monthly.map((month, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white'}}>
                      <td style={styles.tableCell}>{month.month}</td>
                      <td style={styles.tableCell}>{month.pedidos}</td>
                      <td style={styles.tableCell}>{month.retencoes}</td>
                      <td style={styles.tableCell}>{month.cancelamentos}</td>
                      <td style={styles.tableCell}>{month.placas}</td>
                      <td style={styles.tableCell}>R$ {month.valorRetido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                      <td style={{...styles.tableCell, fontWeight: 'bold', color: '#4CAF50'}}>{month.taxaRetencao}%</td>
                    </tr>
                  ))}
                  <tr style={{backgroundColor: '#f0fdf4', fontWeight: 'bold'}}>
                    <td style={styles.tableCell}>Total/Média</td>
                    <td style={styles.tableCell}>{retentionData.summary.totalPedidos}</td>
                    <td style={styles.tableCell}>{retentionData.summary.totalRetencoes}</td>
                    <td style={styles.tableCell}>{retentionData.summary.cancelamentos}</td>
                    <td style={styles.tableCell}>{retentionData.summary.totalPlacas}</td>
                    <td style={styles.tableCell}>R$ {retentionData.summary.valorRetido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                    <td style={{...styles.tableCell, fontWeight: 'bold', color: '#4CAF50'}}>{retentionData.summary.taxaRetencao}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Crescimento da Taxa de Retenção */}
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Crescimento da Taxa de Retenção</h3>
            <div style={{height: '300px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={retentionData.monthly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="taxaRetencao" stroke="#4CAF50" name="Taxa de Retenção %" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Análise de Valor Retido */}
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Análise de Valor Retido</h3>
            <div style={{height: '300px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={retentionData.monthly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`} />
                  <Legend />
                  <Bar dataKey="valorRetido" fill="#3b82f6" name="Valor Retido (R$)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Taxa de Crescimento */}
          <div style={styles.section}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}} className="text-lg font-semibold mb-3">Destaque - Crescimento da Taxa de Retenção</h3>
            <div style={{...styles.card, padding: '1.5rem', backgroundColor: '#f0fdf4'}} className="p-6 rounded-lg shadow bg-green-50 text-center">
              <div style={{color: '#4CAF50', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}} className="text-xl font-bold text-green-600 mb-2">
                Aumento de 78,7% na Taxa de Retenção
              </div>
              <div style={{fontSize: '1rem'}} className="text-base">
                De <span style={{fontWeight: 'bold'}}>14,1%</span> em Novembro/24 para <span style={{fontWeight: 'bold'}}>25,2%</span> em Janeiro/25
              </div>
              <div style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem'}} className="text-sm text-gray-500 mt-2">
                Resultado do trabalho estratégico realizado em parceria com a equipe da Carolina.
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;
