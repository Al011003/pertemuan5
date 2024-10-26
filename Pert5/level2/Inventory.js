import Item from '/item.js'; // Memastikan Item sudah diimport, sesuai modul yang diberikan

class Inventory {
  constructor() {
    this.items = []; // Menyimpan daftar barang dalam bentuk array
  }

  // Method untuk menambahkan barang ke dalam inventaris
  addItem(item) {
    this.items.push(item);
  }

  // Method untuk menghapus barang berdasarkan id
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Method untuk menampilkan daftar barang dalam inventaris
  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;

