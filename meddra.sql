-- meddra table definition

-- Drop table

-- DROP TABLE public.meddra;

CREATE TABLE meddra (
	soc_code int4 NULL,
	soc_name varchar(999) NULL,
	soc_abbrev varchar(999) NULL,
	hlgt_code int4 NULL,
	hlgt_name varchar(999) NULL,
	hlt_code int4 NULL,
	hlt_name varchar(999) NULL,
	pt_code int4 NULL,
	pt_name varchar(999) NULL,
	llt_code int4 NULL,
	llt_name varchar(999) NULL,
	"version" varchar NULL,
	"language" varchar NULL
);