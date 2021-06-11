var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url,
    {useUnifiedTopology: true, useNewUrlParser: true }
    , function(err, db) {
  if (err) throw err;
  var dbo=db.db('project');

  dbo.collection("items").insertMany(
    [
      {
        "gender": "man",
        "id": 1,
        "link": {
          "link1": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/160be65a2069403f9df9a8270018e424_9366/NMD_R1_Shoes_Black_B79758_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0772839446194dc29ddfa8270018fd36_9366/NMD_R1_Shoes_Black_B79758_02_standard.jpg",
          "link3": "https://drive.google.com/file/d/1ZN8N2kpJwX01igL6wJ7Ui6k7CBt5dYQx/view?usp=sharing",
          "link4": "https://drive.google.com/file/d/1em4eElEAXfHiw5RSY1PyD7uitxP81Svc/view"
        },
        "name": "NMD_R1 SHOES",
        "price": 140,
        "type": "addidas"
      },
      {
        "gender": "kid",
        "id": 10,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1d26d9ab2d5947528ce0ac4d01271989_9366/adidas_x_LEGO(r)_Sport_Shoes_Blue_FX2864_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/6f9fd117ca174fa496b4ac4d01272681_9366/adidas_x_LEGO(r)_Sport_Shoes_Blue_FX2864_02_standard.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/443f44c5cdfc413ab35fac4d012732ee_9366/adidas_x_LEGO(r)_Sport_Shoes_Blue_FX2864_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/a4bbf885ed734fc4b100ac4d0127398f_9366/adidas_x_LEGO(r)_Sport_Shoes_Blue_FX2864_05_standard.jpg"
        },
        "name": "ADIDAS X LEGO",
        "price": 500,
        "type": "addidas"
      },
      {
        "gender": "man",
        "id": 11,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/50cbf7c9-2a4a-41e5-a2ef-4b3acd7fa664/air-max-97-shoe-z3TlrlVN.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ysspiqafs0e3rpyeqpfm/air-max-97-shoe-z3TlrlVN.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bqbsybmdyxbet2blc7fo/air-max-97-shoe-z3TlrlVN.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/n3hfzt89anzujlouyrzy/air-max-97-shoe-z3TlrlVN.jpg"
        },
        "name": "Nike Air Max97",
        "price": 1350,
        "type": "nike"
      },
      {
        "gender": "man",
        "id": 12,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/70d963b8-3b60-4235-a590-3dae198d5414/dbreak-type-shoe-62LTHd.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8b4122ea-57dd-4986-b15f-6502ded3d57d/dbreak-type-shoe-62LTHd.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9f428d2-5521-48d6-9537-e32cd97beadc/dbreak-type-shoe-62LTHd.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/41914589-3054-4fff-81d5-f8067b0819ea/dbreak-type-shoe-62LTHd.jpg"
        },
        "name": "Nike DBreak",
        "price": 475,
        "type": "nike"
      },
      {
        "gender": "man",
        "id": 13,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4f1d5560-ebcd-4292-acfd-5dc45ed64274/air-max-zm950-shoe-LlVZJ1.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0294cc3b-bb97-4753-b8bf-0d949925aad0/air-max-zm950-shoe-LlVZJ1.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7ac39194-5c71-4130-95c3-2aa258f3536b/air-max-zm950-shoe-LlVZJ1.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c5eaf606-e032-4484-ab87-72d72f8b92d6/air-max-zm950-shoe-LlVZJ1.jpg"
        },
        "name": "Nike Air Max ZM950",
        "price": 1050,
        "type": "nike"
      },
      {
        "gender": "woman",
        "id": 14,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/87fdd2b7-c799-419c-85a7-8a0d3658e5de/zoom-span-3-running-shoe-80xjC8.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f1f32350-3587-41a0-abe7-25dceaa6dc40/zoom-span-3-running-shoe-80xjC8.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/791a503f-8607-470b-bd69-dc922ad5b05b/zoom-span-3-running-shoe-80xjC8.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/01c4e1ae-9b20-4991-a1ce-ead3a5c4ea68/zoom-span-3-running-shoe-80xjC8.jpg"
        },
        "name": "Nike Zoom Span 3",
        "price": 630,
        "type": "nike"
      },
      {
        "gender": "woman",
        "id": 15,
        "link": {
          "ink4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gilrmuybn2c8jrf1oalm/air-force-1-sage-low-shoe-cSgsrx.jpg",
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wnnuuo5cblkptlfbxmk0/air-force-1-sage-low-shoe-cSgsrx.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xkyvfhfttlgjlqijsttk/air-force-1-sage-low-shoe-cSgsrx.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/r1hnnulgdnxyiq35qjsb/air-force-1-sage-low-shoe-cSgsrx.jpg"
        },
        "name": "Nike Air Force Sage",
        "price": 820,
        "type": "nike"
      },
      {
        "gender": "woman",
        "id": 16,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c5ed1cfc-48cd-495d-9e88-343cd59182fd/react-vision-shoe-6fCqvL.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a4231f4e-129a-4b24-b237-7143d394f638/react-vision-shoe-6fCqvL.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/009fcd39-7340-49a1-a838-7ef272a59728/react-vision-shoe-6fCqvL.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52d49119-6095-428e-9885-10ea3d4cc1e4/react-vision-shoe-6fCqvL.jpg"
        },
        "name": "Nike React Vision",
        "price": 980,
        "type": "nike"
      },
      {
        "gender": "woman",
        "id": 17,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0f855ffd-9ba0-4747-84ce-538031f80bee/air-zoom-alphafly-next-racing-shoe-g2tqPZ.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8e79607-7fff-4ff8-91b4-75bda1b142a9/air-zoom-alphafly-next-racing-shoe-g2tqPZ.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/86170894-800a-40a3-b8b6-7f598bbee2d5/air-zoom-alphafly-next-racing-shoe-g2tqPZ.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7c5a46e9-6d9c-4cba-82b7-3d34f00b2c8f/air-zoom-alphafly-next-racing-shoe-g2tqPZ.jpg"
        },
        "name": "Nike Air Zoom Alphafly",
        "price": 2220,
        "type": "nike"
      },
      {
        "gender": "kid",
        "id": 18,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a49abed9-6943-47eb-bc9f-c1e5c6bdfa28/lebron-8-older-shoe-pvcZgp.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c099bb2d-7580-4d85-b15e-e679ba4b228c/lebron-8-older-shoe-pvcZgp.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d9d258bb-7029-409e-8cd2-a02cb85ac51f/lebron-8-older-shoe-pvcZgp.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f694d123-2fee-483c-a676-48c941cf6d6d/lebron-8-older-shoe-pvcZgp.jpg"
        },
        "name": "Nike LeBron 8",
        "price": 1300,
        "type": "nike"
      },
      {
        "gender": "kid",
        "id": 19,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce462d8f-fd6f-43bb-9256-91ce712b56c3/air-max-90-older-shoe-SN166S.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e48a7f1e-0062-493e-a3cc-2a9b4505901f/air-max-90-older-shoe-SN166S.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8bc81750-bc96-40d9-86df-1c8abb40fe2e/air-max-90-older-shoe-SN166S.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d1bcad25-0336-45f0-b75c-07140e90b4b0/air-max-90-older-shoe-SN166S.jpg"
        },
        "name": "Nike Air Max 90",
        "price": 820,
        "type": "nike"
      },
      {
        "gender": "man",
        "id": 2,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7df8431000bd4fd9a20bac2c001a938e_9366/Tokio_Solar_Hu_Shoes_Green_S42576_01_standard.jpg",
          "link2": "https://drive.google.com/file/d/1pD909AUJIgT5HzE7JCSwPKbVGZCiN-5-/view?usp=sharing",
          "link3": "https://drive.google.com/file/d/1wOUnsLJImYUWt-t5hEFHERdlBjqWyyJX/view?usp=sharing",
          "link4": "https://drive.google.com/file/d/1WQrxelT4U1Xoh_9IQoDo4XBF4f-NcorH/view?usp=sharing"
        },
        "name": "TOKIO SOLAR HU SHOES",
        "price": 780,
        "type": "addidas"
      },
      {
        "gender": "kid",
        "id": 20,
        "link": {
          "link1": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/04f6bb5c-5953-4f84-9331-2e531391b642/air-max-plus-2-older-shoe-mC8bMT.jpg",
          "link2": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b535e80e-46d9-46fe-9c9c-a5a76dd67550/air-max-plus-2-older-shoe-mC8bMT.jpg",
          "link3": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d095d759-f7a7-412b-b7da-bf14a877dd3b/air-max-plus-2-older-shoe-mC8bMT.jpg",
          "link4": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9aa29df2-c6e3-4818-a3d8-00dfa347caa8/air-max-plus-2-older-shoe-mC8bMT.jpg"
        },
        "name": "Nike Air Max Plus 2",
        "price": 1130,
        "type": "nike"
      },
      {
        "gender": "man",
        "id": 3,
        "link": {
          "link1": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cd1631e9d6fb48ccaedcaafc0106320f_9366/Ultraboost_20_Shoes_White_EF1042_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/35d05d97559a4dd2ba1caafc0106535b_9366/Ultraboost_20_Shoes_White_EF1042_02_standard.jpg",
          "link3": "https://drive.google.com/file/d/1c6uiffaZUMW4G4A9JnQQxHFSbUjjCcx-/view?usp=sharing",
          "link4": "https://drive.google.com/file/d/1sG_q5KCHCfWIR9DsBf-IUXdBtp06MRfy/view?usp=sharing"
        },
        "name": "ULTRABOOST 20 SHOES",
        "price": 1200,
        "type": "addidas"
      },
      {
        "gender": "woman",
        "id": 4,
        "link": {
          "link1": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/11f7e6bd2a4e4d33bef8aafc01605fa2_9366/Superstar_Shoes_White_FV3284_02_standard.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/ae4e603bd7164a0d86e7aafc0160750c_9366/Superstar_Shoes_White_FV3284_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/c1e662e0e1054b18b2deaafc016082c9_9366/Superstar_Shoes_White_FV3284_05_standard.jpg"
        },
        "name": "SUPERSTAR SHOES",
        "price": 680,
        "type": "addidas"
      },
      {
        "gender": "woman",
        "id": 5,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/189b449050ef49b1aa68a8ba010163e6_9366/NMD_R1_Shoes_White_D96635_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/39ddd0bbb712468a939da8ba0101802a_9366/NMD_R1_Shoes_White_D96635_02_standard_hover.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/7220f90634d446a48694a8ba01019273_9366/NMD_R1_Shoes_White_D96635_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/d2dff926502a4eca88d7a8ba01017727_9366/NMD_R1_Shoes_White_D96635_06_standard.jpg"
        },
        "name": "NMD_R1 SHOES",
        "price": 1420,
        "type": "nike"
      },
      {
        "gender": "man",
        "id": 6,
        "link": {
          "link1": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/f5eb6e69c809492ca09babad0106f8a5_9366/Lite_Racer_Adapt_3.0_Shoes_Red_FX8809_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/55a5069cc84845bcbccaabad01070708_9366/Lite_Racer_Adapt_3.0_Shoes_Red_FX8809_02_standard.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/e43e6a0f69d84891bc4aabad010713e9_9366/Lite_Racer_Adapt_3.0_Shoes_Red_FX8809_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/dd608031260d4e1c8b75abad0106ff8c_9366/Lite_Racer_Adapt_3.0_Shoes_Red_FX8809_06_standard.jpg"
        },
        "name": "LITE RACER ADAPT 3.0 ",
        "price": 850,
        "type": "addidas"
      },
      {
        "gender": "woman",
        "id": 7,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ee1ed60ffa2e4d15a0b1abed0106c37e_9366/Ultraboost_DNA_Shoes_Black_FW8710_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/92955bf01290438d8693abed0106cf77_9366/Ultraboost_DNA_Shoes_Black_FW8710_02_standard.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/dfdd920af8d84b2ea781abed0106dc03_9366/Ultraboost_DNA_Shoes_Black_FW8710_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/e1fc7cf11dd342ed8f33abed0106c97a_9366/Ultraboost_DNA_Shoes_Black_FW8710_06_standard.jpg"
        },
        "name": "ULTRABOOST DNA SHOES",
        "price": 1230,
        "price ": 1650,
        "type": "addidas"
      },
      {
        "gender": "kid",
        "id": 8,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/73c7b15474994b22aab1ac5a0158dfcf_9366/NMD_R1_Shoes_Black_S42837_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/fec1da7802c640bf9142ac5a0158ed32_9366/NMD_R1_Shoes_Black_S42837_02_standard_hover.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/255c5090b7184c5c9c6fac5a0158fa14_9366/NMD_R1_Shoes_Black_S42837_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/4d4b9006e1104463a7f7ac5a015901a2_9366/NMD_R1_Shoes_Black_S42837_05_standard.jpg"
        },
        "name": "NMD_R1 SHOES",
        "price": 1000,
        "type": "addidas"
      },
      {
        "gender": "kid",
        "id": 9,
        "link": {
          "link1": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9719219a09e94ad29426abe400e80996_9366/ZX_2K_Boost_Shoes_White_FY1942_01_standard.jpg",
          "link2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/4999880732f44e62af24abe400eae591_9366/ZX_2K_Boost_Shoes_White_FY1942_02_standard_hover.jpg",
          "link3": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/726e547045ac4789ad33abe400e74243_9366/ZX_2K_Boost_Shoes_White_FY1942_04_standard.jpg",
          "link4": "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/1818293af73748548cc3abe400e8e723_9366/ZX_2K_Boost_Shoes_White_FY1942_05_standard.jpg"
        },
        "name": "ZX 2K BOOST SHOES",
        "price": 650,
        "type": "addidas"
      }
    ]

  )
  
  .then(data=>
    console.log(data))
   
   
    })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/nydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


