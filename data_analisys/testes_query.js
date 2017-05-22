db.pascoa.find(
	 {$and:[{$or:[{text:/viag/},{text:/viaj/},{text:/bora /},{text:/partiu /}]},    
	 {$and :[{$or:[  {text:/feriado/},  {text:/feriadao/},{text:/feriadão/}, {text:/páscoa/}, {text:/pascoa/},{text:/semana santa/}]}]},    
	 {$and :[{$or:[  {text:/para /},  {text:/pra /},  {text:/pro /}]}]},    
	 {$and:[{text:{$not:/oferta/}},
	 		{text:{$not:/confira/}},
	 		{text:{$not:/trabalh/}},
	 		{text:{$not:/comer/}},
	 		{text:{$not:/seriado/}},
	 		{text:{$not:/oficial/}},
	 		{text:{$not:/operação/}},
	 		{text:{$not:/dica/}},
	 		{text:{$not:/fiscal/}}]}    
	 ]},{text:1}
 );

{$and :[{$or:[  {text:/bh/},  
					 {text:/belzonte/},  
					 {text:/belo horizonte/},  
					 {text:/sp/},  
					 {text:/sampa/},  
					 {text:/sao paulo/},  
					 {text:/são paulo/},  
					 {text:/rj/},  
					 {text:/rio de janeiro/},  
					 {text:/rio/},  
					 {text:/cidade maravilhosa/}    
					 ]}]}, 