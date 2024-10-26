class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method untuk memperbarui detail barang
    updateDetails(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method untuk menampilkan detail barang
    displayDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
  }
  
  // Jangan hapus kode di bawah ini!
  export default Item;
  