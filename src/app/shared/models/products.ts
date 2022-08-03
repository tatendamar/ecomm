export interface ProductRootObject {
    content:          Content[];
    first:            boolean;
    last:             boolean;
    number:           number;
    numberOfElements: number;
    pageable:         Pageable;
    size:             number;
    sort:             Sort;
    totalElements:    number;
    totalPages:       number;
   }
   
   export interface Content {
    category:    Category;
    code:        null;
    description: string;
    id:          string;
    image:       Image;
    name:        string;
    prices:      Price[];
    youtube:     null | string;
   }
   
   export interface Category {
    description: Description;
    id:          ID;
    image:       Image;
    name:        Name;
   }
   
   export enum Description {
    PFloorCareProductsP = "<p>Floor Care products</p>\n",
   }
   
   export enum ID {
    The59E3562D8Bee14115Effd4Da = "59e3562d8bee14115effd4da",
   }
   
   export interface Image {
    content:     null;
    contentType: ContentType | null;
    id:          null | string;
    name:        null | string;
   }
   
   export enum ContentType {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
   }
   
   export enum Name {
    FloorCare = "Floor Care",
   }
   
   export interface Price {
    cost:    number;
    image:   Image;
    retail:  number;
    size:    string;
    special: number;
   }
   
   export interface Pageable {
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    sort:       Sort;
    unpaged:    boolean;
   }
   
   export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
   }
   