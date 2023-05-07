<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SecondMTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $second_marker =
            [
                [
                    'id' => 'STAFF057', 
                    'name' => 'VAL DAVIDDE', 
                    'field_of_study' => 'MARKETING', 
                    'email' => 'vdavidde1e@aol.com', 
                 ],
                 
                 [
                    'id' => 'STAFF058', 
                    'name' => 'SISSIE MACGIANY', 
                    'field_of_study' => 'SERVICES', 
                    'email' => 'smacgiany1f@twitpic.com', 
                 ],
                 
                 [
                    'id' => 'STAFF059', 
                    'name' => 'MARKUS HEMERIJK', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'mhemerijk1g@csmonitor.com', 
                 ],
                 
                 [
                    'id' => 'STAFF060', 
                    'name' => 'ANSEL MILLIONS', 
                    'field_of_study' => 'ACCOUNTING', 
                    'email' => 'amillions1h@edublogs.org', 
                 ],
                 
                 [
                    'id' => 'STAFF061', 
                    'name' => 'FRANCKLIN GIOVANNINI', 
                    'field_of_study' => 'LEGAL', 
                    'email' => 'fgiovannini1i@instagram.com', 
                 ],
                 
                 [
                    'id' => 'STAFF062', 
                    'name' => 'PRISCA ABELEVITZ', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'pabelevitz1j@yellowbook.com', 
                 ],
                 
                 [
                    'id' => 'STAFF063', 
                    'name' => 'CHRISTYNA JINKIN', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'cjinkin1k@devhub.com', 
                 ],
                 
                 [
                    'id' => 'STAFF064', 
                    'name' => 'ALGERNON TOMET', 
                    'field_of_study' => 'BUSINESS DEVELOPMENT', 
                    'email' => 'atomet1l@amazon.com', 
                 ],
                 
                 [
                    'id' => 'STAFF065', 
                    'name' => 'ALI JANICEK', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'ajanicek1m@exblog.jp', 
                 ],
                 
                 [
                    'id' => 'STAFF066', 
                    'name' => 'VASSILY COLLOP', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'vcollop1n@uol.com.br', 
                 ],
                 
                 [
                    'id' => 'STAFF067', 
                    'name' => 'CANDACE NANNIZZI', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'cnannizzi1o@altervista.org', 
                 ],
                 
                 [
                    'id' => 'STAFF068', 
                    'name' => 'OREN SEXTY', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'osexty1p@symantec.com', 
                 ],
                 
                 [
                    'id' => 'STAFF069', 
                    'name' => 'AUGUSTIN HOWLINGS', 
                    'field_of_study' => 'TRAINING', 
                    'email' => 'ahowlings1q@wiley.com', 
                 ],
                 
                 [
                    'id' => 'STAFF070', 
                    'name' => 'HALE YARD', 
                    'field_of_study' => 'SERVICES', 
                    'email' => 'hyard1r@blog.com', 
                 ],
                 
                 [
                    'id' => 'STAFF071', 
                    'name' => 'ANYA CUBBINELLI', 
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT', 
                    'email' => 'acubbinelli1s@wired.com', 
                 ],
                 
                 [
                    'id' => 'STAFF072', 
                    'name' => 'RHIANNA ADAM', 
                    'field_of_study' => 'SUPPORT', 
                    'email' => 'radam1t@dion.ne.jp', 
                 ],
                 
                 [
                    'id' => 'STAFF073', 
                    'name' => 'STANFORD BOOLEY', 
                    'field_of_study' => 'SALES', 
                    'email' => 'sbooley1u@about.com', 
                 ],
                 
                 [
                    'id' => 'STAFF074', 
                    'name' => 'TREY TITHACOTT', 
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT', 
                    'email' => 'ttithacott1v@prweb.com', 
                 ],
                 
                 [
                    'id' => 'STAFF075', 
                    'name' => 'JONI AGRONSKI', 
                    'field_of_study' => 'BUSINESS DEVELOPMENT', 
                    'email' => 'jagronski1w@boston.com', 
                 ],
                 
                 [
                    'id' => 'STAFF077', 
                    'name' => 'KELE DE BIASI', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'kde1x@xing.com', 
                 ],
                 
                 [
                    'id' => 'STAFF078', 
                    'name' => 'CELLO SPRAGUE', 
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT', 
                    'email' => 'csprague1y@ihg.com', 
                 ],
                 
                 [
                    'id' => 'STAFF079', 
                    'name' => 'CAREY PINEL', 
                    'field_of_study' => 'LEGAL', 
                    'email' => 'cpinel1z@ox.ac.uk', 
                 ],
                 
                 [
                    'id' => 'STAFF080', 
                    'name' => 'MAL STARBUCK', 
                    'field_of_study' => 'ACCOUNTING', 
                    'email' => 'mstarbuck20@imdb.com', 
                 ],
                 
                 [
                    'id' => 'STAFF081', 
                    'name' => 'BRIANO LENAGHEN', 
                    'field_of_study' => 'TRAINING', 
                    'email' => 'blenaghen21@bbb.org', 
                 ],
                 
                 [
                    'id' => 'STAFF082', 
                    'name' => 'TREY DURRAND', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'tdurrand22@google.it', 
                 ],
                 
                 [
                    'id' => 'STAFF083', 
                    'name' => 'BRICE ZIMMERMAN', 
                    'field_of_study' => 'MARKETING', 
                    'email' => 'bzimmerman23@forbes.com', 
                 ],
                 
                 [
                    'id' => 'STAFF084', 
                    'name' => 'MOISES ROTHERHAM', 
                    'field_of_study' => 'TRAINING', 
                    'email' => 'mrotherham24@un.org', 
                 ],
                 
                 [
                    'id' => 'STAFF085', 
                    'name' => 'LARINE TITFORD', 
                    'field_of_study' => 'PRODUCT MANAGEMENT', 
                    'email' => 'ltitford25@ning.com', 
                 ],
                 
                 [
                    'id' => 'STAFF087', 
                    'name' => 'RIVA HUDDLESTONE', 
                    'field_of_study' => 'SERVICES', 
                    'email' => 'rhuddlestone26@bigcartel.com', 
                 ],
                 
                 [
                    'id' => 'STAFF088', 
                    'name' => 'ARCHIBALDO SOUTHOUSE', 
                    'field_of_study' => 'MARKETING', 
                    'email' => 'asouthouse27@newsvine.com', 
                 ],
                 
                 [
                    'id' => 'STAFF089', 
                    'name' => 'OLAG CASER', 
                    'field_of_study' => 'BUSINESS DEVELOPMENT', 
                    'email' => 'ocaser28@constantcontact.com', 
                 ],
                 
                 [
                    'id' => 'STAFF090', 
                    'name' => 'COBBY JONES', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'cjones29@unicef.org', 
                 ],
                 
                 [
                    'id' => 'STAFF091', 
                    'name' => 'ARDELLE STELLJES', 
                    'field_of_study' => 'PRODUCT MANAGEMENT', 
                    'email' => 'astelljes2a@photobucket.com', 
                 ],
                 
                 [
                    'id' => 'STAFF092', 
                    'name' => 'KELSEY MORL', 
                    'field_of_study' => 'ACCOUNTING', 
                    'email' => 'kmorl2b@jimdo.com', 
                 ],
                 
                 [
                    'id' => 'STAFF093', 
                    'name' => 'TOBEY CHERRISON', 
                    'field_of_study' => 'LEGAL', 
                    'email' => 'tcherrison2c@wordpress.org', 
                 ],
                 
                 [
                    'id' => 'STAFF094', 
                    'name' => 'BUDDIE WILLCOCKS', 
                    'field_of_study' => 'BUSINESS DEVELOPMENT', 
                    'email' => 'bwillcocks2d@youtube.com', 
                 ],
                 
                 [
                    'id' => 'STAFF095', 
                    'name' => 'RYON LEYBURN', 
                    'field_of_study' => 'HUMAN RESOURCES', 
                    'email' => 'rleyburn2e@e-recht24.de', 
                 ],
                 
                 [
                    'id' => 'STAFF096', 
                    'name' => 'DAISEY SIMON', 
                    'field_of_study' => 'BUSINESS DEVELOPMENT', 
                    'email' => 'dsimon2f@google.co.jp', 
                 ],
                 
                 [
                    'id' => 'STAFF097', 
                    'name' => 'ARDITH HOUSEMAN', 
                    'field_of_study' => 'TRAINING', 
                    'email' => 'ahouseman2g@scientificamerican.com', 
                 ],
                 
                 [
                    'id' => 'STAFF098', 
                    'name' => 'MORRY FRANKCOMBE', 
                    'field_of_study' => 'LEGAL', 
                    'email' => 'mfrankcombe2h@soup.io', 
                 ],
                 
                 [
                    'id' => 'STAFF099', 
                    'name' => 'MARCELA LOWNDSBOROUGH', 
                    'field_of_study' => 'SERVICES', 
                    'email' => 'mlowndsborough2i@apache.org', 
                 ],
                 
                 [
                    'id' => 'STAFF100', 
                    'name' => 'GEORAS MOUATT', 
                    'field_of_study' => 'SALES', 
                    'email' => 'gmouatt2j@nature.com', 
                 ],
                 
                 [
                    'id' => 'STAFF101', 
                    'name' => 'GIFFY TWEDDELL', 
                    'field_of_study' => 'SERVICES', 
                    'email' => 'gtweddell2k@dion.ne.jp', 
                 ],
                 
                 [
                    'id' => 'STAFF102', 
                    'name' => 'GABRIELLO RESUN', 
                    'field_of_study' => 'SALES', 
                    'email' => 'gresun2l@hc360.com', 
                 ],
                 
                 [
                    'id' => 'STAFF103', 
                    'name' => 'DORRI VILLIERS', 
                    'field_of_study' => 'RESEARCH AND DEVELOPMENT', 
                    'email' => 'dvilliers2m@mapy.cz', 
                 ],
                 
                 [
                    'id' => 'STAFF104', 
                    'name' => 'GWENETH KILMISTER', 
                    'field_of_study' => 'ACCOUNTING', 
                    'email' => 'gkilmister2n@nytimes.com', 
                 ],
                 
                 [
                    'id' => 'STAFF105', 
                    'name' => 'DILLY COMETTOI', 
                    'field_of_study' => 'LEGAL', 
                    'email' => 'dcomettoi2o@devhub.com', 
                 ],
                 
                 [
                    'id' => 'STAFF106', 
                    'name' => 'WILFRED OHM', 
                    'field_of_study' => 'SALES', 
                    'email' => 'wohm2p@psu.edu', 
                 ],
                 
                 [
                    'id' => 'STAFF107', 
                    'name' => 'NICKY CLEMENTEL', 
                    'field_of_study' => 'ENGINEERING', 
                    'email' => 'nclementel2q@examiner.com', 
                 ],
                 
                 [
                    'id' => 'STAFF108', 
                    'name' => 'ROSANNA WARRY', 
                    'field_of_study' => 'ACCOUNTING', 
                    'email' => 'rwarry2r@japanpost.jp', 
                 ],
            ];

        DB::table('secondmarker')->insert($second_marker);
    }
}
