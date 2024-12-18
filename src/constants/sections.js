export const sections = {
  personal: {
    title: 'Datos Personales',
    fields: [
      {
        name: 'Nombre Completo',
        patternKey: 'nombre',
        description: 'Letras y espacios, mínimo 2 caracteres',
        placeholder: 'Ingrese su nombre completo',
        example: 'Juan Pérez'
      },
      {
        name: 'Correo Electrónico',
        patternKey: 'email',
        description: 'Formato válido de correo electrónico',
        placeholder: 'correo@ejemplo.com',
        example: 'usuario@dominio.com'
      },
      {
        name: 'Teléfono',
        patternKey: 'telefono',
        description: 'Formato: +XX XXX XXX XXXX o XXX-XXX-XXXX',
        placeholder: 'Ingrese su teléfono',
        example: '+34 666 777 888'
      },
      {
        name: 'DNI',
        patternKey: 'dni',
        description: '8 números seguidos de una letra mayúscula',
        placeholder: 'Ingrese su DNI',
        example: '12345678A'
      }
    ]
  },
  direccion: {
    title: 'Datos de Dirección',
    fields: [
      {
        name: 'Código Postal',
        patternKey: 'codigoPostal',
        description: '5 dígitos numéricos',
        placeholder: 'Ingrese su código postal',
        example: '28001'
      },
      {
        name: 'Sitio Web',
        patternKey: 'url',
        description: 'URL válida con o sin http(s)',
        placeholder: 'Ingrese su sitio web',
        example: 'https://www.ejemplo.com'
      }
    ]
  },
  pago: {
    title: 'Datos de Pago',
    fields: [
      {
        name: 'Tarjeta de Crédito',
        patternKey: 'tarjetaCredito',
        description: '16 dígitos, puede incluir espacios o guiones',
        placeholder: 'Ingrese su número de tarjeta',
        example: '4111-1111-1111-1111'
      },
      {
        name: 'Contraseña',
        patternKey: 'password',
        description: 'Mínimo 8 caracteres, al menos una letra y un número',
        placeholder: 'Ingrese su contraseña',
        example: 'Segura123'
      }
    ]
  }
};