'use client';

import React from 'react';

interface WhatsappIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const WhatsappIcon: React.FC<WhatsappIconProps> = ({
  size = 24,
  className,
  color = '#25D366',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-hidden="true"
  >
    <path
      fill={color}
      d="M16 0c8.837 0 16 7.163 16 16 0 2.817-.732 5.587-2.116 8.012L32 32l-7.976-2.082A15.912 15.912 0 0 1 16 32C7.163 32 0 24.837 0 16S7.163 0 16 0z"
    />
    <path
      fill="#ffffff"
      d="M23.49 18.882c-.39-.195-2.3-1.135-2.654-1.265-.354-.13-.61-.195-.865.195-.256.39-.99 1.265-1.215 1.52-.223.256-.447.287-.833.097-.39-.195-1.65-.608-3.15-1.94-1.19-1.06-2-2.37-2.233-2.76-.223-.39-.024-.607.17-.802.175-.176.39-.447.585-.672.195-.223.26-.39.39-.65.13-.26.065-.487-.03-.682-.097-.195-.843-2.056-1.157-2.817-.304-.73-.613-.63-.85-.642l-.724-.013c-.223 0-.596.082-.908.389-.313.312-1.17 1.136-1.17 2.77 0 1.634 1.198 3.212 1.366 3.437.17.223 2.357 3.638 5.714 5.11.8.347 1.418.556 1.9.712.8.26 1.53.247 2.107.15.643-.095 2.123-.87 2.424-1.712.3-.842.3-1.56.21-1.702-.09-.143-.32-.23-.71-.425z"
    />
  </svg>
);

// WhatsappIcon: ícone oficial do WhatsApp com controle de tamanho e cor base.


