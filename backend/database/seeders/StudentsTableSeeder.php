<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Student =
            [
                [
                    'tp_number' => 'TP074070', 
                    'name' => 'CARMINE MCAVINCHEY', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'SOFTWARE ENGINEERING', 
                    'email' => 'tp074070@mail.apu.edu.my', 
                    'title' => 'Quality-focused fresh-thinking analyzer', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP085650', 
                    'name' => 'WALLIE CLAMP', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'SOFTWARE ENGINEERING', 
                    'email' => 'wclamp1@pen.io', 
                    'title' => 'Optional homogeneous synergy', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP091820', 
                    'name' => 'PAOLINA SCUFFHAM', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'DATA ANALYTICS', 
                    'email' => 'pscuffham2@vistaprint.com', 
                    'title' => 'Reduced real-time functionalities', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP069500', 
                    'name' => 'JANETA GOATER', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'ARTIFICIAL INTELLIGENCE', 
                    'email' => 'jgoater3@webs.com', 
                    'title' => 'Realigned 3rd generation workforce', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP096820', 
                    'name' => 'EBONY SPRIGGEN', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'SOFTWARE ENGINEERING', 
                    'email' => 'espriggen4@desdev.cn', 
                    'title' => 'Fundamental responsive info-mediaries', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP037150', 
                    'name' => 'RICHIE WHYMARK', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'DATA ANALYTICS', 
                    'email' => 'rwhymark5@technorati.com', 
                    'title' => 'Visionary heuristic application', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP006440', 
                    'name' => 'SERENE FISHLEE', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'SOFTWARE ENGINEERING', 
                    'email' => 'sfishlee6@phoca.cz', 
                    'title' => 'Intuitive motivating time-frame', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP043970', 
                    'name' => 'MARION MABSON', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'SOFTWARE ENGINEERING', 
                    'email' => 'mmabson7@gnu.org', 
                    'title' => 'Multi-layered zero tolerance website', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => '', 
                    'secondmarker' => '', 
                 ],
                 
                 [
                    'tp_number' => 'TP012990', 
                    'name' => 'JONIS ELKS', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'ARTIFICIAL INTELLIGENCE', 
                    'email' => 'jelks8@pagesperso-orange.fr', 
                    'title' => 'Multi-lateral dynamic conglomeration', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP062740', 
                    'name' => 'CHICKY EYTEL', 
                    'field_of_study' => 'INFORMATION TECHNOLOGY', 
                    'specialism' => 'ARTIFICIAL INTELLIGENCE', 
                    'email' => 'ceytel9@purevolume.com', 
                    'title' => 'Multi-tiered eco-centric infrastructure', 
                    'projectmanager' => 'STAFF001', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP075710', 
                    'name' => 'ELYN BECCONSALL', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'AUTOMATION CREATION', 
                    'email' => 'ebecconsall0@tripod.com', 
                    'title' => 'Up-sized static customer loyalty', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP015110', 
                    'name' => 'DRUCY FIDDIMAN', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'MACHINE MANIPULATION', 
                    'email' => 'dfiddiman1@1688.com', 
                    'title' => 'Total neutral time-frame', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP027460', 
                    'name' => 'ENID BECKINGHAM', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'MACHINE MANIPULATION', 
                    'email' => 'ebeckingham2@ox.ac.uk', 
                    'title' => 'Total foreground task-force', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP036200', 
                    'name' => 'ELIOT TALKINGTON', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'AUTOMATION CREATION', 
                    'email' => 'etalkington3@indiegogo.com', 
                    'title' => 'Multi-layered asynchronous capacity', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP093650', 
                    'name' => 'RALEIGH ADDINGTON', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'ROBOTICS', 
                    'email' => 'raddington4@reverbnation.com', 
                    'title' => 'Multi-channelled zero tolerance matrices', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP045320', 
                    'name' => 'HOLT CLOWLEY', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'MACHINE MANIPULATION', 
                    'email' => 'hclowley5@weebly.com', 
                    'title' => 'Adaptive methodical moratorium', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP052410', 
                    'name' => 'DORTHY HEINTZSCH', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'ROBOTICS', 
                    'email' => 'dheintzsch6@surveymonkey.com', 
                    'title' => 'Down-sized well-modulated access', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP084010', 
                    'name' => 'DORENE ARMATIDGE', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'MACHINE MANIPULATION', 
                    'email' => 'darmatidge7@google.pl', 
                    'title' => 'Public-key empowering internet solution', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP011490', 
                    'name' => 'THORNY TOMMEI', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'MACHINE MANIPULATION', 
                    'email' => 'ttommei8@tuttocitta.it', 
                    'title' => 'Streamlined client-server capability', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP002470', 
                    'name' => 'LONEE SPURGE', 
                    'field_of_study' => 'ENGINEERING', 
                    'specialism' => 'ROBOTICS', 
                    'email' => 'lspurge9@state.tx.us', 
                    'title' => 'Organized zero administration open system', 
                    'projectmanager' => 'STAFF002', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP074430', 
                    'name' => 'TRICIA STUCHBERRY', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'INTERIOR DESIGN', 
                    'email' => 'tstuchberry0@51.la', 
                    'title' => 'Persevering multimedia benchmark', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP064850', 
                    'name' => 'BERT SWORD', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'GRAPHIC DESIGN', 
                    'email' => 'bsword1@tiny.cc', 
                    'title' => 'User-centric mission-critical definition', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP090190', 
                    'name' => 'BABBETTE WYLLT', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'GRAPHIC DESIGN', 
                    'email' => 'bwyllt2@tripadvisor.com', 
                    'title' => 'Switchable intangible local area network', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP022190', 
                    'name' => 'WHITNEY BINGLEY', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'GRAPHIC DESIGN', 
                    'email' => 'wbingley3@dell.com', 
                    'title' => 'Multi-layered contextually-based software', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP045440', 
                    'name' => 'VIRGINIA DILLISTON', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'INTERIOR DESIGN', 
                    'email' => 'vdilliston4@yahoo.co.jp', 
                    'title' => 'Total multimedia database', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP063350', 
                    'name' => 'VINNIE SLYFORD', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'GRAPHIC DESIGN', 
                    'email' => 'vslyford5@wufoo.com', 
                    'title' => 'Innovative interactive artificial intelligence', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP097990', 
                    'name' => 'BENTON YEOMANS', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'EXTERIOR DESIGN', 
                    'email' => 'byeomans6@va.gov', 
                    'title' => 'Monitored coherent framework', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP026710', 
                    'name' => 'ALEJANDRO LOUGHREN', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'EXTERIOR DESIGN', 
                    'email' => 'aloughren7@sphinn.com', 
                    'title' => 'Distributed didactic model', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP038840', 
                    'name' => 'ROSY LODOVICHI', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'INTERIOR DESIGN', 
                    'email' => 'rlodovichi8@hc360.com', 
                    'title' => 'Proactive attitude-oriented migration', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP049460', 
                    'name' => 'MIC CHINNOCK', 
                    'field_of_study' => 'MEDIA AND DESIGN', 
                    'specialism' => 'EXTERIOR DESIGN', 
                    'email' => 'mchinnock9@usgs.gov', 
                    'title' => 'De-engineered exuding functionalities', 
                    'projectmanager' => 'STAFF003', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP044930', 
                    'name' => 'STEPHAN PYKETT', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'SOCIALOGY', 
                    'email' => 'spykett0@yandex.ru', 
                    'title' => 'Team-oriented context-sensitive array', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP082360', 
                    'name' => 'LYNNELLE BIAGGIONI', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'SOCIALOGY', 
                    'email' => 'lbiaggioni1@reuters.com', 
                    'title' => 'Multi-channelled local strategy', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP045260', 
                    'name' => 'TANDI WILBUD', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'HUMAN BEHAVIORISM', 
                    'email' => 'twilbud2@ucoz.com', 
                    'title' => 'Networked directional matrix', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP073700', 
                    'name' => 'MARION LARGAN', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'SOCIALOGY', 
                    'email' => 'mlargan3@elegantthemes.com', 
                    'title' => 'Fundamental local contingency', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP062720', 
                    'name' => 'ERNESTINE LORNE', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'SOCIALOGY', 
                    'email' => 'elorne4@europa.eu', 
                    'title' => 'Innovative fault-tolerant matrix', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP060030', 
                    'name' => 'JAKE TIDMARSH', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'HUMAN BEHAVIORISM', 
                    'email' => 'jtidmarsh5@si.edu', 
                    'title' => 'Enhanced national neural-net', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP012370', 
                    'name' => 'MADELENA DELUCIA', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'SOCIALOGY', 
                    'email' => 'mdelucia6@nymag.com', 
                    'title' => 'Intuitive 4th generation focus group', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP093090', 
                    'name' => 'SARA-ANN PRETSELL', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'HUMAN BEHAVIORISM', 
                    'email' => 'spretsell7@omniture.com', 
                    'title' => 'Cross-group secondary portal', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP079920', 
                    'name' => 'YANKEE KEPPY', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'HUMAN BEHAVIORISM', 
                    'email' => 'ykeppy8@domainmarket.com', 
                    'title' => 'Triple-buffered object-oriented portal', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP016310', 
                    'name' => 'CELESTA CUXSON', 
                    'field_of_study' => 'PSYCHOLOGY', 
                    'specialism' => 'MENTAL WELLNESS', 
                    'email' => 'ccuxson9@baidu.com', 
                    'title' => 'Polarised national knowledge user', 
                    'projectmanager' => 'STAFF004', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP093720', 
                    'name' => 'EZMERALDA KEELE', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'INVESTMENT ANALYSIS', 
                    'email' => 'ekeele0@sphinn.com', 
                    'title' => 'Implemented logistical project', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP026940', 
                    'name' => 'NANON SPEDRONI', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'FINANCIAL CONSULTANCY', 
                    'email' => 'nspedroni1@rambler.ru', 
                    'title' => 'Centralized interactive archive', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP008380', 
                    'name' => 'ARLINA ANTRUM', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'CRYPTOCURRENCY', 
                    'email' => 'aantrum2@xing.com', 
                    'title' => 'Mandatory attitude-oriented open system', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP029830', 
                    'name' => 'ALDO BAYNE', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'FINANCIAL CONSULTANCY', 
                    'email' => 'abayne3@psu.edu', 
                    'title' => 'Multi-lateral 24/7 data-warehouse', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP017540', 
                    'name' => 'ZANE LETCHFORD', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'INVESTMENT ANALYSIS', 
                    'email' => 'zletchford4@vk.com', 
                    'title' => 'Configurable 4th generation contingency', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP068550', 
                    'name' => 'GEORGETA KABSCH', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'INVESTMENT ANALYSIS', 
                    'email' => 'gkabsch5@tinypic.com', 
                    'title' => 'Customer-focused static solution', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP080360', 
                    'name' => 'JOHNNA ROWTHORN', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'FINANCIAL CONSULTANCY', 
                    'email' => 'jrowthorn6@washingtonpost.com', 
                    'title' => 'Expanded demand-driven software', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP063090', 
                    'name' => 'MARILEE WHITFIELD', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'CRYPTOCURRENCY', 
                    'email' => 'mwhitfield7@usa.gov', 
                    'title' => 'Innovative user-facing service-desk', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP044510', 
                    'name' => 'ELFREDA GANTLEY', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'INVESTMENT ANALYSIS', 
                    'email' => 'egantley8@jimdo.com', 
                    'title' => 'Expanded secondary contingency', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP075120', 
                    'name' => 'ELEANORA MULCOCK', 
                    'field_of_study' => 'BANKING AND FINANCE', 
                    'specialism' => 'FINANCIAL CONSULTANCY', 
                    'email' => 'emulcock9@huffingtonpost.com', 
                    'title' => 'Profound grid-enabled project', 
                    'projectmanager' => 'STAFF005', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP033200', 
                    'name' => 'BEARNARD FREDI', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'INFORMATIVE ADVISORY', 
                    'email' => 'bfredi0@friendfeed.com', 
                    'title' => 'Total explicit archive', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP089010', 
                    'name' => 'FREDRIC TOP', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'ORGANIZATION MANAGEMENT', 
                    'email' => 'ftop1@plala.or.jp', 
                    'title' => 'Compatible zero tolerance support', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP096710', 
                    'name' => 'WEST LAW', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'INFORMATIVE ADVISORY', 
                    'email' => 'wlaw2@un.org', 
                    'title' => 'Adaptive secondary attitude', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP038760', 
                    'name' => 'RIK MUNDIE', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'ENTREPRENEURSHIP', 
                    'email' => 'rmundie3@posterous.com', 
                    'title' => 'Self-enabling user-facing info-mediaries', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP084410', 
                    'name' => 'BUCK GALLICHAN', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'INFORMATIVE ADVISORY', 
                    'email' => 'bgallichan4@pen.io', 
                    'title' => 'Virtual directional time-frame', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP009990', 
                    'name' => 'NOLA TIMEBY', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'INFORMATIVE ADVISORY', 
                    'email' => 'ntimeby5@amazon.co.jp', 
                    'title' => 'Multi-tiered homogeneous analyzer', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP054830', 
                    'name' => 'TORRANCE SEVIOR', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'ENTREPRENEURSHIP', 
                    'email' => 'tsevior6@studiopress.com', 
                    'title' => 'Expanded leading edge moratorium', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP067130', 
                    'name' => 'GUSTAVO STENETT', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'ORGANIZATION MANAGEMENT', 
                    'email' => 'gstenett7@opensource.org', 
                    'title' => 'Decentralized eco-centric hierarchy', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP052550', 
                    'name' => 'BETTA AIME', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'INFORMATIVE ADVISORY', 
                    'email' => 'baime8@digg.com', 
                    'title' => 'Digitized uniform Graphical User Interface', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
                 
                 [
                    'tp_number' => 'TP035710', 
                    'name' => 'MELLISENT RENZO', 
                    'field_of_study' => 'BUSINESS', 
                    'specialism' => 'ORGANIZATION MANAGEMENT', 
                    'email' => 'mrenzo9@wikimedia.org', 
                    'title' => 'Balanced optimizing orchestration', 
                    'projectmanager' => 'STAFF006', 
                    'supervisor' => 'Not Assigned', 
                    'secondmarker' => 'Not Assigned', 
                 ],
            ];
        DB::table('students')->insert($Student);
    }
}
