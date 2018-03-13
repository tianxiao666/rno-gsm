--0话务
create table rno_gsm_zero_tele_traffic (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	carrier_number varchar(50),
	total_tele_traffic varchar(50),
	apply_number varchar(50),
	distribute_number varchar(50)
);
--0流量
create table rno_gsm_zero_flow (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	gprs_down_flow varchar(50),
	gprs_upper_flow varchar(50),
	edge_down_flow varchar(50),
	edge_upper_flow varchar(50),
	total_tele_traffic  varchar(50)
);

--A1A2
create table rno_gsm_a1a2 (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	rsite varchar(50),
	genre varchar(50),
	alarm_name varchar(50),
	mo varchar(50),
	alarm varchar(50)
);

--ICM
create table rno_gsm_icm (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	four_five_grade varchar(50)
);

--RXMFP
create table rno_gsm_rxmfp (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	genre varchar(50),
	alarm_name varchar(50),
	status varchar(50),
	mo varchar(50),
	fault_codes varchar(50),
	datas varchar(50)	
);

--SQI
create table rno_gsm_sqi (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	sqi varchar(50),
	tsqigood varchar(50),
	tsqiaccpt varchar(50),
	tsqibad  varchar(50),
	four_five_grade  varchar(50)
);

--S掉话
create table rno_gsm_s_call_drop (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	s_call_drop  varchar(50),
	weak_signal_call_drop  varchar(50),
	quality_diff_call_drop  varchar(50),
	ta_call_drop  varchar(50),
	other_call_drop  varchar(50)
);

--S拥塞
create table rno_gsm_s_crowd (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	s_crowd_num  varchar(50)
);

--TBF
create table rno_gsm_tbf (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	tbf_establish_rate  varchar(50),
	down_total_flow  varchar(50)
);

--传输断链
create table rno_gsm_transport_chain_scission (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	mo  varchar(50),
	dip  varchar(50),
	state  varchar(50)
);

--倒站BCCH=0
create table rno_gsm_fall_site_bcch (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	bcch  varchar(50),
	state  varchar(50)
);

--掉话
create table rno_gsm_call_drop (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cmcc_calldrop_num  varchar(50),
	cmcc_calldrop_rate  varchar(50),
	each_line_teletraffic_num  varchar(50),
	wireless_total_call_drop varchar(50),
	sudden_call_drop varchar(50),
	upper_signal varchar(50),
	upper_quality_diff varchar(50),
	down_signal varchar(50),
	down_quality_diff varchar(50),
	upper_down_signal  varchar(50),
	upper_down_quality_diff varchar(50),
	ta_call_drop varchar(50)
);

--切出
create table rno_gsm_pitching_out(
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	pitch_out_success_rate  varchar(50),
	pitch_out_applying  varchar(50),
	pitch_out_success  varchar(50)
);

--切入
create table rno_gsm_pitching_in (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	pitch_in_success_rate varchar(50),
	pitch_in_applying varchar(50),
	pitch_in_success  varchar(50)
);

--无线接入性
create table rno_gsm_wireless_access (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	molecule_tfcongpgsm varchar(50),
	molecule_tcassall varchar(50),
	denominator_cnrocnt varchar(50),
	denominator_raaccfa varchar(50),
	denominator_tassall varchar(50),
	wireless_molecule varchar(50),
	wireless_denominator varchar(50),
	wireless_access varchar(50),
	each_line_teletraffic_num varchar(50)
);

--误码滑码
create table rno_gsm_error_slide_code(
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	dip varchar(50),
	t1 varchar(50),
	t2 varchar(50),
	slip varchar(50),
	slip2 varchar(50),
	esv_or_nes varchar(50),
	sesv_or_fes varchar(50),
	sfv varchar(50),
	es2v_or_nes2 varchar(50),
	ses2v_or_fes2 varchar(50)
);

--信道完好率
create table rno_gsm_channel_well_rate (
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	carrier_num  varchar(50),
	definition_channel varchar(50),
	available_channel varchar(50),
	channel_well_rate varchar(50)
);

--寻呼拥塞
create table rno_gsm_paging_crowd(
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	cover_scene  varchar(50),
	vip varchar(50),
	paging_crowd varchar(50)
);

--拥塞
create table rno_gsm_crowd(
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	total_tele_traffic varchar(50),
	each_line_teletraffic varchar(50),
	h_teletraffic varchar(50),
	applying_num varchar(50),
	distribute_num varchar(50),
	crowd_num varchar(50),
	distribute_crowd_num varchar(50),
	channel_well_rate varchar(50)
);

--质量
create table rno_gsm_quality(
	date varchar(50),
	time varchar(50),
	bsc varchar(50),
	cell varchar(50),
	chinese_name varchar(256),
	county varchar(50),
	agency_maintain varchar(50),
	upper_voice_quality varchar(50),
	down_voice_quality varchar(50),
	down_total_sampling_spot varchar(50)
);