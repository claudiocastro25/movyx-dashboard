import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SalesDashboard = () => {
  const [includeSaoJose, setIncludeSaoJose] = useState(true);
  
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
    <div className="p-4 bg-gray-100 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Movyx Sales Dashboard</h1>
            <h2 className="text-xl text-gray-600">Outubro 2024 - Fevereiro 2025</h2>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => setIncludeSaoJose(!includeSaoJose)}
              className="px-4 py-2 rounded font-bold" 
              style={{ 
                backgroundColor: includeSaoJose ? '#4CAF50' : '#F44336', 
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {includeSaoJose ? '✓ São José dos Campos Incluído' : '✗ São José dos Campos Excluído'}
            </button>
          </div>
        </div>
        
        {/* Monthly Performance Cards - Side by Side */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Desempenho Mensal</h2>
          <div className="grid grid-cols-5 gap-4">
            {monthlyTotals.map((month, index) => (
              <div key={index} className={`p-4 rounded-lg shadow ${month.month === 'FEV/25' ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'}`}>
                <h3 className="text-lg font-semibold">{month.month}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Resultado:</span>
                  <span className="text-xl font-bold">R$ {month.resultado.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Meta:</span>
                  <span>R$ {month.meta.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">% Meta:</span>
                  <span className={`font-semibold ${month.percentual >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                    {month.percentual}%
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Crescimento:</span>
                  <span className={`font-semibold ${month.crescimento >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {month.crescimento}%
                  </span>
                </div>
                {month.month === 'FEV/25' && (
                  <div className="mt-2 py-1 px-2 bg-blue-100 rounded text-blue-800 text-center font-semibold">
                    Destaque: +43% de crescimento!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Crescimento Entre Mês Atual e Anterior */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Comparação de Crescimento Entre Meses</h2>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {monthlyGrowthData.map((item, index) => (
              <div key={index} className={`p-4 rounded-lg shadow ${index === 3 ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'}`}>
                <h4 className="text-lg font-semibold">{item.month}</h4>
                <div className={`text-3xl font-bold mt-2 ${parseFloat(item.growth) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.growth}%
                </div>
                {index === 3 && (
                  <div className="mt-2 py-1 px-2 bg-blue-100 rounded text-blue-800 text-center font-semibold">
                    Maior crescimento do período!
                  </div>
                )}
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={300}>
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

        {/* Crescimento Outubro a Fevereiro */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Crescimento de Outubro até Fevereiro</h2>
          <ResponsiveContainer width="100%" height={300}>
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

        {/* Evolução de Vendas */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Evolução de Vendas por Mês</h2>
          <ResponsiveContainer width="100%" height={300}>
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

        {/* Desempenho por Filial */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            Desempenho por Filial
            {!includeSaoJose && (
              <span className="ml-3 text-sm font-normal text-gray-500">(São José dos Campos excluído)</span>
            )}
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Top 5 Filiais - Fevereiro 2025</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Filial</th>
                    <th className="py-2 px-4 border-b">Meta</th>
                    <th className="py-2 px-4 border-b">Resultado</th>
                    <th className="py-2 px-4 border-b">% Meta</th>
                    <th className="py-2 px-4 border-b">Crescimento</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBranchData.feb2025
                    .sort((a, b) => b.percentual - a.percentual)
                    .slice(0, 5)
                    .map((branch, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2 px-4 border-b">{branch.filial}</td>
                        <td className="py-2 px-4 border-b">R$ {branch.meta.toLocaleString('pt-BR')}</td>
                        <td className="py-2 px-4 border-b">R$ {branch.resultado.toLocaleString('pt-BR')}</td>
                        <td className={`py-2 px-4 border-b font-semibold ${branch.percentual >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                          {branch.percentual}%
                        </td>
                        <td className="py-2 px-4 border-b">
                          {branch.crescimento !== null ? (
                            <span className={`font-bold ${branch.crescimento >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Evolução das Principais Filiais</h3>
            <ResponsiveContainer width="100%" height={300}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Crescimento por Filial - Fevereiro 2025</h3>
              <ResponsiveContainer width="100%" height={300}>
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
            <div>
              <h3 className="text-lg font-semibold mb-3">Distribuição de Vendas - Fevereiro 2025</h3>
              <ResponsiveContainer width="100%" height={300}>
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

        {/* Desempenho por Consultor */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            Desempenho por Consultor
            {!includeSaoJose && (
              <span className="ml-3 text-sm font-normal text-gray-500">(São José dos Campos excluído)</span>
            )}
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Top Consultores - Fevereiro 2025</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Tier</th>
                    <th className="py-2 px-4 border-b">Consultor</th>
                    <th className="py-2 px-4 border-b">Filial</th>
                    <th className="py-2 px-4 border-b">Resultado</th>
                    <th className="py-2 px-4 border-b">% Meta</th>
                    <th className="py-2 px-4 border-b">Crescimento</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredConsultantData.feb2025
                    .sort((a, b) => b.percentual - a.percentual)
                    .map((consultant, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2 px-4 border-b font-semibold" style={{ color: tierColors[consultant.tier] }}>
                          {consultant.tier}
                        </td>
                        <td className="py-2 px-4 border-b">{consultant.consultor}</td>
                        <td className="py-2 px-4 border-b">{consultant.filial}</td>
                        <td className="py-2 px-4 border-b">R$ {consultant.resultado.toLocaleString('pt-BR')}</td>
                        <td className={`py-2 px-4 border-b font-semibold ${consultant.percentual >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                          {consultant.percentual}%
                        </td>
                        <td className="py-2 px-4 border-b">
                          {consultant.crescimento !== null ? (
                            <span className={`font-bold ${consultant.crescimento >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Desempenho por Tier de Consultor</h3>
              <ResponsiveContainer width="100%" height={300}>
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
            <div>
              <h3 className="text-lg font-semibold mb-3">Comparativo Out/24 vs Fev/25</h3>
              <ResponsiveContainer width="100%" height={300}>
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
    </div>
  );
};

export default SalesDashboard;
