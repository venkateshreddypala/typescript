/**
 *  Implementing Dynamic Array using TypeScript
 */
interface IntArray{
  arr: number[];
  len: number;
  capacity: number;

  size(): number;
  isEmpty(): boolean;
  get(index: number): number;
  set(index: number, elem: number): void;
  add(elem: number): void;
  removeAt(index: number): void;
  remove(elem: number): boolean;
  reverse(): void;
  binarySearch(key: number): number;
  sort(): void;
}

class DynamicArray implements IntArray {
  arr: number[];
  len: number;
  capacity: number;

  constructor(capacity: number = 16){
    if (capacity< 0){
      throw new Error("Illegal Capacity: "+ capacity);
    }
    this.capacity = capacity;
    this.len = 0;
    this.arr = new Array(this.capacity);
  }

  size(): number{
    return this.len;
  }

  isEmpty(): boolean{
    return this.len === 0;
  }

  get(index: number): number{
    return this.arr[index];
  }

  set(index: number, elem: number): void{
    this.arr[index] = elem;
  }

  add(elem: number): void {
    if (this.len + 1 >= this.capacity){
      if (this.capacity === 0 ){
        this.capacity = 1;
      } else {
        this.capacity *= 2;
      }
      this.arr = this.arr.concat(new Array(this.capacity - this.len));
    }
    this.arr[this.len++] = elem;
  }
  removeAt(index: number): void{
    this.arr.splice(index,1);
    this.len--;
    this.capacity--;
  }

  remove(elem: number): boolean{
    const index = this. arr.indexOf(elem);
    if (index !==-1){
      this.removeAt(index);
      return true;
    }
    return false;
  }

  reverse(): void {
    for (let i =0; i< Math.floor(this.len/2); i++){
      const temp = this.arr[i];
      this.arr[i] = this.arr[this.len -i -1];
      this.arr[this.len -i -1] = temp; 
    }
  }

  binarySearch(key: number): number{
    return this.arr.indexOf(key);
  }

  sort(): void {
    this.arr.sort((a,b) => a -b);
  }


}
  