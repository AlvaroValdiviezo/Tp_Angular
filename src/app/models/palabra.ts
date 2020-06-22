export class Palabra {
    id: number;
    img: string;
    esp: string;
    ing: string;

    Palabra (id: number, img?: string, esp?: string, ing?: string) {
        this.id = id;
        this.img = img;
        this.esp = esp;
        this.ing = ing;
    }
}
