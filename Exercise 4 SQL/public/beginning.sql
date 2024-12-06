#1
#SELECT nom_p FROM pays;
#2
#SELECT nom_i, prenom_i FROM inscrit;
#3
#What editor?
#4
#SELECT libelle_t FROM typelivre;
#5
#SELECT * FROM inscrit WHERE nom_i = "Ulysses";
#6
#SELECT * FROM inscrit WHERE date_naissance_i = "2022-05-21";
#7
#SELECT * FROM livre WHERE id_t = 13 ORDER BY titre_l ASC;
#8
#SELECT COUNT(*) FROM livre WHERE id_t = 7;
#9
#SELECT * FROM livre ORDER BY titre_l DESC  LIMIT 10;
#10
#SELECT COUNT(*) AS exemplaires FROM livre GROUP BY titre_l;
#11
#SELECT COUNT(*) AS num_emprunts FROM emprunt GROUP BY ref_e;
#12
#SELECT * FROM emprunt WHERE date_em BETWEEN "2005/01/01" AND "2027/12/12";
#13
#SELECT * FROM livre WHERE id_t = 2 OR id_t = 4 OR id_t = 5 ORDER BY titre_l ASC;
#14
#SELECT MAX(delais_em), MIN(delais_em) from emprunt;
#15
#SELECT COUNT(*) AS nerd_contest_a_real_g_pirates_from_the_internet FROM emprunt GROUP BY id_i;
#16
#SELECT id_i, COUNT(*) AS number FROM emprunt GROUP BY id_i HAVING COUNT(*) > 2;
#17
#SELECT COUNT(*) FROM auteur WHERE nom_a LIKE "%z%";