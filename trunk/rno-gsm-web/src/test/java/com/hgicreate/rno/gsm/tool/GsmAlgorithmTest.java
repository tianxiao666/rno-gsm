package com.hgicreate.rno.gsm.tool;

import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.*;

public class GsmAlgorithmTest {

    @Test
    public void intermodulation() throws Exception {
        Map<String, Integer> map;
        map = GsmAlgorithm.intermodulation(512, 634);
        assertTrue(map.get("fim7") == 621);

        map = GsmAlgorithm.intermodulation(18, 93);
        assertTrue(map.get("fim5") == 93);
        assertTrue(map.get("fim7") == 18);

        map = GsmAlgorithm.intermodulation(8, 83);
        assertEquals(83, (long)map.get("fim5"));
        assertEquals(8, (long)map.get("fim7"));

        map = GsmAlgorithm.intermodulation(7, 57);
        assertEquals(82, (long)map.get("fim7"));
    }
}
