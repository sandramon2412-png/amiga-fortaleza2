export interface Meditation {
  id: number;
  title: string;
  intention: string;
  content: string[];
  imageSeed: string;
  imageUrl?: string;
  closing?: string;
}

export interface TappingScript {
  id: number;
  title: string;
  whenToUse: string;
  preparation: string;
  karatePoint: string[];
  sequence: {
    point: string;
    phrase: string;
  }[];
  postBreath: string;
  imageSeed?: string;
  imageUrl?: string;
}

export interface AffirmationCategory {
  id: number;
  title: string;
  description: string;
  items: string[];
  imageUrl?: string;
}

export interface JournalItem {
  id: number;
  day: number;
  title: string;
  sections: {
    label: string;
    placeholder: string;
    type: 'list' | 'text' | 'drawing';
    count?: number;
  }[];
  imageUrl?: string;
  closingQuote?: string;
}

export interface Guide {
  id: string;
  title: string;
  navLabel: string;
  subtitle: string;
  coverImageUrl: string;
  type: 'meditation' | 'tapping' | 'affirmations' | 'journal';
  intro: {
    title: string;
    content: string[];
    closing: string;
    author: string;
    imageUrl?: string;
  };
  items?: Meditation[] | TappingScript[] | JournalItem[];
  affirmationCategories?: AffirmationCategory[];
  howToUse?: {
    title: string;
    intro: string;
    steps: string[];
    footer: string;
  };
  pointsInfo?: {
    illustration: string;
    imageUrl?: string;
    description: { point: string; label: string; detail: string }[];
    howTo: string;
  };
  bonus?: {
    title: string;
    description: string;
    scripts: { point: string; phrase: string }[];
  };
  footer: {
    closing: string;
    author: string;
    imageUrl?: string;
  };
}

export const guides: Guide[] = [
  {
    id: 'meditacion-5-minutos',
    title: "MEDITACIÓN EN 5 MINUTOS",
    navLabel: "Meditación",
    subtitle: "10 prácticas guiadas para volver a ti",
    coverImageUrl: "https://i.imgur.com/6YJ9rpl.jpeg",
    type: 'meditation',
    intro: {
      title: "Querida,",
      content: [
        "Si estás leyendo esto, probablemente tu mente no para. Hay días en que parece imposible encontrar un momento de silencio, ¿verdad?",
        "Pero déjame decirte algo: no necesitas una hora para meditar. Necesitas cinco minutos. Cinco minutos de respiración consciente, de volver a ti, de recordarte que existes más allá del ruido.",
        "No hay reglas. Solo tú, tu respiración y estas palabras."
      ],
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    },
    items: [
      {
        id: 1,
        title: "PARA EMPEZAR EL DÍA CON PAZ",
        intention: "Para cuando despiertas y ya sientes el peso del mundo.",
        imageSeed: "morning-light-zen",
        imageUrl: "https://i.imgur.com/1pLJWbu.jpeg",
        content: [
          "Busca un lugar cómodo para sentarte. Puede ser en la cama, con la espalda recta pero no rígida. Cierra los ojos suavemente.",
          "Lleva una mano a tu corazón y otra a tu vientre. Siente el calor de tus propias manos. Ese calor eres tú, cuidándote.",
          "Respira hondo. Inhala por la nariz... y exhala por la boca, soltando todo el aire. Otra vez. Inhala... exhala.",
          "Pregúntate: \"¿Cómo amanezco hoy?\". No esperes una respuesta larga. Solo una palabra. Puede ser \"cansada\", \"nerviosa\", \"en paz\". Acógela.",
          "Ahora visualiza el día que tienes por delante. No lo planees, solo obsérvalo como si fuera una película. Luego, elige una intención para hoy. Puede ser: \"hoy me trato con suavidad\", o \"hoy pongo un límite si lo necesito\".",
          "Repite tu intención en silencio tres veces.",
          "Respira hondo otra vez. Lleva las manos a los muslos. Mueve suavemente los dedos de las manos y los pies. Cuando te sientas lista, abre los ojos.",
          "Tu día empieza ahora. Y empieza contigo."
        ]
      },
      {
        id: 2,
        title: "PARA CALMAR LA ANSIEDAD",
        intention: "Para cuando el pecho se oprime y la mente se acelera.",
        imageSeed: "calm-water-minimal",
        imageUrl: "https://i.imgur.com/NFSi8tE.jpeg",
        content: [
          "Si la ansiedad está muy alta, primero conecta con el exterior. Abre los ojos si los tenías cerrados. Mira a tu alrededor. Nombra en silencio tres cosas que veas. Siente tus pies contra el suelo.",
          "Ahora cierra los ojos. Pon una mano en tu pecho, justo donde sientes el corazón. La otra mano en tu vientre.",
          "No intentes calmar la respiración. Solo obsérvala. Está acelerada, entrecortada. Es normal. Tu cuerpo está en modo alerta.",
          "Di en voz baja o mentalmente: \"Gracias cuerpo por intentar protegerme. Has detectado una amenaza. Pero ahora estoy a salvo. Estoy aquí, en este lugar, y no hay peligro real\".",
          "Siente el calor de tus manos sobre tu cuerpo. Ese calor es el de tu propio cuidado.",
          "Respira lento, alargando un poco más la exhalación. Inhala... exhala lento... inhala... exhala lento...",
          "Imagina que con cada exhalación, sueltas un poco de esa energía acelerada. Que sale de tu cuerpo por los pies, hacia la tierra.",
          "Siente cómo, poco a poco, la tormenta se calma. Puede que el cuerpo siga tenso. Dile: \"Estoy contigo. No te voy a dejar sola\".",
          "Quédate así, sintiendo tu propia compañía, un minuto más.",
          "Cuando estés lista, abre los ojos. Bebe un poco de agua. Ya pasó. Estás bien."
        ]
      },
      {
        id: 3,
        title: "PARA CONECTAR CON EL VIENTRE",
        intention: "Para cuando sientes el vientre tenso, inflamado o desconectado.",
        imageSeed: "soft-petals-abstract",
        imageUrl: "https://i.imgur.com/Ab1LRSx.jpeg",
        content: [
          "Siéntate o túmbate cómodamente. Pon ambas manos sobre tu vientre, como si lo abrazaras. Siente el calor.",
          "Respira profundo, llevando el aire hacia las manos. Inhala... y siente cómo el vientre se eleva suavemente. Exhala... y siente cómo desciende.",
          "Ahora, pregúntale a tu vientre: \"¿Qué emoción estás guardando por mí?\". No forces la respuesta. Solo escucha. Puede venir una palabra, una imagen, un recuerdo.",
          "Si viene algo, acógelo. Dile: \"gracias por cuidarme. Ya puedes soltar. Ya estoy aquí para sentirte\".",
          "Si no viene nada, también está bien. Solo respira hacia ese lugar, enviando luz, calor, presencia.",
          "Imagina que una luz suave y cálida entra con cada inhalación y acaricia tu vientre, ablandando lo que estaba duro, soltando lo que estaba atrapado.",
          "Quédate así, respirando hacia tu centro, todo el tiempo que necesites.",
          "Cuando te sientas lista, agradece a tu vientre por su sabiduría. Mueve suavemente las caderas, abre los ojos.",
          "Tu vientre te habla. Ahora sabes escucharlo un poquito más."
        ]
      },
      {
        id: 4,
        title: "PARA SOLTAR EL DÍA ANTES DE DORMIR",
        intention: "Para cuando te acuestas y la mente no para de dar vueltas.",
        imageSeed: "starry-night-peace",
        imageUrl: "https://i.imgur.com/Vvovuvo.jpeg",
        content: [
          "Tumbada en la cama, con las piernas estiradas y los brazos a los lados. Cierra los ojos.",
          "Respira hondo tres veces, exhalando con un suspiro. Suelta todo el aire.",
          "Ahora, haz un repaso rápido del día, como si pasaras las páginas de un libro. Sin juzgar, solo observando.",
          "¿Qué pasó hoy? ¿Hubo algo que te molestó? ¿Algo que te alegró? ¿Algo que no dijiste?",
          "No te quedes en los detalles. Solo pasa las páginas.",
          "Ahora, imagina que cada cosa que pasó hoy se convierte en una hoja seca. Y con cada exhalación, soplas suavemente y las hojas se alejan, se desvanecen.",
          "El día ya pasó. Ya no puedes cambiarlo. Ya no necesitas cargarlo.",
          "Lleva tu atención a la respiración. Siente cómo el aire entra y sale solo. Tu cuerpo sabe respirar sin que tú lo controlas.",
          "Siente el peso de tu cuerpo contra la cama. La cama te sostiene. La noche te sostiene.",
          "Repite en silencio: \"Suelto el día. Suelto lo que hice. Suelto lo que no hice. Suelto lo que dije. Suelto lo que callé. Ahora descanso\".",
          "Quédate así, sintiendo la entrega, hasta que el sueño llegue."
        ]
      },
      {
        id: 5,
        title: "PARA EL PERDÓN (HACIA UNA MISMA)",
        intention: "Para cuando la culpa pesa.",
        imageSeed: "white-feather-soft",
        imageUrl: "https://i.imgur.com/vaN0rH6.jpeg",
        content: [
          "Siéntate cómodamente. Pon una mano en el corazón.",
          "Respira hondo. Trae a la mente algo por lo que te sientas culpable. Algo que hiciste o dejaste de hacer. No tiene que ser grave, solo algo que aún te pesa.",
          "Siente esa culpa en el cuerpo. ¿Dónde está? ¿En el pecho? ¿En el estómago? Solo obsérvala.",
          "Ahora, di en voz baja o mentalmente: \"Me perdono por no haber sabido hacerlo mejor en ese momento. Hice lo que pude con lo que tenía\".",
          "Repite: \"Me perdono por haberme juzgado tanto. Me perdono por haberme exigido tanto\".",
          "\"Me perdono por haberme tratado con dureza. Me perdono por haberme olvidado\".",
          "Ahora, imagina que la persona que eras en ese momento se acerca a ti. Esa persona estaba haciendo lo que podía. Abrázala. Dile: \"ya estás bien. ya estás perdonada\".",
          "Respira hondo. Siente cómo el peso se alivia un poco.",
          "Puede que la culpa no desaparezca del todo. Pero has abierto una puerta. El perdón es un camino, no un destino."
        ]
      },
      {
        id: 6,
        title: "PARA PONER LÍMITES DESDE LA CALMA",
        intention: "Para antes de tener una conversación difícil o poner un límite.",
        imageSeed: "mountain-mist-calm",
        imageUrl: "https://i.imgur.com/sMwBnd7.jpeg",
        content: [
          "Siéntate con la espalda recta. Manos en los muslos. Cierra los ojos.",
          "Respira hondo. Visualiza a la persona con la que necesitas poner el límite. No entres en la historia, solo obsérvala.",
          "Ahora, imagina que entre tú y esa persona hay una burbuja de luz dorada. Es tu espacio seguro. Nadie puede traspasarla sin tu permiso.",
          "Repite en silencio: \"Tengo derecho a poner límites. Tengo derecho a proteger mi paz. Mi 'no' es válido. Mi 'sí' también\".",
          "Siente cómo tu columna se alarga, cómo tu cuerpo se asienta. Estás firme, estás en tu centro.",
          "Visualiza que dices lo que necesitas decir. No importa cómo reaccione la otra persona. Tú dices tu verdad.",
          "Respira hondo. Repite: \"Pongo este límite desde el amor, no desde el miedo. Me protejo para poder seguir amando\".",
          "Cuando te sientas lista, abre los ojos. Tienes el derecho y la fuerza."
        ]
      },
      {
        id: 7,
        title: "PARA LA AUTOESTIMA",
        intention: "Para cuando te sientes pequeña, insuficiente, invisible.",
        imageSeed: "golden-hour-light",
        imageUrl: "https://i.imgur.com/5qb7WGG.jpeg",
        content: [
          "Pon ambas manos en el corazón. Cierra los ojos.",
          "Respira hondo. Trae a la mente a alguien que te ama incondicionalmente. Puede ser una persona real, un ser querido, o incluso tu yo más sabia.",
          "Imagina que esa persona te mira con ojos de amor puro. Sin juicio, sin expectativas. Solo amor.",
          "Siente esa mirada sobre ti. Acógela.",
          "Ahora, repite en silencio: \"Soy suficiente tal como soy. No necesito hacer más para merecer amor. Mi existencia ya es suficiente\".",
          "\"Soy valiosa por ser quien soy, no por lo que hago. Merezco ocupar espacio. Merezco ser vista\".",
          "Respira hondo, dejando que esas palabras se instalen en tu pecho.",
          "Imagina que una luz rosa suave te envuelve, entrando por el corazón y expandiéndose por todo tu cuerpo. Es la luz de tu propio amor.",
          "Quédate ahí, en esa luz, sintiéndote suficiente, sintiéndote amada por ti misma.",
          "Cuando estés lista, abre los ojos. Mírate al espejo si puedes. Sonríete. Te lo mereces."
        ]
      },
      {
        id: 8,
        title: "PARA LA TRISTEZA",
        intention: "Para cuando las lágrimas quieren salir y no te permites llorar.",
        imageSeed: "rain-window-aesthetic",
        imageUrl: "https://i.imgur.com/gUWsR0g.jpeg",
        content: [
          "Siéntate o túmbate. Pon una mano en el pecho. La otra en el vientre.",
          "Respira hondo. Permítete sentir la tristeza. No huyas de ella. No intentes cambiarla. Solo siéntela.",
          "Pregúntate: \"¿De qué tengo pena?\". Puede ser algo reciente, o algo muy antiguo. No importa.",
          "Si las lágrimas quieren salir, déjalas. Las lágrimas son agua sagrada que limpia el alma.",
          "Di en voz baja: \"Me permito estar triste. La tristeza no me debilita, me humaniza. Me permito llorar. El llanto es sanación\".",
          "Imagina que la tristeza es como una nube gris que pasa por el cielo. Tú eres el cielo, no la nube. La nube pasa, pero el cielo permanece.",
          "Respira con la tristeza. Acompáñala. No estás sola.",
          "Cuando sientas que ha pasado un poco, pon las manos en el corazón y di: \"Gracias por sentir. Gracias por honrar mi dolor. Ahora sigo adelante\"."
        ]
      },
      {
        id: 9,
        title: "PARA LA GRATITUD",
        intention: "Para cambiar el foco de lo que falta a lo que ya tienes.",
        imageSeed: "warm-tea-hands",
        imageUrl: "https://i.imgur.com/ER5qGyr.jpeg",
        content: [
          "Siéntate cómodamente. Manos en el regazo. Cierra los ojos.",
          "Respira hondo. Trae a la mente tres cosas por las que estés agradecida hoy. Pueden ser muy pequeñas: el sol que entró por la ventana, una taza de té caliente, un mensaje bonito, tu respiración.",
          "Siente la gratitud en el cuerpo. ¿Dónde la sientes? ¿En el pecho? ¿Una sonrisa?",
          "Ahora, expande esa gratitud. Agradece a tu cuerpo por sostenerte. Agradece a tus piernas por moverte. Agradece a tus manos por todo lo que hacen.",
          "Agradece a tu corazón por latir sin que tengas que pedírselo.",
          "Agradece a la vida por este momento, aquí, ahora, respirando.",
          "Repite en silencio: \"Gracias, gracias, gracias\".",
          "Siente cómo la gratitud llena tu pecho, cómo expande tu corazón.",
          "Quédate ahí, en ese estado de agradecimiento, todo el tiempo que quieras.",
          "La gratitud es la puerta a la abundancia."
        ]
      },
      {
        id: 10,
        title: "PARA CONECTAR CON TU SABIDURÍA INTERIOR",
        intention: "Para cuando necesitas una respuesta, una guía.",
        imageSeed: "candle-light-zen",
        imageUrl: "https://i.imgur.com/AX3ETcX.jpeg",
        content: [
          "Siéntate con la espalda recta, manos en el regazo. Cierra los ojos.",
          "Respira hondo. Lleva tu atención al centro de tu pecho. Ahí vive tu sabiduría interior.",
          "Haz una pregunta que necesites responder. Puede ser: \"¿qué necesito saber ahora?\", \"¿hacia dónde ir?\", \"¿cómo sanar esto?\".",
          "No esperes una respuesta inmediata. Solo mantén la pregunta en el corazón.",
          "Respira con ella.",
          "Ahora, imagina que desde el centro de tu pecho emerge una luz suave, dorada. Esa luz es tu intuición, tu guía.",
          "Pregunta de nuevo, en silencio. Y escucha. Puede venir en forma de palabra, imagen, sensación o simplemente una certeza.",
          "Acoge lo que venga. No lo juzgues. Solo acógelo.",
          "Agradece a tu sabiduría interior por hablarte. Porque siempre está ahí, aunque a veces no la escuches.",
          "Respira hondo. Cuando te sientas lista, abre los ojos.",
          "Confía en lo que has recibido."
        ]
      }
    ] as Meditation[],
    footer: {
      imageUrl: "https://i.imgur.com/N01zBzP.jpeg",
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    }
  },
  {
    id: 'tapping-liberar-emociones',
    title: "TAPPING PARA LIBERAR EMOCIONES",
    navLabel: "Tapping",
    subtitle: "5 guiones guiados para soltar culpa, miedo, autoexigencia y ansiedad",
    coverImageUrl: "https://i.imgur.com/Dkkf5EU.jpeg",
    type: 'tapping',
    intro: {
      title: "Querida,",
      content: [
        "¿Alguna vez has sentido que hay emociones atrapadas en tu cuerpo? Esa sensación de nudo en la garganta, ese peso en el pecho, esa opresión en el vientre que no se va con nada.",
        "Las emociones no son solo pensamientos. Son energía. Y cuando no las expresamos, cuando las reprimimos por miedo, por culpa, por \"no ser para tanto\", esa energía se queda atrapada en nuestro cuerpo. Y con el tiempo, se convierte en tensión, en dolor, en síntoma.",
        "El tapping (técnica de liberación emocional o EFT) es una herramienta sencilla pero profundamente poderosa para liberar esa energía atrapada. Consiste en golpear suavemente con las yemas de los dedos ciertos puntos de los meridianos energéticos (los mismos que usa la acupuntura) mientras nos enfocamos en la emoción que queremos liberar.",
        "¿Por qué funciona? Porque al tocar estos puntos y nombrar la emoción, enviamos una señal de calma a la amígdala, el centro del miedo en el cerebro. El sistema nervioso entiende que no hay peligro, que podemos sentir esa emoción sin que pase nada malo. Y entonces, la energía se libera.",
        "No necesitas experiencia previa. Solo necesitas estar dispuesta a sentir, a nombrar, a soltar."
      ],
      closing: "Con mucho amor,",
      author: "Amiga Fortaleza",
      imageUrl: "https://i.imgur.com/H1HKIfm.jpeg"
    },
    pointsInfo: {
      illustration: "tapping-points-map",
      imageUrl: "https://i.imgur.com/uVKEORR.jpeg",
      description: [
        { point: "PK", label: "Punto de Karate", detail: "El borde carnoso de la mano (el que usarías para dar un golpe de karate)." },
        { point: "CE", label: "Ceja", detail: "El comienzo de la ceja, junto al entrecejo." },
        { point: "LO", label: "Lado del Ojo", detail: "El hueso en el lateral del ojo." },
        { point: "DO", label: "Debajo del Ojo", detail: "El hueso justo debajo de la pupila." },
        { point: "DN", label: "Debajo de la Nariz", detail: "El espacio entre la nariz y el labio superior." },
        { point: "B", label: "Barba", detail: "El hoyuelo entre la barbilla y el labio inferior." },
        { point: "CL", label: "Clavícula", detail: "El ángulo donde empieza la clavícula, a unos 2-3 cm del centro." },
        { point: "BB", label: "Bajo el Brazo", detail: "Unos 10 cm debajo de la axila (a la altura del sujetador)." },
        { point: "CO", label: "Coronilla", detail: "La parte superior de la cabeza." }
      ],
      howTo: "Golpea suavemente cada punto de 5 a 7 veces con las yemas de dos dedos (índice y corazón), mientras repites la frase que indica el guión. No necesitas fuerza, solo un toque constante."
    },
    items: [
      {
        id: 1,
        title: "TAPPING PARA SOLTAR LA CULPA",
        imageUrl: "https://i.imgur.com/EUxBotf.jpeg",
        whenToUse: "Cuando te sientes culpable por haber dicho que no, por haber descansado, por haberte priorizado. Cuando la culpa te pesa en el pecho o en el estómago.",
        preparation: "Antes de empezar, respira hondo. Pon una mano en el pecho y pregúntate: \"¿Qué culpa cargo ahora mismo?\". Valora la intensidad del 0 al 10. No importa el número, solo tómalo como referencia.",
        karatePoint: [
          "\"Aunque siento esta culpa por anteponerme a los demás, me acepto profunda y completamente.\"",
          "\"Aunque me sienta mala persona por decir que no, me acepto como soy.\"",
          "\"Aunque esta culpa me oprima el pecho, elijo soltarla poco a poco.\""
        ],
        sequence: [
          { point: "Ceja", phrase: "\"Esta culpa que me pesa...\"" },
          { point: "Lado del Ojo", phrase: "\"Este no ser suficiente para los demás...\"" },
          { point: "Debajo del Ojo", phrase: "\"Esta sensación de que siempre debería dar más...\"" },
          { point: "Debajo de la Nariz", phrase: "\"Todo lo que hago y parece no alcanzar...\"" },
          { point: "Barba", phrase: "\"Esta culpa tan antigua...\"" },
          { point: "Clavícula", phrase: "\"La que me dice que soy mala si me elijo...\"" },
          { point: "Bajo el Brazo", phrase: "\"Toda esta carga de expectativas...\"" },
          { point: "Coronilla", phrase: "\"Y elijo soltar esta culpa, aunque sea un poquito. Me permito elegirme.\"" }
        ],
        postBreath: "Respira hondo. Vuelve a valorar la intensidad. Probablemente haya bajado. Si quieres, puedes repetir la secuencia una vez más, adaptando las frases a lo que sientas ahora."
      },
      {
        id: 2,
        title: "TAPPING PARA LIBERAR EL MIEDO",
        imageUrl: "https://i.imgur.com/lt74Acs.jpeg",
        whenToUse: "Cuando el miedo te paraliza, cuando sientes mariposas en el estómago antes de algo importante, cuando la ansiedad anticipatoria no te deja vivir.",
        preparation: "Respira hondo. Pon una mano en el vientre. Pregúntate: \"¿Qué miedo está aquí ahora?\". Valora la intensidad del 0 al 10.",
        karatePoint: [
          "\"Aunque tengo este miedo que me aprieta el estómago, me acepto y me respeto.\"",
          "\"Aunque sienta pánico a lo que pueda pasar, elijo estar conmigo ahora.\"",
          "\"Aunque el miedo me paralice, estoy aquí, presente, respirando.\""
        ],
        sequence: [
          { point: "Ceja", phrase: "\"Este miedo en mi cuerpo...\"" },
          { point: "Lado del Ojo", phrase: "\"Esta sensación de que algo malo va a pasar...\"" },
          { point: "Debajo del Ojo", phrase: "\"Todo lo que me da miedo decir o hacer...\"" },
          { point: "Debajo de la Nariz", phrase: "\"Este temblor por dentro...\"" },
          { point: "Barba", phrase: "\"El miedo a no ser capaz...\"" },
          { point: "Clavícula", phrase: "\"La inseguridad que me paraliza...\"" },
          { point: "Bajo el Brazo", phrase: "\"Toda esta energía de miedo atrapada...\"" },
          { point: "Coronilla", phrase: "\"Y elijo soltar el miedo, aunque sea un poquito. Confío en mí.\"" }
        ],
        postBreath: "Respira. Vuelve a valorar la intensidad. Si aún sientes miedo, repite la secuencia, pero ahora con frases más específicas según lo que hayas identificado."
      },
      {
        id: 3,
        title: "TAPPING PARA LA AUTOEXIGENCIA",
        imageUrl: "https://i.imgur.com/nWJieIs.jpeg",
        whenToUse: "Cuando sientes que nada es suficiente, que siempre puedes dar más, que descansar es \"perder el tiempo\". Cuando la presión interna no te deja respirar.",
        preparation: "Respira hondo. Pon una mano en el corazón. Pregúntate: \"¿Cuánta presión me estoy poniendo ahora?\". Valora la intensidad.",
        karatePoint: [
          "\"Aunque sienta que tengo que hacerlo todo perfecto, me acepto como soy, con mis errores incluidos.\"",
          "\"Aunque esta voz interna me presione sin parar, elijo tratarme con más suavidad.\"",
          "\"Aunque nunca sea suficiente para mí misma, hoy aprendo a descansar.\""
        ],
        sequence: [
          { point: "Ceja", phrase: "\"Esta presión que me pongo a mí misma...\"" },
          { point: "Lado del Ojo", phrase: "\"Este no llegar nunca a mi propia meta...\"" },
          { point: "Debajo del Ojo", phrase: "\"El agotamiento de intentar ser perfecta...\"" },
          { point: "Debajo de la Nariz", phrase: "\"Esta voz que me dice 'tienes que'...\"" },
          { point: "Barba", phrase: "\"El miedo a fallar...\"" },
          { point: "Clavícula", phrase: "\"La rigidez con la que me trato...\"" },
          { point: "Bajo el Brazo", phrase: "\"Toda esta autoexigencia que me pesa...\"" },
          { point: "Coronilla", phrase: "\"Y elijo soltar la exigencia, aunque sea un poquito. Me permito ser humana.\"" }
        ],
        postBreath: "Respira hondo. Repite si lo necesitas. Puedes añadir frases como \"Hago lo que puedo con lo que tengo\" o \"Está bien no ser perfecta\"."
      },
      {
        id: 4,
        title: "TAPPING PARA LA ANSIEDAD CORPORAL",
        imageUrl: "https://i.imgur.com/lsvIVHP.jpeg",
        whenToUse: "Cuando la ansiedad se siente en el cuerpo: palpitaciones, opresión en el pecho, nudo en el estómago, respiración entrecortada.",
        preparation: "Si la ansiedad es muy intensa, empieza por conectar con el exterior: mira a tu alrededor, nombra 3 cosas que veas, 2 que escuches, 1 que puedas tocar. Luego, pon una mano en el pecho y otra en el vientre. Valora la intensidad.",
        karatePoint: [
          "\"Aunque esta ansiedad me apriete el pecho, me acepto y me respeto.\"",
          "\"Aunque mi cuerpo esté en alerta, elijo recordar que estoy a salvo.\"",
          "\"Aunque la respiración se acelere, puedo volver a la calma.\""
        ],
        sequence: [
          { point: "Ceja", phrase: "\"Esta ansiedad en mi cuerpo...\"" },
          { point: "Lado del Ojo", phrase: "\"Este corazón que late fuerte...\"" },
          { point: "Debajo del Ojo", phrase: "\"Esta opresión en el pecho...\"" },
          { point: "Debajo de la Nariz", phrase: "\"Este aire que no llega...\"" },
          { point: "Barba", phrase: "\"Este miedo disfrazado de ansiedad...\"" },
          { point: "Clavícula", phrase: "\"Toda esta energía atrapada...\"" },
          { point: "Bajo el Brazo", phrase: "\"Que necesita ser liberada...\"" },
          { point: "Coronilla", phrase: "\"Y elijo soltarla ahora, con amor.\"" }
        ],
        postBreath: "Respira lento, alargando la exhalación. Vuelve a valorar la intensidad. Si es necesario, repite la secuencia, pero más despacio."
      },
      {
        id: 5,
        title: "TAPPING PARA LA TRISTEZA CONTENIDA",
        imageUrl: "https://i.imgur.com/3ZqBq0O.jpeg",
        whenToUse: "Cuando hay una pena que no has llorado, cuando sientes un peso en el pecho, cuando la tristeza está ahí pero no sale.",
        preparation: "Respira hondo. Pon una mano en el corazón. Pregúntate: \"¿Qué tristeza estoy guardando?\". Valora la intensidad.",
        karatePoint: [
          "\"Aunque esta tristeza me pese en el pecho, me acepto y me respeto.\"",
          "\"Aunque me hayan enseñado que llorar es debilidad, hoy me permito sentir.\"",
          "\"Aunque esta pena sea antigua, elijo honrarla y soltarla.\""
        ],
        sequence: [
          { point: "Ceja", phrase: "\"Esta tristeza que cargo...\"" },
          { point: "Lado del Ojo", phrase: "\"Estas lágrimas que no han salido...\"" },
          { point: "Debajo del Ojo", phrase: "\"Este peso en el corazón...\"" },
          { point: "Debajo de la Nariz", phrase: "\"La pena que no me permito...\"" },
          { point: "Barba", phrase: "\"La pérdida, la ausencia, el vacío...\"" },
          { point: "Clavícula", phrase: "\"Toda esta tristeza guardada...\"" },
          { point: "Bajo el Brazo", phrase: "\"Que ya puede salir...\"" },
          { point: "Coronilla", phrase: "\"Y elijo llorar si hace falta. Me permito sentir.\"" }
        ],
        postBreath: "Quédate un momento en silencio. Si vienen lágrimas, déjalas salir. Si no, está bien. Solo respira con esa tristeza, acompañándola."
      }
    ] as TappingScript[],
    bonus: {
      title: "TAPPING RÁPIDO PARA CUALQUIER EMOCIÓN",
      description: "A veces no sabes exactamente qué sientes, solo que algo no va bien. Este tapping rápido es para esos momentos.",
      scripts: [
        { point: "Punto de Karate", phrase: "\"Aunque no sepa qué siento, aunque esto sea confuso, me acepto y me respeto.\"" },
        { point: "Ceja", phrase: "\"Esta sensación rara...\"" },
        { point: "Lado del Ojo", phrase: "\"Este malestar que no sé nombrar...\"" },
        { point: "Debajo del Ojo", phrase: "\"Lo que sea que esté aquí...\"" },
        { point: "Debajo de la Nariz", phrase: "\"Puede estar...\"" },
        { point: "Barba", phrase: "\"Lo acepto...\"" },
        { point: "Clavícula", phrase: "\"Lo suelto...\"" },
        { point: "Bajo el Brazo", phrase: "\"Poco a poco...\"" },
        { point: "Coronilla", phrase: "\"Confío en mi cuerpo, confío en mí.\"" }
      ]
    },
    footer: {
      imageUrl: "https://i.imgur.com/N01zBzP.jpeg",
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    }
  },
  {
    id: '5-rituales-reconectar',
    title: "5 RITUALES DIARIOS PARA RECONECTAR",
    navLabel: "Rituales",
    subtitle: "Pequeños actos sagrados para volver a ti",
    coverImageUrl: "https://i.imgur.com/M9PhkFv.jpeg",
    type: 'meditation',
    intro: {
      title: "Querida,",
      content: [
        "¿Cuántas veces has llegado al final del día sintiendo que viviste en piloto automático? ¿Que hiciste, hiciste, hiciste… pero no estuviste presente?",
        "La vida moderna nos empuja a la prisa, a la productividad, a hacer más con menos tiempo. Y en esa carrera, lo primero que perdemos es la conexión con nosotras mismas.",
        "Los rituales no son pérdida de tiempo. Son un acto de rebeldía amorosa. Son pequeñas pausas sagradas que te recuerdan que existes, que sientes, que mereces cuidado.",
        "Los 5 rituales que encontrarás aquí están diseñados para durar entre 5 y 15 minutos. No necesitas preparación especial, ni herramientas complicadas. Solo necesitas intención y permiso para detenerte."
      ],
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    },
    items: [
      {
        id: 1,
        title: "RITUAL DE LA MAÑANA (5 min)",
        intention: "Para empezar el día con calma, antes de que el mundo te reclame.",
        imageSeed: "morning-ritual-peace",
        imageUrl: "https://i.imgur.com/cCH01iK.jpeg",
        content: [
          "Antes de mirar el móvil, antes de levantarte de prisa, antes de que las obligaciones te atrapen… tómate estos 5 minutos solo para ti.",
          "Siéntate en la cama con la espalda recta, o simplemente quédate acostada con las manos sobre el vientre.",
          "Respira hondo 5 veces. Inhala por la nariz, sintiendo cómo se eleva tu vientre. Exhala por la boca, soltando todo el aire con un suspiro suave.",
          "Pon una mano en el corazón y otra en el vientre. Siente el calor de tus propias manos. Pregúntate en voz baja: \"¿Cómo amanezco hoy?\" \"¿Qué necesita mi cuerpo hoy?\"",
          "Escucha la respuesta. Puede ser una palabra (cansancio, paz, tensión, alegría), una imagen o simplemente una sensación. No la juzgues, solo acógela.",
          "Pon una intención para el día. Por ejemplo: \"Hoy voy a ir más despacio\", \"Hoy voy a escucharme cuando mi cuerpo me pida pausa\", \"Hoy merezco disfrutar lo que hago\".",
          "Sonríe ligeramente y abre los ojos. El día empieza ahora, pero tú ya estás contigo."
        ]
      },
      {
        id: 2,
        title: "RITUAL DEL AGUA (durante el día)",
        intention: "Para convertir un acto cotidiano en un momento de consciencia.",
        imageSeed: "water-ritual-flow",
        imageUrl: "https://i.imgur.com/olVtR38.jpeg",
        content: [
          "El agua es vida. Es limpieza, es renovación, es fluir. Cada vez que bebas agua hoy, haz una pausa consciente.",
          "Cuando tomes un vaso de agua, detente un momento antes de beber.",
          "Observa el agua. Mírala, siente el peso del vaso en tu mano. Si puedes, ponla al sol y mira cómo brilla.",
          "Bendice el agua en silencio o en voz baja. Puedes decir: \"Que esta agua me limpie por dentro\", \"Que esta agua me nutra y me renueve\", \"Gracias por este elemento que me sostiene\".",
          "Bebe despacio. Siente el agua en tu boca, cómo recorre tu garganta, cómo llega a tu estómago. Nota la frescura o la temperatura.",
          "Agradece. Al terminar, da las gracias. Puede ser un simple \"gracias\" interno.",
          "Haz esto cada vez que bebas agua hoy. Conviértelo en un pequeño altar portátil."
        ]
      },
      {
        id: 3,
        title: "RITUAL DE LA PAUSA CONSCIENTE (3 min)",
        intention: "Para cuando el día se acelera y sientes que pierdes el centro.",
        imageSeed: "pause-ritual-center",
        imageUrl: "https://i.imgur.com/lAcK4Ot.jpeg",
        content: [
          "Puedes hacerlo en el trabajo, en casa, en cualquier lugar. Nadie tiene que darse cuenta.",
          "Si estás sentada, apoya los pies planos en el suelo. Si estás de pie, siente el contacto de tus pies con la tierra.",
          "Respira hondo 3 veces. Inhala profundo, exhala lento.",
          "Lleva tu atención a tu cuerpo. Escanéalo rápidamente de arriba abajo: ¿Tensión en los hombros? Exhala y déjalos caer. ¿Mandíbula apretada? Separa los dientes y relaja. ¿Vientre duro? Respira hacia él y suelta.",
          "Pregúntate: \"¿Qué necesito en este momento?\"",
          "La respuesta puede ser simple: \"necesito agua\", \"necesito estirar el cuello\", \"necesito terminar esta tarea y descansar\". Haz caso a esa voz.",
          "Vuelve a lo que estabas haciendo. Esa pausa de 3 minutos ha sido un regalo para tu sistema nervioso."
        ]
      },
      {
        id: 4,
        title: "RITUAL DE GRATITUD CORPORAL (5 min)",
        intention: "Para agradecer a tu cuerpo por todo lo que hizo por ti hoy.",
        imageSeed: "body-gratitude-ritual",
        imageUrl: "https://i.imgur.com/FNeNZAH.jpeg",
        content: [
          "Antes de dormir, en lugar de repasar todo lo que salió mal o lo que falta por hacer, dedica estos minutos a honrar tu cuerpo.",
          "Túmbate en la cama boca arriba, con las piernas ligeramente separadas y los brazos a los lados, palmas hacia arriba.",
          "Respira hondo 3 veces. Suelta el aire con un suspiro.",
          "Lleva tu atención a los pies. Siéntelos. Agradéceles: \"Gracias, pies, por sostenerme hoy. Por cada paso que dieron, por cada lugar al que me llevaron.\"",
          "Sube a las piernas, rodillas, caderas. Agradece: \"Gracias, piernas, por moverme, por permitirme caminar, bailar, sentarme.\"",
          "Llega al vientre. Pon una mano sobre él: \"Gracias, vientre, por procesar lo que comí y lo que sentí. Por ser mi centro.\"",
          "Sube al pecho y corazón: \"Gracias, corazón, por latir sin descanso, por bombear vida a cada célula.\"",
          "Brazos y manos: \"Gracias, manos, por todo lo que sostuvieron, acariciaron, crearon hoy.\"",
          "Cuello y cabeza: \"Gracias, cabeza, por pensar, por resolver, por soñar.\"",
          "Termina con un abrazo: Cruza los brazos sobre tu pecho y abrázate suavemente. Di en silencio: \"Gracias, cuerpo, por ser mi hogar. Buenas noches.\""
        ]
      },
      {
        id: 5,
        title: "RITUAL DE CIERRE DEL DÍA (5-10 min)",
        intention: "Para soltar lo que viviste y descansar en paz.",
        imageSeed: "night-closing-ritual",
        imageUrl: "https://i.imgur.com/SPtS03l.jpeg",
        content: [
          "Antes de dormir, con tu libreta al lado de la cama, dedica unos minutos a cerrar el día conscientemente.",
          "Siéntate en la cama con tu libreta y un bolígrafo. Si prefieres, puedes hacerlo mentalmente.",
          "Escribe tres cosas: 1. Algo que soltaste hoy (una preocupación, una tarea, una emoción). 2. Algo por lo que estás agradecida (el sol, una sonrisa, un té caliente). 3. Una intención para mañana (ej: \"mañana voy a escucharme más\").",
          "Lee lo que escribiste en silencio o en voz baja.",
          "Respira hondo 3 veces y cierra la libreta. Ese día ya terminó.",
          "Apaga la luz y entrégate al sueño, sabiendo que mañana será otro día."
        ]
      }
    ] as Meditation[],
    footer: {
      imageUrl: "https://i.imgur.com/N01zBzP.jpeg",
      closing: "Estos 5 rituales son semillas. Pequeñas acciones que, repetidas con cariño, pueden transformar tu relación contigo misma. No se trata de hacerlos todos cada día. Se trata de elegir uno, el que más necesites, y regalártelo. Con el tiempo, dejarán de ser ejercicios y se convertirán en parte de ti. En esa voz interna que te recuerda que mereces pausa, mereces cuidado, mereces volver a ti. Que esta guía te acompañe en el camino.",
      author: "Amiga Fortaleza"
    }
  },
  {
    id: '50-afirmaciones-alta-vibracion',
    title: "50 AFIRMACIONES DE ALTA VIBRACIÓN",
    navLabel: "Afirmaciones",
    subtitle: "Palabras que sanan, transforman y elevan tu energía",
    coverImageUrl: "https://i.imgur.com/MZMD6vS.jpeg",
    type: 'affirmations',
    intro: {
      title: "Querida,",
      content: [
        "¿Alguna vez te has escuchado hablar contigo misma? Esa voz interna que a veces dice \"no puedo\", \"no soy suficiente\", \"siempre me pasa lo mismo\"… esa voz es más poderosa de lo que crees.",
        "Las afirmaciones no son frases bonitas para colgar en la pared. Son herramientas de reprogramación mental. Cada vez que repites una afirmación, estás creando nuevas conexiones neuronales, estás eligiendo una nueva historia, estás sembrando una semilla que con el tiempo dará frutos.",
        "En esta guía encontrarás 50 afirmaciones de alta vibración, creadas con el tono cálido y cercano de \"hermana mayor sabia\". Están agrupadas en 5 categorías para que puedas elegir las que más necesites en cada momento:",
        "🌸 Amor propio – Para recordarte que eres suficiente.\n🌸 Sanación del cuerpo – Para escuchar y honrar tu cuerpo.\n🌸 Límites y autoestima – Para proteger tu energía.\n🌸 Abundancia emocional – Para abrirte a recibir.\n🌸 Conexión espiritual – Para recordar quién eres realmente.",
        "Lo importante es que las SIENTAS. No se trata de repetir como loro, sino de conectar con la emoción que hay detrás.",
        "Que estas palabras te acompañen, te sostengan y te recuerden lo poderosa que eres."
      ],
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    },
    affirmationCategories: [
      {
        id: 1,
        title: "AMOR PROPIO",
        description: "Para recordarte que eres suficiente, aquí y ahora.",
        imageUrl: "https://i.imgur.com/wmezFDD.jpeg",
        items: [
          "Merezco ocupar espacio en el mundo sin pedir perdón.",
          "Soy suficiente tal como soy, con mis luces y mis sombras.",
          "Hoy elijo tratarme con la misma amabilidad que trato a quien más quiero.",
          "Mi valor no depende de lo que hago, sino de lo que soy.",
          "Me permito descansar sin culpa, porque mi bienestar es prioridad.",
          "Soy mi propia casa, y la cuido con amor.",
          "No necesito ser perfecta para ser valiosa.",
          "Hoy me miro al espejo y me digo: te quiero, gracias por estar aquí.",
          "Merezco recibir tanto como doy.",
          "Mi amor propio es la base de todas mis relaciones."
        ]
      },
      {
        id: 2,
        title: "SANACIÓN DEL CUERPO",
        description: "Para escuchar, honrar y sanar tu cuerpo.",
        imageUrl: "https://i.imgur.com/DbGCc67.jpeg",
        items: [
          "Mi cuerpo es sabio y yo aprendo a escucharlo cada día.",
          "Cada célula de mi cuerpo vibra en salud y armonía.",
          "Agradezco a mi cuerpo por todo lo que hace por mí, incluso cuando no lo veo.",
          "Escucho las señales de mi cuerpo con amor, no con miedo.",
          "Hoy elijo alimentos y pensamientos que nutren mi cuerpo.",
          "Mi cuerpo es mi hogar, y lo habito con gratitud.",
          "Suelto la tensión que no me pertenece y permito que mi cuerpo descanse.",
          "Cada respiración trae vida y sanación a cada parte de mí.",
          "Mi cuerpo merece cuidado, respeto y cariño.",
          "Honro mi cuerpo como el templo de mi alma."
        ]
      },
      {
        id: 3,
        title: "LÍMITES Y AUTOESTIMA",
        description: "Para proteger tu energía y recordar tu valor.",
        imageUrl: "https://i.imgur.com/iWzRueN.jpeg",
        items: [
          "Decir 'no' es un acto de amor hacia mí misma.",
          "Merezco relaciones donde me sienta valorada y respetada.",
          "Pongo límites con amor, sin culpa ni explicaciones.",
          "Mi tiempo y mi energía son valiosos, y los administro con cuidado.",
          "No tengo que complacer a todos para ser querida.",
          "Me alejo con amor de lo que me resta paz.",
          "Merezco ser tratada con respeto, siempre.",
          "Mi voz importa y tengo derecho a expresar lo que siento.",
          "No cargo con lo que no me corresponde, devuelvo con amor.",
          "Hoy elijo rodearme de personas que me suman."
        ]
      },
      {
        id: 4,
        title: "ABUNDANCIA EMOCIONAL",
        description: "Para abrirte a recibir y confiar en la vida.",
        imageUrl: "https://i.imgur.com/XSRYDf5.jpeg",
        items: [
          "Merezco recibir todo lo bueno que la vida tiene para mí.",
          "La abundancia fluye hacia mí en todas sus formas: amor, paz, alegría, prosperidad.",
          "Hoy estoy abierta a recibir lo que el universo tiene preparado para mí.",
          "Agradezco por todo lo que ya tengo y confío en lo que está por venir.",
          "Merezco vivir en paz, sin prisa, sin culpa.",
          "La alegría habita en mí y la comparto con el mundo.",
          "Confío en que todo llega en el momento perfecto.",
          "Hoy elijo enfocarme en lo que tengo, no en lo que falta.",
          "Merezco relaciones donde el amor fluya libremente.",
          "La vida me sostiene, incluso cuando no lo veo."
        ]
      },
      {
        id: 5,
        title: "CONEXIÓN ESPIRITUAL",
        description: "Para recordar quién eres más allá de lo que haces.",
        imageUrl: "https://i.imgur.com/mkr3NFX.jpeg",
        items: [
          "Estoy conectada con la sabiduría de mi cuerpo y la guía de mi alma.",
          "Confío en el proceso de la vida, aunque no lo entienda.",
          "Soy parte de algo más grande, y eso me da paz.",
          "Mi intuición me guía y yo aprendo a escucharla.",
          "Hoy elijo confiar en mí y en el fluir de la vida.",
          "Soy luz, aunque a veces las nubes la tapen.",
          "Mi propósito es ser yo misma, plenamente, sin disculpas.",
          "La espiritualidad no es algo que busco, es algo que habito.",
          "Cada día es una oportunidad para volver a mí.",
          "Soy alma, tengo cuerpo. Y hoy honro a ambos."
        ]
      }
    ],
    howToUse: {
      title: "CÓMO USAR ESTAS AFIRMACIONES",
      intro: "No se trata de leer las 50 de una vez. Se trata de elegir una, la que más te resuene hoy, y llevarla contigo. Aquí tienes algunas formas de integrarlas en tu día:",
      steps: [
        "🌸 Afirmación matutina: Elige una al despertar, repítela 3 veces frente al espejo y llévala en tu corazón durante el día.",
        "🌸 Diario de afirmaciones: Escribe una cada día en tu libreta, y al lado, cómo te sientes al leerla.",
        "🌸 Tarjetas de sanación: Imprime las que más te gusten, recórtalas y ponlas en lugares visibles (espejo, nevera, escritorio).",
        "🌸 Audio para ti misma: Grábate leyendo tus favoritas y escúchalo antes de dormir o en momentos de bajón.",
        "🌸 Comparte: Si una afirmación le llegó a una amiga, compártela. Dar también es recibir."
      ],
      footer: "Recuerda: la repetición con emoción es la clave. No es solo decirlo, es sentirlo."
    },
    footer: {
      imageUrl: "https://i.imgur.com/N01zBzP.jpeg",
      closing: "Con amor eterno,",
      author: "Amiga Fortaleza"
    }
  },
  {
    id: 'plantillas-gratitud-diaria',
    title: "PLANTILLAS DE GRATITUD DIARIAS",
    navLabel: "Gratitud",
    subtitle: "30 días para transformar tu mirada",
    coverImageUrl: "https://i.imgur.com/aZtBTNp.jpeg",
    type: 'journal',
    intro: {
      title: "Querida,",
      content: [
        "La gratitud no es solo decir \"gracias\". Es una forma de mirar la vida. Es el arte de enfocarte en lo que ya tienes, en lugar de en lo que falta.",
        "La ciencia lo confirma: las personas que practican la gratitud de forma regular tienen menos estrés, mejor sueño y relaciones más sanas.",
        "Pero como todo hábito, necesita constancia. Por eso he creado estas 30 plantillas diarias. Sin complicaciones, sin exigencia. Solo un espacio para que escribas, reflexiones y agradezcas.",
        "Que estas páginas sean el lugar donde tu corazón aprende a mirar con otros ojos."
      ],
      closing: "Con amor,",
      author: "Amiga Fortaleza"
    },
    howToUse: {
      title: "Cómo usar estas plantillas",
      intro: "Sigue estos pasos para integrar la gratitud en tu vida:",
      steps: [
        "Elige un momento del día (mañana o noche).",
        "Busca un lugar tranquilo y sin prisas.",
        "Completa cada apartado con honestidad, sin juzgarte.",
        "Al final del mes, relee lo que escribiste para ver cómo tu mirada ha cambiado."
      ],
      footer: "Que este cuaderno sea tu amigo, tu confidente, tu lugar seguro."
    },
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      title: `DÍA ${i + 1}`,
      imageUrl: "https://i.imgur.com/Tks080r.jpeg",
      sections: [
        { label: "1. HOY AGRADEZCO...", placeholder: "Escribe 3 cosas...", type: 'list', count: 3 },
        { label: "2. MI LOGRO DEL DÍA", placeholder: "Algo que hice bien, por pequeño que sea...", type: 'text' },
        { label: "3. MI AFIRMACIÓN", placeholder: "Una frase que necesito recordar...", type: 'text' },
        { label: "4. UN PENSAMIENTO O DIBUJO LIBRE", placeholder: "Expresa lo que sientas...", type: 'drawing' }
      ],
      ...(i === 29 ? { closingQuote: "Hoy cierro este ciclo con gratitud por haberme acompañado durante 30 días." } : {})
    })) as JournalItem[],
    footer: {
      imageUrl: "https://i.imgur.com/627ixPL.jpeg",
      closing: "Gracias por permitirme acompañarte en este viaje. Que la gratitud se convierta en tu forma de caminar por la vida.",
      author: "Amiga Fortaleza"
    }
  }
];
