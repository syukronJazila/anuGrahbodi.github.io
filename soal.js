const questions = {
    t1r1:[{ soal:"Proposisi bisa ditentukan nilai kebenarannya", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"5x  + 10 x (- 2) = 0, maka nilai dari x = 4\nPernyataan diatas bernilai?", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Kapan Ayah kembali ke rumah?\nKalimat tersebut termasuk proposisi", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"Proporsi sederhana dapat disebut juga sebagai proporsi atom.", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"→ termasuk operasi uner", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"p V q dibaca p dan q", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"Jika p benar, maka ~p salah", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p : bernilai True, q : bernilai False\nMaka p ⊕ q bernilai True", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p: Saya suka makan ayam\n~p: Saya sangat suka makan ayam", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"p ⊕ q dibaca p xor q", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
    ],
    t2r1:[{ soal:"Nilai kebenaran yang mungkin dalam suatu proposisi", opsi1 : "S atau F", opsi2 : "Benar atau Salah", jawaban : "Benar atau Salah"},
        { soal:"Ilmi adalah mahasiswa Ilmu Komputer tetapi bukan mahasiswa FTIK, atau Ilmi bukan merupakan mahasiswa Ilmu Komputer tetapi mahasiswa FTIK, merupakan proporsi dari", opsi1 : "p ⊕ q", opsi2 : "p V q", jawaban : "p V q"},
        { soal:"Pilihan mana yang bukan termasuk proposisi", opsi1 : "2x+5=7", opsi2 : "2x5-1=8", jawaban : "2x+5=7"},
        { soal:"Pernyataan yang memiliki hanya satu nilai kebenaran; benar atau salah saja, akan tetapi tidak keduanya merupakan pengertian dari", opsi1 : "Kalimat Destruktif", opsi2 : "Kalimat Deklaratif", jawaban : "Kalimat Deklaratif"},
        { soal:"Pernyataan yang termasuk proposisi majemuk", opsi1 : "Riki pergi ke pasar membeli ikan", opsi2 : "Andi makan jika Andi lapar", jawaban : "Andi makan jika Andi lapar"},
        { soal:"1. Presiden pertama Ir. Soekarno atau presiden Soekarno adalah bapak proklamator; 2. Presiden kedua Ir. Soeharto atau presiden kedua presiden Indonesia masa jabatan tersingkat\nPernyataan diatas yang bernilai benar adalah pernyataan nomor", opsi1 : "1", opsi2 : "2", jawaban : "1"},
        { soal:"Makna dari negasi p adalah", opsi1 : "Nilai kebenaran berlawanan p", opsi2 : "Nilai kebenaran p adalah salah", jawaban : "Nilai kebenaran berlawanan p"},
        { soal:"Paus merupakan mamalia terbesar di dunia dan Pigmy Marmoset adalah hewan terkecil di dunia\nPernyataan diatas merupakan contoh dari proposisi", opsi1 : "p ∧ q", opsi2 : "p ∧ ~q", jawaban : "p ∧ q"},
        { soal:"Jika p: Cuaca hari ini hujan, maka ~p adalah\nCuaca hari ini cerah\nCuaca hari ini tidak hujan", opsi1 : "Cuaca hari ini cerah", opsi2 :"Cuaca hari ini tidak hujan", jawaban : "Cuaca hari ini tidak hujan"},
        { soal:"'Tidak benar bahwa saya seorang guru' atau 'Saya bukan seorang guru'\nNegasi dari proposisi diatas adalah", opsi1 : "Saya seorang guru", opsi2 : "Saya bukan seorang guru", jawaban : "Saya seorang guru"},
    ],
    t1r2:[{ soal:"p: False, Q: False\n~p^q bernilai T", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"Indonesia merupakan negara terbesar di Asia Tenggara", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Tumbuhan adalah makhluk hidup dan hiu mamalia", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"'Nilai ujian matematika saya selalu 100, maka nilai akhir ujian matematika saya adalah A'", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p v q dibaca p atau q", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"China merupakan negara terbesar kedua setelah Rusia", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"2²+7=9 atau 2x27<100", opsi1 : 'true', opsi2 : 'false',  jawaban : 'true'},
        { soal:"Alexander Graham Bell merupakan penemu telepon pertama di dunia", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p ⊕ q bernilai false jika p dan q memiliki nilai kebenaran yang sama", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Angka 192 merupakan kelipatan dari angka 16 atau 24", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Eksklusif or digunakan untuk pernyataan yang tidak bisa dilakukan bersamaan", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Gabungan dari beberapa proposisi atom disebut proposisi ganda", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
    ],
    t2r2:[{ soal:"Pernyataan yang benar terkait konjungsi", opsi1 : "Nilai kebenarannya 1 jika kedua pernyataan benar", opsi2 : "Nilai kebenarannya 1 jika salah satu pernyataan benar", jawaban : "Nilai kebenarannya 1 jika kedua pernyataan benar"},
        { soal:"2x + 17 = 35\n3x - 19 = 8\nDari pernyataan diatas nilai x adalah", opsi1 : "x > 9 atau x < 9", opsi2 : "x ≥ 9 atau x = 9", jawaban : "x ≥ 9 atau x = 9"},
        { soal:"p: Kakak belajar, q: Adik bermain. Maka p^q adalah", opsi1 : "Kakak belajar dan adik bermain", opsi2 : "Kakak belajar jika adik bermain", jawaban : "Kakak belajar dan adik bermain"},
        { soal:"p -> q merupakan proporsi yang disebut sebagai proposisi", opsi1 : "Konjungsi", opsi2 : "Implikasi", jawaban : "Implikasi"},
    ],
    t3r2:[
        { soal:"Manakah dua pernyataan yang benar dari 4 pilihan di bawah jika p dan q bernilai salah", 
          opsi1 : "pvq bernilai benar", opsi2 :"~pvq bernilai benar", 
          opsi3 : "pv~q bernilai salah", opsi4 : "~(pvq) bernilai benar", 
          jawaban1 : "~pvq bernilai benar", jawaban2 : "~(pvq) bernilai benar"
        },
        { soal:"Manakah dari 2 dari 4 pernyataan di bawah ini yang benar jika x bernilai 3", 
          opsi1 : "2x + 10 - 3²= 7 atau 200 = 10² x 2", opsi2 : "(True) p  v q (True) = False atau 2 = (- 2) x 1", 
          opsi3 : "3 x 9 = 27 atau (True) p v q (False) = True", opsi4 : "20 x 3² = 170 atau 6² + 3² > 45", 
          jawaban1 : "2x + 10 - 3²= 7 atau 200 = 10² x 2", jawaban2 : "3 x 9 = 27 atau (True) p v q (False) = True"
        },
        { soal:"Manakah dua pernyataan yang bernilai benar dari 4 pilihan di bawah ", 
        opsi1 : "Ayam bukan burung atau mangga termasuk buah", opsi2 : "Air berwarna putih atau ikan termasuk mamalia", 
        opsi3 : "5x7=30 atau 5²>30", opsi4 : "4x7=28 atau 6+27=33", 
        jawaban1 : "Ayam bukan burung atau mangga termasuk buah", jawaban2 : "4x7=28 atau 6+27=33"
        },
        { soal:"Manakah 2 dari 4 pernyataan di bawah ini yang bernilai benar", 
        opsi1 : "Banteng merupakan simbol dari bendera Partai PDI atau Matahari terbit dari Timur", opsi2 :"2² + 3² < 14 atau (True) p ⊕ q (True) = False",
        opsi3 : "3² - 2² > 5 atau √36 = 2√4", opsi4 : "(False) p ⊕ q (True) = False atau √81 = 2² + 4", 
        jawaban1 : "Banteng merupakan simbol dari bendera Partai PDI atau Matahari terbit dari Timur", jawaban2 : "2² + 3² < 14 atau (True) p ⊕ q (True) = False"
        },
        { soal:"Manakah dua pernyataan yang bernilai salah dari 4 pilihan di bawah", 
        opsi1 : "p ⊕ q bernilai true jika p dan q bernilai true", opsi2 : "p ⊕ q bernilai false jika p atau q bernilai true", 
        opsi3 : "p ⊕ q bernilai false jika p dan q bernilai false", opsi4 : "p ⊕ q bernilai true jika p atau q bernilai true", 
        jawaban1 : "p ⊕ q bernilai true jika p dan q bernilai true", jawaban2 : "p ⊕ q bernilai false jika p dan q bernilai false"
        },
        { soal:"Manakah 2 dari 4 pernyataan di bawah ini yang bernilai benar", 
        opsi1 : "Indonesia merupakan Negara Kesatuan atau Ideologi Indonesia adalah Pancasila", opsi2 : "(True)p ⊕ q(False) = False atau 27/3 = 3²", 
        opsi3 : "5² - 4² > 9 atau (False) p ⊕ q (False) = True", opsi4 : "Alexander Graham Bell penemu komputer pertama di dunia atau Isaac Newton penemu listrik pertama di dunia", 
        jawaban1 : "Indonesia merupakan Negara Kesatuan atau Ideologi Indonesia adalah Pancasila", jawaban2 : "(True)p ⊕ q(False) = False atau 27/3 = 3²"
        },
        { soal:"Manakah dua dari 4 pilihan di bawah yang benar mengenai pernyataan\n'Doni makan di rumah atau restoran, tetapi bukan keduanya'", 
        opsi1 : "Doni tidak makan", opsi2 :"Doni makan di rumah dan restoran", 
        opsi3 : "Rumah Doni bukan restoran", opsi4 : "Doni makan di rumah, bukan di restoran",
        jawaban1 : "Rumah Doni bukan restoran", jawaban2 : "Doni makan di rumah, bukan di restoran"
        },
        { soal:"Manakah 2 dari 4 pernyataan di bawah ini yang bernilai benar", 
        opsi1 : "20² / 5  ≥ 90 atau (True) p -> q (False) = True", opsi2 : "15 ≥ 5² - 2 x 3 + 4 atau 3 - 1 x 4² = -13", 
        opsi3 : "(True) p -> q (True) = True atau 2² = 4 - 2 + 2", opsi4 : "Isaac Newton adalah penemu Listrik pertama di dunia", 
        jawaban1 : "15 ≥ 5² - 2 x 3 + 4 atau 3 - 1 x 4² = -13", jawaban2 : "(True) p -> q (True) = True atau 2² = 4 - 2 + 2"
        },
    ],
    t1r3:[{ soal:"p->q artinya p jika q", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
        { soal:"Ada dua jenis operator logika dasar, yaitu uner dan biner", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p->q hanya bernilai salah jika p benar dan q salah", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p : bernilai True, q : bernilai False\nMaka p ⊕ q bernilai True", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"Jika saya bolos, maka saya dihukum.\nPernyataan tersebut tetap benar jika saya dihukum", opsi1 : 'true', opsi2 : 'false', jawaban : 'true'},
        { soal:"p → q dapat diartikan sebagai p atau q", opsi1 : 'true', opsi2 : 'false', jawaban : 'false'},
    ],
    t2r3:[{ soal:"Mengubah p->q menjadi q->p disebut", opsi1 : "Invers", opsi2 : "Konvers", jawaban : "Konvers"},
        { soal:"'Nilai ujian matematika saya selalu 100, maka nilai akhir ujian matematika saya adalah A'\nPernyataan diatas adalah proposisi dari", opsi1 : "p ∧ q", opsi2 : "p -> q", jawaban : "p -> q"},
        { soal:"p <-> q ekuivalen dengan", opsi1 : "(p->q)^(q->p)", opsi2 : "(q->p)v(p->q)", jawaban : "(p->q)^(q->p)"},
        { soal:"p <-> q merupakan proposisi yang disebut sebagai proposisi",opsi1:"Implikasi", opsi2 :  "Biimplikasi", jawaban : "Biimplikasi"},
    ],
    t3r3:[
        { soal:"Manakah dua pernyataan yang benar dari 4 pilihan di bawah tentang p->q", 
          opsi1 : "p->q dibaca p mengakibatkan q", opsi2 :"p disebut konsekuensi", 
          opsi3 : "q disebut antesiden", opsi4 : "p->q dinamakan implikasi", 
          jawaban1 : "p->q dibaca p mengakibatkan q", jawaban2 : "p->q dinamakan implikasi"
        },
        { soal:"Manakah 2 dari 4 pernyataan di bawah ini yang bernilai benar", 
          opsi1 : "2x + 4 = 12, maka x = 3", opsi2 : "3x + 4x = 49, maka x = 7", 
          opsi3 : "Alexander Graham Bell menemukan telepon pertama kali pada tahun 1867", opsi4 : "Indonesia negara dengan jumlah penduduk terbanyak ke-4", 
          jawaban1 : "3x + 4x = 49, maka x = 7", jawaban2 : "Indonesia negara dengan jumlah penduduk terbanyak ke-4"
        },
        { soal:"Manakah dua pernyataan yang bernilai salah dari 4 pilihan di bawah jika p dan q bernilai benar",
        opsi1 : "p->q", opsi2 : "p->~q", 
        opsi3 : "~p->q ⊕ p", opsi4 : "p->~qv~p", 
        jawaban1 : "p->~q", jawaban2 : "p->~qv~p"
        },
        { soal:"Manakah 2 dari 4 pernyataan dibawah ini yang bernilai benar", 
        opsi1 : "Ikan Paus merupakan mamalia terbesar di dunia", opsi2 :"Indonesia merupakan negara serikat",
        opsi3 : "√9 x 4² = 50 - 1", opsi4 : "√16 - 2 x (- 4) = √144", 
        jawaban1 : "Ikan Paus merupakan mamalia terbesar di dunia", jawaban2 : "√16 - 2 x (- 4) = √144"
        },
        { soal:"Fani pulang ke rumah jika hari mulai gelap.\nManakah kombinasi dua dari 4 pilihan di bawah membuat pernyataan di atas salah", 
        opsi1 : "Fani pulang ke rumah", opsi2 : "Fani tidak pulang ke rumah", 
        opsi3 : "Hari mulai gelap", opsi4 : "Hari belum gelap", 
        jawaban1 : "Fani tidak pulang ke rumah", jawaban2 : "Hari mulai gelap"
        },
        { soal:"(I) p : True, q : false\n(II)p : True, q : True\n(III)p : False, q : True\nTentukan p -> q\nMaka 2 pernyataan yang benar dibawah ini adalah", 
        opsi1 : "(I) False, (II) True", opsi2 : "(I) True, (III) True", 
        opsi3 : "(II) True, (III) True", opsi4 : "(I) False, (III) False", 
        jawaban1 : "(I) False, (II) True", jawaban2 : "(II) True, (III) True"
        },
        { soal:"Manakah dua dari 4 pernyataan berikut yang benar", 
        opsi1 : "Kontrapositif, konvers dan invers memiliki nilai kebenaran sama jika pernyataan penyusunnya bernilai sama", opsi2 :"Kontrapositif dan invers memiliki tabel kebenaran yang sama", 
        opsi3 : "Invers dari p->q adalah ~p->~q", opsi4 : "Konvers dari p->q adalah ~q->~p",
        jawaban1 : "Kontrapositif, konvers dan invers memiliki nilai kebenaran sama jika pernyataan penyusunnya bernilai sama", jawaban2 : "Invers dari p->q adalah ~p->~q"
        },
        { soal:"(I).  ~p : True, ~q : false\n(II).  ~p : True, ~q : True\n(III). ~p : False, ~q : True\nTentukan ~p -> ~q\nMaka 2 pernyataan yang benar dibawah ini adalah",
        opsi1 : "(I) False, (II) False", opsi2 : "(I) False, (II) True", 
        opsi3 : "(II) True, (III) False", opsi4 : "(II) True, (III) True", 
        jawaban1 : "(I) False, (II) True", jawaban2 : "(II) True, (III) True"
        },
        { soal:"Manakah dua dari 4 pilihan berikut yang merupakan cara baca dari p<->q",
        opsi1 : "p jika q", opsi2 :"p jika dan hanya jika q", 
        opsi3 : "Jika p, maka q", opsi4 : "p dan q ekuivalen", 
        jawaban1 : "p jika dan hanya jika q", jawaban2 : "Jika p, maka q"
        },
        { soal:"(I)  p : True, q : False\n(II)  p : True, q : true\n(III) p : False, q : False\nTentukan p <-> q\nMaka 2 pernyataan yang benar dibawah ini adalah",
        opsi1 : "(I) False, (II) False", opsi2 :"(I) True, (III) True", 
        opsi3 : "(II) True, (III) True", opsi4 : "(I) False, (III) True", 
        jawaban1 : "(II) True, (III) True", jawaban2 : "(I) False, (III) True"
        },
    ],
    t2r4:[{ soal:"p<->q bernilai salah jika", opsi1 : "Nilai kebenaran p dan q berbeda", opsi2 : "Nilai kebenaran p dan q sama", jawaban : "Nilai kebenaran p dan q berbeda"},
        { soal:"'Nilai ujian matematika saya tidak kurang dari 74, jika dan hanya jika saya lulus dari mata Pelajaran Matematika'\nPernyataan diatas adalah contoh proposisi dari", opsi1 : "Biimplikasi", opsi2 : "Implikasi", jawaban : "Biimplikasi"},
        { soal:"'Luna pergi ke mall jika dan hanya jika sedang hari libur' berarti", opsi1 : "Luna tidak pergi ke mall saat hari libur", opsi2 : "Luna tidak pergi ke mall saat belum hari libur", jawaban : "Luna tidak pergi ke mall saat belum hari libur"},
        { soal:"Tabel urutan pengerjaan operator logika yang memberikan suatu aturan operator mana yang harus Lebih dulu dioperasikan disebut", opsi1 : "Tabel Proposisi", opsi2:"Presedens", jawaban :"Presedens"},
        { soal:"Mana dari dua pilihan yang perlu dioperasikan lebih dulu", opsi1 : "->", opsi2 : "⊕", jawaban : "⊕"},
        { soal:"Variable proposisi atom pada umumnya menggunakan", opsi1 : "p, q, r,...", opsi2 : "a, b, c,...", jawaban : "p, q, r,..."},
        { soal:"Pilih proposisi majemuk yang memiliki peletakan tanda kurung yang benar", opsi1 : "(~p)->((qvr) ⊕ (~s))", opsi2 : "p^(((~q)<->(~r))vs)", jawaban : "(~p)->((qvr) ⊕ (~s))"},
        { soal:"Konstanta proposisi yang biasa digunakan oleh umum adalah", opsi1 :"T (benar) dan F (salah)", opsi2 : "B (benar) dan S (salah)", jawaban : "T (benar) dan F (salah)"},
        { soal:"Formula proposisi terbentuk dari", opsi1 : "Presedens, variabel dan operator proposisi", opsi2 :"Variabel, operator, dan konstanta proposisi", jawaban : "Variabel, operator, dan konstanta proposisi"},
        { soal:"p ∧ q → r ditambahkan tanda kurang menjadi", opsi1 : "p ∧ q → (r)", opsi2 : "(p ∧ q) → r", jawaban : "(p ∧ q) → r"},
        { soal:"Manakah yang bukan merupakan formula logika proposisi", opsi1 : "~~p~qvr->s", opsi2 : "p ⊕ ~q^r<->s", jawaban : "~~p~qvr->s"},
        { soal:"Pilihlah urutan table Presedens yang tepat", opsi1 : "~, ∧, V, ⊕, ->, <->", opsi2 : "~, ⊕, ∧, V, ->, <->", jawaban : "~, ∧, V, ⊕, ->, <->"},
    ],
    t3r4:[
        { soal:"Manakah dua dari 4 pilihan yang bernilai benar jika nilai kebenaran p dan q berbeda", 
          opsi1 : "~p<->q", opsi2 :"~(p<->q)", 
          opsi3 : "p<->q", opsi4 : "~p<->~q", 
          jawaban1 : "~p<->q", jawaban2 : "~(p<->q)"
        },
        { soal:"(I)  p : True, q : False\n(II)  p : False, q : true\n(III) p : False, q : False\nTentukan p <-> q\nMaka 2 pernyataan yang benar dibawah ini adalah", 
          opsi1 : "(I) False, (III) True", opsi2 : "(II) False, (III) True", 
          opsi3 : "(I) True, (II) False", opsi4 : "(II) False, (III) False", 
          jawaban1 : "(I) False, (III) True", jawaban2 : "(II) False, (III) True"
        },
        { soal:"Manakah dua dari 4 pilihan di bawah yang salah mengenai pernyataan\n'Saya tidak pergi kuliah jika dan hanya jika saya sakit parah'",
        opsi1 : "Saya pergi kuliah ketika saya sakit parah", opsi2 : "Saya pergi kuliah ketika saya sehat", 
        opsi3 : "Saya tidak pergi kuliah ketika saya sakit", opsi4 : "Saya tidak pergi kuliah ketika saya tidak sakit", 
        jawaban1 :"Saya pergi kuliah ketika saya sehat", jawaban2 : "Saya tidak pergi kuliah ketika saya sakit"
        },
        { soal:"Urutan Tabel presedens yang benar dibawah ini adalah", 
        opsi1 : "~, ∧, ⊕, <->", opsi2 :"~, V, ⊕, ->",
        opsi3 : "∧, <->, ->,⊕", opsi4 : "V, ~, <->, ⊕", 
        jawaban1 : "~, ∧, ⊕, <->", jawaban2 : "~, V, ⊕, ->"
        },
        { soal:"Urutan pengerjaan (presedens) dari yang awal", 
        opsi1 : "v, ⊕, ->, <->", opsi2 : "^, ~, ->, v", 
        opsi3 : "~, ^, v, ⊕", opsi4 : "~,<->, v, ^", 
        jawaban1 : "v, ⊕, ->, <->", jawaban2 : "~, ^, v, ⊕"
        },
        { soal:"Manakah 2 dari 4 pernyataan dibawah ini yang merupakan formula logika proposisi", 
        opsi1 : "p ∧ q", opsi2 : "~ p q V", 
        opsi3 : "~ ~(~p -> ~ ~r)", opsi4 : "p ∧ q -> ⊕ r v s", 
        jawaban1 : "p ∧ q", jawaban2 : "~ ~(~p -> ~ ~r)"
        },
        { soal:"Manakah dua dari 4 pilihan di bawah yang memiliki peletakan tanda kurung yang benar", 
        opsi1 : "(~p) ⊕ (q^(r->(~s)))", opsi2 :"(p^(qv(~r)))<->s", 
        opsi3 : "((~p)->((~q)^r))<->s", opsi4 : "p<->(q ⊕ (~r)v(~s)))",
        jawaban1 : "((~p)->((~q)^r))<->s", jawaban2 : "p<->(q ⊕ (~r)v(~s)))"
        },
        { soal:"Tentukanlah 2 penggunaan tanda kurung yang tepat untuk memperjelas presedens operator logika pada proposisi majemuk berikut",
        opsi1 : "p V ( q  ∧ r )", opsi2 : "p  ∧ q ( → r)", 
        opsi3 : "(~p) V q", opsi4 : "p → (~q ∧ r)", 
        jawaban1 :"p V ( q  ∧ r )", jawaban2 : "(~p) V q"
        },
        { soal:"Manakah dua dari 4 pilihan di bawah yang benar terkait formula logika proposisi",
        opsi1 :"Setiap proposisi atom merupakan formula logika proposisi", opsi2 :"Diperlukan presedens", 
        opsi3 : "Variabel tidak termasuk dalam formula logika proposes", opsi4 : "A->B merupakan formula logika proposisi", 
        jawaban1 : "Setiap proposisi atom merupakan formula logika proposisi", jawaban2 : "A->B merupakan formula logika proposisi"
        },
        { soal:"Tentukanlah 2 penggunaan tanda kurung yang tepat untuk memperjelas presedens operator logika pada proposisi majemuk berikut",
        opsi1 : "((~p) V q) → (r ∧ (~s))", opsi2 :"(p  ∧ q ( → r))", 
        opsi3 : "p → ((~q) → r)", opsi4 : "	(p → (~q ∧ r))", 
        jawaban1 :"((~p) V q) → (r ∧ (~s))", jawaban2 : "p → ((~q) → r)"
        },
        { soal: "Manakah dua dari 4 pernyataan di bawah yang benar",
        opsi1 : "pv->q ⊕ r^s merupakan formula logika proposisi", opsi2 :"~p ⊕ ~q->r<->s merupakan formula logika proposisi", 
        opsi3 : "p^vq ⊕ r->s bukan merupakan formula logika proposisi", opsi4 : "~p->~qv~r ⊕ ~s bukan merupakan formula logika proposisi", 
        jawaban1 : "~p ⊕ ~q->r<->s merupakan formula logika proposisi", jawaban2 : "p^vq ⊕ r->s bukan merupakan formula logika proposisi"
        },
        { soal:"Tentukanlah 2 pernyataan yang menambahkan tanda kurung dalam proposisinya menjadi proposisi yang tepat",
        opsi1 : "p V q ∧ r menjadi p V ( q ∧ r)", opsi2 :"~p V q menjadi ~p V (q)", 
        opsi3 : "p ∧ q → r menjadi (p -> (~q) ∧ r)", opsi4 : "p → ~q ∧ r menjadi p → (( ~q) ∧ r)", 
        jawaban1 : "p V q ∧ r menjadi p V ( q ∧ r)", jawaban2 : "p → ~q ∧ r menjadi p → (( ~q) ∧ r)"
        },
    ],
    
}

















