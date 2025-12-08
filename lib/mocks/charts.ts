/**
 * Mock chart data generators
 * Provides utility functions to generate sample data for various chart types
 */

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface TimeSeriesDataPoint {
  date: string;
  value: number;
  [key: string]: string | number;
}

/**
 * Generate line/area chart data
 */
export function generateLineChartData(
  days: number = 30,
  startValue: number = 1000,
  variance: number = 200
): TimeSeriesDataPoint[] {
  const data: TimeSeriesDataPoint[] = [];
  let currentValue = startValue;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Random walk with slight upward trend
    const change = (Math.random() - 0.45) * variance;
    currentValue = Math.max(0, currentValue + change);

    data.push({
      date: date.toISOString().split("T")[0],
      value: Math.round(currentValue),
    });
  }

  return data;
}

/**
 * Generate multiple series for line/area chart
 */
export function generateMultiSeriesLineData(
  days: number = 30,
  seriesCount: number = 3
): TimeSeriesDataPoint[] {
  const data: TimeSeriesDataPoint[] = [];
  const series: number[][] = Array.from({ length: seriesCount }, () => 
    Array(days).fill(0).map(() => Math.random() * 1000 + 500)
  );

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    
    const point: TimeSeriesDataPoint = {
      date: date.toISOString().split("T")[0],
    };

    series.forEach((serie, index) => {
      point[`series${index + 1}`] = Math.round(serie[i]);
    });

    data.push(point);
  }

  return data;
}

/**
 * Generate bar chart data
 */
export function generateBarChartData(
  categories: number = 12,
  minValue: number = 100,
  maxValue: number = 1000
): ChartDataPoint[] {
  const categoryNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return Array.from({ length: categories }, (_, i) => ({
    name: categoryNames[i] || `Category ${i + 1}`,
    value: Math.floor(Math.random() * (maxValue - minValue) + minValue),
  }));
}

/**
 * Generate stacked bar chart data
 */
export function generateStackedBarData(
  categories: number = 12,
  stackCount: number = 3
): ChartDataPoint[] {
  const categoryNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return Array.from({ length: categories }, (_, i) => {
    const point: ChartDataPoint = {
      name: categoryNames[i] || `Category ${i + 1}`,
    };

    for (let j = 0; j < stackCount; j++) {
      point[`stack${j + 1}`] = Math.floor(Math.random() * 500 + 100);
    }

    return point;
  });
}

/**
 * Generate pie chart data
 */
export function generatePieChartData(
  segments: number = 5,
  totalValue: number = 1000
): ChartDataPoint[] {
  const segmentNames = [
    "Desktop", "Mobile", "Tablet", "Other", "Unknown",
    "Segment 6", "Segment 7", "Segment 8"
  ];

  // Generate random percentages that sum to 100
  const percentages: number[] = [];
  let remaining = 100;

  for (let i = 0; i < segments - 1; i++) {
    const percent = Math.random() * remaining * 0.8; // Leave some for the last segment
    percentages.push(percent);
    remaining -= percent;
  }
  percentages.push(remaining);

  return percentages.map((percent, i) => ({
    name: segmentNames[i] || `Segment ${i + 1}`,
    value: Math.round((totalValue * percent) / 100),
  }));
}

/**
 * Generate funnel chart data
 */
export function generateFunnelData(
  stages: number = 5,
  initialValue: number = 10000
): ChartDataPoint[] {
  const stageNames = [
    "Visitors", "Leads", "Opportunities", "Proposals", "Deals",
    "Stage 6", "Stage 7", "Stage 8"
  ];

  let currentValue = initialValue;
  const conversionRates = [1, 0.6, 0.5, 0.4, 0.3]; // Decreasing rates

  return Array.from({ length: stages }, (_, i) => {
    const rate = conversionRates[i] || 0.25;
    currentValue = Math.round(currentValue * rate);

    return {
      name: stageNames[i] || `Stage ${i + 1}`,
      value: currentValue,
    };
  });
}

/**
 * Generate heatmap data
 */
export function generateHeatmapData(
  rows: number = 7,
  columns: number = 12,
  maxValue: number = 100
): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      data.push({
        name: `R${row + 1}C${col + 1}`,
        value: Math.floor(Math.random() * maxValue),
        row,
        col,
      });
    }
  }

  return data;
}

/**
 * Generate scatter plot data
 */
export function generateScatterData(
  points: number = 50,
  xMin: number = 0,
  xMax: number = 100,
  yMin: number = 0,
  yMax: number = 100
): ChartDataPoint[] {
  return Array.from({ length: points }, () => ({
    name: "",
    value: Math.floor(Math.random() * (yMax - yMin) + yMin),
    x: Math.floor(Math.random() * (xMax - xMin) + xMin),
    y: Math.floor(Math.random() * (yMax - yMin) + yMin),
  }));
}

/**
 * Generate radar/spider chart data
 */
export function generateRadarData(
  axes: number = 6,
  maxValue: number = 100
): ChartDataPoint[] {
  const axisNames = [
    "Performance", "Quality", "Speed", "Design", "Features", "Support",
    "Axis 7", "Axis 8"
  ];

  return Array.from({ length: axes }, (_, i) => ({
    name: axisNames[i] || `Axis ${i + 1}`,
    value: Math.floor(Math.random() * maxValue),
  }));
}

