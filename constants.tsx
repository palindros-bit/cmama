
import React from 'react';
import { Activity, AlertTriangle, Calendar, MapPin, Search, UserCheck, HelpCircle } from 'lucide-react';
import { ContactInfo, Symptom, FAQ } from './types';

export const DELEGATIONS: ContactInfo[] = [
  { name: 'Delegación Provincial de Sanidad de Albacete', address: 'Avda. Guardia Civil, 5', postalCode: '02005', city: 'ALBACETE', phone: '967 557900' },
  { name: 'Delegación Provincial de Sanidad de Cuenca', address: 'C/ Las Torres, 61', postalCode: '16001', city: 'CUENCA', phone: '969 176500' },
  { name: 'Delegación Provincial de Sanidad de Ciudad Real', address: 'C/ Paloma, 7', postalCode: '13001', city: 'CIUDAD REAL', phone: '926 276000' },
  { name: 'Delegación Provincial de Sanidad de Guadalajara', address: 'C/ Doctor Fernández Iparraguirre, 1', postalCode: '19001', city: 'GUADALAJARA', phone: '949 885500' },
  { name: 'Instituto de Ciencias de la Salud', address: 'Ctra. de Extremadura, Km. 114 100', postalCode: '45600', city: 'TALAVERA DE LA REINA', phone: '925 839200' },
  { name: 'Delegación Provincial de Sanidad de Toledo', address: 'C/ Rio Guadalmena, 2', postalCode: '45007', city: 'TOLEDO', phone: '925 266 400' },
  { name: 'Dirección General de Salud Pública', address: 'Avda. Francia, 4', postalCode: '45005', city: 'TOLEDO', phone: '925 248 767' },
];

export const SYMPTOMS: Symptom[] = [
  { id: '1', title: 'Bultos o nódulos', description: 'Presencia de nódulos en la mama o axila.', icon: '⭕' },
  { id: '2', title: 'Cambios de forma', description: 'Cambios en el tamaño o forma de la mama.', icon: '↔️' },
  { id: '3', title: 'Alteraciones en la piel', description: 'Enrojecimiento, retracciones o piel de naranja.', icon: '✨' },
  { id: '4', title: 'Cambios en el pezón', description: 'Retracción o secreciones anómalas.', icon: '📍' },
  { id: '5', title: 'Dolor persistente', description: 'Dolor constante que no desaparece.', icon: '⚡' },
];

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Por qué es tan importante hacerse el cribado?',
    answer: 'La mamografía permite detectar tumores tan pequeños que no se pueden sentir al tacto. Detectarlo en estas fases iniciales aumenta las posibilidades de curación a más del 90% y permite tratamientos menos agresivos.'
  },
  {
    id: 'faq-2',
    question: '¿A quién va dirigido exactamente el programa?',
    answer: 'A todas las mujeres residentes en Castilla-La Mancha con edades comprendidas entre los 45 y los 70 años, que no tengan un diagnóstico previo de cáncer de mama.'
  },
  {
    id: 'faq-3',
    question: '¿Cómo puedo solicitar mi cita?',
    answer: 'No necesitas solicitarla tú. El servicio de salud envía una carta a tu domicilio con la fecha, hora y lugar. Si estás en el rango de edad y no has recibido tu invitación, puedes contactar con la Delegación de Sanidad de tu provincia.'
  },
  {
    id: 'faq-4',
    question: '¿Qué debo esperar durante la mamografía?',
    answer: 'Es una prueba rápida que dura apenas unos minutos. Consiste en una radiografía de cada mama. Puede ser algo molesta por la presión necesaria, pero es soportable y fundamental para obtener una imagen clara.'
  },
  {
    id: 'faq-5',
    question: '¿Con qué frecuencia debo repetirla?',
    answer: 'La recomendación oficial del programa es realizarse la prueba cada dos años. Recibirás una nueva invitación automáticamente cuando te corresponda la siguiente revisión.'
  },
  {
    id: 'faq-6',
    question: '¿Tiene algún coste para mí?',
    answer: 'No, el programa es totalmente gratuito para todas las ciudadanas de Castilla-La Mancha dentro del rango de edad establecido.'
  }
];

export const NAV_LINKS = [
  { label: 'El Programa', href: '#programa', icon: <UserCheck className="w-4 h-4" /> },
  { label: 'Síntomas', href: '#sintomas', icon: <AlertTriangle className="w-4 h-4" /> },
  { label: 'Participar', href: '#participar', icon: <Calendar className="w-4 h-4" /> },
  { label: 'Dudas', href: '#faq', icon: <HelpCircle className="w-4 h-4" /> },
];
