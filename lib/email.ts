import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Obtener la URL base para las imágenes
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agenciabrujula.com";

interface ContactData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

// Dominios configurables
const FROM_EMAIL = "contacto@agenciabrujula.com"; // Dominio verificado real
const TO_EMAIL = "diegobullanguero10@gmail.com";

export async function sendContactEmails(data: ContactData) {
  try {
    // 1. Enviar correo al equipo de Brújula
    const teamEmailResult = await resend.emails.send({
      from: `Agencia Brújula Web <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `Nuevo mensaje web: ${data.servicio || 'Consulta'} de ${data.nombre}`,
      html: getTeamEmailHtml(data),
      replyTo: data.email,
    });

    // 2. Enviar correo de auto-respuesta al cliente
    const clientEmailResult = await resend.emails.send({
      from: `Agencia Brújula <${FROM_EMAIL}>`,
      to: [data.email],
      subject: "¡Hemos recibido tu mensaje! - Agencia Brújula",
      html: getClientEmailHtml(data),
    });

    return { success: true, data: { teamEmailResult, clientEmailResult } };
  } catch (error) {
    console.error("Error al enviar correos:", error);
    return { success: false, error: "Hubo un problema al enviar los correos" };
  }
}

function getTeamEmailHtml(data: ContactData) {
  return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #171717; border: 1px solid #EED0F2; border-radius: 12px; overflow: hidden;">
  <div style="background-color: #551273; padding: 24px; text-align: center;">
    <h1 style="color: #F3B900; margin: 0; font-size: 24px;">Nuevo Contacto Web</h1>
  </div>
  
  <div style="padding: 32px; background-color: #ffffff;">
    <p style="font-size: 16px; margin-bottom: 24px;">¡Hola equipo! Alguien ha enviado un mensaje desde la página de contacto de Agencia Brújula.</p>
    
    <div style="background-color: #fcf8fd; padding: 20px; border-radius: 8px; border-left: 4px solid #551273; margin-bottom: 24px;">
      <p style="margin: 0 0 12px 0;"><strong>Nombre:</strong> ${data.nombre}</p>
      <p style="margin: 0 0 12px 0;"><strong>Correo:</strong> ${data.email}</p>
      <p style="margin: 0 0 12px 0;"><strong>Teléfono:</strong> ${data.telefono || 'No indicado'}</p>
      <p style="margin: 0 0 12px 0;"><strong>Servicio de interés:</strong> ${data.servicio || 'No especificado'}</p>
    </div>

    <h3 style="color: #551273; margin-top: 0;">Mensaje / Proyecto:</h3>
    <p style="font-size: 15px; line-height: 1.6; background-color: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${data.mensaje}</p>

    <div style="text-align: center; margin-top: 32px;">
      <a href="mailto:${data.email}" style="background-color: #F3B900; color: #551273; padding: 12px 24px; text-decoration: none; border-radius: 24px; font-weight: bold; font-size: 16px; display: inline-block;">Responder a ${data.nombre}</a>
    </div>
  </div>
</div>
  `;
}

function getClientEmailHtml(data: ContactData) {
  const logoUrl = `${baseUrl}/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg`;

  return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #171717; border: 1px solid #EED0F2; border-radius: 12px; overflow: hidden;">
  <div style="background-color: #551273; padding: 32px; text-align: center;">
    <h1 style="color: #F3B900; margin: 0; font-size: 28px;">¡Gracias por contactarnos!</h1>
    <p style="color: #EED0F2; font-size: 16px; margin: 12px 0 0 0;">Tu brújula en el mundo digital.</p>
  </div>
  
  <div style="padding: 32px; background-color: #ffffff;">
    <h2 style="color: #551273; margin-top: 0;">Hola ${data.nombre},</h2>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
      Hemos recibido tu solicitud de información${data.servicio ? ` sobre <strong>${data.servicio}</strong>` : ''} correctamente. 
    </p>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
      Nuestro equipo está revisando tu mensaje y nos pondremos en contacto contigo lo antes posible, por lo general dentro de las próximas 24 horas hábiles.
    </p>
    <p style="font-size: 16px; line-height: 1.6;">
      Mientras tanto, te invitamos a visitar nuestro portafolio o seguirnos en nuestras redes sociales.
    </p>

    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #EED0F2; text-align: center;">
      <a href="https://agenciabrujula.com" style="display: inline-block; margin-bottom: 12px;">
        <img src="${logoUrl}" alt="Agencia Brújula Logo" style="height: 36px; width: auto;" />
      </a>
      <p style="font-size: 14px; margin: 0;">
        <a href="https://agenciabrujula.com" style="color: #551273; text-decoration: none;">agenciabrujula.com</a>
      </p>
    </div>
  </div>
</div>
  `;
}
