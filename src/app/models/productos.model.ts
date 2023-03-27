export interface IProducto {
    id:number,
    listaUsos:string[],
    titleMasInfo:string,
    txtMasInfo:string,
    img:string,
    enum:Productos
}

export enum Productos{
    PolvoAbc,
    Carbono,
    Haloclean,
    Acetato,
    Potasio,
    Agua,
    EspumaQuimica,
    KitSeguridad,
    ArticulosSeguridad,
    CartelSeguridad,
    Fundas,
    Gabinetes,
    Nichos,
    ElementosContraIncendios,
    Sifones

}