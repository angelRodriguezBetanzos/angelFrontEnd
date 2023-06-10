export interface Data {
    host: Host[];
}

export interface Host {
    id:                    number;
    nombre:                string;
    email:                 null | string;
    pagina_web:            null | string;
    telefono:              string;
    imagen:                null | string;
    rfc:                   string;
    razon_social:          RazonSocial;
    observaciones:         null | string;
    estado_id:             number;
    municipio_id:          number;
    codigo_postal_id:      number;
    asentamiento_id:       number;
    direccion:             string;
    numero_interior:       null;
    numero_exterior:       null | string;
    longitud:              null | string;
    altitud:               null | string;
    estatus_registro:      number;
    calificacion:          number;
    publico:               number;
    public_in_customer:    number;
    codigo_front2go:       null | string;
    created_at:            Date;
    updated_at:            Date;
    description:           string;
    facebook:              null | string;
    instagram:             null | string;
    city:                  null;
    establishment_id:      number | null;
    host_group_id:         number | null;
    number_of_rooms:       number;
    distanceToAirport:     null | string;
    minutestoAirport:      number | null;
    locationDescription:   null | string;
    commission_percentage: null;
    type_operation:        number | null;
    credit_account:        null | string;
    charge_account:        null | string;
    currency:              Currency | null;
    holder:                null | string;
    bank_number:           null | string;
    payment_detail:        null | string;
    reference_cie:         null | string;
    zoho_vendor_id:        number | null;
    zoho_sede:             null | string;
    amenidades:            Amenidade[];
    imagenes:              Imagene[];
    habitaciones:          Habitacione[];
}

export interface Amenidade {
    id:            number;
    nombre:        AmenidadeNombre;
    descripcion:   AmenidadeDescripcion;
    icon?:         Icon;
    es_activo:     string;
    created_at:    Date;
    updated_at:    Date;
    pivot?:        Pivot;
    codigo?:       Codigo;
    max_personas?: string;
}

export enum Codigo {
    Q = "Q",
    Qq = "QQ",
}

export enum AmenidadeDescripcion {
    DoYourLaundryÁreaDeLavadoYPlanchado247 = "Do your Laundry (Área de lavado y planchado 24/7)",
    EstacionamientoGratis = "Estacionamiento gratis",
    FitRoomGimnasio24Horas = "Fit Room (Gimnasio 24 horas)",
    HabitaciónDesdeUnaA4Personas = "Habitación desde una a 4 personas",
    HabitaciónDesdeUnaADOSPersonas = "Habitación desde una a dos personas",
    PiscinaDe9AMA8PM = "Piscina de 9 a.m. a 8 p.m.",
}

export enum Icon {
    FasFaCar = "fas fa-car",
    FasFaDumbbell = "fas fa-dumbbell",
    FasFaSwimmingPool = "fas fa-swimming-pool",
    FasFaTshirt = "fas fa-tshirt",
}

export enum AmenidadeNombre {
    AreaDeLavadoYPlanchado = "Area de lavado y planchado",
    Doble = "Doble",
    Estacionamiento = "Estacionamiento",
    FitRoom = "Fit Room",
    Piscina = "Piscina",
    Sencilla = "Sencilla",
}

export interface Pivot {
    host_id:     number;
    amenidad_id: number;
}

export enum Currency {
    Mxp = "MXP",
}

export interface Habitacione {
    id:                     number;
    nombre:                 HabitacioneNombre;
    descripcion:            HabitacioneDescripcion;
    valor_token:            number | null;
    noche_gratis:           number | null;
    cantidad:               number;
    precio_registro:        number;
    precio:                 number | null;
    es_activo:              string;
    codigo:                 string;
    host_id:                number;
    tipo_habitacion_id:     number;
    created_at:             Date;
    updated_at:             Date;
    type_of_view:           TypeOfView | null;
    number_rooms_agreement: number;
    rate_ROCPAR:            null | string;
    rate_cenctauro:         null | string;
    special_price:          number | null;
    special_cost:           null | string;
    imagenes:               Imagene[];
    tipo_habitacion:        Amenidade;
    roombeds:               any[];
}

export enum HabitacioneDescripcion {
    HabitacionDobleParaUnaOCuatroPersonas = "Habitacion Doble para una o cuatro personas",
    HabitacionSencillaParaUnaODOSPersonas = "Habitacion Sencilla para una o dos personas",
    Rggrgr = "rggrgr",
    The1CamaQueen = "1 Cama Queen",
    The2CamasMatrimoniales = "2 camas matrimoniales",
    The2CamasQueenSize = "2 Camas Queen size",
}

export interface Imagene {
    id:                  number;
    path:                string;
    nombre:              null | string;
    created_at:          Date;
    updated_at:          Date;
    habitacion_id:       number | null;
    categoria_imagen_id: number;
    host_id:             number;
    amenidad_id:         null;
    position:            null;
    cover_page:          null;
}

export enum HabitacioneNombre {
    Doble = "Doble",
    NombreDOBLE = "DOBLE",
    NombreSENCILLA = "SENCILLA",
    Sencilla = "Sencilla",
}

export enum TypeOfView {
    ALaCiudad = "A la ciudad",
    RF = "rf",
}

export enum RazonSocial {
    Cangooroo = "Cangooroo",
    Empty = "",
    EstanciasExtendidasSADeCV = "Estancias Extendidas SA de CV",
    ExtendedSuitesMty = "EXTENDED SUITES MTY",
    PALACIOSADeCV = "PALACIO S.A de C.V.",
    PruebaSADeCV = "Prueba S.A de C.V.",
    ServiciosCentralesDeCobranzaHoteleraSaDeCv = "SERVICIOS CENTRALES DE COBRANZA HOTELERA SA DE CV",
}
