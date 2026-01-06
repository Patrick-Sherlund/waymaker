import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Industry {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

// Abstract line-based SVG illustrations for each industry
const IndustryIllustrations = {
  aviation: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Global route network - hub and spoke */}
      <g opacity="0.9">
        {/* Central hub */}
        <circle cx="120" cy="90" r="8" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="2" />
        <circle cx="120" cy="90" r="16" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <circle cx="120" cy="90" r="24" stroke="#DC2626" strokeWidth="1" opacity="0.15" />
        
        {/* Spoke destinations */}
        <circle cx="50" cy="50" r="5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="190" cy="50" r="5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="30" cy="130" r="5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="210" cy="130" r="5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="70" cy="140" r="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="170" cy="140" r="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        
        {/* Routes from hub */}
        <path d="M120 90 Q85 70 50 50" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
        <path d="M120 90 Q155 70 190 50" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
        <path d="M120 90 Q75 110 30 130" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
        <path d="M120 90 Q165 110 210 130" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
        <path d="M120 90 Q95 115 70 140" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
        <path d="M120 90 Q145 115 170 140" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
        
        {/* Hub label */}
        <text x="120" y="75" className="text-[8px]" fill="#DC2626" textAnchor="middle" fontWeight="600">ATL</text>
      </g>
      
      {/* Layered airspace visualization */}
      <g transform="translate(15, 15)" opacity="0.5">
        <path d="M0 0 L40 0 L35 8 L5 8 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
        <path d="M5 8 L35 8 L30 16 L10 16 Z" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
        <path d="M10 16 L30 16 L25 24 L15 24 Z" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="0.5" />
        
        <text x="20" y="30" className="text-[7px]" fill="#9CA3AF" textAnchor="middle">FL 180-600</text>
      </g>
      
      {/* Flight data telemetry */}
      <g transform="translate(160, 20)">
        {/* Altitude card */}
        <rect x="0" y="0" width="70" height="32" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <text x="35" y="13" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">ALTITUDE</text>
        <text x="35" y="25" className="text-[11px]" fill="#DC2626" textAnchor="middle" fontWeight="700">FL 350</text>
      </g>
      
      <g transform="translate(160, 58)">
        {/* Speed card */}
        <rect x="0" y="0" width="70" height="32" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <text x="35" y="13" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">SPEED</text>
        <text x="35" y="25" className="text-[11px]" fill="#DC2626" textAnchor="middle" fontWeight="700">485 KTS</text>
      </g>
      
      {/* Cross-country route visualization */}
      <g transform="translate(0, 155)">
        {/* Timeline route */}
        <path d="M30 0 L210 0" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Departure */}
        <circle cx="30" cy="0" r="5" fill="#DC2626" opacity="0.8" />
        <circle cx="30" cy="0" r="9" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="30" y="18" className="text-[9px]" fill="#6B7280" textAnchor="middle" fontWeight="600">SFO</text>
        
        {/* Waypoints */}
        <circle cx="90" cy="0" r="3" fill="#9CA3AF" opacity="0.5" />
        <circle cx="150" cy="0" r="3" fill="#9CA3AF" opacity="0.5" />
        
        {/* Arrival */}
        <circle cx="210" cy="0" r="5" fill="#DC2626" opacity="0.8" />
        <circle cx="210" cy="0" r="9" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="210" y="18" className="text-[9px]" fill="#6B7280" textAnchor="middle" fontWeight="600">JFK</text>
        
        {/* Flight time indicator */}
        <text x="120" y="-8" className="text-[7px]" fill="#9CA3AF" textAnchor="middle">5h 35m</text>
      </g>
      
      {/* Real-time tracking dots */}
      <g>
        <circle cx="105" cy="85" r="2.5" fill="#DC2626" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="135" cy="95" r="2.5" fill="#DC2626" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="105" r="2.5" fill="#DC2626" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.25;0.6" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Distance metric */}
      <g transform="translate(15, 100)">
        <rect x="0" y="0" width="55" height="24" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
        <text x="27.5" y="10" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">DISTANCE</text>
        <text x="27.5" y="19" className="text-[9px]" fill="#DC2626" textAnchor="middle" fontWeight="600">2,571 NM</text>
      </g>
      
      {/* Background grid - represents airspace sectors */}
      <g opacity="0.1">
        <path d="M60 20 L60 160" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M120 20 L120 160" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M180 20 L180 160" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M20 60 L220 60" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M20 120 L220 120" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
      </g>
    </svg>
  ),
  healthcare: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Patient care pathway - journey map */}
      <g opacity="0.9">
        {/* Care stages */}
        <circle cx="40" cy="90" r="6" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="40" y="108" className="text-[7px]" fill="#6B7280" textAnchor="middle" fontWeight="500">ER</text>
        
        <circle cx="90" cy="90" r="6" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="2" />
        <text x="90" y="108" className="text-[7px]" fill="#DC2626" textAnchor="middle" fontWeight="600">ICU</text>
        
        <circle cx="140" cy="90" r="6" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="140" y="108" className="text-[7px]" fill="#6B7280" textAnchor="middle" fontWeight="500">WARD</text>
        
        <circle cx="190" cy="90" r="6" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="190" y="108" className="text-[7px]" fill="#6B7280" textAnchor="middle" fontWeight="500">HOME</text>
        
        {/* Pathway connections */}
        <path d="M46 90 L84 90" stroke="#DC2626" strokeWidth="2" opacity="0.4" />
        <path d="M96 90 L134 90" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        <path d="M146 90 L184 90" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        
        {/* Active stage indicator */}
        <circle cx="90" cy="90" r="12" stroke="#DC2626" strokeWidth="1" opacity="0.2" />
        <circle cx="90" cy="90" r="18" stroke="#DC2626" strokeWidth="1" opacity="0.1" />
      </g>
      
      {/* Vital signs monitoring - real-time data */}
      <g transform="translate(20, 130)">
        {/* Heart Rate */}
        <rect x="0" y="0" width="50" height="32" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <text x="25" y="12" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">HR</text>
        <text x="25" y="24" className="text-[11px]" fill="#DC2626" textAnchor="middle" fontWeight="700">72</text>
        <text x="25" y="29" className="text-[6px]" fill="#9CA3AF" textAnchor="middle">bpm</text>
      </g>
      
      <g transform="translate(75, 130)">
        {/* Blood Pressure */}
        <rect x="0" y="0" width="50" height="32" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <text x="25" y="12" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">BP</text>
        <text x="25" y="24" className="text-[10px]" fill="#DC2626" textAnchor="middle" fontWeight="700">120/80</text>
      </g>
      
      <g transform="translate(130, 130)">
        {/* SpO2 */}
        <rect x="0" y="0" width="50" height="32" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <text x="25" y="12" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">SpO₂</text>
        <text x="25" y="24" className="text-[11px]" fill="#DC2626" textAnchor="middle" fontWeight="700">98%</text>
      </g>
      
      {/* Care team network */}
      <g transform="translate(15, 15)" opacity="0.8">
        {/* Central patient */}
        <circle cx="35" cy="25" r="8" fill="#DC2626" fillOpacity="0.15" stroke="#DC2626" strokeWidth="2" />
        <text x="35" y="28" className="text-[8px]" fill="#DC2626" textAnchor="middle" fontWeight="600">PT</text>
        
        {/* Care team members */}
        <circle cx="10" cy="10" r="5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="10" y="0" className="text-[6px]" fill="#6B7280" textAnchor="middle">MD</text>
        
        <circle cx="60" cy="10" r="5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="60" y="0" className="text-[6px]" fill="#6B7280" textAnchor="middle">RN</text>
        
        <circle cx="10" cy="40" r="5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="10" y="52" className="text-[6px]" fill="#6B7280" textAnchor="middle">RX</text>
        
        <circle cx="60" cy="40" r="5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <text x="60" y="52" className="text-[6px]" fill="#6B7280" textAnchor="middle">LAB</text>
        
        {/* Team connections */}
        <path d="M13 13 L30 22" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <path d="M57 13 L40 22" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <path d="M13 37 L30 28" stroke="#9CA3AF" strokeWidth="1" opacity="0.2" />
        <path d="M57 37 L40 28" stroke="#9CA3AF" strokeWidth="1" opacity="0.2" />
      </g>
      
      {/* ECG/Vital trace */}
      <g transform="translate(0, 50)" opacity="0.6">
        <path 
          d="M 100 15 L 110 15 L 115 10 L 120 20 L 125 15 L 135 15 L 138 12 L 141 18 L 144 15 L 165 15" 
          stroke="#DC2626" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="115" cy="10" r="1.5" fill="#DC2626" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="138" cy="12" r="1.5" fill="#DC2626" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Health records system */}
      <g transform="translate(160, 15)">
        <rect x="0" y="0" width="65" height="60" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1.5" />
        
        {/* EHR header */}
        <text x="32.5" y="12" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="600">PATIENT RECORD</text>
        
        {/* Record entries */}
        <rect x="8" y="18" width="49" height="6" rx="2" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="8" y="27" width="49" height="6" rx="2" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="8" y="36" width="49" height="6" rx="2" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="1" />
        <rect x="8" y="45" width="49" height="6" rx="2" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        
        {/* Active record indicator */}
        <circle cx="5" cy="39" r="2" fill="#DC2626" opacity="0.8" />
      </g>
      
      {/* Department flow indicators */}
      <g opacity="0.5">
        <path d="M90 75 L90 55" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.3" />
        <path d="M90 55 L105 45" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <path d="M90 55 L75 45" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
      </g>
      
      {/* Real-time monitoring pulse */}
      <g>
        <circle cx="90" cy="75" r="3" fill="#DC2626" opacity="0.8">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Background grid - hospital systems */}
      <g opacity="0.08">
        <path d="M80 20 L80 110" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M150 20 L150 110" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
        <path d="M30 60 L210 60" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 4" />
      </g>
    </svg>
  ),
  manufacturing: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Blueprint grid - engineering aesthetic */}
      <defs>
        <pattern id="manufGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.25"/>
        </pattern>
        <pattern id="manufGridMajor" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#manufGrid)" />
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="240" height="180" fill="url(#manufGridMajor)" />
      
      {/* Exploded assembly view - parts floating in space */}
      <g transform="translate(120, 70)">
        {/* Component 1 - top */}
        <g transform="translate(0, -35)">
          <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#FAFAF9" stroke="#D4D4D8" strokeWidth="1.5" />
          <rect x="-12" y="-5" width="24" height="10" rx="1" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="0.5" />
          <circle cx="-8" cy="0" r="1.5" fill="#A1A1AA" />
          <circle cx="8" cy="0" r="1.5" fill="#A1A1AA" />
          <circle cx="0" cy="0" r="3" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="1 1" />
        </g>
        
        {/* Assembly direction arrow */}
        <path d="M0 -22 L0 -10" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
        <path d="M-3 -13 L0 -10 L3 -13" stroke="#DC2626" strokeWidth="1.5" opacity="0.6" fill="none" />
        <text x="8" y="-15" className="text-[6px]" fill="#DC2626" opacity="0.7">ASSY</text>
        
        {/* Component 2 - main body (highlighted) */}
        <g>
          <rect x="-25" y="-12" width="50" height="24" rx="2" fill="#DC2626" fillOpacity="0.08" stroke="#DC2626" strokeWidth="2.5" />
          <rect x="-20" y="-8" width="40" height="16" rx="1" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
          <rect x="-18" y="-6" width="36" height="12" rx="0.5" fill="#FEF2F2" stroke="#DC2626" strokeWidth="0.5" />
          {/* Precision indicators */}
          <circle cx="-15" cy="0" r="2.5" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.5" />
          <circle cx="-15" cy="0" r="1" fill="#DC2626" opacity="0.6" />
          <circle cx="15" cy="0" r="2.5" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.5" />
          <circle cx="15" cy="0" r="1" fill="#DC2626" opacity="0.6" />
          {/* Center mark */}
          <path d="M-2 0 L2 0 M0 -2 L0 2" stroke="#DC2626" strokeWidth="0.5" opacity="0.4" />
        </g>
        
        {/* Assembly arrow down */}
        <path d="M0 15 L0 27" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
        <path d="M-3 24 L0 27 L3 24" stroke="#DC2626" strokeWidth="1.5" opacity="0.6" fill="none" />
        
        {/* Component 3 - bottom */}
        <g transform="translate(0, 40)">
          <rect x="-18" y="-6" width="36" height="12" rx="2" fill="#FAFAF9" stroke="#D4D4D8" strokeWidth="1.5" />
          <rect x="-15" y="-4" width="30" height="8" rx="1" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="0.5" />
          <circle cx="-10" cy="0" r="1.5" fill="#A1A1AA" />
          <circle cx="10" cy="0" r="1.5" fill="#A1A1AA" />
        </g>
      </g>
      
      {/* Precision measurements - engineering callouts */}
      <g opacity="0.75">
        {/* Horizontal dimension */}
        <path d="M80 160 L160 160" stroke="#DC2626" strokeWidth="1.2" />
        <path d="M80 157 L80 163 M160 157 L160 163" stroke="#DC2626" strokeWidth="1.2" />
        <rect x="105" y="165" width="30" height="10" rx="2" fill="#FFFFFF" stroke="#DC2626" strokeWidth="0.5" opacity="0.9" />
        <text x="120" y="172" className="text-[7px]" fill="#DC2626" textAnchor="middle" fontWeight="600">50.00 ±0.05</text>
        
        {/* Vertical dimension */}
        <path d="M25 50 L25 110" stroke="#9CA3AF" strokeWidth="1" opacity="0.7" />
        <path d="M22 50 L28 50 M22 110 L28 110" stroke="#9CA3AF" strokeWidth="1" opacity="0.7" />
        <rect x="10" y="77" width="12" height="10" rx="1" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.8" />
        <text x="16" y="84" className="text-[6px]" fill="#6B7280" textAnchor="middle" fontWeight="500">24.5</text>
      </g>
      
      {/* Production output bars - volume visualization */}
      <g transform="translate(170, 90)">
        <rect x="0" y="35" width="12" height="30" rx="1.5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
        <rect x="0" y="15" width="12" height="50" rx="1.5" fill="#F5F5F4" stroke="#D4D4D8" strokeWidth="1" />
        <rect x="0" y="0" width="12" height="65" rx="1.5" fill="#DC2626" fillOpacity="0.15" stroke="#DC2626" strokeWidth="2" />
        <rect x="2" y="2" width="8" height="61" rx="1" fill="#DC2626" fillOpacity="0.1" />
        
        <text x="6" y="80" className="text-[8px]" fill="#DC2626" textAnchor="middle" fontWeight="700">847</text>
        <text x="6" y="89" className="text-[6px]" fill="#9CA3AF" textAnchor="middle" fontWeight="500">units/hr</text>
      </g>
      
      {/* Tolerance specifications */}
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="70" height="50" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="1.5" y="1.5" width="67" height="47" rx="5" fill="#FFFFFF" fillOpacity="0.5" />
        <text x="35" y="12" className="text-[7px]" fill="#9CA3AF" textAnchor="middle" fontWeight="600" letterSpacing="0.5">TOLERANCES</text>
        
        <text x="8" y="24" className="text-[7px]" fill="#6B7280" fontWeight="500">Flatness: 0.01mm</text>
        <text x="8" y="34" className="text-[7px]" fill="#6B7280" fontWeight="500">Position: ±0.05mm</text>
        <text x="8" y="44" className="text-[7px]" fill="#DC2626" fontWeight="700">QC: PASS</text>
        
        <circle cx="63" cy="42" r="2.5" fill="#DC2626" opacity="0.2" />
        <circle cx="63" cy="42" r="2" fill="#DC2626" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Material specification */}
      <g transform="translate(15, 145)">
        <rect x="0" y="0" width="85" height="24" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="1.5" y="1.5" width="82" height="21" rx="5" fill="#FAFAFA" fillOpacity="0.5" />
        <text x="8" y="10" className="text-[6px]" fill="#9CA3AF" fontWeight="600" letterSpacing="0.3">MATERIAL</text>
        <text x="8" y="19" className="text-[9px]" fill="#DC2626" textAnchor="start" fontWeight="700">AL 6061-T6</text>
        <rect x="65" y="13" width="15" height="8" rx="2" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="0.5" />
        <text x="72.5" y="19" className="text-[6px]" fill="#6B7280" textAnchor="middle" fontWeight="600">CNC</text>
      </g>
      
      {/* Cycle time indicator */}
      <g transform="translate(200, 20)">
        <circle cx="15" cy="15" r="14" stroke="#E5E7EB" strokeWidth="2.5" />
        <circle cx="15" cy="15" r="14" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="65 22" opacity="0.7" transform="rotate(-90 15 15)" strokeLinecap="round" />
        <text x="15" y="17" className="text-[10px]" fill="#DC2626" textAnchor="middle" fontWeight="700">4.2s</text>
        <text x="15" y="38" className="text-[6px]" fill="#9CA3AF" textAnchor="middle" fontWeight="600" letterSpacing="0.3">CYCLE</text>
      </g>
      
      {/* Assembly sequence indicators */}
      <g>
        <circle cx="50" cy="90" r="9" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="50" cy="90" r="7" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.5" />
        <text x="50" y="93" className="text-[9px]" fill="#6B7280" textAnchor="middle" fontWeight="600">1</text>
        
        <circle cx="120" cy="35" r="9" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2" />
        <circle cx="120" cy="35" r="7" fill="#FEF2F2" stroke="#DC2626" strokeWidth="0.5" />
        <text x="120" y="38" className="text-[9px]" fill="#DC2626" textAnchor="middle" fontWeight="700">2</text>
        
        <circle cx="120" cy="110" r="9" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="120" cy="110" r="7" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.5" />
        <text x="120" y="113" className="text-[9px]" fill="#6B7280" textAnchor="middle" fontWeight="600">3</text>
      </g>
      
      {/* Technical annotation lines */}
      <g opacity="0.3">
        <path d="M95 58 L45 90" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M145 58 L175 85" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2 2" />
      </g>
      
      {/* Center alignment crosshair */}
      <g opacity="0.15">
        <path d="M120 0 L120 180" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="5 5" />
        <path d="M0 70 L240 70" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="5 5" />
        <circle cx="120" cy="70" r="4" stroke="#DC2626" strokeWidth="0.5" fill="none" />
      </g>
    </svg>
  ),
  education: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* UNIT progression - perfectly centered and aligned */}
      <g>
        {/* Unit 1 - Completed */}
        <g transform="translate(16, 70)">
          <rect x="0" y="0" width="50" height="50" rx="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
          <rect x="3" y="3" width="44" height="44" rx="10" fill="#DCFCE7" fillOpacity="0.2" />
          <text x="25" y="16" className="text-[8px]" fill="#15803D" textAnchor="middle" fontWeight="700" letterSpacing="0.8">UNIT 1</text>
          {/* Centered checkmark */}
          <g transform="translate(25, 32)">
            <circle cx="0" cy="0" r="9" fill="#16A34A" fillOpacity="0.15" />
            <path d="M-4 0 L-1.5 2.5 L4 -3" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        
        {/* Connection line 1-2 */}
        <path d="M66 95 L82 95" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
        </path>
        
        {/* Unit 2 - In Progress (Active) - PERFECTLY CENTERED */}
        <g transform="translate(82, 70)">
          <rect x="0" y="0" width="50" height="50" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="3" />
          <rect x="3.5" y="3.5" width="43" height="43" rx="10" fill="#DC2626" fillOpacity="0.03" />
          <text x="25" y="16" className="text-[8px]" fill="#DC2626" textAnchor="middle" fontWeight="700" letterSpacing="0.8">UNIT 2</text>
          {/* Perfectly centered progress circle */}
          <g transform="translate(25, 32)">
            <circle cx="0" cy="0" r="10.5" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="53 13" opacity="0.3" transform="rotate(-90)">
              <animateTransform attributeName="transform" type="rotate" from="-90 0 0" to="270 0 0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="1" className="text-[9px]" fill="#DC2626" textAnchor="middle" dominantBaseline="middle" fontWeight="800">67%</text>
          </g>
        </g>
        
        {/* Connection line 2-3 */}
        <path d="M132 95 L148 95" stroke="#D1D5DB" strokeWidth="2" opacity="0.3" />
        
        {/* Unit 3 - Locked */}
        <g transform="translate(148, 70)">
          <rect x="0" y="0" width="50" height="50" rx="12" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="2.5" />
          <rect x="3" y="3" width="44" height="44" rx="10" fill="#F9FAFB" fillOpacity="0.5" />
          <text x="25" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="600" letterSpacing="0.8">UNIT 3</text>
          {/* Centered lock icon */}
          <g transform="translate(25, 32)">
            <rect x="-6" y="-2" width="12" height="10" rx="2" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1.5" />
            <path d="M-4 -2 L-4 -5 C-4 -7.5 -2.5 -9 0 -9 C2.5 -9 4 -7.5 4 -5 L4 -2" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <circle cx="0" cy="3" r="1.5" fill="#9CA3AF" />
          </g>
        </g>
        
        {/* Unit 4 - Minimal locked */}
        <g transform="translate(210, 70)">
          <rect x="0" y="0" width="16" height="50" rx="8" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="2" opacity="0.3" />
          <text x="8" y="28" className="text-[6px]" fill="#D1D5DB" textAnchor="middle" fontWeight="600" transform="rotate(-90 8 28)">UNIT 4</text>
        </g>
      </g>
      
      {/* PERFORMANCE card - top left with perfect alignment */}
      <g transform="translate(8, 8)">
        <rect x="0" y="0" width="100" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="3" y="3" width="94" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
        
        {/* Header with live indicator */}
        <text x="50" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">PERFORMANCE</text>
        <circle cx="92" cy="11" r="2.5" fill="#16A34A" opacity="0.25" />
        <circle cx="92" cy="11" r="1.8" fill="#16A34A">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Metric rows - perfectly aligned */}
        <g transform="translate(0, 28)">
          <text x="12" y="0" className="text-[8px]" fill="#6B7280" dominantBaseline="middle" fontWeight="600">GPA</text>
          <text x="88" y="0" className="text-[14px]" fill="#16A34A" textAnchor="end" dominantBaseline="middle" fontWeight="800">3.8</text>
        </g>
        
        <g transform="translate(0, 42)">
          <text x="12" y="0" className="text-[8px]" fill="#6B7280" dominantBaseline="middle" fontWeight="600">Progress</text>
          <text x="88" y="0" className="text-[14px]" fill="#DC2626" textAnchor="end" dominantBaseline="middle" fontWeight="800">67%</text>
        </g>
      </g>
      
      {/* OBJECTIVES card - top right with perfect alignment */}
      <g transform="translate(132, 8)">
        <rect x="0" y="0" width="100" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="3" y="3" width="94" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
        
        {/* Header */}
        <text x="50" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">OBJECTIVES</text>
        
        {/* Objective 1 - completed */}
        <g transform="translate(12, 30)">
          <circle cx="0" cy="0" r="6" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2" />
          <path d="M-2.5 0 L-0.5 2 L2.5 -2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="12" y="0.5" className="text-[8px]" fill="#15803D" dominantBaseline="middle" fontWeight="600">Master concepts</text>
        </g>
        
        {/* Objective 2 - in progress */}
        <g transform="translate(12, 44)">
          <circle cx="0" cy="0" r="6" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="2.2" fill="#DC2626" />
          <text x="12" y="0.5" className="text-[8px]" fill="#DC2626" dominantBaseline="middle" fontWeight="700">Complete project</text>
        </g>
      </g>
      
      {/* SUBJECTS card - bottom left with perfect alignment */}
      <g transform="translate(8, 128)">
        <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Header */}
        <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">SUBJECTS</text>
        
        {/* Progress bar 1 */}
        <g transform="translate(10, 25)">
          <rect x="0" y="0" width="42" height="5" rx="2.5" fill="#F3F4F6" />
          <rect x="0" y="0" width="35" height="5" rx="2.5" fill="#DC2626" fillOpacity="0.75" />
        </g>
        
        {/* Progress bar 2 */}
        <g transform="translate(10, 34)">
          <rect x="0" y="0" width="42" height="5" rx="2.5" fill="#F3F4F6" />
          <rect x="0" y="0" width="38" height="5" rx="2.5" fill="#16A34A" fillOpacity="0.75" />
        </g>
      </g>
      
      {/* GRADES card - bottom right with perfect alignment */}
      <g transform="translate(170, 128)">
        <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Header */}
        <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">GRADES</text>
        
        {/* Grade badges perfectly centered */}
        <g transform="translate(31, 31)">
          <circle cx="-12" cy="0" r="8.5" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2.5" />
          <text x="-12" y="0.5" className="text-[12px]" fill="#16A34A" textAnchor="middle" dominantBaseline="middle" fontWeight="800">A</text>
          
          <circle cx="12" cy="0" r="8.5" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2.5" />
          <text x="12" y="0.5" className="text-[12px]" fill="#DC2626" textAnchor="middle" dominantBaseline="middle" fontWeight="800">B</text>
        </g>
      </g>
    </svg>
  ),
  retail: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Analytics chart - centered at top, larger */}
      <g opacity="0.9">
        {/* Chart line */}
        <path d="M60 45 L80 38 L100 42 L120 30 L140 35 L160 25 L180 28" stroke="#DC2626" strokeWidth="2.5" opacity="0.6" />
        
        {/* Data points */}
        <circle cx="60" cy="45" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="80" cy="38" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="100" cy="42" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="120" cy="30" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="140" cy="35" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="160" cy="25" r="3" fill="#DC2626" opacity="0.7" />
        <circle cx="180" cy="28" r="3" fill="#DC2626" opacity="0.7" />
        
        {/* Grid lines */}
        <path d="M50 50 L190 50" stroke="#E5E7EB" strokeWidth="1" opacity="0.5" />
        <path d="M50 40 L190 40" stroke="#E5E7EB" strokeWidth="1" opacity="0.5" />
        <path d="M50 30 L190 30" stroke="#E5E7EB" strokeWidth="1" opacity="0.5" />
        
        {/* Axis */}
        <path d="M50 55 L50 20" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.6" />
        <path d="M50 55 L190 55" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.6" />
        
        {/* Label */}
        <text x="120" y="68" className="text-[10px]" fill="#DC2626" fontWeight="600" textAnchor="middle">REVENUE GROWTH</text>
      </g>
      
      {/* Modern storefront */}
      <rect x="20" y="90" width="65" height="65" rx="2" stroke="#D1D5DB" strokeWidth="2" />
      
      {/* Awning */}
      <path d="M18 90 L87 90 L84 82 L21 82 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M21 82 L21 79 L84 79 L84 82" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Glass door with frame */}
      <rect x="32" y="110" width="20" height="40" rx="1" stroke="#9CA3AF" strokeWidth="2" />
      <path d="M42 110 L42 150" stroke="#9CA3AF" strokeWidth="1" />
      <circle cx="39" cy="132" r="1.5" fill="#9CA3AF" />
      
      {/* Display windows */}
      <rect x="56" y="100" width="24" height="24" rx="1" stroke="#9CA3AF" strokeWidth="1.5" />
      
      {/* Products in window - grid display */}
      <rect x="59" y="103" width="7" height="7" rx="0.5" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
      <rect x="59" y="112" width="7" height="7" rx="0.5" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="69" y="103" width="7" height="7" rx="0.5" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="69" y="112" width="7" height="7" rx="0.5" stroke="#D1D5DB" strokeWidth="1" />
      
      {/* Foundation */}
      <rect x="18" y="155" width="69" height="3" fill="#E5E7EB" />
      
      {/* Mobile shopping device - iPhone style */}
      <rect x="105" y="80" width="60" height="100" rx="10" stroke="#DC2626" strokeWidth="2.5" opacity="0.5" />
      <rect x="105" y="80" width="60" height="100" rx="10" stroke="#DC2626" strokeWidth="1.5" opacity="0.3" />
      
      {/* Screen */}
      <rect x="111" y="88" width="48" height="84" rx="3" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
      
      {/* Notch */}
      <rect x="126" y="86" width="18" height="3" rx="1.5" fill="#DC2626" opacity="0.3" />
      
      {/* App interface - Product grid */}
      <rect x="115" y="95" width="19" height="19" rx="2" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
      <rect x="115" y="117" width="9" height="2" rx="0.5" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
      <rect x="115" y="121" width="14" height="2" rx="0.5" stroke="#DC2626" strokeWidth="1" opacity="0.25" />
      
      <rect x="137" y="95" width="19" height="19" rx="2" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="137" y="117" width="9" height="2" rx="0.5" stroke="#D1D5DB" strokeWidth="1" />
      
      <rect x="115" y="128" width="19" height="19" rx="2" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="137" y="128" width="19" height="19" rx="2" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Bottom nav bar */}
      <circle cx="122" cy="161" r="2.5" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
      <circle cx="135" cy="161" r="2.5" stroke="#D1D5DB" strokeWidth="1.5" />
      <circle cx="148" cy="161" r="2.5" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Shopping cart icon */}
      <path d="M143 154 L145 154 L146 150 L149 150" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
      <circle cx="144" cy="156" r="0.7" fill="#DC2626" opacity="0.4" />
      <circle cx="147" cy="156" r="0.7" fill="#DC2626" opacity="0.4" />
      
      {/* Omnichannel connection flow */}
      <path d="M85 120 L105 110" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 4" opacity="0.3" />
      <circle cx="95" cy="115" r="4" stroke="#DC2626" strokeWidth="2" opacity="0.4" />
      <path d="M93 115 L95 117 L98 113" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
      
      {/* Fulfillment - package with tracking */}
      <rect x="185" y="100" width="28" height="28" rx="2" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M185 114 L213 114 M199 100 L199 128" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Barcode on package */}
      <g transform="translate(189, 119)">
        <rect width="1.2" height="6" fill="#9CA3AF" />
        <rect x="2.2" width="0.6" height="6" fill="#9CA3AF" />
        <rect x="4" width="1.2" height="6" fill="#9CA3AF" />
        <rect x="6.5" width="0.6" height="6" fill="#9CA3AF" />
        <rect x="8.2" width="1.2" height="6" fill="#9CA3AF" />
        <rect x="10.5" width="1.8" height="6" fill="#9CA3AF" />
        <rect x="13.5" width="0.6" height="6" fill="#9CA3AF" />
        <rect x="15.2" width="1.2" height="6" fill="#9CA3AF" />
      </g>
      
      {/* Delivery tracking indicator */}
      <circle cx="199" cy="88" r="6" stroke="#DC2626" strokeWidth="2" opacity="0.4" />
      <path d="M197 88 L199 90 L203 85" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
      
      {/* Connection to fulfillment */}
      <path d="M165 105 L185 107" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  government: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Government building - centered and prominent */}
      <g>
        {/* Pediment (roof) - classic government architecture */}
        <path d="M30 75 L120 20 L210 75" stroke="#DC2626" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M30 75 L210 75" stroke="#DC2626" strokeWidth="2.5" opacity="0.5" />
        
        {/* Frieze band */}
        <rect x="30" y="75" width="180" height="8" fill="#FEF2F2" stroke="#E5E7EB" strokeWidth="1.5" />
        
        {/* Main columns - evenly spaced */}
        <g>
          <rect x="42" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="44" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
          
          <rect x="72" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="74" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
          
          <rect x="102" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="104" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
          
          <rect x="132" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="134" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
          
          <rect x="162" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="164" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
          
          <rect x="192" y="83" width="16" height="60" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2.5" rx="1" />
          <rect x="194" y="85" width="12" height="56" fill="#FAFAFA" opacity="0.3" />
        </g>
        
        {/* Base/foundation */}
        <rect x="25" y="143" width="190" height="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
        
        {/* Steps */}
        <rect x="35" y="149" width="170" height="4" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="45" y="153" width="150" height="4" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="55" y="157" width="130" height="4" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
      </g>
      
      {/* CLEARANCE LEVEL card - top left */}
      <g transform="translate(8, 8)">
        <rect x="0" y="0" width="90" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="3" y="3" width="84" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
        
        {/* Header */}
        <text x="45" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">CLEARANCE</text>
        
        {/* Status indicator */}
        <g transform="translate(45, 35)">
          <circle cx="0" cy="0" r="12" fill="#16A34A" fillOpacity="0.08" stroke="#16A34A" strokeWidth="2.5" />
          <path d="M-5 0 L-2 3 L5 -4" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Label */}
        <text x="45" y="52" className="text-[7px]" fill="#15803D" textAnchor="middle" dominantBaseline="middle" fontWeight="700">VERIFIED</text>
      </g>
      
      {/* COMPLIANCE card - top right */}
      <g transform="translate(142, 8)">
        <rect x="0" y="0" width="90" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="3" y="3" width="84" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
        
        {/* Header */}
        <text x="45" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">COMPLIANCE</text>
        
        {/* Progress indicators */}
        <g transform="translate(0, 28)">
          <g transform="translate(12, 0)">
            <circle cx="0" cy="0" r="5" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2" />
            <circle cx="0" cy="0" r="2" fill="#16A34A" />
          </g>
          <g transform="translate(30, 0)">
            <circle cx="0" cy="0" r="5" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2" />
            <circle cx="0" cy="0" r="2" fill="#16A34A" />
          </g>
          <g transform="translate(48, 0)">
            <circle cx="0" cy="0" r="5" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="2.2" fill="#DC2626" />
          </g>
          <g transform="translate(66, 0)">
            <circle cx="0" cy="0" r="5" fill="#D1D5DB" fillOpacity="0.12" stroke="#D1D5DB" strokeWidth="2" />
          </g>
        </g>
        
        {/* Status text */}
        <text x="45" y="47" className="text-[7px]" fill="#DC2626" textAnchor="middle" dominantBaseline="middle" fontWeight="700">3/4 COMPLETE</text>
      </g>
      
      {/* SECURITY card - bottom left */}
      <g transform="translate(8, 128)">
        <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Header */}
        <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">SECURITY</text>
        
        {/* Shield icon */}
        <g transform="translate(31, 31)">
          <path d="M-8 -5 L0 -9 L8 -5 L8 0 C8 5 4 8 0 10 C-4 8 -8 5 -8 0 Z" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2.5" />
          <path d="M-3 0 L-1 2 L3 -3" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      
      {/* AUDIT LOG card - bottom right */}
      <g transform="translate(170, 128)">
        <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Header */}
        <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">AUDIT LOG</text>
        
        {/* Log entries */}
        <g transform="translate(10, 25)">
          <rect x="0" y="0" width="42" height="3" rx="1.5" fill="#16A34A" fillOpacity="0.3" />
          <rect x="0" y="6" width="35" height="3" rx="1.5" fill="#16A34A" fillOpacity="0.25" />
          <rect x="0" y="12" width="38" height="3" rx="1.5" fill="#DC2626" fillOpacity="0.4" />
        </g>
      </g>
    </svg>
  ),
  financial: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Chart bars */}
      <rect x="40" y="100" width="30" height="50" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="85" y="80" width="30" height="70" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="130" y="60" width="30" height="90" stroke="#DC2626" strokeWidth="2" opacity="0.4" />
      <rect x="175" y="70" width="30" height="80" stroke="#D1D5DB" strokeWidth="2" />
      {/* Network nodes */}
      <circle cx="55" cy="40" r="6" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="100" cy="30" r="6" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="145" cy="20" r="6" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <circle cx="190" cy="30" r="6" stroke="#D1D5DB" strokeWidth="2" />
      {/* Connection lines */}
      <path d="M61 40 L94 30 L139 20 L184 30" stroke="#D1D5DB" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  logistics: () => (
    <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
      {/* Warehouse */}
      <rect x="25" y="100" width="60" height="50" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M20 100 L55 75 L90 100" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="45" y="120" width="15" height="30" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Loading dock */}
      <rect x="85" y="120" width="25" height="15" stroke="#D1D5DB" strokeWidth="1.5" />
      
      {/* Delivery truck - side view */}
      <rect x="110" y="115" width="45" height="25" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <rect x="155" y="120" width="20" height="20" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <path d="M155 125 L175 120 L175 140 Z" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <circle cx="125" cy="140" r="6" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <circle cx="165" cy="140" r="6" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      
      {/* Distribution network nodes */}
      <circle cx="190" cy="40" r="8" stroke="#DC2626" strokeWidth="2" opacity="0.5" />
      <circle cx="150" cy="60" r="6" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="210" cy="70" r="6" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="190" cy="90" r="6" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="220" cy="50" r="6" stroke="#D1D5DB" strokeWidth="2" />
      
      {/* Routes */}
      <path d="M190 48 L150 60 M190 48 L210 70 M190 48 L220 50 M150 60 L125 100" stroke="#DC2626" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3" />
      <path d="M210 70 L190 90 M190 90 L165 105" stroke="#DC2626" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3" />
      
      {/* Package tracking indicator */}
      <rect x="100" y="85" width="15" height="15" stroke="#D1D5DB" strokeWidth="1.5" />
      <circle cx="107.5" cy="92.5" r="3" fill="#DC2626" opacity="0.4" />
      
      {/* Route optimization lines */}
      <path d="M45 75 L107.5 92.5" stroke="#D1D5DB" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      <path d="M107.5 92.5 L135 115" stroke="#D1D5DB" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  ),
};

export function IndustriesWeServe() {
  const [selectedIndustry, setSelectedIndustry] = useState('aviation');

  const industries: Industry[] = [
    {
      id: 'aviation',
      title: 'Aviation',
      description: 'Airlines, aerospace, MRO, and eVTOL companies hiring leaders who keep aircraft, operations, and passengers moving safely.',
      tags: ['Flight operations', 'Maintenance & MRO', 'Aerospace engineering', 'Safety & compliance', 'Network & operations leadership']
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Health systems, hospitals, and digital health companies building clinical, operational, and technology leadership.',
      tags: ['Hospital operations', 'Clinical leadership', 'Health IT & data', 'Digital health product', 'Revenue cycle & finance']
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Advanced manufacturing and industrial companies modernizing plants, supply chains, and production systems.',
      tags: ['Plant leadership', 'Operations & lean', 'Industrial engineering', 'Supply chain', 'EHS & quality']
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Universities, K–12 systems, and edtech companies scaling learning experiences and the platforms behind them.',
      tags: ['Institutional leadership', 'Edtech product', 'Student success', 'Data & analytics', 'IT & infrastructure']
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Omnichannel retailers and consumer brands building leaders for stores, e-commerce, and digital experiences.',
      tags: ['Merchandising', 'Store operations', 'E-commerce', 'Customer experience', 'Supply & fulfillment']
    },
    {
      id: 'government',
      title: 'Government',
      description: 'State, local, and federal agencies hiring modern leaders for technology, programs, and service delivery.',
      tags: ['CIO / CTO', 'Program management', 'Digital services', 'Data & analytics', 'Modernization initiatives']
    },
    {
      id: 'financial',
      title: 'Financial services',
      description: 'Banks, fintechs, and insurers growing secure, compliant, and customer-centric product and technology teams.',
      tags: ['Risk & compliance', 'Payments & fintech', 'Core banking systems', 'Data & risk analytics', 'Product & platform']
    },
    {
      id: 'logistics',
      title: 'Logistics',
      description: '3PLs, freight, and warehousing companies optimizing networks, operations, and the software that runs them.',
      tags: ['Network operations', 'Warehouse leadership', 'Transportation management', 'Supply chain technology', 'Last-mile delivery']
    }
  ];

  const selected = industries.find(i => i.id === selectedIndustry) || industries[0];

  return (
    <div id="industries" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-16">
          
          {/* Section Header */}
          <div className="space-y-6 max-w-[1000px] mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#DC2626]">
              Industries We Serve
            </p>
            <h2 className="text-4xl lg:text-5xl text-[#111827] leading-[1.15]">
              From aircraft hangars to hospital systems.
            </h2>
            <p className="text-lg text-[#4B5563] max-w-[560px] mx-auto">
              We help executive and technical teams hire across critical industries.
            </p>
          </div>

          {/* Industry Selector Row */}
          <div className="relative">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`
                    relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm transition-all duration-300
                    ${selectedIndustry === industry.id
                      ? 'bg-white border border-[#DC2626] text-[#DC2626] shadow-sm'
                      : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB] hover:text-[#1F2937]'
                    }
                  `}
                >
                  {selectedIndustry === industry.id && (
                    <motion.div
                      layoutId="industry-indicator"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#DC2626] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {industry.title}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-[32px] bg-gradient-to-br from-white to-[#F9FAFB] border border-[#E5E7EB] p-8 lg:p-12 shadow-[0_24px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_32px_80px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Spotlight Label */}
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#DC2626] mb-6">
                Industry Spotlight
              </div>

              <div className="space-y-6">
                {/* Industry Title */}
                <h3 className="text-3xl lg:text-4xl text-[#111827]">
                  {selected.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-[#4B5563] leading-relaxed">
                  {selected.description}
                </p>

                {/* Key Leadership Areas */}
                <div className="space-y-3 pt-4">
                  <p className="text-xs uppercase tracking-wider text-[#6B7280]">
                    Key leadership areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB] hover:text-[#1F2937] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}