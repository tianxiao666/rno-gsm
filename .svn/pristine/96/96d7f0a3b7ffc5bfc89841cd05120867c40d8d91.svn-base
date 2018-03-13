package com.hgicreate.rno.gsm.tool;

import java.util.HashMap;
import java.util.Map;

/**
 * GSM优化通用算法
 */
public class GsmAlgorithm {

    /**
     * 频点互调算法
     * @param fp1 频点1
     * @param fp2 频点2
     * @return fim5 五阶互调干扰频点, fim7 七阶互调干扰频点
     */
    public static Map<String, Integer> intermodulation(int fp1, int fp2) {
        Map<String, Integer> map = new HashMap<>();

        if (fp2 < fp1) {
            int tmp = fp2;
            fp2 = fp1;
            fp1 = tmp;
        }

        double f1, f2, fim5, fim7;
        int fim5Fp, fim7Fp;

        if (fp1 < 512) {
            // GSM900 频段算法
            f1 = 935 + 0.2 * fp1;
            f2 = 935 + 0.2 * fp2;

            fim5 = 3 * f1 - 2 * f2;
            fim7 = 4 * f1 - 3 * f2;

            fim5Fp = (int)Math.round((fim5 - 890) / 0.2);
            fim7Fp = (int)Math.round((fim7 - 890) / 0.2);
        } else {
            // GSM1800 频段算法
            f1 = 1805 + 0.2 * (fp1 - 511);
            f2 = 1805 + 0.2 * (fp2 - 511);

            fim5 = 3 * f1 - 2 * f2;
            fim7 = 4 * f1 - 3 * f2;

            fim5Fp = (int)Math.round((fim5 - 1710) / 0.2) + 511;
            fim7Fp = (int)Math.round((fim7 - 1710) / 0.2) + 511;
        }

        map.put("fim5", fim5Fp);
        map.put("fim7", fim7Fp);

        return map;
    }
}
