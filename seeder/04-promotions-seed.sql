INSERT INTO promotions (promotion_type,promotion_scope,promo_name,voucher_code,amount, quota, max_amount ,start_date,end_date,created_at,updated_at,deleted_at) VALUES
	 ('DISC','GLOBAL','Promo Lebaran','LEBARANANJAY',0.2, 3, 20000,          '2023-11-12 00:00:00','2023-11-17 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('CUT','GLOBAL','Gratis Ongkir','GRATISONGKIR',10000.0,  3, NULL,          '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('DISC','GLOBAL','Promo Lebaran','LEBARANANJAY',0.2,3, 20000,          '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('CUT','GLOBAL','Gratis Ongkir','GRATISONGKIR123',10000.0, 3, NULL,          '2023-11-29 00:00:00','2023-11-30 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('CUT','MERCHANT','Gratis Ongkir','GRATISONGKIR',10000.0,3, NULL,          '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('DISC','MERCHANT','Promo Lebaran','LEBARANANJAY',0.2,3, 20000,         '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-20 15:36:17.579427','2023-11-20 15:36:17.579427',NULL),
	 ('CUT','PRODUCT','Gratis Ongkir','ONGKIRCOFFEE',10000.0, 3, NULL,          '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-21 13:22:27.935266','2023-11-21 13:22:27.935266',NULL),
	 ('DISC','PRODUCT','Promo Lebaran','DISKONCOFFEE',0.2,3, 10000,          '2023-11-18 00:00:00','2023-11-30 00:00:00','2023-11-21 13:22:27.935266','2023-11-21 13:22:27.935266',NULL);

INSERT INTO merchant_product_promotions (merchant_id,product_id,promotion_id,created_at,updated_at,deleted_at) VALUES
	 (1,NULL,   5,'2023-11-21 13:26:01.531679','2023-11-21 13:26:01.531679',NULL),
	 (12,NULL,  6,'2023-11-24 13:52:52.783964','2023-11-24 13:52:52.783964',NULL),
	 (11,6,     8,'2023-11-21 13:26:01.531679','2023-11-21 13:26:01.531679',NULL),
	 (11,6,     7,'2023-11-21 13:26:01.531679','2023-11-21 13:26:01.531679',NULL);
