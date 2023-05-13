
var count = 1;
setInterval(function(){document.getElementById('radio' + count).checked = true;
count++;
if(count > 3){count = 1};
}, 5000);
{/* <div className={styles.basket}>
            <div className={styles.slides}>
              <input type="radio" className={styles.radio1} />
              <input type="radio" className={styles.radio2} />
              <input type="radio" className={styles.radio3} /> */}
 {/* <div className={styles.autonavi}>
              <div className={styles.auto1}></div>
              <div className={styles.auto2}></div>
              <div className={styles.auto3}></div>
            </div>
            </div>
            <div className={styles.manualnavi}>
              <label for="radio1" className={styles.manual}/>
              <label for="radio2" className={styles.manual}/>
              <label for="radio3" className={styles.manual}/>

            </div>
          </div>
          <script src="/slider-script.js"></script> */}