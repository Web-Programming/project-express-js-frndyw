const { default: mongoose } = require ("mongoose");

//buat skema produk
const procudtschema = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat ototmatis
    //dengan nama_id
    nama: {
        type : string,
        required: [true,"nama produk harus diisi"],
        trim: true, //menghilangkan spasi di awal dan akhir
    },
    price:{
        type : Number,
        required : [true, "Harga prroduk harus diisi"],
        min : [1000, "Harga produk minimal 1000"], //nilai minimum
    
    }
})
