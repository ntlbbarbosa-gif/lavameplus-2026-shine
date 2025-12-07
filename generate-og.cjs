const sharp = require('sharp');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a56db"/>
      <stop offset="100%" style="stop-color:#0f3a8c"/>
    </linearGradient>
    <linearGradient id="coral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff7a5c"/>
      <stop offset="100%" style="stop-color:#ff5a36"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="200" fill="#ffffff" opacity="0.05"/>
  <circle cx="1100" cy="530" r="250" fill="#ff5a36" opacity="0.15"/>
  
  <!-- Logo Box -->
  <rect x="550" y="120" width="100" height="100" rx="20" fill="url(#coral)"/>
  <text x="600" y="188" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">L+</text>
  
  <!-- Brand Name -->
  <text x="600" y="290" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle">
    <tspan fill="white">LAVAME</tspan><tspan fill="#ff5a36">PLUS</tspan>
  </text>
  
  <!-- Tagline -->
  <text x="600" y="350" font-family="Arial, sans-serif" font-size="28" fill="white" opacity="0.9" text-anchor="middle">Limpeza a Seco de Estofados Profissional</text>
  
  <!-- Divider line -->
  <rect x="400" y="390" width="400" height="4" rx="2" fill="#ff5a36" opacity="0.8"/>
  
  <!-- Features -->
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="24" fill="white" opacity="0.85" text-anchor="middle">✓ Sem Molhar   •   ✓ Resultado na Hora   •   ✓ Remove Ácaros</text>
  
  <!-- CTA Button -->
  <rect x="400" y="490" width="400" height="60" rx="30" fill="url(#coral)"/>
  <text x="600" y="530" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">📱 Agende pelo WhatsApp</text>
  
  <!-- Location -->
  <text x="600" y="600" font-family="Arial, sans-serif" font-size="18" fill="white" opacity="0.6" text-anchor="middle">Jacarepaguá - RJ e Região</text>
</svg>`;

async function generateOGImage() {
  try {
    const buffer = Buffer.from(svgContent);
    
    await sharp(buffer)
      .resize(1200, 630)
      .png()
      .toFile(path.join(__dirname, 'public', 'og-image.png'));
    
    console.log('✅ og-image.png criada com sucesso na pasta public/');
  } catch (error) {
    console.error('Erro ao gerar imagem:', error);
  }
}

generateOGImage();
