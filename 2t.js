// ── Datos de navegación 2T ──
const PLAN2T = {
  ciclos: [
    {
      id: 'c1', label: 'Ciclo 1', sub: 'S1 · S2 · S3 · S4 · S5',
      semanas: [
        {
          id: 'c1s1', label: 'Semana 1', rango: '7 – 11 Julio',
          dias: [
            { id: 'c1s1mar', label: 'Martes 7/7',    sub: 'Jerk + Strict Press + Fuerza Gimnástica + Estructura',  carga: 'high-med', contenido: 't-c1s1mar-content' },
            { id: 'c1s1mie', label: 'Miércoles 8/7', sub: 'Práctica Gimnástica + Squat Clean + Metcon 16\'',        carga: 'high',     contenido: 't-c1s1mie-content' },
            { id: 'c1s1jue', label: 'Jueves 9/7',    sub: 'Descanso · Día de la Independencia 🇦🇷',                carga: 'off',      contenido: 't-c1s1jue-content' },
            { id: 'c1s1vie', label: 'Viernes 10/7',  sub: 'Snatch Complex + Front Squat + Fuerza Gimnástica + 2 Metcons', carga: 'high', contenido: 't-c1s1vie-content' },
            { id: 'c1s1sab', label: 'Sábado 11/7',   sub: 'Mash Competitivo · 3 Metcons',                          carga: 'high',     contenido: 't-c1s1sab-content' },
          ]
        },
        {
          id: 'c1s2', label: 'Semana 2', rango: '13 – 18 Julio',
          dias: [
            { id: 'c1s2lun', label: 'Lunes 13/7',    sub: 'Snatch Complex + Back Squat + 2 WODs',                  carga: 'high',     contenido: 't-c1s2lun-content' },
            { id: 'c1s2mar', label: 'Martes 14/7',   sub: 'Push Jerk + Strict Press + HSPU Skill + Fartlek 40\'',  carga: 'high-med', contenido: 't-c1s2mar-content' },
            { id: 'c1s2mie', label: 'Miércoles 15/7',sub: 'Power Clean + Deadlift + AMRAP 20\' + Strongman',       carga: 'high',     contenido: 't-c1s2mie-content' },
            { id: 'c1s2jue', label: 'Jueves 16/7',   sub: 'Zona 2 · 45\' Running',                                 carga: 'med',      contenido: 't-c1s2jue-content' },
            { id: 'c1s2vie', label: 'Viernes 17/7',  sub: 'Clean Complex + Front Squat + 2 Metcons + Estructura',  carga: 'high',     contenido: 't-c1s2vie-content' },
            { id: 'c1s2sab', label: 'Sábado 18/7',   sub: 'Bench Press + OHS + 3 Eventos Competitivos',            carga: 'high',     contenido: 't-c1s2sab-content' },
          ]
        },
        {
          id: 'c1s3', label: 'Semana 3', sub: 'S3', rango: '20 – 25 Julio',
          dias: [
            { id: 'c1s3lun', label: 'Lunes 20/7',    sub: 'Snatch Complex + Back Squat + 2 WODs',                   carga: 'high',     contenido: 't-c1s3lun-content' },
            { id: 'c1s3mar', label: 'Martes 21/7',   sub: 'Split Jerk + Strict Press + Habilidad Gimn + WOD Z2',    carga: 'high-med', contenido: 't-c1s3mar-content' },
            { id: 'c1s3mie', label: 'Miércoles 22/7',sub: 'Squat Clean + Deadlift + Metcon TC 20\' + Strongman',   carga: 'high',     contenido: 't-c1s3mie-content' },
            { id: 'c1s3jue', label: 'Jueves 23/7',   sub: 'Zona 2 · LSD 45\'',                                     carga: 'med',      contenido: 't-c1s3jue-content' },
            { id: 'c1s3vie', label: 'Viernes 24/7',  sub: 'Clean Complex + Front Squat + Metcon + Estructura',      carga: 'high',     contenido: 't-c1s3vie-content' },
            { id: 'c1s3sab', label: 'Sábado 25/7',   sub: 'Habilidad Gimn + Bench + OHS + 3 Eventos',               carga: 'high',     contenido: 't-c1s3sab-content' },
          ]
        },
        {
          id: 'c1s4', label: 'Semana 4', sub: 'S4', rango: '27 Jul – 1 Ago',
          dias: [
            { id: 'c1s4lun', label: 'Lunes 27/7',    sub: 'Snatch Complex EMOM + Back Squat + 2 WODs',              carga: 'high',     contenido: 't-c1s4lun-content' },
            { id: 'c1s4mar', label: 'Martes 28/7',   sub: 'Jerk Complex + Strict Press + Habilidad Gimn + Pasadas', carga: 'high-med', contenido: 't-c1s4mar-content' },
            { id: 'c1s4mie', label: 'Miércoles 29/7',sub: 'Clean Complex EMOM + Deadlift + AMRAP 18\' + Strongman',carga: 'high',     contenido: 't-c1s4mie-content' },
            { id: 'c1s4jue', label: 'Jueves 30/7',   sub: 'Zona 2 · 45–50\' Running',                              carga: 'med',      contenido: 't-c1s4jue-content' },
            { id: 'c1s4vie', label: 'Viernes 31/7',  sub: 'Complex EMOM + Front Squat + 2 Metcons + Estructura',    carga: 'high',     contenido: 't-c1s4vie-content' },
            { id: 'c1s4sab', label: 'Sábado 1/8',    sub: 'Habilidad Gimn + Bench S3 + OHS S3 + 3 Eventos',         carga: 'high',     contenido: 't-c1s4sab-content' },
          ]
        },
        {
          id: 'c1s5', label: 'Semana 5', sub: 'S5 · Descarga', rango: '3 – 8 Agosto',
          dias: [
            { id: 'c1s5lun', label: 'Lunes 3/8',     sub: 'Snatch Técnico + Back Squat Descarga + 2 AMRAPs',        carga: 'high-med', contenido: 't-c1s5lun-content' },
            { id: 'c1s5mar', label: 'Martes 4/8',    sub: 'Habilidad Gimn + Strict Press Descarga + 10×400m',       carga: 'high-med', contenido: 't-c1s5mar-content' },
            { id: 'c1s5mie', label: 'Miércoles 5/8', sub: 'Clean Técnico + Deadlift Descarga + AMRAP 16\'',         carga: 'high-med', contenido: 't-c1s5mie-content' },
            { id: 'c1s5jue', label: 'Jueves 6/8',    sub: 'Zona 2 · LSD 45\'',                                     carga: 'med',      contenido: 't-c1s5jue-content' },
            { id: 'c1s5vie', label: 'Viernes 7/8',   sub: 'Clean & Jerk Técnico + Front Squat + 2 Metcons',         carga: 'high-med', contenido: 't-c1s5vie-content' },
            { id: 'c1s5sab', label: 'Sábado 8/8',    sub: 'Habilidad Gimn + Bench + OHS · Sesión Larga',            carga: 'high-med', contenido: 't-c1s5sab-content' },
          ]
        }
      ]
    },
    {
      id: 'c2', label: 'Ciclo 2', sub: 'S1 · S2 · S3 · S4 · S5',
      semanas: [
        { id: 'c2s1', label: 'Semana 1', sub: 'S1', rango: '10 – 15 Agosto',
          dias: [
            { id: 'c2s1lun', label: 'Lunes 10/8',    sub: 'Snatch EMOM 1\'30" + Back Squat Cluster + Gimn Tracción + ATD WOD 26.1', carga: 'high', contenido: 't-c2s1lun-content' },
            { id: 'c2s1mar', label: 'Martes 11/8',   sub: 'Push Jerk EMOM + Strict Press Cluster + HSPU Déficit + ATD WOD 26.2 + Running',  carga: 'high', contenido: 't-c2s1mar-content' },
            { id: 'c2s1mie', label: 'Miércoles 12/8',sub: 'Squat Clean EMOM + Deadlift Cluster + ATD WOD 26.3 + Strongman',                 carga: 'high', contenido: 't-c2s1mie-content' },
            { id: 'c2s1jue', label: 'Jueves 13/8',   sub: 'Zona 2 · 45-50 min',                                                             carga: 'med',  contenido: 't-c2s1jue-content' },
            { id: 'c2s1vie', label: 'Viernes 14/8',  sub: 'Snatch Complex EMOM + Front Squat Cluster + 2 Metcons + Gimn',                  carga: 'high', contenido: 't-c2s1vie-content' },
            { id: 'c2s1sab', label: 'Sábado 15/8',   sub: 'Bench Press + OHS Cluster + Metcon Competitivo 3 Eventos',                        carga: 'high', contenido: 't-c2s1sab-content' },
          ]
        },
        { id: 'c2s2', label: 'Semana 2', sub: 'S2', rango: '17 – 22 Agosto',
          dias: [
            { id: 'c2s2lun', label: 'Lunes 17/8',   sub: 'Snatch Complex EMOM + Back Squat Cluster S2 + Metcon Ventanas + Accesorios',  carga: 'high', contenido: 't-c2s2lun-content' },
            { id: 'c2s2mar', label: 'Martes 18/8',    sub: 'Jerk Complex EMOM + Strict Press Cluster S2 + HSW Fatiga + Running 5x800m',  carga: 'high', contenido: 't-c2s2mar-content' },
            { id: 'c2s2mie', label: 'Miércoles 19/8', sub: 'Clean+FS Complex EMOM + Deadlift Cluster S2 + Metcon TC13 + Strongman',          carga: 'high', contenido: 't-c2s2mie-content' },
            { id: 'c2s2jue', label: 'Jueves 20/8',    sub: 'Zona 2 · 5km Run',                                                               carga: 'med',  contenido: 't-c2s2jue-content' },
            { id: 'c2s2vie', label: 'Viernes 21/8',   sub: 'HPC+HSC+PJ Complex EMOM + Front Squat Cluster S2 + HSW Metcon + Gimn',           carga: 'high', contenido: 't-c2s2vie-content' },
            { id: 'c2s2sab', label: 'Sábado 22/8',    sub: 'Bench Press + OHS Cluster S2 + Gimn bajo Fatiga + Simulación Competencia',        carga: 'high', contenido: 't-c2s2sab-content' },
          ]
        },
        { id: 'c2s3', label: 'Semana 3', sub: 'S3', rango: '24 – 29 Agosto',
          dias: [
            { id: 'c2s3lun', label: 'Lunes 24/8', sub: 'Snatch Complex EMOM + Back Squat Cluster S3 + Tracción + Row+Cleans + AMRAP', carga: 'high', contenido: 't-c2s3lun-content' },
            { id: 'c2s3mar', label: 'Martes 25/8', sub: 'Jerk Complex EMOM + Strict Press Cluster S3 + HSW + Wall Walks + 300m/150m Sprints', carga: 'high', contenido: 't-c2s3mar-content' },
            { id: 'c2s3mie', label: 'Miércoles 26/8', sub: 'Clean Complex EMOM + Deadlift Cluster S3 + WB Metcon TC20 + Rope Climb/Ring MU + Sled', carga: 'high', contenido: 't-c2s3mie-content' },
            { id: 'c2s3jue', label: 'Jueves 27/8', sub: 'Zona 2 · 5-6km Run / 40 min Trote Suave', carga: 'off', contenido: 't-c2s3jue-content' },
            { id: 'c2s3vie', label: 'Viernes 28/8', sub: 'Clean Complex EMOM + Front Squat Cluster S3 + Open ATD 26.1 + Pistols EMOM', carga: 'high', contenido: 't-c2s3vie-content' },
            { id: 'c2s3sab', label: 'Sábado 29/8', sub: 'Bench Press + OHS Cluster S3 + 2T MASH 3 Eventos', carga: 'high', contenido: 't-c2s3sab-content' },
          ]
        },
        { id: 'c2s4', label: 'Semana 4', sub: 'S4', rango: '31 Ago – 5 Sep',
          dias: [
            { id: 'c2s4lun', label: 'Lunes 31/8', sub: 'Track A: Descarga · Track B: Peaking · Snatch + Back Squat + Metcon', carga: 'high', contenido: 't-c2s4lun-content' },
            { id: 'c2s4mar', label: 'Martes 1/9', sub: 'Track A: Descarga · Track B: Peaking · Jerk + Strict Press + Aeróbico', carga: 'high-med', contenido: 't-c2s4mar-content' },
            { id: 'c2s4mie', label: 'Miércoles 2/9', sub: 'Track A: Descarga · Track B: Peaking · Squat Clean + Deadlift + Metcon', carga: 'high', contenido: 't-c2s4mie-content' },
            { id: 'c2s4jue', label: 'Jueves 3/9', sub: 'Track A: Zona 2 Regenerativo · Track B: Descanso Total + Visualización', carga: 'off', contenido: 't-c2s4jue-content' },
            { id: 'c2s4vie', label: 'Viernes 4/9', sub: 'Descarga · HPS Complex @65% + Front Squat @60% + Gimnástica + AMRAP 10', carga: 'med', contenido: 't-c2s4vie-content' },
            { id: 'c2s4sab', label: 'Sábado 5/9', sub: 'Capacidad de Trabajo · 3 AMRAPs + 4 Ergs · Row/AB + OHS+MU / BJO+Snatch / TTB+WB+DU', carga: 'high', contenido: 't-c2s4sab-content' },
          ]
        }
      ]
    },
    { id: 'c3', label: 'Ciclo 3', sub: 'S1 · S2 · S3 · S4 · S5 · S6 · S7',
      semanas: [
        { id: 'c3s1', label: 'Semana 1', sub: 'S1', rango: '7 – 12 Sep',
          dias: [
            { id: 'c3s1lun', label: 'Lunes 7/9', sub: 'Snatch Bloques EMOM + Back Squat Waves S1 + Test Tracción + 21-15-9 + Strongman', carga: 'high', contenido: 't-c3s1lun-content' },
            { id: 'c3s1mar', label: 'Martes 8/9', sub: 'Push Jerk Cycling + Strict Press Waves S1 + Test Dips + Capacidad de Trabajo', carga: 'high', contenido: 't-c3s1mar-content' },
            { id: 'c3s1mie', label: 'Miércoles 9/9', sub: 'Squat Clean Bloques EMOM + Deadlift Waves S1 + Test TTB + For Time Cleans/TTB/RC', carga: 'high', contenido: 't-c3s1mie-content' },
            { id: 'c3s1jue', label: 'Jueves 10/9', sub: 'Fartlek Running · 200m Sprint / Fartlek / 200m Sprint · 35 min continuos', carga: 'med', contenido: 't-c3s1jue-content' },
            { id: 'c3s1vie', label: 'Viernes 11/9', sub: 'Snatch Cycling + Front Squat Waves S1 + Test HSPU + Capacidad Trabajo + Strongman', carga: 'high', contenido: 't-c3s1vie-content' },
            { id: 'c3s1sab', label: 'Sábado 12/9', sub: 'Thruster Cycling + Bench Press Waves S1 + Metcon Individual/Dupla/Cuarteto', carga: 'high', contenido: 't-c3s1sab-content' },
          ]
        },
        {
          id: 'c3s2', label: 'Semana 2', sub: 'S2', rango: '14 – 19 Sep',
          dias: [
            { id: 'c3s2lun', label: 'Lunes 14/9', sub: 'Snatch Hang Blocks EMOM + Back Squat Waves S2 + Tracción + Metcon 3 Scores + Strongman', carga: 'high', contenido: 't-c3s2lun-content' },
            { id: 'c3s2mar', label: 'Martes 15/9', sub: 'Push Jerk BB Cycling + Push Press Waves S2 + Ring Dips Clusters + Capacidad de Trabajo + Accesorios', carga: 'high', contenido: 't-c3s2mar-content' },
            { id: 'c3s2mie', label: 'Miércoles 16/9', sub: 'Squat Clean EMOM + Deadlift Waves S2 + T2B Clusters + AMRAPs con Chaleco + Strongman', carga: 'high', contenido: 't-c3s2mie-content' },
            { id: 'c3s2jue', label: 'Jueves 17/9', sub: 'Zona 2 Regenerativa · 45–50 min Trote / Bike / Row', carga: 'low', contenido: 't-c3s2jue-content' },
            { id: 'c3s2vie', label: 'Viernes 18/9', sub: 'Snatch Cycling + Front Squat Waves S2 + HSPU Clusters + Capacidad de Trabajo + Strongman', carga: 'high', contenido: 't-c3s2vie-content' },
            { id: 'c3s2sab', label: 'Sábado 19/9', sub: 'Thruster Cycling + Bench Press Waves S2 + Competición Individual / Dupla / Trio / Cuarteto', carga: 'high', contenido: 't-c3s2sab-content' },
          ]
        },
        {
          id: 'c3s3', label: 'Semana 3', sub: 'S3', rango: '21 – 27 Sep',
          dias: [
            { id: 'c3s3lun', label: 'Lunes 21/9', sub: 'Squat Snatch EMOM + Back Squat Waves S3 + Pull-up Clusters + Metcon Indy/Dupla/Cuarteto + Strongman', carga: 'high', contenido: 't-c3s3lun-content' },
            { id: 'c3s3mar', label: 'Martes 22/9', sub: 'Push Jerk Cycling + Push Press Waves S3 + Ring Dips Clusters + Fartlek Invertido', carga: 'high', contenido: 't-c3s3mar-content' },
            { id: 'c3s3mie', label: 'Miércoles 23/9', sub: 'Squat Clean EMOM + Deadlift Waves S3 + T2B Clusters + Capacidad + Legless + Strongman', carga: 'high', contenido: 't-c3s3mie-content' },
            { id: 'c3s3jue', label: 'Jueves 24/9', sub: 'Descanso Activo · Zona 2 · 45–50 min', carga: 'low', contenido: 't-c3s3jue-content' },
            { id: 'c3s3vie', label: 'Viernes 25/9', sub: 'Snatch Cycling + Front Squat Waves S3 + HSPU + AMRAPs con Chaleco + Strongman', carga: 'high', contenido: 't-c3s3vie-content' },
            { id: 'c3s3sab', label: 'Sábado 26/9', sub: 'Thruster Cycling + Bench Press Waves S3 + Competición Individual / Dupla / Cuarteto', carga: 'high', contenido: 't-c3s3sab-content' },
          ]
        },
        {
          id: 'c3s4', label: 'Semana 4', sub: 'S4 · Descarga', rango: '28 Sep – 4 Oct',
          dias: [
            { id: 'c3s4lun', label: 'Lunes 28/9', sub: 'Snatch Complex Descarga + Back Squat Descarga + Pull-up Max + Metcon RPE 7', carga: 'medium', contenido: 't-c3s4lun-content' },
            { id: 'c3s4mar', label: 'Martes 29/9', sub: 'Split Jerk con pausas + Push Press Descarga + Ring Dips Max + Fartlek Sprint-a-Tempo', carga: 'medium', contenido: 't-c3s4mar-content' },
            { id: 'c3s4mie', label: 'Miércoles 30/9', sub: 'Clean Complex Descarga + Deadlift Descarga + T2B/HSW Max + Metcon 5 Rondas', carga: 'medium', contenido: 't-c3s4mie-content' },
            { id: 'c3s4jue', label: 'Jueves 1/10', sub: 'Descanso Activo Opcional · Zona 2 · 40–50 min', carga: 'low', contenido: 't-c3s4jue-content' },
            { id: 'c3s4vie', label: 'Viernes 2/10', sub: 'Snatch Pull + Squat Snatch Descarga + Front Squat Descarga + HSPU Max + Metcon For Time', carga: 'medium', contenido: 't-c3s4vie-content' },
            { id: 'c3s4sab', label: 'Sábado 3/10', sub: 'Competición Individual / Dupla / Cuarteto · HSPU + T2B + DU + Worm', carga: 'high', contenido: 't-c3s4sab-content' },
          ]
        },
        {
          id: 'c3s5', label: 'Semana 9', rango: '5 – 11 Octubre · Competencia',
          dias: [
            { id: 'c3s5lun', label: 'Lunes 5/10', sub: 'EMOM 20 Snatch + Back Squat 6RM + 2 Metcons', carga: 'high', contenido: 't-c3s5lun-content' },
            { id: 'c3s5mar', label: 'Martes 6/10', sub: 'Push Press Olas + Capacidad Aeróbica en 3 bloques', carga: 'high', contenido: 't-c3s5mar-content' },
            { id: 'c3s5mie', label: 'Miércoles 7/10', sub: 'Fuerza Mixta + Habilidad Gimnástica + Metcon 2 Rondas', carga: 'high', contenido: 't-c3s5mie-content' },
            { id: 'c3s5jue', label: 'Jueves 8/10', sub: 'Descanso Activo · Zona 2 · 45–50 min', carga: 'medium', contenido: 't-c3s5jue-content' },
            { id: 'c3s5vie', label: 'Viernes 9/10', sub: 'EMOM 20 Clean + Back Squat 4x6 + Acond. Mixto + Metcon 5 Rondas', carga: 'high', contenido: 't-c3s5vie-content' },
          ]
        },
        {
          id: 'c3s6', label: 'Semana 10', rango: '12 – 18 Octubre · Rapthor / Tapering',
          dias: [
            { id: 'c3s6lun', label: 'Lunes 13/10', sub: 'EMOM 20 Snatch + Front Squat 6RM + WOD 1 Freedom / Rapthor', carga: 'high', contenido: 't-c3s6lun-content' },
            { id: 'c3s6mar', label: 'Martes 14/10', sub: 'Push Press Olas + Test Aeróbico + WOD 3 Freedom / WOD 2 Rapthor', carga: 'high', contenido: 't-c3s6mar-content' },
            { id: 'c3s6mie', label: 'Miércoles 15/10', sub: 'Fuerza Mixta + Habilidad Gimnástica + Open 27.2 / Último evento Rapthor', carga: 'high', contenido: 't-c3s6mie-content' },
            { id: 'c3s6jue', label: 'Jueves 16/10', sub: 'Descanso Activo / Descanso total si competís', carga: 'medium', contenido: 't-c3s6jue-content' },
            { id: 'c3s6vie', label: 'Viernes 17/10', sub: 'EMOM 20 + Front Squat 4x6 + HSPU Déficit / Activación pre-compe', carga: 'high', contenido: 't-c3s6vie-content' },
          ]
        },
        {
          id: 'c3s7', label: 'Semana 11', rango: '19 – 25 Octubre',
          dias: [
            { id: 'c3s7lun', label: 'Lunes 19/10', sub: 'Snatch Complex pesado + Back Squat 80% + Strongman + Acondicionamiento', carga: 'high', contenido: 't-c3s7lun-content' },
            { id: 'c3s7mar', label: 'Martes 20/10', sub: 'Acondicionamiento Gimnástico (4 bloques) + Estructura + AMRAP 30', carga: 'high', contenido: 't-c3s7mar-content' },
            { id: 'c3s7mie', label: 'Miércoles 21/10', sub: 'Potencia + Deadlift 4 pesadas + Yoke + Capacidad de Trabajo', carga: 'high', contenido: 't-c3s7mie-content' },
            { id: 'c3s7jue', label: 'Jueves 22/10', sub: 'Descanso Activo · Zona 2 · 45–50 min', carga: 'low', contenido: 't-c3s7jue-content' },
            { id: 'c3s7vie', label: 'Viernes 23/10', sub: 'Potencia + Squat Clean Complex + Front Squat 4×6-8 + Open Alaska 27.1 + Capacidad Aeróbica', carga: 'high', contenido: 't-c3s7vie-content' },
            { id: 'c3s7sab', label: 'Sábado 24/10', sub: 'Acondicionamiento Gimnástico (2 bloques) + Open Alaska 27.2', carga: 'high', contenido: 't-c3s7sab-content' },
          ]
        }
      ]
    }
  ]
};

const ultimoCiclo = PLAN2T.ciclos[PLAN2T.ciclos.length - 1];
let activeMes = ultimoCiclo.id;
let activeSem = ultimoCiclo.semanas[ultimoCiclo.semanas.length - 1].id;
let activeDay = null;

function renderMeses() {
  const list = document.getElementById('bwp-mes-list');
  const cicloActivo = PLAN2T.ciclos.find(c => c.id === activeMes);
  list.innerHTML = `
    <div class="ciclo-dropdown" id="ciclo-dropdown">
      <button class="ciclo-dropdown-btn" id="ciclo-dropdown-btn" onclick="toggleCicloDropdown(event)">
        <div class="day-dot" style="background:var(--blue); flex-shrink:0;"></div>
        <div class="day-btn-info">
          <div class="day-btn-name">${cicloActivo ? cicloActivo.label : '—'}</div>
          <div class="day-btn-sub">${cicloActivo ? cicloActivo.sub : ''}</div>
        </div>
        <span class="ciclo-chevron">▼</span>
      </button>
      <div class="ciclo-dropdown-panel" id="ciclo-dropdown-panel">
        ${PLAN2T.ciclos.map(ciclo => `
          <button class="ciclo-option ${ciclo.id === activeMes ? 'active' : ''}"
            onclick="selectCiclo('${ciclo.id}', event)">
            <div class="day-dot" style="background:var(--blue); flex-shrink:0;"></div>
            <div class="day-btn-info">
              <div class="day-btn-name">${ciclo.label}</div>
              <div class="day-btn-sub">${ciclo.sub}</div>
            </div>
          </button>`).join('')}
      </div>
    </div>`;
}

function toggleCicloDropdown(e) {
  if (e) e.stopPropagation();
  const btn = document.getElementById('ciclo-dropdown-btn');
  const panel = document.getElementById('ciclo-dropdown-panel');
  if (!btn || !panel) return;
  const isOpen = panel.classList.contains('open');
  btn.classList.toggle('open', !isOpen);
  panel.classList.toggle('open', !isOpen);
}

function selectCiclo(id, e) {
  if (e) e.stopPropagation();
  activeMes = id;
  const ciclo = PLAN2T.ciclos.find(c => c.id === id);
  activeSem = ciclo.semanas[0].id;
  activeDay = null;
  const btn = document.getElementById('ciclo-dropdown-btn');
  const panel = document.getElementById('ciclo-dropdown-panel');
  if (btn) btn.classList.remove('open');
  if (panel) panel.classList.remove('open');
  render();
}

document.addEventListener('click', function() {
  const btn = document.getElementById('ciclo-dropdown-btn');
  const panel = document.getElementById('ciclo-dropdown-panel');
  if (btn) btn.classList.remove('open');
  if (panel) panel.classList.remove('open');
});

function renderContent() {
  const mes = PLAN2T.ciclos.find(m => m.id === activeMes);
  if (!mes) return;

  const semHeader = document.getElementById('bwp-sem-header');
  semHeader.style.display = 'block';

  const semBtns = document.getElementById('bwp-sem-btns');
  semBtns.innerHTML = '';
  mes.semanas.forEach(sem => {
    const btn = document.createElement('button');
    btn.className = 'bwp-sem-btn' + (sem.vacia ? ' bwp-sem-empty' : '') + (activeSem === sem.id ? ' bwp-sem-active' : '');
    btn.textContent = `${sem.label} · ${sem.rango}`;
    if (!sem.vacia) {
      btn.onclick = () => { activeSem = sem.id; activeDay = null; render(); };
    }
    semBtns.appendChild(btn);
  });

  const sem = mes.semanas.find(s => s.id === activeSem);
  const dayBtns = document.getElementById('bwp-day-btns');
  const placeholder = document.getElementById('bwp-day-placeholder');
  const dayContent = document.getElementById('bwp-day-content');
  dayBtns.innerHTML = '';
  dayContent.innerHTML = '';

  if (!sem || sem.vacia) {
    placeholder.style.display = 'block';
    placeholder.innerHTML = 'El contenido se agregará cuando esté disponible.';
    return;
  }

  sem.dias.forEach(dia => {
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (activeDay === dia.id ? ' bwp-day-active' : '');
    const pips = dia.carga === 'high'
      ? '<div class="pip on-high"></div><div class="pip on-high"></div><div class="pip on-high"></div>'
      : dia.carga === 'high-med'
      ? '<div class="pip on-high"></div><div class="pip on-high"></div><div class="pip on-med"></div>'
      : dia.carga === 'off'
      ? '<div class="pip"></div><div class="pip"></div><div class="pip"></div>'
      : '<div class="pip on-med"></div><div class="pip on-med"></div><div class="pip on-med"></div>';
    btn.innerHTML = `
      <div class="day-dot" style="background:var(--blue);"></div>
      <div class="day-btn-info">
        <div class="day-btn-name">${dia.label}</div>
        <div class="day-btn-sub">${dia.sub}</div>
      </div>
      <div class="load-pips">${pips}</div>`;
    btn.onclick = () => { activeDay = dia.id; render(); };
    dayBtns.appendChild(btn);
  });

  if (!activeDay) {
    placeholder.style.display = 'block';
    placeholder.innerHTML = 'Seleccioná un día para ver la planificación';
    return;
  }

  placeholder.style.display = 'none';
  const dia = sem.dias.find(d => d.id === activeDay);
  if (dia) {
    const tpl = document.getElementById(dia.contenido);
    if (tpl) {
      dayContent.innerHTML = tpl.innerHTML;
      initRMCalculators(dayContent);
    }
  }
}

function initRMCalculators(container) {
  const wraps = container.querySelectorAll('.complex-wrap');
  wraps.forEach(wrap => {
    const items = wrap.querySelectorAll('.c-item-reps');
    let hasPct = false;
    items.forEach(el => { if (/\d+([.,]\d+)?%/.test(el.textContent)) hasPct = true; });
    if (!hasPct) return;

    items.forEach(el => { if (!el.dataset.orig) el.dataset.orig = el.textContent; });

    const block = wrap.closest('details');
    const titleEl = block ? block.querySelector('.block-title') : null;
    const title = titleEl ? titleEl.textContent.trim() : 'RM';
    const key = 'rm_2t_' + title.replace(/\s+/g, '_');

    const bar = document.createElement('div');
    bar.className = 'rm-bar';
    bar.innerHTML = `<label>RM (kg)</label><input type="number" step="0.5" min="0" placeholder="0" class="rm-input"><button type="button" class="rm-clear">borrar</button>`;
    wrap.parentElement.insertBefore(bar, wrap);

    const input = bar.querySelector('.rm-input');
    const clearBtn = bar.querySelector('.rm-clear');

    const saved = localStorage.getItem(key);
    if (saved) { input.value = saved; applyRM(items, saved); }

    input.addEventListener('input', () => {
      if (input.value) localStorage.setItem(key, input.value); else localStorage.removeItem(key);
      applyRM(items, input.value);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      localStorage.removeItem(key);
      applyRM(items, '');
    });
  });
}

function applyRM(items, rmStr) {
  const rm = parseFloat(rmStr);
  items.forEach(el => {
    const orig = el.dataset.orig;
    if (!rm || rm <= 0) { el.innerHTML = orig; return; }
    el.innerHTML = orig.replace(/(\d+(?:[.,]\d+)?)%/g, (m, pctStr) => {
      const pct = parseFloat(pctStr.replace(',', '.'));
      const kg = Math.round((rm * pct / 100) * 2) / 2;
      return `${m} <span class="c-item-kg">(${kg}kg)</span>`;
    });
  });
}

function render() {
  renderMeses();
  renderContent();
}

window.addEventListener('DOMContentLoaded', () => { render(); });
