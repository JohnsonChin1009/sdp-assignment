<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SupervisorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supervisors =
            [
                [
                    'id' => 'STAFF007',
                    'name' => 'CAMILA ATHERTON',
                    'field_of_study' => 'HUMAN RESOURCES',
                    'email' => 'catherton0@yandex.ru',
                ],

                [
                    'id' => 'STAFF008',
                    'name' => 'ILENE ANTOGNETTI',
                    'field_of_study' => 'SERVICES',
                    'email' => 'iantognetti1@sciencedirect.com',
                ],

                [
                    'id' => 'STAFF009',
                    'name' => 'DARREL KLEINZWEIG',
                    'field_of_study' => 'SALES',
                    'email' => 'dkleinzweig2@nhs.uk',
                ],

                [
                    'id' => 'STAFF010',
                    'name' => 'MARKUS DOMASCHKE',
                    'field_of_study' => 'MARKETING',
                    'email' => 'mdomaschke3@baidu.com',
                ],

                [
                    'id' => 'STAFF011',
                    'name' => 'CARROL BENASIK',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'cbenasik4@friendfeed.com',
                ],

                [
                    'id' => 'STAFF012',
                    'name' => 'REINALDOS VANYUKHIN',
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT',
                    'email' => 'rvanyukhin5@msu.edu',
                ],

                [
                    'id' => 'STAFF013',
                    'name' => 'BONE MEDCALFE',
                    'field_of_study' => 'TRAINING',
                    'email' => 'bmedcalfe6@hubpages.com',
                ],

                [
                    'id' => 'STAFF014',
                    'name' => 'ALBINA WARLOWE',
                    'field_of_study' => 'ACCOUNTING',
                    'email' => 'awarlowe7@networksolutions.com',
                ],

                [
                    'id' => 'STAFF015',
                    'name' => 'WITTIE GLEAVES',
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT',
                    'email' => 'wgleaves8@walmart.com',
                ],

                [
                    'id' => 'STAFF016',
                    'name' => 'CAROLIN WYLIE',
                    'field_of_study' => 'SUPPORT',
                    'email' => 'cwylie9@nyu.edu',
                ],

                [
                    'id' => 'STAFF017',
                    'name' => 'WALD SYRATT',
                    'field_of_study' => 'PRODUCT MANAGEMENT',
                    'email' => 'wsyratta@shinystat.com',
                ],

                [
                    'id' => 'STAFF018',
                    'name' => 'CORNELA YEARNES',
                    'field_of_study' => 'SALES',
                    'email' => 'cyearnesb@1688.com',
                ],

                [
                    'id' => 'STAFF019',
                    'name' => 'CATHI TOLMIE',
                    'field_of_study' => 'TRAINING',
                    'email' => 'ctolmiec@is.gd',
                ],

                [
                    'id' => 'STAFF020',
                    'name' => 'BEBE GHERARDESCI',
                    'field_of_study' => 'SERVICES',
                    'email' => 'bgherardescid@harvard.edu',
                ],

                [
                    'id' => 'STAFF021',
                    'name' => 'GILBERTE PRE',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'gpree@myspace.com',
                ],

                [
                    'id' => 'STAFF022',
                    'name' => 'GAYEL KIRMAN',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'gkirmanf@telegraph.co.uk',
                ],

                [
                    'id' => 'STAFF023',
                    'name' => 'LESLIE OBOY',
                    'field_of_study' => 'ACCOUNTING',
                    'email' => 'loboyg@mayoclinic.com',
                ],

                [
                    'id' => 'STAFF024',
                    'name' => 'GUTHREY FERRETTI',
                    'field_of_study' => 'LEGAL',
                    'email' => 'gferrettih@ucsd.edu',
                ],

                [
                    'id' => 'STAFF025',
                    'name' => 'OLVA GUMME',
                    'field_of_study' => 'SUPPORT',
                    'email' => 'ogummei@soup.io',
                ],

                [
                    'id' => 'STAFF026',
                    'name' => 'AMBERLY ENTERLEIN',
                    'field_of_study' => 'MARKETING',
                    'email' => 'aenterleinj@noaa.gov',
                ],

                [
                    'id' => 'STAFF027',
                    'name' => 'PENN CASTEL',
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT',
                    'email' => 'pcastelk@yelp.com',
                ],

                [
                    'id' => 'STAFF028',
                    'name' => 'SOMERSET MCGUCKEN',
                    'field_of_study' => 'LEGAL',
                    'email' => 'smcguckenl@netscape.com',
                ],

                [
                    'id' => 'STAFF029',
                    'name' => 'JOLY BOULGER',
                    'field_of_study' => 'SERVICES',
                    'email' => 'jboulgerm@instagram.com',
                ],

                [
                    'id' => 'STAFF030',
                    'name' => 'BAUDOIN ADES',
                    'field_of_study' => 'SUPPORT',
                    'email' => 'badesn@clickbank.net',
                ],

                [
                    'id' => 'STAFF031',
                    'name' => 'MIDGE SIDERY',
                    'field_of_study' => 'TRAINING',
                    'email' => 'msideryo@barnesandnoble.com',
                ],

                [
                    'id' => 'STAFF032',
                    'name' => 'VERN TULK',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'vtulkp@163.com',
                ],

                [
                    'id' => 'STAFF033',
                    'name' => 'PENROD ARTZ',
                    'field_of_study' => 'MARKETING',
                    'email' => 'partzq@mozilla.com',
                ],

                [
                    'id' => 'STAFF034',
                    'name' => 'ALUINO TURFES',
                    'field_of_study' => 'TRAINING',
                    'email' => 'aturfesr@state.gov',
                ],

                [
                    'id' => 'STAFF035',
                    'name' => 'JULIETTA ZIEBART',
                    'field_of_study' => 'LEGAL',
                    'email' => 'jziebarts@scribd.com',
                ],

                [
                    'id' => 'STAFF036',
                    'name' => 'BRUCIE CASTRO',
                    'field_of_study' => 'TRAINING',
                    'email' => 'bcastrot@purevolume.com',
                ],

                [
                    'id' => 'STAFF037',
                    'name' => 'ADOLF STOLLSTEIMER',
                    'field_of_study' => 'TRAINING',
                    'email' => 'astollsteimeru@unicef.org',
                ],

                [
                    'id' => 'STAFF038',
                    'name' => 'ISAAC BALASSA',
                    'field_of_study' => 'BUSINESS DEVELOPMENT',
                    'email' => 'ibalassav@mayoclinic.com',
                ],

                [
                    'id' => 'STAFF039',
                    'name' => 'COREY MACGIANY',
                    'field_of_study' => 'SUPPORT',
                    'email' => 'cmacgianyw@washington.edu',
                ],

                [
                    'id' => 'STAFF040',
                    'name' => 'LOTTI KENNEWELL',
                    'field_of_study' => 'SERVICES',
                    'email' => 'lkennewellx@tamu.edu',
                ],

                [
                    'id' => 'STAFF041',
                    'name' => 'FARRAH SCINTSBURY',
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT',
                    'email' => 'fscintsburyy@ebay.co.uk',
                ],

                [
                    'id' => 'STAFF042',
                    'name' => 'PHYLLIS HRYSKIEWICZ',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'phryskiewiczz@un.org',
                ],

                [
                    'id' => 'STAFF043',
                    'name' => 'LYDIA BROADBEAR',
                    'field_of_study' => 'PRODUCT MANAGEMENT',
                    'email' => 'lbroadbear10@discuz.net',
                ],

                [
                    'id' => 'STAFF044',
                    'name' => 'ARIN MARTHEN',
                    'field_of_study' => 'SERVICES',
                    'email' => 'amarthen11@ft.com',
                ],

                [
                    'id' => 'STAFF045',
                    'name' => 'DENNISON COWDRY',
                    'field_of_study' => 'BUSINESS DEVELOPMENT',
                    'email' => 'dcowdry12@aol.com',
                ],

                [
                    'id' => 'STAFF046',
                    'name' => 'MOSES JUSTER',
                    'field_of_study' => 'SERVICES',
                    'email' => 'mjuster13@yahoo.com',
                ],

                [
                    'id' => 'STAFF047',
                    'name' => 'YNEZ ASHALL',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'yashall14@census.gov',
                ],

                [
                    'id' => 'STAFF048',
                    'name' => 'EDGARD LILLECRAP',
                    'field_of_study' => 'PRODUCT MANAGEMENT',
                    'email' => 'elillecrap15@archive.org',
                ],

                [
                    'id' => 'STAFF050',
                    'name' => 'DARBEE COLEIRO',
                    'field_of_study' => 'MARKETING',
                    'email' => 'dcoleiro16@etsy.com',
                ],

                [
                    'id' => 'STAFF051',
                    'name' => 'TERRILL CESCHINI',
                    'field_of_study' => 'BUSINESS DEVELOPMENT',
                    'email' => 'tceschini17@fda.gov',
                ],

                [
                    'id' => 'STAFF052',
                    'name' => 'JUANITA QUIGLEY',
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT',
                    'email' => 'jquigley18@jalbum.net',
                ],

                [
                    'id' => 'STAFF053',
                    'name' => 'IRINA YURKIEWICZ',
                    'field_of_study' => 'SERVICES',
                    'email' => 'iyurkiewicz19@independent.co.uk',
                ],

                [
                    'id' => 'STAFF054',
                    'name' => 'IDALINE JEPHSON',
                    'field_of_study' => 'PRODUCT MANAGEMENT',
                    'email' => 'ijephson1a@miibeian.gov.cn',
                ],

                [
                    'id' => 'STAFF055',
                    'name' => 'MICKIE RELPH',
                    'field_of_study' => 'LEGAL',
                    'email' => 'mrelph1b@unblog.fr',
                ],

                [
                    'id' => 'STAFF076',
                    'name' => 'CARLEN WEIPPERT',
                    'field_of_study' => 'ENGINEERING',
                    'email' => 'cweippert1c@foxnews.com',
                ],

                [
                    'id' => 'STAFF056',
                    'name' => 'DUKEY PAKENHAM',
                    'field_of_study' => 'TRAINING',
                    'email' => 'dpakenham1d@squarespace.com',
                ],
            ];

            DB::table('supervisor')->insert($supervisors);
    }
}
