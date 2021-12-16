
export class Category {
  
  constructor(
    public categoryId: number,
    public categoryTitle: string,
    public imageUrl: string,
    public parentCategory: Category) {
    
  }
  
  
  
}







