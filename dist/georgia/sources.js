const DEFAULTS = ["cctv_4930"];
const MANUAL_CACHE_BUST = true;
const CAMERAS = {
    "Metro Atlanta": [{
        "id": "cctv_46479",
        "url": "/georgiasnapshots/CHER-CAM-102.jpg",
        "name": "SR 140 : Scott Rd"
    }, {
        "id": "cctv_13666",
        "url": "/georgiasnapshots/DEK-CAM-312.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Clifton Springs Rd / Columbia Dr"
    }, {
        "id": "cctv_5006",
        "stream": "/georgiavss2/gdot-cam-239.stream/playlist.m3u8",
        "name": "I-285 : N OF NORTHLAKE PKWY"
    }, {
        "id": "cctv_13309",
        "url": "/georgiasnapshots/DEK-CAM-038.jpg",
        "name": "SR 12 (Covington Hwy) : Miller Rd"
    }, {
        "id": "cctv_10309",
        "url": "/georgiasnapshots/GWIN-CAM-135.jpg",
        "name": "SUGARLOAF PKWY : SR 120"
    }, {
        "id": "cctv_10408",
        "url": "/georgiasnapshots/GWIN-CAM-249.jpg",
        "name": "SR 140 : Brook Hollow Parkway"
    }, {
        "id": "cctv_15963",
        "url": "/georgiasnapshots/GDOT-CAM-157.jpg",
        "name": "I-85 : S OF L-VILLE/SUWANEE RD"
    }, {
        "id": "cctv_6862",
        "stream": "/georgiavss1/cher-cam-026.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Concord Ln / Fitchburg Dr"
    }, {
        "id": "cctv_5408",
        "stream": "/georgiavss2/gdot-cam-097.stream/playlist.m3u8",
        "name": "75/85 : WILLIAMS ST"
    }, {
        "id": "cctv_10296",
        "url": "/georgiasnapshots/GWIN-CAM-122.jpg",
        "name": "SR 13 / US 23 : LANGFORD RD"
    }, {
        "id": "cctv_10374",
        "url": "/georgiasnapshots/GWIN-CAM-200.jpg",
        "name": "SR 324 : SR 124"
    }, {
        "id": "cctv_4963",
        "stream": "/georgiavss2/gdot-cam-002.stream/playlist.m3u8",
        "name": "75/85 : S OF LANGFORD PKWY"
    }, {
        "id": "cctv_16166",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-13.6.jpg",
        "name": "SR 20 : BROOKE PARK DR"
    }, {
        "id": "cctv_5345",
        "stream": "/georgiavss4/gdot-cam-842.stream/playlist.m3u8",
        "name": "GA 400 : HAYNES BR RD"
    }, {
        "id": "cctv_15172",
        "url": "/georgiasnapshots/MAR-CAM-103.jpg",
        "name": "SR 3/Cobb Pkwy : Allgood Rd"
    }, {
        "id": "cctv_16309",
        "url": "/georgiasnapshots/COBB-CAM-115.jpg",
        "name": "Cumberland Blvd : Cobb Galleria Pkwy"
    }, {
        "id": "cctv_16255",
        "url": "/georgiasnapshots/ATL-CAM-985.jpg",
        "name": "Capitol Ave : Capitol Square"
    }, {
        "id": "cctv_12944",
        "url": "/georgiasnapshots/DOUG-CAM-005.jpg",
        "name": "Chapel Hill Rd : Golf Ridge Blvd"
    }, {
        "id": "cctv_10441",
        "url": "/georgiasnapshots/CLAY-CAM-025.jpg",
        "name": "SR 3 / Tara Blvd : Fayetteville Rd/ Flint River Rd"
    }, {
        "id": "cctv_32966",
        "url": "/georgiasnapshots/COJC-CAM-660.jpg",
        "name": "SR 120 (Kimball Bridge Rd) : Webb Bridge Way/Milton Oaks Dr"
    }, {
        "id": "cctv_5060",
        "stream": "/georgiavss3/gdot-cam-324.stream/playlist.m3u8",
        "name": "I-20 : EAST OF FULTON INDUS"
    }, {
        "id": "cctv_10376",
        "url": "/georgiasnapshots/GWIN-CAM-202.jpg",
        "name": "SR 324 : OLD FOUNTAIN RD / JIM MOORE RD"
    }, {
        "id": "cctv_10401",
        "url": "/georgiasnapshots/GWIN-CAM-242.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : McGINNIS FERRY RD"
    }, {
        "id": "cctv_4980",
        "stream": "/georgiavss2/gdot-cam-215.stream/playlist.m3u8",
        "name": "I-285 : GLENRIDGE DR"
    }, {
        "id": "cctv_46499",
        "url": "http://navigator-c2c.dot.ga.gov/snapshota/ATL-CAM-992.jpg",
        "name": "DeKalb Ave NE : Krog St"
    }, {
        "id": "cctv_10233",
        "url": "/georgiasnapshots/GWIN-CAM-059.jpg",
        "name": "SR 124 : N of JACKSON ST / NEW HOPE RD"
    }, {
        "id": "cctv_16060",
        "url": "/georgiasnapshots/GDOT-CAM-155.jpg",
        "name": "I-85 : N OF OLD PEACHTREE RD"
    }, {
        "id": "cctv_16091",
        "url": "/georgiasnapshots/ATL-CAM-972.jpg",
        "name": "Peachtree St : 5th Street"
    }, {
        "id": "cctv_16084",
        "stream": "/georgiavss1/doug-cam-089.stream/playlist.m3u8",
        "name": "SR 6 : Skyview Dr / Oak Ridge Rd"
    }, {
        "id": "cctv_13334",
        "stream": "/georgiavss1/dek-cam-013.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Harcourt Dr"
    }, {
        "id": "cctv_9039",
        "url": "/georgiasnapshots/ROSWELL-CAM-326.jpg",
        "name": "SR 9 : Upper Hembree Rd/Northmeadow Pkwy"
    }, {
        "id": "cctv_7204",
        "stream": "/georgiavss1/atl-cam-032.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : 26th Street"
    }, {
        "id": "cctv_4977",
        "stream": "/georgiavss2/gdot-cam-212.stream/playlist.m3u8",
        "name": "I-285 : W OF ROSWELL RD"
    }, {
        "id": "cctv_13766",
        "url": "/georgiasnapshots/ATL-CAM-610.jpg",
        "name": "10th St : Monroe Dr"
    }, {
        "id": "cctv_5084",
        "stream": "/georgiavss3/gdot-cam-346.stream/playlist.m3u8",
        "name": "I-20 : WINDSOR ST"
    }, {
        "id": "cctv_5073",
        "stream": "/georgiavss3/gdot-cam-336.stream/playlist.m3u8",
        "name": "I-20 : MLK JR DR"
    }, {
        "id": "cctv_46458",
        "url": "/georgiasnapshots/FULT-CAM-038.jpg",
        "name": "GA 14 Alt/ South Fulton Pkwy : SR 154/ Cascade Palmetto Hwy"
    }, {
        "id": "cctv_7337",
        "url": "/georgiasnapshots/COBB-CAM-241.jpg",
        "name": "SR 360/Powder Springs Rd : Macland Rd"
    }, {
        "id": "cctv_32578",
        "url": "/georgiasnapshots/DUN-CAM-102.jpg",
        "name": "Ashford Dunwoody Rd : Ashwood Pkwy/Ashford Pkwy"
    }, {
        "id": "cctv_5174",
        "stream": "/georgiavss3/gdot-cam-445.stream/playlist.m3u8",
        "name": "I-75 : N OF HICKORY GROVE RD"
    }, {
        "id": "cctv_15465",
        "stream": "/georgiavss3/gdot-cam-558.stream/playlist.m3u8",
        "name": "I-575 : TOWNE LAKE PKY"
    }, {
        "id": "cctv_5067",
        "stream": "/georgiavss3/gdot-cam-330.stream/playlist.m3u8",
        "name": "I-20 : W OF HOLMES DR"
    }, {
        "id": "cctv_10183",
        "url": "/georgiasnapshots/GWIN-CAM-005.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Killian Hill Rd / Indian Trail Lilburn Rd"
    }, {
        "id": "cctv_7345",
        "url": "/georgiasnapshots/COBB-CAM-311.jpg",
        "name": "Bells Ferry Rd : I-575"
    }, {
        "id": "cctv_46292",
        "url": "/georgiasnapshots/BROK-CAM-079.jpg",
        "name": "Ashford Dunwoody Rd : Lake Hearn"
    }, {
        "id": "cctv_32927",
        "url": "/georgiasnapshots/WALT-CAM-004",
        "name": "SR 10 : Tom Brewer"
    }, {
        "id": "cctv_5401",
        "stream": "/georgiavss4/gdot-cam-963.stream/playlist.m3u8",
        "name": "I-285 : S OF SOUTH ATLANTA RD"
    }, {
        "id": "cctv_5171",
        "stream": "/georgiavss3/gdot-cam-442.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD"
    }, {
        "id": "cctv_13107",
        "url": "/georgiasnapshots/GWIN-CAM-274.jpg",
        "name": "SR 20 : Azalea Dr"
    }, {
        "id": "cctv_9084",
        "stream": "/georgiavss1/alph-cam-016.stream/playlist.m3u8",
        "name": "SR 9 : Wills Rd"
    }, {
        "id": "cctv_13760",
        "url": "/georgiasnapshots/SMYR-CAM-009.jpg",
        "name": "Atlanta Rd : Concord Rd/Spring Rd"
    }, {
        "id": "cctv_15388",
        "stream": "/georgiavss3/gdot-cam-544.stream/playlist.m3u8",
        "name": "I-575 : BELLS FERRY RD ENT"
    }, {
        "id": "cctv_13253",
        "stream": "/georgiavss4/gdot-cam-683.stream/playlist.m3u8",
        "name": "JONESBORO RD : EXPRESS RAMP"
    }, {
        "id": "cctv_10390",
        "url": "/georgiasnapshots/GWIN-CAM-224.jpg",
        "name": "INDIAN TRAIL LILBURN RD : DICKENS RD"
    }, {
        "id": "cctv_15189",
        "url": "/georgiasnapshots/MAR-CAM-300.jpg",
        "name": "SR 360 / Powder Springs St : Sandtown Rd"
    }, {
        "id": "cctv_12893",
        "url": "/georgiasnapshots/COBB-CAM-020.jpg",
        "name": "Barrett Pkwy : Burnt Hickory Rd"
    }, {
        "id": "cctv_10380",
        "url": "/georgiasnapshots/GWIN-CAM-206.jpg",
        "name": "DACULA RD : OLD PEACHTREE RD"
    }, {
        "id": "cctv_10220",
        "url": "/georgiasnapshots/GWIN-CAM-046.jpg",
        "name": "US 29 : JOHNSON RD"
    }, {
        "id": "cctv_5309",
        "stream": "/georgiavss4/gdot-cam-783.stream/playlist.m3u8",
        "name": "US 78 : E OF IDLEWOOD RD"
    }, {
        "id": "cctv_13104",
        "url": "/georgiasnapshots/GWIN-CAM-277.jpg",
        "name": "SR 20 : Plains Court Way"
    }, {
        "id": "cctv_5310",
        "stream": "/georgiavss4/gdot-cam-784.stream/playlist.m3u8",
        "name": "US 78 : MOUNTAIN INDUST BLVD"
    }, {
        "id": "cctv_5188",
        "stream": "/georgiavss2/gdot-cam-049.stream/playlist.m3u8",
        "name": "SR 166 : GREENBRIAR PKWY"
    }, {
        "id": "cctv_5251",
        "stream": "/georgiavss4/gdot-cam-653.stream/playlist.m3u8",
        "name": "I-285 : WEST EDGE OF TUNNEL"
    }, {
        "id": "cctv_5048",
        "stream": "/georgiavss2/gdot-cam-028.stream/playlist.m3u8",
        "name": "I-75 : S OF PACES FERRY RD"
    }, {
        "id": "cctv_13612",
        "stream": "/georgiavss1/dek-cam-017.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : I-285 SB Ramp"
    }, {
        "id": "cctv_16238",
        "url": "/georgiasnapshots/COJC-CAM-615.jpg",
        "name": "Jones Bridge Rd : Buice Rd"
    }, {
        "id": "cctv_10511",
        "url": "/georgiasnapshots/CLAY-CAM-254.jpg",
        "name": "MT ZION RD : CORPORATE CENTER DR"
    }, {
        "id": "cctv_10402",
        "url": "/georgiasnapshots/GWIN-CAM-243.jpg",
        "name": "SR 120 : ATKINSON RD"
    }, {
        "id": "cctv_32934",
        "url": "/georgiasnapshots/DUN-CAM-121.jpg",
        "name": "Perimeter Center Pky : Goldkist"
    }, {
        "id": "cctv_4993",
        "stream": "/georgiavss2/gdot-cam-227.stream/playlist.m3u8",
        "name": "I-285 : W OF PTREE INDSTRL"
    }, {
        "id": "cctv_16215",
        "stream": "/georgiavss1/cojc-cam-240.stream/playlist.m3u8",
        "name": "SR 141 : Grove Point Rd/St Ives County Club Pkwy"
    }, {
        "id": "cctv_13143",
        "url": "/georgiasnapshots/ROSWELL-CAM-128.jpg",
        "name": "SR 140 : Market Blvd"
    }, {
        "id": "cctv_10225",
        "url": "/georgiasnapshots/GWIN-CAM-051.jpg",
        "name": "SR 124 : SNELLVILLE PAVILION"
    }, {
        "id": "cctv_10495",
        "url": "/georgiasnapshots/CLAY-CAM-180.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : Daniel Dr"
    }, {
        "id": "cctv_13366",
        "stream": "/georgiavss4/gdot-cam-760.stream/playlist.m3u8",
        "name": "I-75 : RAMP FROM SR 155"
    }, {
        "id": "cctv_13369",
        "stream": "/georgiavss1/brok-cam-206.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : SR 13 / Buford Hwy"
    }, {
        "id": "cctv_13363",
        "url": "/georgiasnapshots/ROCK-CAM-105.jpg",
        "name": "SR 138 / McDonough Rd : Stockbridge Hwy / Lakefield Dr"
    }, {
        "id": "cctv_12904",
        "url": "/georgiasnapshots/COBB-CAM-316.jpg",
        "name": "Chastain Rd : Chastain Meadows Pkwy"
    }, {
        "id": "cctv_5215",
        "stream": "/georgiavss3/gdot-cam-552.stream/playlist.m3u8",
        "name": "I-85 : N DRUID HILLS RAMP METER"
    }, {
        "id": "cctv_15972",
        "stream": "/georgiavss2/gdot-cam-170.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 20"
    }, {
        "id": "cctv_13608",
        "stream": "/georgiavss1/atl-cam-205.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Charles Allen Dr / Parkway"
    }, {
        "id": "cctv_46444",
        "url": "/georgiasnapshots/FULT-CAM-021.jpg",
        "name": "GA 138/ Jonesboro Rd : Buffington Rd"
    }, {
        "id": "cctv_13581",
        "url": "/georgiasnapshots/DOUG-CAM-085.jpg",
        "name": "SR 6 : South Blairs Bridge Rd / Interstate West Pkwy"
    }, {
        "id": "cctv_5186",
        "stream": "/georgiavss2/gdot-cam-047.stream/playlist.m3u8",
        "name": "I-75 : N OF CUMBERLAND BLVD"
    }, {
        "id": "cctv_5378",
        "stream": "/georgiavss4/gdot-cam-941.stream/playlist.m3u8",
        "name": "I-285 : N OF MT GILEAD RD"
    }, {
        "id": "cctv_13052",
        "url": "/georgiasnapshots/COBB-CAM-025.jpg",
        "name": "SR 280/South Cobb Dr : Pearl St"
    }, {
        "id": "cctv_13673",
        "stream": "/georgiavss1/atl-cam-215.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Springdale Rd"
    }, {
        "id": "cctv_10430",
        "url": "/georgiasnapshots/CLAY-CAM-007.jpg",
        "name": "Main St (JB) : Spring St"
    }, {
        "id": "cctv_15431",
        "stream": "/georgiavss2/gdot-cam-309.stream/playlist.m3u8",
        "name": "I-20 : Lee Rd"
    }, {
        "id": "cctv_15568",
        "stream": "/georgiavss3/gdot-cam-465.stream/playlist.m3u8",
        "name": "I-75 : WINDY HILL RD"
    }, {
        "id": "cctv_10300",
        "url": "/georgiasnapshots/GWIN-CAM-126.jpg",
        "name": "SR 13 / US 23 : SR 120 / DULUTH HWY"
    }, {
        "id": "cctv_46277",
        "url": "/georgiasnapshots/GWIN-CAM-213.jpg",
        "name": "PLEASANT HILL RD : ASHLEY LN"
    }, {
        "id": "cctv_15336",
        "url": "/georgiasnapshots/ATL-CAM-952.jpg",
        "name": "MLK Jr Dr : Forsyth St"
    }, {
        "id": "cctv_15984",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.5.jpg",
        "name": "I-20 : EAST OF EVANS MILL RD"
    }, {
        "id": "cctv_6852",
        "url": "/georgiasnapshots/ATL-CAM-056.jpg",
        "name": "SR 42 (Moreland Ave) : SR 42 Spur (McDonough Blvd)"
    }, {
        "id": "cctv_6824",
        "stream": "/georgiavss1/cher-cam-008.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : S Cherokee Ln / Weatherstone Dr"
    }, {
        "id": "cctv_13270",
        "url": "/georgiasnapshots/CLAY-CAM-C990.jpg",
        "name": "SR 6 : Conley St / Convention Center"
    }, {
        "id": "cctv_5324",
        "stream": "/georgiavss2/gdot-cam-008.stream/playlist.m3u8",
        "name": "75/85 : CAPITOL AVE"
    }, {
        "id": "cctv_10238",
        "url": "/georgiasnapshots/GWIN-CAM-064.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of RUSSELL RD"
    }, {
        "id": "cctv_6315",
        "url": "/georgiasnapshots/COJC-CAM-225.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : St. Ives Country Club Pkwy"
    }, {
        "id": "cctv_10211",
        "url": "/georgiasnapshots/GWIN-CAM-037.jpg",
        "name": "SR 20 : SR 124 (Braselton Highway)"
    }, {
        "id": "cctv_10341",
        "url": "/georgiasnapshots/GWIN-CAM-167.jpg",
        "name": "SR 20 : PATRICIA TERRACE / N of COOPER RD / OZORA RD"
    }, {
        "id": "cctv_9077",
        "url": "/georgiasnapshots/ALPH-CAM-012.jpg",
        "name": "Windward Pkwy : Walmart"
    }, {
        "id": "cctv_15591",
        "stream": "/georgiavss3/gdot-cam-468.stream/playlist.m3u8",
        "name": "I-75 : S OF TERRELL MILL RD"
    }, {
        "id": "cctv_10428",
        "url": "/georgiasnapshots/CLAY-CAM-004.jpg",
        "name": "SR 138 : OLD ROUNTREE RD / KENDRICK RD"
    }, {
        "id": "cctv_7314",
        "url": "/georgiasnapshots/COBB-CAM-054.jpg",
        "name": "SR 3/Cobb Pkwy : I-285 WB Ramp"
    }, {
        "id": "cctv_46318",
        "url": "/georgiasnapshots/GC-CAM-268.jpg",
        "name": "OLD PEACHTREE RD : NORTH BROWN RD"
    }, {
        "id": "cctv_16286",
        "stream": "/georgiavss1/fult-cam-005.stream/playlist.m3u8",
        "name": "SR 6 : Desert Dr"
    }, {
        "id": "cctv_15202",
        "url": "/georgiasnapshots/MAR-CAM-404.jpg",
        "name": "SR 120/Whitlock Ave : Burnt Hickory Rd"
    }, {
        "id": "cctv_5113",
        "stream": "/georgiavss3/gdot-cam-372.stream/playlist.m3u8",
        "name": "I-20 : COLUMBIA DR"
    }, {
        "id": "cctv_5295",
        "stream": "/georgiavss2/gdot-cam-073.stream/playlist.m3u8",
        "name": "I-85 : SYLVAN RD"
    }, {
        "id": "cctv_7303",
        "url": "/georgiasnapshots/COBB-CAM-022.jpg",
        "name": "SR 280/South Cobb Dr : Atlanta Rd"
    }, {
        "id": "cctv_13345",
        "stream": "/georgiavss4/gdot-cam-684.stream/playlist.m3u8",
        "name": "I-75 : SR 20/81"
    }, {
        "id": "cctv_15471",
        "stream": "/georgiavss3/gdot-cam-542.stream/playlist.m3u8",
        "name": "I-575 : EXIT TO CHASTAIN RD"
    }, {
        "id": "cctv_9066",
        "stream": "/georgiavss1/alph-cam-003.stream/playlist.m3u8",
        "name": "Milton Ave : Canton St / Roswell St"
    }, {
        "id": "cctv_10447",
        "url": "/georgiasnapshots/CLAY-CAM-039.jpg",
        "name": "SR 42 : SR 331 / Forest Pkwy"
    }, {
        "id": "cctv_16219",
        "url": "/georgiasnapshots/COJC-CAM-410.jpg",
        "name": "State Bridge Rd : Ocee Elementary"
    }, {
        "id": "cctv_15496",
        "stream": "/georgiavss3/gdot-cam-483.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 120/ROSWELL RD"
    }, {
        "id": "cctv_46317",
        "url": "/georgiasnapshots/GC-CAM-267.jpg",
        "name": "OLD PEACHTREE RD : SEVER RD"
    }, {
        "id": "cctv_7194",
        "stream": "/georgiavss1/atl-cam-206.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Boulevard / Monroe Dr"
    }, {
        "id": "cctv_16203",
        "url": "/georgiasnapshots/ATL-CAM-979.jpg",
        "name": "Courtland St : Ellis St"
    }, {
        "id": "cctv_10368",
        "url": "/georgiasnapshots/GWIN-CAM-194.jpg",
        "name": "SR 324 : CROSS RD / E of SR 20"
    }, {
        "id": "cctv_13266",
        "url": "/georgiasnapshots/GWIN-CAM-281.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Windsor Dr / Arnold Rd"
    }, {
        "id": "cctv_13233",
        "stream": "/georgiavss4/gdot-cam-754.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }, {
        "id": "cctv_12961",
        "stream": "/georgiavss4/gdot-cam-817.stream/playlist.m3u8",
        "name": "GA 400 : S OF WIEUCA RD"
    }, {
        "id": "cctv_10246",
        "url": "/georgiasnapshots/GWIN-CAM-072.jpg",
        "name": "SR 378 : E of PLANTATION LN / E of ARC WAY"
    }, {
        "id": "cctv_13589",
        "stream": "/georgiavss1/brok-cam-004.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Corporate Blvd / Curtis Dr"
    }, {
        "id": "cctv_9122",
        "url": "/georgiasnapshots/COBB-CAM-330.jpg",
        "name": "Atlanta Rd : Plant Atkinson Rd"
    }, {
        "id": "cctv_6702",
        "stream": "/georgiavss1/atl-cam-037.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : SR 154 (Memorial Drive)"
    }, {
        "id": "cctv_15967",
        "stream": "/georgiavss2/gdot-cam-168.stream/playlist.m3u8",
        "name": "I-85 : AT SR 20"
    }, {
        "id": "cctv_10144",
        "url": "/georgiasnapshots/COBB-CAM-345.jpg",
        "name": "SR 3/Cobb Pkwy : Old 41 Hwy"
    }, {
        "id": "cctv_5358",
        "stream": "/georgiavss2/gdot-cam-086.stream/playlist.m3u8",
        "name": "I-85 : S OF JIMMY CARTER"
    }, {
        "id": "cctv_10444",
        "url": "/georgiasnapshots/CLAY-CAM-029.jpg",
        "name": "SR 3 / Tara Blvd : Upper Riverdale Rd"
    }, {
        "id": "cctv_15416",
        "stream": "/georgiavss2/gdot-cam-313.stream/playlist.m3u8",
        "name": "I-20 : West of Thornton Rd"
    }, {
        "id": "cctv_10344",
        "url": "/georgiasnapshots/GWIN-CAM-170.jpg",
        "name": "SR 20 : N of ROSEBUD RD"
    }, {
        "id": "cctv_4930",
        "stream": "/georgiavss2/gdot-cam-012.stream/playlist.m3u8",
        "name": "75/85 : INTL BLVD"
    }, {
        "id": "cctv_6821",
        "stream": "/georgiavss1/cojc-cam-110.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Old Alabama Rd"
    }, {
        "id": "cctv_5034",
        "stream": "/georgiavss2/gdot-cam-267.stream/playlist.m3u8",
        "name": "I-285 : W OF PANTHERSVILLE RD"
    }, {
        "id": "cctv_15278",
        "stream": "/georgiavss1/atl-cam-916.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Andrew Young Intl Blvd South"
    }, {
        "id": "cctv_13574",
        "url": "/georgiasnapshots/BROK-CAM-203.jpg",
        "name": "SR 155 / Clairmont Rd : Century Pl"
    }, {
        "id": "cctv_13715",
        "stream": "/georgiavss1/dek-cam-153.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Kensington Rd"
    }, {
        "id": "cctv_5263",
        "stream": "/georgiavss4/gdot-cam-664.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 1"
    }, {
        "id": "cctv_46417",
        "url": "/georgiasnapshots/COBB-CAM-451.jpg",
        "name": "SR 6 Bus/Marietta St : Lewis Rd"
    }, {
        "id": "cctv_13169",
        "url": "/georgiasnapshots/FULT-CAM-002.jpg",
        "name": "SR 6 : SR 154-166 (Campbellton Road)"
    }, {
        "id": "cctv_16324",
        "url": "/georgiasnapshots/COBB-CAM-347.jpg",
        "name": "McCollum Pkwy : Cessna Ln"
    }, {
        "id": "cctv_10358",
        "url": "/georgiasnapshots/GWIN-CAM-184.jpg",
        "name": "WEST PARK PLACE BLVD : S of ROCKBRIDGE RD (N)"
    }, {
        "id": "cctv_15474",
        "stream": "/georgiavss3/gdot-cam-499.stream/playlist.m3u8",
        "name": "ROSWELL RD : US 41/COBB PKWY"
    }, {
        "id": "cctv_15437",
        "stream": "/georgiavss3/gdot-cam-568.stream/playlist.m3u8",
        "name": "I-575 : 1/2 MI N OF SIXES RD"
    }, {
        "id": "cctv_13110",
        "url": "/georgiasnapshots/GWIN-CAM-286.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Holly Ridge Dr/Pine St"
    }, {
        "id": "cctv_4949",
        "stream": "/georgiavss2/gdot-cam-187.stream/playlist.m3u8",
        "name": "I-85 : S OF BUFFINGTON RD"
    }, {
        "id": "cctv_5342",
        "stream": "/georgiavss4/gdot-cam-838.stream/playlist.m3u8",
        "name": "GA 400 : S OF MANSELL RD"
    }, {
        "id": "cctv_4953",
        "stream": "/georgiavss2/gdot-cam-190.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285 FULTON CO."
    }, {
        "id": "cctv_6832",
        "url": "/georgiasnapshots/ATL-CAM-055.jpg",
        "name": "SR 42 (Moreland Ave) : Constitution Rd"
    }, {
        "id": "cctv_5162",
        "stream": "/georgiavss3/gdot-cam-434.stream/playlist.m3u8",
        "name": "I-75 : N OF BIG SHANTY RD"
    }, {
        "id": "cctv_15246",
        "stream": "/georgiavss1/brok-cam-053.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : I-85 SB Ramp"
    }, {
        "id": "cctv_10327",
        "url": "/georgiasnapshots/GWIN-CAM-153.jpg",
        "name": "PLEASANT HILL RD : GWINNETT PLACE DR"
    }, {
        "id": "cctv_15347",
        "stream": "http://vss12live.dot.ga.gov:80/lo/brok-cam-009.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Briarwood Rd"
    }, {
        "id": "cctv_4995",
        "stream": "/georgiavss2/gdot-cam-229.stream/playlist.m3u8",
        "name": "I-285 : THE GM PLANT"
    }, {
        "id": "cctv_13094",
        "stream": "/georgiavss1/doug-cam-033.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Rose Ave/Bright Star Conn"
    }, {
        "id": "cctv_5349",
        "stream": "/georgiavss4/gdot-cam-846.stream/playlist.m3u8",
        "name": "GA 400 : S OF WINDWARD PKWY"
    }, {
        "id": "cctv_32602",
        "url": "/georgiasnapshots/COBB-CAM-289.jpg",
        "name": "Jiles Rd : Baker Rd"
    }, {
        "id": "cctv_10256",
        "url": "/georgiasnapshots/GWIN-CAM-082.jpg",
        "name": "OLD NORCROSS RD : E of HURRICANE SHOALS RD"
    }, {
        "id": "cctv_5217",
        "stream": "/georgiavss3/gdot-cam-554.stream/playlist.m3u8",
        "name": "I-85 : STEVE REYNOLDS RAMP METER"
    }, {
        "id": "cctv_4938",
        "stream": "/georgiavss2/gdot-cam-177.stream/playlist.m3u8",
        "name": "I-85 : SENOIA RD"
    }, {
        "id": "cctv_32623",
        "url": "/georgiasnapshots/DUN-CAM-141.jpg",
        "name": "Perimeter Center West : N of Crown Pointe Pkwy CCTV"
    }, {
        "id": "cctv_32590",
        "url": "/georgiasnapshots/COBB-CAM-030.jpg",
        "name": "Windy Hill Rd : Benson Poole Rd"
    }, {
        "id": "cctv_15598",
        "stream": "/georgiavss4/gdot-cam-619.stream/playlist.m3u8",
        "name": "I-285 : ORCHARD RD"
    }, {
        "id": "cctv_15269",
        "url": "/georgiasnapshots/ATL-CAM-908.jpg",
        "name": "SR 8 (North Ave) : Luckie St / Tech Pkwy"
    }, {
        "id": "cctv_5041",
        "stream": "/georgiavss2/gdot-cam-273.stream/playlist.m3u8",
        "name": "I-285 : I-675"
    }, {
        "id": "cctv_15486",
        "stream": "/georgiavss3/gdot-cam-423.stream/playlist.m3u8",
        "name": "I-75 : S OF I-575"
    }, {
        "id": "cctv_5105",
        "stream": "/georgiavss3/gdot-cam-365.stream/playlist.m3u8",
        "name": "I-20 : GRESHAM RD"
    }, {
        "id": "cctv_46312",
        "url": "/georgiasnapshots/GC-CAM-262.jpg",
        "name": "OLD PEACHTREE RD : MEADOW CHURCH RD"
    }, {
        "id": "cctv_13227",
        "stream": "/georgiavss1/fors-cam-004.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Haw Creek Pkwy / Nuckolls Rd"
    }, {
        "id": "cctv_5292",
        "stream": "/georgiavss2/gdot-cam-072.stream/playlist.m3u8",
        "name": "I-85 : N OF SYLVAN RD"
    }, {
        "id": "cctv_46449",
        "url": "/georgiasnapshots/FULT-CAM-027.jpg",
        "name": "SR 14/ US 29/ Main St : SR 154/ Cascade Palmetto Hwy"
    }, {
        "id": "cctv_13603",
        "url": "/georgiasnapshots/COBB-CAM-700F.jpg",
        "name": "Windy Ridge Pkwy : Circle 75 Pkwy"
    }, {
        "id": "cctv_5196",
        "stream": "/georgiavss3/gdot-cam-505.stream/playlist.m3u8",
        "name": "I-575 : S OF CHASTAIN RD"
    }, {
        "id": "cctv_32587",
        "url": "/georgiasnapshots/HALL-CAM-007.jpg",
        "name": "I-985 SB : Spout Springs Rd"
    }, {
        "id": "cctv_32597",
        "url": "/georgiasnapshots/COBB-CAM-300.jpg",
        "name": "Wade Green Rd : Wooten Lake Rd"
    }, {
        "id": "cctv_10503",
        "url": "/georgiasnapshots/CLAY-CAM-210.jpg",
        "name": "SR 139 : East Fayetteville Rd"
    }, {
        "id": "cctv_10478",
        "url": "/georgiasnapshots/CLAY-CAM-124.jpg",
        "name": "SR 138 : WALT STEPHENS RD"
    }, {
        "id": "cctv_7310",
        "url": "/georgiasnapshots/COBB-CAM-047.jpg",
        "name": "Powers Ferry Rd : Terrell Mill Rd"
    }, {
        "id": "cctv_5097",
        "stream": "/georgiavss3/gdot-cam-358.stream/playlist.m3u8",
        "name": "I-20 : E OF MORELAND AVE"
    }, {
        "id": "cctv_10352",
        "url": "/georgiasnapshots/GWIN-CAM-178.jpg",
        "name": "SR 20 : Satellite Blvd"
    }, {
        "id": "cctv_15581",
        "stream": "/georgiavss3/gdot-cam-456.stream/playlist.m3u8",
        "name": "I-75 : S OF CUMBERLAND BLVD"
    }, {
        "id": "cctv_15262",
        "url": "/georgiasnapshots/GDOT-CAM-065.jpg",
        "name": "I-75 : N of Akers Mill Rd"
    }, {
        "id": "cctv_5165",
        "stream": "/georgiavss3/gdot-cam-437.stream/playlist.m3u8",
        "name": "I-75 : N OF CHASTAIN RD"
    }, {
        "id": "cctv_13077",
        "stream": "/georgiavss1/atl-cam-081.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Ralph David Abernathy Blvd"
    }, {
        "id": "cctv_10458",
        "url": "/georgiasnapshots/CLAY-CAM-054.jpg",
        "name": "SR 54 / Jonesboro Rd : Southern Rd"
    }, {
        "id": "cctv_6257",
        "url": "/georgiasnapshots/ROSWELL-CAM-138.jpg",
        "name": "SR 140 : Warsaw Rd"
    }, {
        "id": "cctv_6245",
        "url": "/georgiasnapshots/HNRY-CAM-914.jpg",
        "name": "SR 20 : I-75 SB"
    }, {
        "id": "cctv_5108",
        "stream": "/georgiavss3/gdot-cam-368.stream/playlist.m3u8",
        "name": "I-20 : W OF LLOYD RD"
    }, {
        "id": "cctv_5416",
        "stream": "/georgiavss4/gdot-cam-840.stream/playlist.m3u8",
        "name": "GA 400 : S OF MAXWELL RD"
    }, {
        "id": "cctv_10161",
        "url": "/georgiasnapshots/GDOT-CAM-584.jpg",
        "name": "I-285 : BEFORE N PEACHTREE"
    }, {
        "id": "cctv_7354",
        "url": "/georgiasnapshots/COBB-CAM-337.jpg",
        "name": "SR 3/Cobb Pkwy : CMS (Old 41)"
    }, {
        "id": "cctv_13245",
        "stream": "/georgiavss4/gdot-cam-753.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }, {
        "id": "cctv_5337",
        "stream": "/georgiavss4/gdot-cam-833.stream/playlist.m3u8",
        "name": "GA 400 : N OF NORTHRIDGE"
    }, {
        "id": "cctv_10371",
        "url": "/georgiasnapshots/GWIN-CAM-197.jpg",
        "name": "SR 324 : IVY CREEK RD"
    }, {
        "id": "cctv_10414",
        "url": "/georgiasnapshots/GCDOT-IVDS-179-PH1.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : I-85 NB"
    }, {
        "id": "cctv_5365",
        "stream": "/georgiavss2/gdot-cam-093.stream/playlist.m3u8",
        "name": "I-85 : SHALLOWFORD RD"
    }, {
        "id": "cctv_8802",
        "stream": "/georgiavss3/gdot-cam-381.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL"
    }, {
        "id": "cctv_46392",
        "url": "/georgiasnapshots/ATL-CAM-990.jpg",
        "name": "Dekalb Ave : Clifton Rd"
    }, {
        "id": "cctv_4923",
        "stream": "/georgiavss2/gdot-cam-105.stream/playlist.m3u8",
        "name": "I-85 : N OF INDIAN TRAIL"
    }, {
        "id": "cctv_7299",
        "url": "/georgiasnapshots/COBB-CAM-016.jpg",
        "name": "Barrett Pkwy : Mall Blvd"
    }, {
        "id": "cctv_16250",
        "url": "/georgiasnapshots/COJC-CAM-655.jpg",
        "name": "Jones Bridge Rd : McGinnis Ferry Rd"
    }, {
        "id": "cctv_4916",
        "stream": "/georgiavss2/gdot-cam-001.stream/playlist.m3u8",
        "name": "I-85 : S OF LANGFORD PKWY"
    }, {
        "id": "cctv_16232",
        "url": "/georgiasnapshots/COJC-CAM-545.jpg",
        "name": "Old Alabama Rd : Preston Oaks/Breckenridge Close"
    }, {
        "id": "cctv_5093",
        "stream": "/georgiavss3/gdot-cam-354.stream/playlist.m3u8",
        "name": "I-20 : BOULEVARD"
    }, {
        "id": "cctv_15512",
        "stream": "/georgiavss3/gdot-cam-532.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }, {
        "id": "cctv_7349",
        "url": "/georgiasnapshots/COBB-CAM-332.jpg",
        "name": "Atlanta Rd : Cumberland Pkwy"
    }, {
        "id": "cctv_46428",
        "url": "/georgiasnapshots/FULT-CAM-010.jpg",
        "name": "SR 14/ US 29/ N. Main : Knotts Ave"
    }, {
        "id": "cctv_46505",
        "stream": "/georgiavss1/atl-cam-093.stream/playlist.m3u8",
        "name": "SR 3/Northside Dr : Collier Rd"
    }, {
        "id": "cctv_10334",
        "url": "/georgiasnapshots/GWIN-CAM-160.jpg",
        "name": "SR 124 : ANNISTOWN RD / CENTERVILLE-ROSEBUD RD"
    }, {
        "id": "cctv_4940",
        "stream": "/georgiavss2/gdot-cam-179.stream/playlist.m3u8",
        "name": "I-85 : FAYETTEVILLE RD"
    }, {
        "id": "cctv_15423",
        "url": "c2c.dot.ga.gov/snapshots/HNRY-CAM-923.jpg",
        "name": "SR 155 : I-75 SOUTH"
    }, {
        "id": "cctv_15362",
        "url": "/georgiasnapshots/FAY-CAM-210.jpg",
        "name": "SR 314 / West Fayetteville Rd : SR 279"
    }, {
        "id": "cctv_16207",
        "url": "/georgiasnapshots/ATL-CAM-983.jpg",
        "name": "Centennial Olympic Park Dr : Nelson St"
    }, {
        "id": "cctv_13744",
        "url": "/georgiasnapshots/COBB-CAM-125.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd North"
    }, {
        "id": "cctv_16069",
        "stream": "/georgiavss1/atl-cam-969.stream/playlist.m3u8",
        "name": "Boulevard : Atlanta Ave"
    }, {
        "id": "cctv_32940",
        "url": "/georgiasnapshots/ATL-CAM-061.jpg",
        "name": "Dekalb Ave : Moreland Ave"
    }, {
        "id": "cctv_12949",
        "stream": "/georgiavss1/doug-cam-035.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : I-20 EB offramp"
    }, {
        "id": "cctv_10450",
        "url": "/georgiasnapshots/CLAY-CAM-043.jpg",
        "name": "SR 54 : BATTLE CREEK RD"
    }, {
        "id": "cctv_5392",
        "stream": "/georgiavss4/gdot-cam-955.stream/playlist.m3u8",
        "name": "I-285 : BOLTON RD"
    }, {
        "id": "cctv_16122",
        "url": "/georgiasnapshots/ATL-CAM-981.jpg",
        "name": "Decatur St : Peachtree Center Ave/Central Ave"
    }, {
        "id": "cctv_13172",
        "url": "/georgiasnapshots/PAUL-CAM-007.jpg",
        "name": "SR 6 : SR 92"
    }, {
        "id": "cctv_7202",
        "url": "/georgiasnapshots/COJC-CAM-750.jpg",
        "name": "McGinnis Ferry Rd : Bell Rd/Old Atlanta Rd"
    }, {
        "id": "cctv_9156",
        "stream": "/georgiavss1/dek-cam-008.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : N Decatur Rd"
    }, {
        "id": "cctv_5254",
        "stream": "/georgiavss4/gdot-cam-656.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 6"
    }, {
        "id": "cctv_13132",
        "url": "/georgiasnapshots/COBB-CAM-165.jpg",
        "name": "SR 120 / Roswell Rd : Timber Ridge Rd"
    }, {
        "id": "cctv_13353",
        "url": "/georgiasnapshots/DEK-CAM-043.jpg",
        "name": "Evans Mill Rd : I-20 WB Ramp"
    }, {
        "id": "cctv_15607",
        "stream": "/georgiavss3/gdot-cam-471.stream/playlist.m3u8",
        "name": "I-75 : DELK RD EXIT"
    }, {
        "id": "cctv_6254",
        "url": "/georgiasnapshots/ROSWELL-CAM-200.jpg",
        "name": "SR 92 : Mansell Rd"
    }, {
        "id": "cctv_15318",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-076.jpg",
        "name": "I-20 : east of Turner Hill Rd"
    }, {
        "id": "cctv_16245",
        "url": "/georgiasnapshots/COJC-CAM-710.jpg",
        "name": "McGinnis Ferry Rd : Hospital Pkwy"
    }, {
        "id": "cctv_16302",
        "url": "/georgiasnapshots/COBB-CAM-097.jpg",
        "name": "Lower Roswell Rd : Old Sewell Rd"
    }, {
        "id": "cctv_13117",
        "url": "/georgiasnapshots/COBB-CAM-160.jpg",
        "name": "SR 120 / Roswell Rd : East Piedmont Rd"
    }, {
        "id": "cctv_15427",
        "stream": "/georgiavss2/gdot-cam-315.stream/playlist.m3u8",
        "name": "I-20 : East of Thornton Rd/S6"
    }, {
        "id": "cctv_5406",
        "stream": "/georgiavss4/gdot-cam-968.stream/playlist.m3u8",
        "name": "I-285 : PACES FERRY RD"
    }, {
        "id": "cctv_5238",
        "stream": "/georgiavss3/gdot-cam-595.stream/playlist.m3u8",
        "name": "SR 141 : JONES MILL RD"
    }, {
        "id": "cctv_46385",
        "url": "/georgiasnapshots/GDOT-CAM-634.jpg",
        "name": "SR 54 : I-285 WB"
    }, {
        "id": "cctv_16267",
        "url": "/georgiasnapshots/COJC-CAM-760.jpg",
        "name": "McGinnis Ferry Rd : Kemp Rd"
    }, {
        "id": "cctv_16356",
        "url": "/georgiasnapshots/FORS-CAM-011.jpg",
        "name": "SR 400 SB Ramps : McFarland Pkwy"
    }, {
        "id": "cctv_5944",
        "stream": "/georgiavss3/gdot-cam-600.stream/playlist.m3u8",
        "name": "I-675 : N OF I-75"
    }, {
        "id": "cctv_5059",
        "stream": "/georgiavss2/gdot-cam-032.stream/playlist.m3u8",
        "name": "I-75 : CUMBERLAND BLVD"
    }, {
        "id": "cctv_32665",
        "url": "/georgiasnapshots/DUN-CAM-150.jpg",
        "name": "Chamblee Dunwoody Rd : Roberts Dr"
    }, {
        "id": "cctv_46421",
        "url": "/georgiasnapshots/DOUG-CAM-096.jpg",
        "name": "SR 92/ FAIRBURN RD : Midway Rd"
    }, {
        "id": "cctv_10516",
        "url": "/georgiasnapshots/CLAY-CAM-C600.jpg",
        "name": "HWY 54 : South of College St"
    }, {
        "id": "cctv_10389",
        "url": "/georgiasnapshots/GWIN-CAM-223.jpg",
        "name": "INDIAN TRAIL LILBURN RD : WUTHERING WAY - WHITED WAY"
    }, {
        "id": "cctv_13295",
        "url": "/georgiasnapshots/GWIN-CAM-289.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Harmony Grove Rd"
    }, {
        "id": "cctv_4944",
        "stream": "/georgiavss2/gdot-cam-182.stream/playlist.m3u8",
        "name": "I-85 : SR 138"
    }, {
        "id": "cctv_46395",
        "url": "/georgiasnapshots/FULT-CAM-025.jpg",
        "name": "GA 14/ US 29/ WEST BROAD ST : ELDER ST"
    }, {
        "id": "cctv_16367",
        "url": "/georgiasnapshots/BROK-CAM-072.jpg",
        "name": "Ashford Dunwoody Rd : Donaldson Dr"
    }, {
        "id": "cctv_15953",
        "url": "/georgiasnapshots/BROK-CAM-212.jpg",
        "name": "SR 155 / Clairmont Rd : Airport Rd"
    }, {
        "id": "cctv_9081",
        "url": "/georgiasnapshots/ALPH-CAM-014c.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }, {
        "id": "cctv_13755",
        "url": "/georgiasnapshots/SMYR-CAM-004.jpg",
        "name": "SR 280/S Cobb Dr : King Springs Rd"
    }, {
        "id": "cctv_5225",
        "stream": "/georgiavss3/gdot-cam-574.stream/playlist.m3u8",
        "name": "75/85 : JW DOBBS RAMP METER"
    }, {
        "id": "cctv_15549",
        "stream": "/georgiavss3/gdot-cam-464.stream/playlist.m3u8",
        "name": "I-75 : S OF WINDY HILL RD"
    }, {
        "id": "cctv_13069",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-078.jpg",
        "name": "I-20 : SIGMAN RD"
    }, {
        "id": "cctv_4987",
        "stream": "/georgiavss2/gdot-cam-221.stream/playlist.m3u8",
        "name": "I-285 : 1 MI E OF ASH-DNWDY"
    }, {
        "id": "cctv_5223",
        "stream": "/georgiavss3/gdot-cam-572.stream/playlist.m3u8",
        "name": "75/85 : PULLIAM ST RAMP METER"
    }, {
        "id": "cctv_46504",
        "stream": "/georgiavss1/atl-cam-096.stream/playlist.m3u8",
        "name": "SR 3 /Northside Dr : Ptree Battle Ave"
    }, {
        "id": "cctv_13062",
        "stream": "/georgiavss1/atl-cam-086.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Marietta St"
    }, {
        "id": "cctv_5023",
        "stream": "/georgiavss2/gdot-cam-257.stream/playlist.m3u8",
        "name": "I-285 : S OF REDWING CIRCLE"
    }, {
        "id": "cctv_5589",
        "stream": "/georgiavss4/gdot-cam-672.stream/playlist.m3u8",
        "name": "I-285 : E OF LAKE MIRROR"
    }, {
        "id": "cctv_5012",
        "stream": "/georgiavss2/gdot-cam-244.stream/playlist.m3u8",
        "name": "I-285 : S OF LAWRENCEVILLE HWY-US 29"
    }, {
        "id": "cctv_13741",
        "url": "/georgiasnapshots/COBB-CAM-010.jpg",
        "name": "Barrett Pkwy : George Busbee Pkwy"
    }, {
        "id": "cctv_5044",
        "stream": "/georgiavss2/gdot-cam-276.stream/playlist.m3u8",
        "name": "I-285 : E OF JONESBORO RD"
    }, {
        "id": "cctv_15411",
        "stream": "/georgiavss2/gdot-cam-306.stream/playlist.m3u8",
        "name": "I-20 : West of N County Line Rd"
    }, {
        "id": "cctv_7329",
        "url": "/georgiasnapshots/COBB-CAM-102.jpg",
        "name": "Johnson Ferry Rd : Little Willeo Rd"
    }, {
        "id": "cctv_5327",
        "stream": "/georgiavss2/gdot-cam-082.stream/playlist.m3u8",
        "name": "I-75 : CW GRANT PKWY"
    }, {
        "id": "cctv_9157",
        "stream": "/georgiavss1/dek-cam-007.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Superior Ave"
    }, {
        "id": "cctv_13763",
        "url": "/georgiasnapshots/SMYR-CAM-012.jpg",
        "name": "Atlanta Rd : Campbell Rd"
    }, {
        "id": "cctv_16310",
        "url": "/georgiasnapshots/COBB-CAM-132.jpg",
        "name": "Interstate North Pkwy : Interstate North Pkwy West"
    }, {
        "id": "cctv_15294",
        "stream": "/georgiavss1/atl-cam-924.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Ted Turner Dr"
    }, {
        "id": "cctv_10193",
        "url": "/georgiasnapshots/GWIN-CAM-015.jpg",
        "name": "SR 140 : Spalding Dr"
    }, {
        "id": "cctv_46457",
        "url": "/georgiasnapshots/FULT-CAM-037.jpg",
        "name": "GA 92/ Campbellton/ Fairburn Rd : Butner/ Ridge Rd"
    }, {
        "id": "cctv_13761",
        "url": "/georgiasnapshots/SMYR-CAM-010.jpg",
        "name": "Spring Rd : Village Pkwy"
    }, {
        "id": "cctv_8801",
        "stream": "/georgiavss3/gdot-cam-382.stream/playlist.m3u8",
        "name": "I-20 : W OF PANOLA RD"
    }, {
        "id": "cctv_15954",
        "stream": "/georgiavss3/gdot-cam-525.stream/playlist.m3u8",
        "name": "I-75 : FREY RD"
    }, {
        "id": "cctv_13191",
        "url": "/georgiasnapshots/COBB-CAM-238.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Oakdale Rd / Discovery Blvd"
    }, {
        "id": "cctv_10172",
        "url": "/georgiasnapshots/HNRY-CAM-917.jpg",
        "name": "I-75 : Jodeco Rd"
    }, {
        "id": "cctv_12921",
        "url": "/georgiasnapshots/COBB-CAM-096.jpg",
        "name": "Terrell Mill Rd : Paper Mill Rd"
    }, {
        "id": "cctv_10229",
        "url": "/georgiasnapshots/GWIN-CAM-055.jpg",
        "name": "SR 124 : ESSEX DR"
    }, {
        "id": "cctv_10353",
        "url": "/georgiasnapshots/GWIN-CAM-179.jpg",
        "name": "SR 20 : SR 13 (Buford Highway)"
    }, {
        "id": "cctv_13319",
        "stream": "/georgiavss1/atl-cam-278.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Marietta Blvd"
    }, {
        "id": "cctv_6321",
        "url": "/georgiasnapshots/COJC-CAM-420.jpg",
        "name": "State Bridge Rd : Jones Bridge Rd"
    }, {
        "id": "cctv_32633",
        "url": "/georgiasnapshots/HALL-CAM-014.JPG",
        "name": "SR 53 : Thurmon Tanner Rd"
    }, {
        "id": "cctv_12973",
        "stream": "/georgiavss4/gdot-cam-807.stream/playlist.m3u8",
        "name": "GA 400 : SIDNEY MARCUS BLVD EXT"
    }, {
        "id": "cctv_5117",
        "stream": "/georgiavss3/gdot-cam-376.stream/playlist.m3u8",
        "name": "I-20 : I-285 ENT Dekalb"
    }, {
        "id": "cctv_5100",
        "stream": "/georgiavss3/gdot-cam-360.stream/playlist.m3u8",
        "name": "I-20 : CLIFTON ST"
    }, {
        "id": "cctv_9187",
        "url": "/georgiasnapshots/HNRY-CAM-002.jpg",
        "name": "SR 155 : Liberty Industrial Pkwy"
    }, {
        "id": "cctv_46320",
        "url": "/georgiasnapshots/GC-CAM-270.jpg",
        "name": "NORTH BROWN RD : SEVER RD"
    }, {
        "id": "cctv_7219",
        "stream": "/georgiavss1/atl-cam-009.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Peachtree Battle Ave NW"
    }, {
        "id": "cctv_13099",
        "stream": "/georgiavss1/doug-cam-043.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Central Church Rd"
    }, {
        "id": "cctv_5274",
        "stream": "/georgiavss4/gdot-cam-701.stream/playlist.m3u8",
        "name": "I-75 : OLD DIXIE"
    }, {
        "id": "cctv_46424",
        "url": "/georgiasnapshots/DOUG-CAM-099.jpg",
        "name": "SR 8 : Mann Rd/ Mason Creek"
    }, {
        "id": "cctv_16226",
        "url": "/georgiasnapshots/COJC-CAM-520.jpg",
        "name": "Old Alabama Rd : Kroger"
    }, {
        "id": "cctv_15579",
        "stream": "/georgiavss3/gdot-cam-466.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO WINDY HILL"
    }, {
        "id": "cctv_12910",
        "url": "/georgiasnapshots/COBB-CAM-223.jpg",
        "name": "Sandy Plains Rd : Morgan Rd"
    }, {
        "id": "cctv_13545",
        "stream": "/georgiavss4/gdot-cam-767.stream/playlist.m3u8",
        "name": "I-75 : BEFORE CMS 701"
    }, {
        "id": "cctv_13219",
        "stream": "/georgiavss4/gdot-cam-769.stream/playlist.m3u8",
        "name": "I-675 : S OF US 23/SR 42"
    }, {
        "id": "cctv_15195",
        "url": "/georgiasnapshots/MAR-CAM-308.jpg",
        "name": "SR 120/S Marietta Pkwy : I-75 SB Ramp"
    }, {
        "id": "cctv_9056",
        "stream": "/georgiavss1/atl-cam-042.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : I-75 NB Ramp"
    }, {
        "id": "cctv_13690",
        "url": "/georgiasnapshots/GDOT-CAM-144.jpg",
        "name": "I-85 : Lindbergh Dr"
    }, {
        "id": "cctv_4973",
        "stream": "/georgiavss2/gdot-cam-209.stream/playlist.m3u8",
        "name": "I-285 : RIVERSIDE DR"
    }, {
        "id": "cctv_13047",
        "stream": "/georgiavss1/atl-cam-080.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : University Ave"
    }, {
        "id": "cctv_15327",
        "url": "/georgiasnapshots/ATL-CAM-948.jpg",
        "name": "Peachtree St : John Portman Blvd"
    }, {
        "id": "cctv_13238",
        "stream": "/georgiavss4/gdot-cam-680.stream/playlist.m3u8",
        "name": "JONESBORO RD : FOSTER DR"
    }, {
        "id": "cctv_10190",
        "url": "/georgiasnapshots/GWIN-CAM-012.jpg",
        "name": "SR 140 : SR 13 (Buford Highway)"
    }, {
        "id": "cctv_32631",
        "url": "/georgiasnapshots/HALL-CAM-012.JPG",
        "name": "I-985 NB : SR 53"
    }, {
        "id": "cctv_13250",
        "stream": "/georgiavss4/gdot-cam-678.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 717/718"
    }, {
        "id": "cctv_13056",
        "stream": "/georgiavss1/atl-cam-088.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 17th St"
    }, {
        "id": "cctv_5206",
        "stream": "/georgiavss3/gdot-cam-514.stream/playlist.m3u8",
        "name": "I-575 : S OF HWY 92"
    }, {
        "id": "cctv_32529",
        "url": "/georgiasnapshots/SMYR-CAM-014.jpg",
        "name": "SR 280/S Cobb Dr : Ridge Rd"
    }, {
        "id": "cctv_15548",
        "url": "/georgiasnapshots/ATL-CAM-967.jpg",
        "name": "SR 154 / Trinity Ave : Forsyth St"
    }, {
        "id": "cctv_5018",
        "stream": "/georgiavss2/gdot-cam-025.stream/playlist.m3u8",
        "name": "I-75 : COLLIER RD"
    }, {
        "id": "cctv_46361",
        "url": "/georgiasnapshots/A-TEST-CAM-011.jpg",
        "name": "United Ave : TMC"
    }, {
        "id": "cctv_15565",
        "stream": "/georgiavss3/gdot-cam-485.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY ENT"
    }, {
        "id": "cctv_5279",
        "stream": "/georgiavss4/gdot-cam-708.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }, {
        "id": "cctv_13758",
        "url": "/georgiasnapshots/SMYR-CAM-007.jpg",
        "name": "SR 280/S Cobb Dr : Pat Mell Rd"
    }, {
        "id": "cctv_8958",
        "stream": "/georgiavss1/dek-cam-015.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Montreal Rd (West)"
    }, {
        "id": "cctv_15460",
        "stream": "/georgiavss1/alph-cam-030.stream/playlist.m3u8",
        "name": "Westside Pkwy : Webb Bridge Rd"
    }, {
        "id": "cctv_9293",
        "url": "/georgiasnapshots/GDOT-CAM-322.jpg",
        "name": "I-20 : RIVERSIDE PKWY"
    }, {
        "id": "cctv_46396",
        "url": "/georgiasnapshots/BROK-CAM-085.jpg",
        "name": "Lake Hearn : Perimeter Summit Pkwy"
    }, {
        "id": "cctv_15384",
        "url": "/georgiasnapshots/ATL-CAM-957.jpg",
        "name": "Andrew Young Intl Blvd : Fort St/I-75/85 Ramp"
    }, {
        "id": "cctv_16066",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-072.jpg",
        "name": "I-20 : E of Panola Rd"
    }, {
        "id": "cctv_10305",
        "url": "/georgiasnapshots/GWIN-CAM-131.jpg",
        "name": "SUGARLOAF PKWY : W of PREMIERE PKWY / E of SUGARLOAF CLUB DR"
    }, {
        "id": "cctv_4933",
        "stream": "/georgiavss2/gdot-cam-015.stream/playlist.m3u8",
        "name": "75/85 : SPRING ST"
    }, {
        "id": "cctv_16266",
        "url": "/georgiasnapshots/COJC-CAM-755.jpg",
        "name": "McGinnis Ferry Rd : Blackstone Way/Shakerag Trace"
    }, {
        "id": "cctv_5320",
        "stream": "/georgiavss4/gdot-cam-793.stream/playlist.m3u8",
        "name": "US 78 : US 78 E/W SPLIT"
    }, {
        "id": "cctv_13557",
        "url": "/georgiasnapshots/HNRY-CAM-115.jpg",
        "name": "SR 138 / N Henry Blvd : Rock Quarry Rd"
    }, {
        "id": "cctv_5204",
        "stream": "/georgiavss3/gdot-cam-512.stream/playlist.m3u8",
        "name": "I-575 : SHALLOWFORD RD"
    }, {
        "id": "cctv_5405",
        "stream": "/georgiavss4/gdot-cam-967.stream/playlist.m3u8",
        "name": "I-285 : S OF PACES FERRY RD"
    }, {
        "id": "cctv_13593",
        "stream": "/georgiavss1/brok-cam-002.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Hawk #2 (S of N Druid Hills)"
    }, {
        "id": "cctv_5224",
        "stream": "/georgiavss3/gdot-cam-573.stream/playlist.m3u8",
        "name": "75/85 : MLK JR DR RAMP METER"
    }, {
        "id": "cctv_5129",
        "stream": "/georgiavss3/gdot-cam-404.stream/playlist.m3u8",
        "name": "I-75 : N OF DELK RD"
    }, {
        "id": "cctv_13377",
        "stream": "/georgiavss1/atl-cam-277.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Chappell Rd"
    }, {
        "id": "cctv_12909",
        "url": "/georgiasnapshots/COBB-CAM-105.jpg",
        "name": "Johnson Ferry Rd : Post Oak Tritt Rd"
    }, {
        "id": "cctv_7212",
        "stream": "/georgiavss1/atl-cam-024.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lambert Dr / Piedmont Cir"
    }, {
        "id": "cctv_10345",
        "url": "/georgiasnapshots/GWIN-CAM-171.jpg",
        "name": "SR 20 : WHEAT GRASS WAY / S of HILLSIDE DR"
    }, {
        "id": "cctv_5362",
        "stream": "/georgiavss2/gdot-cam-009.stream/playlist.m3u8",
        "name": "75/85 : MLK JR DR"
    }, {
        "id": "cctv_46433",
        "url": "/georgiasnapshots/FULT-CAM-014.jpg",
        "name": "Ga14/ US 29/ N Main : Willingham"
    }, {
        "id": "cctv_46299",
        "url": "/georgiasnapshots/GWIN-CAM-233.jpg",
        "name": "SR 20 : BRAND RD"
    }, {
        "id": "cctv_13571",
        "stream": "/georgiavss1/alph-cam-020.stream/playlist.m3u8",
        "name": "Old Milton Pkwy / Rucker Rd : Wills Rd"
    }, {
        "id": "cctv_13152",
        "url": "/georgiasnapshots/ROSWELL-CAM-406.jpg",
        "name": "Mansell Rd : Colonial Center Pkwy"
    }, {
        "id": "cctv_16379",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-078.55.jpg",
        "name": "I-20 : 1/2 MI E OF SIGMAN RD"
    }, {
        "id": "cctv_5952",
        "stream": "/georgiavss3/gdot-cam-608.stream/playlist.m3u8",
        "name": "I-675 : DOUBLE BRDG RD"
    }, {
        "id": "cctv_5144",
        "stream": "/georgiavss3/gdot-cam-418.stream/playlist.m3u8",
        "name": "I-75 : CANTON RD-SR5 EB EXIT"
    }, {
        "id": "cctv_10337",
        "url": "/georgiasnapshots/GWIN-CAM-163.jpg",
        "name": "SR 124 : EVERSON RD / SPRINGDALE RD"
    }, {
        "id": "cctv_16222",
        "url": "/georgiasnapshots/COJC-CAM-455.jpg",
        "name": "State Bridge Rd : Medlock Crossing Pkwy"
    }, {
        "id": "cctv_7321",
        "url": "/georgiasnapshots/COBB-CAM-061.jpg",
        "name": "EW Connector : Hicks Rd"
    }, {
        "id": "cctv_6820",
        "url": "/georgiasnapshots/COJC-CAM-435.jpg",
        "name": "State Bridge Rd : Morton Rd"
    }, {
        "id": "cctv_6266",
        "url": "/georgiasnapshots/ROSWELL-CAM-108.jpg",
        "name": "SR 140 : Holcomb Br Middle School"
    }, {
        "id": "cctv_9160",
        "stream": "/georgiavss1/dek-cam-005.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Coventry Rd"
    }, {
        "id": "cctv_7333",
        "url": "/georgiasnapshots/COBB-CAM-150.jpg",
        "name": "Canton Rd : Blackwell Rd"
    }, {
        "id": "cctv_15342",
        "url": "/georgiasnapshots/ATL-CAM-954.jpg",
        "name": "West Peachtree St : Linden Ave"
    }, {
        "id": "cctv_9088",
        "stream": "/georgiavss3/gdot-cam-321.stream/playlist.m3u8",
        "name": "I-20 : FULTON INDUSTRIAL"
    }, {
        "id": "cctv_12900",
        "url": "/georgiasnapshots/COBB-CAM-319.jpg",
        "name": "Chastain Rd : Bells Ferry Rd"
    }, {
        "id": "cctv_32603",
        "url": "/georgiasnapshots/COBB-CAM-088.jpg",
        "name": "Lower Roswell Rd : Fairfield Dr"
    }, {
        "id": "cctv_15524",
        "stream": "/georgiavss3/gdot-cam-526.stream/playlist.m3u8",
        "name": "I-75 : S OF SHILOH RD"
    }, {
        "id": "cctv_10323",
        "url": "/georgiasnapshots/GWIN-CAM-149.jpg",
        "name": "PLEASANT HILL RD : LAKE HILL DR"
    }, {
        "id": "cctv_15367",
        "url": "/georgiasnapshots/CLAY-CAM-175.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : Mt Zion Pkwy / Speer Rd"
    }, {
        "id": "cctv_10234",
        "url": "/georgiasnapshots/GWIN-CAM-060.jpg",
        "name": "SR 124 : US 29 / SR 8 / CROGAN ST"
    }, {
        "id": "cctv_15180",
        "url": "/georgiasnapshots/MAR-CAM-111.jpg",
        "name": "SR 3 / Cobb Pkwy : Franklin Dr"
    }, {
        "id": "cctv_7334",
        "url": "/georgiasnapshots/COBB-CAM-201.jpg",
        "name": "Johnson Ferry Rd : Shallowford  Rd"
    }, {
        "id": "cctv_6851",
        "url": "/georgiasnapshots/ATL-CAM-059.jpg",
        "name": "SR 42 (Moreland Ave) : Vickers St / Village Creek Landing"
    }, {
        "id": "cctv_10252",
        "url": "/georgiasnapshots/GWIN-CAM-078.jpg",
        "name": "SR 378 : W of EAST HILL WAY"
    }, {
        "id": "cctv_13656",
        "url": "/georgiasnapshots/COBB-CAM-050.jpg",
        "name": "SR 3/Cobb Pkwy : Windy Ridge Pkwy"
    }, {
        "id": "cctv_10506",
        "url": "/georgiasnapshots/CLAY-CAM-218.jpg",
        "name": "SR 54 : WATTS RD / FOREST AVE"
    }, {
        "id": "cctv_13342",
        "stream": "/georgiavss4/gdot-cam-749.stream/playlist.m3u8",
        "name": "I-75 : ON JONESBORO RD RAMP"
    }, {
        "id": "cctv_7209",
        "stream": "/georgiavss1/atl-cam-002.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Ptree Presb Church"
    }, {
        "id": "cctv_5338",
        "stream": "/georgiavss4/gdot-cam-834.stream/playlist.m3u8",
        "name": "GA 400 : N OF NORTHRIDGE"
    }, {
        "id": "cctv_10215",
        "url": "/georgiasnapshots/GWIN-CAM-041.jpg",
        "name": "SR 20 : Mall of Georgia Blvd"
    }, {
        "id": "cctv_5081",
        "stream": "/georgiavss3/gdot-cam-343.stream/playlist.m3u8",
        "name": "I-20 : LOWERY BLVD"
    }, {
        "id": "cctv_5961",
        "stream": "/georgiavss4/gdot-cam-617.stream/playlist.m3u8",
        "name": "I-675 : HENRICO RD"
    }, {
        "id": "cctv_10363",
        "url": "/georgiasnapshots/GWIN-CAM-189.jpg",
        "name": "ANNISTOWN RD : W of ROSS RD"
    }, {
        "id": "cctv_46503",
        "url": "/georgiasnapshots/CHER-CAM-105.jpg",
        "name": "SR 140 : Lake Harmony Dr"
    }, {
        "id": "cctv_6322",
        "url": "/georgiasnapshots/COJC-CAM-445.jpg",
        "name": "State Bridge Rd : E Morton Rd"
    }, {
        "id": "cctv_8812",
        "stream": "/georgiavss4/gdot-cam-856.stream/playlist.m3u8",
        "name": "GA 400 : NEAR SR 20"
    }, {
        "id": "cctv_32612",
        "url": "/georgiasnapshots/COBB-CAM-109.jpg",
        "name": "Johnson Ferry Rd : Hampton Farms Dr"
    }, {
        "id": "cctv_10265",
        "url": "/georgiasnapshots/GWIN-CAM-091.jpg",
        "name": "OLD NORCROSS RD : W of SWEETWATER RD"
    }, {
        "id": "cctv_10529",
        "url": "/georgiasnapshots/CLAY-CAM-x901.jpg",
        "name": "SR 139 : Main St"
    }, {
        "id": "cctv_16088",
        "url": "/georgiasnapshots/ATL-CAM-970.jpg",
        "name": "SR 8 (North Ave) : Spring St"
    }, {
        "id": "cctv_6828",
        "stream": "/georgiavss1/atl-cam-058.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Euclid Ave / McClendon Ave"
    }, {
        "id": "cctv_15268",
        "stream": "/georgiavss1/brok-cam-052.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : I-85 NB Ramp"
    }, {
        "id": "cctv_15174",
        "url": "/georgiasnapshots/MAR-CAM-105.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120A/N Marietta Pkwy"
    }, {
        "id": "cctv_10370",
        "url": "/georgiasnapshots/GWIN-CAM-196.jpg",
        "name": "SR 324 : IVY CHURCH RD / W of IVY CREEK RD"
    }, {
        "id": "cctv_9121",
        "url": "/georgiasnapshots/COBB-CAM-067.jpg",
        "name": "EW Connector : Floyd Rd"
    }, {
        "id": "cctv_10451",
        "url": "/georgiasnapshots/CLAY-CAM-044.jpg",
        "name": "SR 54 : SR 138"
    }, {
        "id": "cctv_10445",
        "url": "/georgiasnapshots/CLAY-CAM-030.jpg",
        "name": "SR 3 / Tara Blvd : North Avenue"
    }, {
        "id": "cctv_5314",
        "stream": "/georgiavss4/gdot-cam-788.stream/playlist.m3u8",
        "name": "US 78 : STONE MTN BYPASS"
    }, {
        "id": "cctv_4928",
        "stream": "/georgiavss2/gdot-cam-011.stream/playlist.m3u8",
        "name": "75/85 : EDGEWOOD"
    }, {
        "id": "cctv_16235",
        "url": "/georgiasnapshots/COJC-CAM-560.jpg",
        "name": "Old Alabama Rd : Old Southwick Pass/Hunts Pointe"
    }, {
        "id": "cctv_46440",
        "url": "/georgiasnapshots/FULT-CAM-017.jpg",
        "name": "GA 3/US 41/ N. Central Ave : Sunset St"
    }, {
        "id": "cctv_6259",
        "url": "/georgiasnapshots/ROSWELL-CAM-130.jpg",
        "name": "SR 140 : GA 400 NB RAMP"
    }, {
        "id": "cctv_5302",
        "stream": "/georgiavss4/gdot-cam-777.stream/playlist.m3u8",
        "name": "US 78 : N DRUID HILLS RD"
    }, {
        "id": "cctv_5077",
        "stream": "/georgiavss2/gdot-cam-034.stream/playlist.m3u8",
        "name": "I-75 : WINDY RIDGE PKWY"
    }, {
        "id": "cctv_32624",
        "url": "/georgiasnapshots/DUN-CAM-142.jpg",
        "name": "Perimeter Center West : Perimeter Center Pkwy/Olde Perimeter Way"
    }, {
        "id": "cctv_5412",
        "stream": "/georgiavss2/gdot-cam-099.stream/playlist.m3u8",
        "name": "I-75 : S OF PEACHTREE BATTLE"
    }, {
        "id": "cctv_9036",
        "url": "/georgiasnapshots/ROSWELL-CAM-320.jpg",
        "name": "SR 9 : Sun Valley Dr"
    }, {
        "id": "cctv_32935",
        "url": "/georgiasnapshots/CLAY-CAM-010.jpg",
        "name": "SR 139 : I-285 EB Ramp"
    }, {
        "id": "cctv_10366",
        "url": "/georgiasnapshots/GWIN-CAM-192.jpg",
        "name": "SR 10 : Abington Dr / Hickory Station Dr"
    }, {
        "id": "cctv_15483",
        "stream": "/georgiavss3/gdot-cam-521.stream/playlist.m3u8",
        "name": "I-75 : BIG SHANTY RD"
    }, {
        "id": "cctv_10271",
        "url": "/georgiasnapshots/GWIN-CAM-097.jpg",
        "name": "SR 120 : MEDICAL CENTER BLVD"
    }, {
        "id": "cctv_5369",
        "stream": "/georgiavss4/gdot-cam-933.stream/playlist.m3u8",
        "name": "I-285 : N OF WASHINGTON RD"
    }, {
        "id": "cctv_13282",
        "stream": "/georgiavss4/gdot-cam-744.stream/playlist.m3u8",
        "name": "I-75 : N OF JODECO RD"
    }, {
        "id": "cctv_4992",
        "stream": "/georgiavss2/gdot-cam-226.stream/playlist.m3u8",
        "name": "I-285 : NORTH PEACHTREE"
    }, {
        "id": "cctv_32593",
        "url": "/georgiasnapshots/COBB-CAM-254.jpg",
        "name": "Dallas Hwy : Holland Rd/Poplar Springs"
    }, {
        "id": "cctv_9102",
        "stream": "/georgiavss1/brok-cam-050.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : Briarcliff Rd"
    }, {
        "id": "cctv_15556",
        "stream": "/georgiavss3/gdot-cam-490.stream/playlist.m3u8",
        "name": "I-75 : SR 5/CANTON RD CONN"
    }, {
        "id": "cctv_16163",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-14.jpg",
        "name": "SR 20 : SCOTT RD"
    }, {
        "id": "cctv_9070",
        "url": "/georgiasnapshots/ALPH-CAM-007a.jpg",
        "name": "Windward Pkwy : GA 400 NB"
    }, {
        "id": "cctv_5241",
        "stream": "/georgiavss3/gdot-cam-598.stream/playlist.m3u8",
        "name": "SR 141 : N OF TILLY MILL RD"
    }, {
        "id": "cctv_6858",
        "stream": "/georgiavss1/fay-cam-112.stream/playlist.m3u8",
        "name": "SR 85 : SR 314 / W Fayetteville Rd"
    }, {
        "id": "cctv_5159",
        "stream": "/georgiavss3/gdot-cam-431.stream/playlist.m3u8",
        "name": "I-75 : 3/4 MI N OF BARRETT PKY"
    }, {
        "id": "cctv_4989",
        "stream": "/georgiavss2/gdot-cam-223.stream/playlist.m3u8",
        "name": "I-285 : E OF CHAM-DNWDY"
    }, {
        "id": "cctv_10287",
        "url": "/georgiasnapshots/GWIN-CAM-113.jpg",
        "name": "SATELLITE BLVD : SUGARLOAF PKWY"
    }, {
        "id": "cctv_15412",
        "stream": "/georgiavss2/gdot-cam-294.stream/playlist.m3u8",
        "name": "I-20 : W OF CHAPEL HILL / CMS-057"
    }, {
        "id": "cctv_5417",
        "stream": "/georgiavss4/gdot-cam-841.stream/playlist.m3u8",
        "name": "GA 400 : S OF HAYNES BR RD"
    }, {
        "id": "cctv_10469",
        "url": "/georgiasnapshots/CLAY-CAM-087.jpg",
        "name": "MT ZION BLVD : MT ZION RD"
    }, {
        "id": "cctv_10262",
        "url": "/georgiasnapshots/GWIN-CAM-088.jpg",
        "name": "OLD NORCROSS RD : OAKLAND RDs"
    }, {
        "id": "cctv_5299",
        "stream": "/georgiavss2/gdot-cam-077.stream/playlist.m3u8",
        "name": "I-85 : LOOP RD"
    }, {
        "id": "cctv_4978",
        "stream": "/georgiavss2/gdot-cam-213.stream/playlist.m3u8",
        "name": "I-285 : ROSWELL ROAD"
    }, {
        "id": "cctv_10224",
        "url": "/georgiasnapshots/GWIN-CAM-050.jpg",
        "name": "US 29 : LAWRENCEVILLE-SUWANEE RD"
    }, {
        "id": "cctv_5258",
        "stream": "/georgiavss2/gdot-cam-066.stream/playlist.m3u8",
        "name": "I-75 : JC PENNEY"
    }, {
        "id": "cctv_13304",
        "stream": "/georgiavss1/dek-cam-033.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Glenwood Rd"
    }, {
        "id": "cctv_5959",
        "stream": "/georgiavss4/gdot-cam-615.stream/playlist.m3u8",
        "name": "I-675 : N OF GRANT RD"
    }, {
        "id": "cctv_15306",
        "url": "/georgiasnapshots/ATL-CAM-930.jpg",
        "name": "Ted Turner Dr : Andrew Young Intl Blvd"
    }, {
        "id": "cctv_46399",
        "url": "/georgiasnapshots/DUN-CAM-135.jpg",
        "name": "Hammond : Private Drive"
    }, {
        "id": "cctv_10418",
        "url": "/georgiasnapshots/GCDOT-IVDS-289-PH5.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : I-85 SB"
    }, {
        "id": "cctv_5240",
        "stream": "/georgiavss3/gdot-cam-597.stream/playlist.m3u8",
        "name": "SR 141 : WINTERS CHAPEL"
    }, {
        "id": "cctv_5419",
        "stream": "/georgiavss2/gdot-cam-122.stream/playlist.m3u8",
        "name": "I-85 : OLD NORCROSS RD"
    }, {
        "id": "cctv_5011",
        "stream": "/georgiavss2/gdot-cam-243.stream/playlist.m3u8",
        "name": "I-285 : LAWRENCEVILLE HWY-US 29"
    }, {
        "id": "cctv_5397",
        "stream": "/georgiavss2/gdot-cam-096.stream/playlist.m3u8",
        "name": "I-75 : MT PARAN RAMP METER"
    }, {
        "id": "cctv_15227",
        "url": "/georgiasnapshots/PAUL-CAM-005.jpg",
        "name": "SR 6 : Hiram Sam's Club"
    }, {
        "id": "cctv_5270",
        "stream": "/georgiavss2/gdot-cam-068.stream/playlist.m3u8",
        "name": "I-75 : FOREST PKWY"
    }, {
        "id": "cctv_13240",
        "stream": "/georgiavss4/gdot-cam-682.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 712"
    }, {
        "id": "cctv_8955",
        "stream": "/georgiavss1/dek-cam-002.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : E Lake Dr / Ponce Manor"
    }, {
        "id": "cctv_16218",
        "stream": "/georgiavss1/cojc-cam-255.stream/playlist.m3u8",
        "name": "SR 141 : Bell Rd"
    }, {
        "id": "cctv_6319",
        "url": "/georgiasnapshots/COJC-CAM-205.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Chattahoochee River"
    }, {
        "id": "cctv_32534",
        "url": "/georgiasnapshots/CLAY-CAM-612.jpg",
        "name": "SR 3 / Tara Blvd : North of Home Depot"
    }, {
        "id": "cctv_10135",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-030.jpg",
        "name": "I-20 : Post Rd"
    }, {
        "id": "cctv_13249",
        "stream": "/georgiavss4/gdot-cam-677.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 719"
    }, {
        "id": "cctv_5211",
        "stream": "/georgiavss2/gdot-cam-054.stream/playlist.m3u8",
        "name": "SR 166 : STANTON RD"
    }, {
        "id": "cctv_4952",
        "stream": "/georgiavss2/gdot-cam-019.stream/playlist.m3u8",
        "name": "75/85 : N OF 10TH ST"
    }, {
        "id": "cctv_16264",
        "url": "/georgiasnapshots/COJC-CAM-735.jpg",
        "name": "McGinnis Ferry Rd : Technology Circle"
    }, {
        "id": "cctv_5267",
        "stream": "/georgiavss4/gdot-cam-668.stream/playlist.m3u8",
        "name": "I-285 : W OF LOOP RD - LOOKS AT CMS 208"
    }, {
        "id": "cctv_5584",
        "stream": "/georgiavss4/gdot-cam-647.stream/playlist.m3u8",
        "name": "I-285 : RIVERDALE RD"
    }, {
        "id": "cctv_32600",
        "url": "/georgiasnapshots/COBB-CAM-208.jpg",
        "name": "Shallowford Rd : Childers Rd"
    }, {
        "id": "cctv_5346",
        "stream": "/georgiavss4/gdot-cam-843.stream/playlist.m3u8",
        "name": "GA 400 : KIMBALL BR RD"
    }, {
        "id": "cctv_15332",
        "url": "/georgiasnapshots/GDOT-CAM-577.jpg",
        "name": "SR 10 EB / Ellis Street : I-75/85 Connector NB Ramp"
    }, {
        "id": "cctv_10201",
        "url": "/georgiasnapshots/GWIN-CAM-027.jpg",
        "name": "STEVE REYNOLDS BLVD : VENTURE DR"
    }, {
        "id": "cctv_13745",
        "url": "/georgiasnapshots/COBB-CAM-126.jpg",
        "name": "Cumberland Blvd : I-75 NB"
    }, {
        "id": "cctv_7324",
        "url": "/georgiasnapshots/COBB-CAM-083.jpg",
        "name": "SR 5/Austell Rd : Windy Hill Rd"
    }, {
        "id": "cctv_15337",
        "url": "/georgiasnapshots/COBB-CAM-325.jpg",
        "name": "Paces Ferry Rd : Overlook Pkwy"
    }, {
        "id": "cctv_5064",
        "stream": "/georgiavss3/gdot-cam-328.stream/playlist.m3u8",
        "name": "I-20 : 285 ENTRANCE RAMPS"
    }, {
        "id": "cctv_15594",
        "stream": "/georgiavss3/gdot-cam-486.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY ENT"
    }, {
        "id": "cctv_5092",
        "stream": "/georgiavss3/gdot-cam-353.stream/playlist.m3u8",
        "name": "I-20 : CHEROKEE AVE"
    }, {
        "id": "cctv_15573",
        "url": "/georgiasnapshots/HNRY-CAM-102.jpg",
        "name": "SR 81 : NORTH OLA RD"
    }, {
        "id": "cctv_5152",
        "stream": "/georgiavss3/gdot-cam-425.stream/playlist.m3u8",
        "name": "I-75 : S OF BARRETT PKWY"
    }, {
        "id": "cctv_13157",
        "url": "/georgiasnapshots/ROSWELL-CAM-416.jpg",
        "name": "Norcross St : Forrest St/Fraser St"
    }, {
        "id": "cctv_12988",
        "stream": "/georgiavss1/dek-cam-030.stream/playlist.m3u8",
        "name": "SR 141 : I-285 W RAMP"
    }, {
        "id": "cctv_5080",
        "stream": "/georgiavss3/gdot-cam-342.stream/playlist.m3u8",
        "name": "I-20 : W OF LOWERY BLVD"
    }, {
        "id": "cctv_16254",
        "url": "/georgiasnapshots/COJC-CAM-675.jpg",
        "name": "Abbotts Bridge Way : Parsons Rd"
    }, {
        "id": "cctv_32583",
        "url": "/georgiasnapshots/HALL-CAM-003.jpg",
        "name": "SR 347/ Lanier Is Pkwy : I-985 NB"
    }, {
        "id": "cctv_15320",
        "stream": "/georgiavss1/alph-cam-028.stream/playlist.m3u8",
        "name": "Westside Pkwy : Kimball Bridge Rd"
    }, {
        "id": "cctv_15274",
        "url": "/georgiasnapshots/ATL-CAM-912.jpg",
        "name": "Marietta St : Ted Turner Dr"
    }, {
        "id": "cctv_13113",
        "url": "/georgiasnapshots/GWIN-CAM-284.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Postal Way"
    }, {
        "id": "cctv_10384",
        "url": "/georgiasnapshots/GWIN-CAM-218.jpg",
        "name": "INDIAN TRAIL LILBURN RD : I-85 NB RAMP"
    }, {
        "id": "cctv_10258",
        "url": "/georgiasnapshots/GWIN-CAM-084.jpg",
        "name": "OLD NORCROSS RD : MONFORT RD"
    }, {
        "id": "cctv_7215",
        "stream": "/georgiavss1/atl-cam-026.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Rock Springs Rd"
    }, {
        "id": "cctv_5283",
        "stream": "/georgiavss4/gdot-cam-711.stream/playlist.m3u8",
        "name": "I-75 : SR 138"
    }, {
        "id": "cctv_46419",
        "url": "/georgiasnapshots/COBB-CAM-452.jpg",
        "name": "Old SR 6 BUS/Marietta St : Brownsville Rd"
    }, {
        "id": "cctv_6806",
        "stream": "/georgiavss3/gdot-cam-583.stream/playlist.m3u8",
        "name": "75/85 : S OF UNIVERSITY"
    }, {
        "id": "cctv_4998",
        "stream": "/georgiavss2/gdot-cam-231.stream/playlist.m3u8",
        "name": "I-285 : E OF BUFORD HWY"
    }, {
        "id": "cctv_32926",
        "url": "/georgiasnapshots/WALT-CAM-003",
        "name": "SR 10/US 78 : SR 20/Main St"
    }, {
        "id": "cctv_5247",
        "stream": "/georgiavss2/gdot-cam-064.stream/playlist.m3u8",
        "name": "I-75 : N OF TARA BLVD / US 41"
    }, {
        "id": "cctv_10464",
        "url": "/georgiasnapshots/CLAY-CAM-062.jpg",
        "name": "SR 85 : Roberts Dr"
    }, {
        "id": "cctv_4945",
        "stream": "/georgiavss2/gdot-cam-183.stream/playlist.m3u8",
        "name": "I-85 : N OF SR 138"
    }, {
        "id": "cctv_13738",
        "url": "/georgiasnapshots/COBB-CAM-256.jpg",
        "name": "Dallas Hwy : Mars Hill Rd"
    }, {
        "id": "cctv_46500",
        "url": "/georgiasnapshots/COBB-CAM-042.jpg",
        "name": "SR 3/Cobb Pkwy : Circle 75 Pkwy"
    }, {
        "id": "cctv_10487",
        "url": "/georgiasnapshots/CLAY-CAM-155.jpg",
        "name": "SR 85 : Lake Ridge Pkwy"
    }, {
        "id": "cctv_46303",
        "url": "/georgiasnapshots/GWIN-CAM-253.jpg",
        "name": "SR 316 : CEDARS RD"
    }, {
        "id": "cctv_5354",
        "stream": "/georgiavss4/gdot-cam-850.stream/playlist.m3u8",
        "name": "GA 400 : N OF MCGINNIS FERRY RD"
    }, {
        "id": "cctv_13090",
        "stream": "/georgiavss1/doug-cam-087.stream/playlist.m3u8",
        "name": "SR 6 : I-20 WB Ramp"
    }, {
        "id": "cctv_10394",
        "url": "/georgiasnapshots/GWIN-CAM-235.jpg",
        "name": "SUWANEE DAM RD : PEACHTREE INDUSTRIAL BLVD"
    }, {
        "id": "cctv_15192",
        "url": "/georgiasnapshots/MAR-CAM-303.jpg",
        "name": "SR 120/S Marietta Pkwy : Atlanta St"
    }, {
        "id": "cctv_15281",
        "url": "/georgiasnapshots/HNRY-CAM-118.jpg",
        "name": "SR 138 : Flat Rock Rd"
    }, {
        "id": "cctv_15234",
        "stream": "/georgiavss1/atl-cam-903.stream/playlist.m3u8",
        "name": "14th St : Techwood Dr"
    }, {
        "id": "cctv_6808",
        "stream": "/georgiavss2/gdot-cam-139.stream/playlist.m3u8",
        "name": "I-85 : SR 20 / BUFORD DR"
    }, {
        "id": "cctv_5333",
        "stream": "/georgiavss2/gdot-cam-083.stream/playlist.m3u8",
        "name": "I-75 : I-285 (SOUTH SIDE)"
    }, {
        "id": "cctv_5229",
        "stream": "/georgiavss2/gdot-cam-058.stream/playlist.m3u8",
        "name": "SR 166 : SYLVAN RD"
    }, {
        "id": "cctv_10205",
        "url": "/georgiasnapshots/GWIN-CAM-031.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : MEDLOCK BRIDGE RD"
    }, {
        "id": "cctv_9145",
        "stream": "/georgiavss1/atl-cam-069.stream/playlist.m3u8",
        "name": "SR 236 / LaVista Rd : Cheshire Bridge Rd"
    }, {
        "id": "cctv_15265",
        "url": "/georgiasnapshots/GDOT-CAM-323.jpg",
        "name": "I-20 : East of Lee Rd"
    }, {
        "id": "cctv_12925",
        "url": "/georgiasnapshots/COBB-CAM-259.jpg",
        "name": "Dallas Hwy : Midway Rd"
    }, {
        "id": "cctv_15173",
        "url": "/georgiasnapshots/MAR-CAM-104.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120A/ N Marietta Pkwy"
    }, {
        "id": "cctv_15586",
        "stream": "/georgiavss4/gdot-cam-624.stream/playlist.m3u8",
        "name": "I-285 : I-75 EXIT/EXP ON-OFF"
    }, {
        "id": "cctv_6836",
        "stream": "/georgiavss1/fay-cam-108.stream/playlist.m3u8",
        "name": "SR 85 : Ellis Rd"
    }, {
        "id": "cctv_5220",
        "stream": "/georgiavss2/gdot-cam-057.stream/playlist.m3u8",
        "name": "SR 166 : US 29"
    }, {
        "id": "cctv_10312",
        "url": "/georgiasnapshots/GWIN-CAM-138.jpg",
        "name": "SUGARLOAF PKWY : CRUSE RD"
    }, {
        "id": "cctv_15505",
        "stream": "/georgiavss4/gdot-cam-697.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : WEST OF I-75"
    }, {
        "id": "cctv_13670",
        "stream": "/georgiavss1/alph-cam-026.stream/playlist.m3u8",
        "name": "SR 9 : Mayfield Road"
    }, {
        "id": "cctv_13258",
        "url": "/georgiasnapshots/FORS-CAM-007.jpg",
        "name": "SR 20 (Buford Hwy) : James Burgess Rd"
    }, {
        "id": "cctv_15272",
        "url": "/georgiasnapshots/ATL-CAM-911.jpg",
        "name": "North Ave : Dallas St / Ponce City Mkt"
    }, {
        "id": "cctv_13352",
        "url": "/georgiasnapshots/DEK-CAM-304.jpg",
        "name": "SR 155 / Clairmont Rd : North Decatur Rd"
    }, {
        "id": "cctv_5381",
        "stream": "/georgiavss4/gdot-cam-944.stream/playlist.m3u8",
        "name": "I-285 : CASCADE RD"
    }, {
        "id": "cctv_10517",
        "url": "/georgiasnapshots/CLAY-CAM-C601.jpg",
        "name": "SR 331 / Forest Pkwy : Bartlett Dr (E of Phillips Dr )"
    }, {
        "id": "cctv_10292",
        "url": "/georgiasnapshots/GWIN-CAM-118.jpg",
        "name": "SR 13 / US 23 : AMWILER RD"
    }, {
        "id": "cctv_32606",
        "url": "/georgiasnapshots/COBB-CAM-071.jpg",
        "name": "Floyd Rd : Hicks Rd"
    }, {
        "id": "cctv_15991",
        "url": "/georgiasnapshots/GDOT-CAM-798.jpg",
        "name": "I-85 : N OF HAMILTON MILL"
    }, {
        "id": "cctv_15407",
        "stream": "/georgiavss3/gdot-cam-320.stream/playlist.m3u8",
        "name": "I-20 : MilePost 48/Chattahoochee Rvr"
    }, {
        "id": "cctv_46276",
        "url": "/georgiasnapshots/GWIN-CAM-214.jpg",
        "name": "PLEASANT HILL RD : DULUTH PARK LN"
    }, {
        "id": "cctv_13349",
        "url": "/georgiasnapshots/DEK-CAM-300.jpg",
        "name": "SR 155 / Clairmont Rd : Lavista Rd"
    }, {
        "id": "cctv_32617",
        "url": "/georgiasnapshots/DUN-CAM-112.jpg",
        "name": "Ashford Dunwoody Rd : Ravinia Pkwy"
    }, {
        "id": "cctv_10295",
        "url": "/georgiasnapshots/GWIN-CAM-121.jpg",
        "name": "SR 13 / US 23 : MITCHELL RD"
    }, {
        "id": "cctv_10330",
        "url": "/georgiasnapshots/GWIN-CAM-156.jpg",
        "name": "PLEASANT HILL RD : NORTH BERKELEY LAKE RD"
    }, {
        "id": "cctv_5948",
        "stream": "/georgiavss3/gdot-cam-604.stream/playlist.m3u8",
        "name": "I-675 : S OF SR 42"
    }, {
        "id": "cctv_6305",
        "stream": "/georgiavss1/atl-cam-003.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lenox Mall Entrance"
    }, {
        "id": "cctv_5193",
        "stream": "/georgiavss3/gdot-cam-502.stream/playlist.m3u8",
        "name": "I-575 : BARRETT PKWY"
    }, {
        "id": "cctv_13607",
        "stream": "/georgiavss1/alph-cam-025.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Brookside Pkwy / Vista Forest Dr"
    }, {
        "id": "cctv_5305",
        "stream": "/georgiavss2/gdot-cam-078.stream/playlist.m3u8",
        "name": "I-85 : CAMP CREEK PKWY"
    }, {
        "id": "cctv_13129",
        "url": "/georgiasnapshots/COBB-CAM-168.jpg",
        "name": "SR 120 / Roswell Rd : Indian Hills Pkwy"
    }, {
        "id": "cctv_5191",
        "stream": "/georgiavss3/gdot-cam-500.stream/playlist.m3u8",
        "name": "I-575 : N OF I-75"
    }, {
        "id": "cctv_13680",
        "url": "/georgiasnapshots/COBB-CAM-049.jpg",
        "name": "SR 3/Cobb Pkwy : Lake Park Dr"
    }, {
        "id": "cctv_9181",
        "url": "/georgiasnapshots/COBB-CAM-247.jpg",
        "name": "Richard D Sailors Pkwy : New Macland Rd"
    }, {
        "id": "cctv_5717",
        "stream": "/georgiavss2/gdot-cam-119.stream/playlist.m3u8",
        "name": "I-85 : JUST N OF I-285"
    }, {
        "id": "cctv_15584",
        "stream": "/georgiavss3/gdot-cam-460.stream/playlist.m3u8",
        "name": "I-75 : S OF WINDY RIDGE/AT 285 ON-RAMP"
    }, {
        "id": "cctv_5387",
        "stream": "/georgiavss4/gdot-cam-950.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20 (FULTON)"
    }, {
        "id": "cctv_15957",
        "stream": "/georgiavss2/gdot-cam-169.stream/playlist.m3u8",
        "name": "I-85 : SR 20"
    }, {
        "id": "cctv_15453",
        "url": "/georgiasnapshots/ATL-CAM-963.jpg",
        "name": "Whitehall St : McDaniel St"
    }, {
        "id": "cctv_15199",
        "url": "/georgiasnapshots/MAR-CAM-401.jpg",
        "name": "SR 120/Whitlock Ave : Carriage Oaks Dr"
    }, {
        "id": "cctv_5236",
        "stream": "/georgiavss3/gdot-cam-593.stream/playlist.m3u8",
        "name": "SR 141 : N OF JIMMY CARTER"
    }, {
        "id": "cctv_10243",
        "url": "/georgiasnapshots/GWIN-CAM-069.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SATELLITE BLVD"
    }, {
        "id": "cctv_13356",
        "stream": "/georgiavss1/alph-cam-019.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Northwinds Pkwy / 2nd St"
    }, {
        "id": "cctv_12950",
        "stream": "/georgiavss1/doug-cam-036.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Douglas Blvd"
    }, {
        "id": "cctv_9302",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-034.jpg",
        "name": "I-20 : GA HWY 5"
    }, {
        "id": "cctv_10333",
        "url": "/georgiasnapshots/GWIN-CAM-159.jpg",
        "name": "SR 124 : N of HUDDERSFIELD DR / N of NORRIS LAKE RD"
    }, {
        "id": "cctv_9192",
        "stream": "/georgiavss1/atl-cam-072.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : North Highland Ave"
    }, {
        "id": "cctv_5038",
        "stream": "/georgiavss2/gdot-cam-270.stream/playlist.m3u8",
        "name": "I-285 : E OF BOULDERCREST RD"
    }, {
        "id": "cctv_8834",
        "stream": "/georgiavss1/brok-cam-102.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : N Druid Hills Rd"
    }, {
        "id": "cctv_15430",
        "stream": "/georgiavss2/gdot-cam-302.stream/playlist.m3u8",
        "name": "I-20 : West of Fairburn Rd./SR 92"
    }, {
        "id": "cctv_15440",
        "stream": "/georgiavss3/gdot-cam-570.stream/playlist.m3u8",
        "name": "I-575 : 1/2 MI N OF SIXES RD"
    }, {
        "id": "cctv_15560",
        "stream": "/georgiavss4/gdot-cam-629.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO I-75 N/S"
    }, {
        "id": "cctv_9313",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-037.jpg",
        "name": "I-20 : SR 92"
    }, {
        "id": "cctv_7338",
        "url": "/georgiasnapshots/COBB-CAM-250.jpg",
        "name": "Dallas Hwy : Barrett Pkwy"
    }, {
        "id": "cctv_5301",
        "stream": "/georgiavss4/gdot-cam-776.stream/playlist.m3u8",
        "name": "US 78 : LAWRENCEVILLE HWY"
    }, {
        "id": "cctv_5252",
        "stream": "/georgiavss4/gdot-cam-654.stream/playlist.m3u8",
        "name": "I-285 : WEST EDGE OF TUNNEL"
    }, {
        "id": "cctv_15983",
        "stream": "/georgiavss3/gdot-cam-473.stream/playlist.m3u8",
        "name": "I-75 : AT DELK RD ENTRANCE"
    }, {
        "id": "cctv_4956",
        "stream": "/georgiavss2/gdot-cam-193.stream/playlist.m3u8",
        "name": "I-85 : S OF OLD NATIONAL HWY"
    }, {
        "id": "cctv_10407",
        "url": "/georgiasnapshots/GWIN-CAM-248.jpg",
        "name": "SR 140 : Goshen Springs Rd/Crescent Dr"
    }, {
        "id": "cctv_10275",
        "url": "/georgiasnapshots/GWIN-CAM-101.jpg",
        "name": "SR 10 : Stone Dr"
    }, {
        "id": "cctv_15444",
        "stream": "/georgiavss2/gdot-cam-307.stream/playlist.m3u8",
        "name": "I-20 : Near N County Line Rd"
    }, {
        "id": "cctv_5103",
        "stream": "/georgiavss3/gdot-cam-363.stream/playlist.m3u8",
        "name": "I-20 : FAYETTEVILLE RD"
    }, {
        "id": "cctv_16239",
        "url": "/georgiasnapshots/COJC-CAM-620.jpg",
        "name": "Jones Bridge Rd : W Morton Rd"
    }, {
        "id": "cctv_15497",
        "stream": "/georgiavss3/gdot-cam-489.stream/playlist.m3u8",
        "name": "I-75 : N OF ALLGOOD RD"
    }, {
        "id": "cctv_16092",
        "url": "/georgiasnapshots/ATL-CAM-973.jpg",
        "name": "Spring St : 5th Street"
    }, {
        "id": "cctv_15559",
        "stream": "/georgiavss3/gdot-cam-463.stream/playlist.m3u8",
        "name": "I-75 : I-75 AT EXPRESS FLYOVER"
    }, {
        "id": "cctv_7311",
        "url": "/georgiasnapshots/COBB-CAM-051.jpg",
        "name": "SR 3/Cobb Pkwy : Windy Hill Rd"
    }, {
        "id": "cctv_10318",
        "url": "/georgiasnapshots/GWIN-CAM-144.jpg",
        "name": "SR 378 : BURNS RD"
    }, {
        "id": "cctv_7195",
        "stream": "/georgiavss1/atl-cam-207.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Glen Iris Dr"
    }, {
        "id": "cctv_13676",
        "url": "/georgiasnapshots/FAY-CAM-020.jpg",
        "name": "SR 314 / W Fayetteville Rd : Kenwood Rd"
    }, {
        "id": "cctv_46420",
        "url": "/georgiasnapshots/DOUG-CAM-092.jpg",
        "name": "SR 92/ FAIRBURN RD : MACK RD/ BOMAR RD"
    }, {
        "id": "cctv_15508",
        "stream": "/georgiavss3/gdot-cam-477.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : EAST OF I-75"
    }, {
        "id": "cctv_15300",
        "url": "/georgiasnapshots/ATL-CAM-929.jpg",
        "name": "Piedmont Ave : John Portman Blvd/I-75/I-85 Ramp"
    }, {
        "id": "cctv_8797",
        "url": "/georgiasnapshots/COBB-CAM-013.jpg",
        "name": "Barrett Pkwy : Cobb Pkwy"
    }, {
        "id": "cctv_5950",
        "stream": "/georgiavss3/gdot-cam-606.stream/playlist.m3u8",
        "name": "I-675 : N OF EVANS DR"
    }, {
        "id": "cctv_5104",
        "stream": "/georgiavss3/gdot-cam-364.stream/playlist.m3u8",
        "name": "I-20 : W OF GRESHAM RD"
    }, {
        "id": "cctv_10301",
        "url": "/georgiasnapshots/GWIN-CAM-127.jpg",
        "name": "SR 13 / US 23 : OLD PEACTREE RD"
    }, {
        "id": "cctv_7300",
        "url": "/georgiasnapshots/COBB-CAM-017.jpg",
        "name": "Barrett Pkwy : I-575"
    }, {
        "id": "cctv_8807",
        "url": "/georgiasnapshots/COBB-CAM-018.jpg",
        "name": "Barrett Pkwy : Stilesboro Rd"
    }, {
        "id": "cctv_4969",
        "stream": "/georgiavss2/gdot-cam-205.stream/playlist.m3u8",
        "name": "I-285 : CHATT RIVER"
    }, {
        "id": "cctv_7191",
        "url": "/georgiasnapshots/CHER-CAM-001.jpg",
        "name": "SR 92 / Woodstock Rd : Wiley Bridge Rd"
    }, {
        "id": "cctv_13653",
        "url": "/georgiasnapshots/COBB-CAM-130.jpg",
        "name": "Windy Ridge Pkwy : Interstate North Pkwy"
    }, {
        "id": "cctv_7205",
        "stream": "/georgiavss1/atl-cam-005.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Delmont Dr"
    }, {
        "id": "cctv_13652",
        "url": "/georgiasnapshots/COBB-CAM-036.jpg",
        "name": "Windy Hill Rd : Leland Dr"
    }, {
        "id": "cctv_15356",
        "stream": "/georgiavss1/atl-cam-802.stream/playlist.m3u8",
        "name": "SR 3 / Central Ave : I-75 SB Exit"
    }, {
        "id": "cctv_15305",
        "url": "/georgiasnapshots/ATL-CAM-935.jpg",
        "name": "SR 14 (Peters St) : McDaniel St"
    }, {
        "id": "cctv_12905",
        "url": "/georgiasnapshots/COBB-CAM-315.jpg",
        "name": "Chastain Rd : I-575 SB Ramp"
    }, {
        "id": "cctv_12906",
        "url": "/georgiasnapshots/COBB-CAM-317.jpg",
        "name": "Chastain Rd : George Busbee Pkwy"
    }, {
        "id": "cctv_7367",
        "url": "/georgiasnapshots/COBB-CAM-342.jpg",
        "name": "SR 3/Cobb Pkwy : Mack Dobbs Rd"
    }, {
        "id": "cctv_15958",
        "stream": "/georgiavss2/gdot-cam-163.stream/playlist.m3u8",
        "name": "I-85 : N OF I-985"
    }, {
        "id": "cctv_13055",
        "stream": "/georgiavss1/atl-cam-078.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : St Johns Ave"
    }, {
        "id": "cctv_32532",
        "url": "/georgiasnapshots/GWIN-CAM-227.jpg",
        "name": "US 78 : OAK RD - HENRY CLOWER BLVD"
    }, {
        "id": "cctv_10419",
        "url": "/georgiasnapshots/GCDOT-IVDS-321.jpg",
        "name": "PLEASANT HILL RD : SHORTY HOWELL PK"
    }, {
        "id": "cctv_16323",
        "url": "/georgiasnapshots/COBB-CAM-308.jpg",
        "name": "Old Hwy 41 : Airport Rd"
    }, {
        "id": "cctv_6267",
        "url": "/georgiasnapshots/ROSWELL-CAM-102.jpg",
        "name": "SR 140 : Nesbitt Ferry Rd/S Holcomb Bridge Way"
    }, {
        "id": "cctv_15518",
        "stream": "/georgiavss3/gdot-cam-467.stream/playlist.m3u8",
        "name": "I-75 : S OF TERRELL MILL RD"
    }, {
        "id": "cctv_7315",
        "url": "/georgiasnapshots/COBB-CAM-055.jpg",
        "name": "SR 3/Cobb Pkwy : Galleria Dr/Cumberland Mall"
    }, {
        "id": "cctv_46445",
        "url": "/georgiasnapshots/FULT-CAM-022.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : High Point Rd"
    }, {
        "id": "cctv_13144",
        "url": "/georgiasnapshots/ROSWELL-CAM-132.jpg",
        "name": "SR 140 / Holcomb Bridge Rd : GA 400 SB Ramp"
    }, {
        "id": "cctv_4988",
        "stream": "/georgiavss2/gdot-cam-222.stream/playlist.m3u8",
        "name": "I-285 : W OF CHAM-DNWDY"
    }, {
        "id": "cctv_13082",
        "url": "/georgiasnapshots/COBB-CAM-164.jpg",
        "name": "SR 120 / Roswell Rd : N Marietta Pky/120 Loop SB"
    }, {
        "id": "cctv_10507",
        "url": "/georgiasnapshots/CLAY-CAM-219.jpg",
        "name": "SR 54 / Jonesboro Rd : Main St"
    }, {
        "id": "cctv_46319",
        "url": "/georgiasnapshots/GC-CAM-269.jpg",
        "name": "OLD PEACHTREE RD : DEAN RD"
    }, {
        "id": "cctv_6834",
        "url": "/georgiasnapshots/DEK-CAM-054.jpg",
        "name": "SR 42 (Moreland Ave) : S River Ind Blvd SE"
    }, {
        "id": "cctv_7222",
        "stream": "/georgiavss1/atl-cam-007.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Peachtree Way"
    }, {
        "id": "cctv_10494",
        "url": "/georgiasnapshots/CLAY-CAM-177.jpg",
        "name": "Rex Rd : Evans Dr"
    }, {
        "id": "cctv_5294",
        "stream": "/georgiavss4/gdot-cam-721.stream/playlist.m3u8",
        "name": "I-75 : OLD DIXIE RAMP METER"
    }, {
        "id": "cctv_10192",
        "url": "/georgiasnapshots/GWIN-CAM-014.jpg",
        "name": "SR 140 : SR 141 (PIB) SB Ramp"
    }, {
        "id": "cctv_7342",
        "url": "/georgiasnapshots/COBB-CAM-271.jpg",
        "name": "Windy Hill Rd : South Cobb Drive"
    }, {
        "id": "cctv_5313",
        "stream": "/georgiavss4/gdot-cam-787.stream/playlist.m3u8",
        "name": "US 78 : E OF JULIETTE RD"
    }, {
        "id": "cctv_16380",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-081.45.jpg",
        "name": "I-20 : 1/2 MI W OF SR 20/138"
    }, {
        "id": "cctv_8835",
        "stream": "/georgiavss1/brok-cam-107.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lanier Dr"
    }, {
        "id": "cctv_15419",
        "stream": "/georgiavss2/gdot-cam-295.stream/playlist.m3u8",
        "name": "I-20 : East of CMS-56"
    }, {
        "id": "cctv_15178",
        "url": "/georgiasnapshots/MAR-CAM-109.jpg",
        "name": "SR 3/Cobb Pkwy : Barclay Cir"
    }, {
        "id": "cctv_10329",
        "url": "/georgiasnapshots/GWIN-CAM-155.jpg",
        "name": "PLEASANT HILL RD : STEVE REYNOLDS BLVD"
    }, {
        "id": "cctv_46451",
        "url": "/georgiasnapshots/FULT-CAM-029.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Mason Rd/ Hunter Rd"
    }, {
        "id": "cctv_10308",
        "url": "/georgiasnapshots/GWIN-CAM-134.jpg",
        "name": "SUGARLOAF PKWY : N BROWN RD"
    }, {
        "id": "cctv_13061",
        "stream": "/georgiavss1/atl-cam-085.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : North Ave"
    }, {
        "id": "cctv_13355",
        "stream": "/georgiavss1/alph-cam-018.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : State Bridge Way / Chick-Fil-A"
    }, {
        "id": "cctv_16165",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-8.25.jpg",
        "name": "SR 20 : BUTTERWORTH RD"
    }, {
        "id": "cctv_13254",
        "stream": "/georgiavss4/gdot-cam-676.stream/playlist.m3u8",
        "name": "JONESBORO : EXPRESS LN RAMP"
    }, {
        "id": "cctv_6863",
        "stream": "/georgiavss1/cher-cam-013.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Londonderry Dr"
    }, {
        "id": "cctv_32647",
        "url": "/georgiasnapshots/GDOT-SVT1-pole%20barn.jpg",
        "name": "Walker ave : pole barn"
    }, {
        "id": "cctv_13590",
        "stream": "/georgiavss1/brok-cam-003.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : SR 42 / N Druid Hills Rd"
    }, {
        "id": "cctv_46301",
        "url": "/georgiasnapshots/GWIN-CAM-252.jpg",
        "name": "SR 316 : HI HOPE RD"
    }, {
        "id": "cctv_16354",
        "url": "/georgiasnapshots/FORS-CAM-009.jpg",
        "name": "SR 20 : Canton Rd"
    }, {
        "id": "cctv_15297",
        "stream": "/georgiavss1/dek-cam-156.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : Rays Rd"
    }, {
        "id": "cctv_4943",
        "stream": "/georgiavss2/gdot-cam-181.stream/playlist.m3u8",
        "name": "I-85 : S OF SR 138"
    }, {
        "id": "cctv_10377",
        "url": "/georgiasnapshots/GWIN-CAM-203.jpg",
        "name": "SR 324 : DACULA RD"
    }, {
        "id": "cctv_15962",
        "url": "/georgiasnapshots/GDOT-CAM-156.jpg",
        "name": "I-85 : S OF MCGINNIS FERRY RD"
    }, {
        "id": "cctv_10433",
        "url": "/georgiasnapshots/CLAY-CAM-013.jpg",
        "name": "SR 139 : Norman Dr"
    }, {
        "id": "cctv_10521",
        "url": "/georgiasnapshots/CLAY-CAM-C605.jpg",
        "name": "SR 331 / Forest Pkwy : John G Glover Ind Ct"
    }, {
        "id": "cctv_10170",
        "stream": "/georgiavss1/cher-cam-031.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Wade Green Rd"
    }, {
        "id": "cctv_10400",
        "url": "/georgiasnapshots/GWIN-CAM-241.jpg",
        "name": "SR 20 : Suwanee Dam Rd"
    }, {
        "id": "cctv_10479",
        "url": "/georgiasnapshots/CLAY-CAM-128.jpg",
        "name": "SR 138 : CROWN WAY / NORTH AVE"
    }, {
        "id": "cctv_5590",
        "stream": "/georgiavss4/gdot-cam-673.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO I-75 S"
    }, {
        "id": "cctv_5066",
        "stream": "/georgiavss2/gdot-cam-033.stream/playlist.m3u8",
        "name": "I-75 : AKERS MILL RD"
    }, {
        "id": "cctv_10530",
        "url": "/georgiasnapshots/CLAY-CAM-x902.jpg",
        "name": "SR 139 : PHOENIX BLVD"
    }, {
        "id": "cctv_15324",
        "url": "/georgiasnapshots/ALPH-CAM-029.jpg",
        "name": "Academy St : Park Plaza"
    }, {
        "id": "cctv_5124",
        "stream": "/georgiavss2/gdot-cam-040.stream/playlist.m3u8",
        "name": "I-85 : S OF CLAIRMONT RD"
    }, {
        "id": "cctv_7198",
        "stream": "/georgiavss1/atl-cam-213.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : N Highland Ave"
    }, {
        "id": "cctv_5334",
        "stream": "/georgiavss4/gdot-cam-830.stream/playlist.m3u8",
        "name": "GA 400 : S OF PITTS RD"
    }, {
        "id": "cctv_10442",
        "url": "/georgiasnapshots/CLAY-CAM-026.jpg",
        "name": "SR 3 / Tara Blvd : McDonough Rd"
    }, {
        "id": "cctv_15911",
        "stream": "/georgiavss3/gdot-cam-480.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF DELK RD"
    }, {
        "id": "cctv_5028",
        "stream": "/georgiavss2/gdot-cam-261.stream/playlist.m3u8",
        "name": "I-285 : I-20 EXIT RAMP"
    }, {
        "id": "cctv_15167",
        "url": "/georgiasnapshots/COBB-CAM-135.jpg",
        "name": "SPRING RD : CAMBPELL RD"
    }, {
        "id": "cctv_10221",
        "url": "/georgiasnapshots/GWIN-CAM-047.jpg",
        "name": "US 29 : SUGARLOAF PKWY"
    }, {
        "id": "cctv_10351",
        "url": "/georgiasnapshots/GWIN-CAM-177.jpg",
        "name": "SR 20 : S Lee St"
    }, {
        "id": "cctv_16315",
        "url": "/georgiasnapshots/COBB-CAM-225.jpg",
        "name": "Sandy Plains Rd : Davis Rd"
    }, {
        "id": "cctv_9168",
        "url": "/georgiasnapshots/COBB-CAM-004.jpg",
        "name": "SR 5/Austell Rd : Hurt Rd"
    }, {
        "id": "cctv_13269",
        "stream": "/georgiavss1/fult-cam-003.stream/playlist.m3u8",
        "name": "SR 6 : Centre Pkwy / Princeton Lakes Pkwy"
    }, {
        "id": "cctv_32577",
        "url": "/georgiasnapshots/DUN-CAM-101.jpg",
        "name": "Ashford Dunwoody Rd : Ashford Center Pkwy"
    }, {
        "id": "cctv_13155",
        "url": "/georgiasnapshots/ROSWELL-CAM-412.jpg",
        "name": "Magnolia St : Mimosa Blvd"
    }, {
        "id": "cctv_15310",
        "stream": "/georgiavss1/atl-cam-939.stream/playlist.m3u8",
        "name": "SR 8 (North Ave) : Techwood Dr/COP Dr"
    }, {
        "id": "cctv_15277",
        "url": "/georgiasnapshots/ATL-CAM-915.jpg",
        "name": "Marietta St : Baker St"
    }, {
        "id": "cctv_10375",
        "url": "/georgiasnapshots/GWIN-CAM-201.jpg",
        "name": "SR 324 : FORT DANIELS DR"
    }, {
        "id": "cctv_4920",
        "stream": "/georgiavss2/gdot-cam-102.stream/playlist.m3u8",
        "name": "I-85 : N OF CENTER WAY"
    }, {
        "id": "cctv_46478",
        "url": "/georgiasnapshots/CHER-CAM-101.jpg",
        "name": "SR 140 : Univeter Rd"
    }, {
        "id": "cctv_15577",
        "stream": "/georgiavss3/gdot-cam-479.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : W OF I-75 EXP ON/OFF"
    }, {
        "id": "cctv_32622",
        "url": "/georgiasnapshots/DUN-CAM-140.jpg",
        "name": "Meadow Lane : Ridgeview Rd"
    }, {
        "id": "cctv_15343",
        "stream": "/georgiavss1/brok-cam-103.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Dresden Dr"
    }, {
        "id": "cctv_10326",
        "url": "/georgiasnapshots/GWIN-CAM-152.jpg",
        "name": "PLEASANT HILL RD : BRECKINRIDGE BLVD"
    }, {
        "id": "cctv_15617",
        "stream": "/georgiavss4/gdot-cam-627.stream/playlist.m3u8",
        "name": "I-285 : AT EXPRESS RAMP"
    }, {
        "id": "cctv_6810",
        "url": "/georgiasnapshots/GDOT-CAM-517.jpg",
        "name": "I-575 : AT RIDGEWALK PKWY"
    }, {
        "id": "cctv_9083",
        "url": "/georgiasnapshots/ALPH-CAM-015.jpg",
        "name": "North Point Pkwy : Encore Pkwy"
    }, {
        "id": "cctv_13224",
        "url": "/georgiasnapshots/GWIN-CAM-285.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Main St / Hillcrest Rd"
    }, {
        "id": "cctv_5140",
        "stream": "/georgiavss3/gdot-cam-414.stream/playlist.m3u8",
        "name": "I-75 : N OF NORTH 120 LOOP"
    }, {
        "id": "cctv_12943",
        "url": "/georgiasnapshots/DOUG-CAM-004.jpg",
        "name": "Chapel Hill Rd : Grace Lake Dr"
    }, {
        "id": "cctv_5308",
        "stream": "/georgiavss4/gdot-cam-782.stream/playlist.m3u8",
        "name": "US 78 : E OF BROCKETT RD"
    }, {
        "id": "cctv_5182",
        "stream": "/georgiavss3/gdot-cam-452.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 92"
    }, {
        "id": "cctv_4964",
        "stream": "/georgiavss2/gdot-cam-020.stream/playlist.m3u8",
        "name": "75/85 : 14TH ST"
    }, {
        "id": "cctv_5275",
        "stream": "/georgiavss4/gdot-cam-702.stream/playlist.m3u8",
        "name": "I-75 : N OF JONESBORO RD"
    }, {
        "id": "cctv_5427",
        "stream": "/georgiavss2/gdot-cam-130.stream/playlist.m3u8",
        "name": "I-85 : S OF SUGARLOAF PKWY"
    }, {
        "id": "cctv_10392",
        "url": "/georgiasnapshots/GWIN-CAM-226.jpg",
        "name": "Indian Trail-Lilburn Rd : Hillcrest Rd"
    }, {
        "id": "cctv_5114",
        "stream": "/georgiavss3/gdot-cam-373.stream/playlist.m3u8",
        "name": "I-20 : W OF I-285 (DEKALB)"
    }, {
        "id": "cctv_10197",
        "url": "/georgiasnapshots/GWIN-CAM-019.jpg",
        "name": "SR 10 : Killian Hill Rd / SR 264 (Bethany Church Rd)"
    }, {
        "id": "cctv_5086",
        "stream": "/georgiavss3/gdot-cam-348.stream/playlist.m3u8",
        "name": "I-20 : EB EXIT TO 75/85 NB"
    }, {
        "id": "cctv_10391",
        "url": "/georgiasnapshots/GWIN-CAM-225.jpg",
        "name": "INDIAN TRAIL LILBURN RD : BURNS RD"
    }, {
        "id": "cctv_15422",
        "url": "c2c.dot.ga.gov/snapshots/HNRY-CAM-922.jpg",
        "name": "SR 155 : I-75 NORTH"
    }, {
        "id": "cctv_10527",
        "url": "/georgiasnapshots/CLAY-CAM-C611.jpg",
        "name": "SR 54 : S OF CLAYTON ST BLVD"
    }, {
        "id": "cctv_9116",
        "url": "/georgiasnapshots/COBB-CAM-243.jpg",
        "name": "Powder Springs Rd : Smitha Middle Sch"
    }, {
        "id": "cctv_6256",
        "url": "/georgiasnapshots/ROSWELL-CAM-140.jpg",
        "name": "SR 140 : Grimes Br Rd/Old Roswell Rd"
    }, {
        "id": "cctv_5155",
        "stream": "/georgiavss3/gdot-cam-428.stream/playlist.m3u8",
        "name": "I-75 : BARRETT EXIT"
    }, {
        "id": "cctv_13734",
        "url": "/georgiasnapshots/COBB-CAM-043.jpg",
        "name": "Powers Ferry Rd : Akers Mill Rd"
    }, {
        "id": "cctv_5255",
        "stream": "/georgiavss4/gdot-cam-657.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 2"
    }, {
        "id": "cctv_5216",
        "stream": "/georgiavss3/gdot-cam-553.stream/playlist.m3u8",
        "name": "I-85 : CHAM TUCKER RAMP METER"
    }, {
        "id": "cctv_6316",
        "url": "/georgiasnapshots/COJC-CAM-220.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : State Bridge Rd"
    }, {
        "id": "cctv_8825",
        "stream": "/georgiavss1/atl-cam-029.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lenox Rd / SR 141 Conn"
    }, {
        "id": "cctv_15391",
        "url": "/georgiasnapshots/CLAY-CAM-117.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : SR 42 / N Henry Blvd"
    }, {
        "id": "cctv_13747",
        "url": "/georgiasnapshots/COBB-CAM-134.jpg",
        "name": "Cobb Pkwy : Market St"
    }, {
        "id": "cctv_5232",
        "stream": "/georgiavss3/gdot-cam-589.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : Spalding Dr"
    }, {
        "id": "cctv_15333",
        "url": "/georgiasnapshots/ATL-CAM-949.jpg",
        "name": "Forsyth St : Alabama St"
    }, {
        "id": "cctv_10291",
        "url": "/georgiasnapshots/GWIN-CAM-117.jpg",
        "name": "SR 13 / US 23 : GLOBAL FORUM BLVD"
    }, {
        "id": "cctv_13068",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-075.jpg",
        "name": "I-20 : SR 124 / TURNER HILL RD"
    }, {
        "id": "cctv_6306",
        "stream": "/georgiavss1/cher-cam-024.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Woodstock Square Ave"
    }, {
        "id": "cctv_9140",
        "stream": "/georgiavss1/cham-cam-103.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Clairmont Rd"
    }, {
        "id": "cctv_16242",
        "url": "/georgiasnapshots/COJC-CAM-635.jpg",
        "name": "Jones Bridge Rd : Abbots Bridge Rd/Kimball Bridge Rd"
    }, {
        "id": "cctv_9074",
        "url": "/georgiasnapshots/ALPH-CAM-010a.jpg",
        "name": "Windward Pkwy : SR 400 SB"
    }, {
        "id": "cctv_46482",
        "url": "/georgiasnapshots/CHER-CAM-106.jpg",
        "name": "SR 140 : Earney Rd"
    }, {
        "id": "cctv_15194",
        "url": "/georgiasnapshots/MAR-CAM-306.jpg",
        "name": "SR 120/S Marietta Pkwy : Aviation Rd"
    }, {
        "id": "cctv_5177",
        "stream": "/georgiavss3/gdot-cam-448.stream/playlist.m3u8",
        "name": "I-75 : N OF WOODSTOCK RD"
    }, {
        "id": "cctv_10184",
        "url": "/georgiasnapshots/GWIN-CAM-006.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Rockbridge Rd"
    }, {
        "id": "cctv_8956",
        "stream": "/georgiavss1/dek-cam-014.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : McClendon Dr / Frazier Rd"
    }, {
        "id": "cctv_5051",
        "stream": "/georgiavss2/gdot-cam-282.stream/playlist.m3u8",
        "name": "I-285 : COVINGTON HWY RAMP METER"
    }, {
        "id": "cctv_7320",
        "url": "/georgiasnapshots/COBB-CAM-060.jpg",
        "name": "EW Connector : Powder Springs Rd"
    }, {
        "id": "cctv_5049",
        "stream": "/georgiavss2/gdot-cam-280.stream/playlist.m3u8",
        "name": "I-285 : US 19"
    }, {
        "id": "cctv_13322",
        "stream": "/georgiavss4/gdot-cam-762.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }, {
        "id": "cctv_15280",
        "url": "/georgiasnapshots/ATL-CAM-918.jpg",
        "name": "Martin Luther King Jr Dr : Ted Turner Dr"
    }, {
        "id": "cctv_5587",
        "stream": "/georgiavss4/gdot-cam-670.stream/playlist.m3u8",
        "name": "I-285 : NEAR OUTER LOOP RD"
    }, {
        "id": "cctv_5282",
        "stream": "/georgiavss4/gdot-cam-710.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }, {
        "id": "cctv_6301",
        "stream": "/georgiavss1/atl-cam-011.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : SR 237 / Piedmont Rd"
    }, {
        "id": "cctv_5173",
        "stream": "/georgiavss3/gdot-cam-531.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF WOODSTOCK RD"
    }, {
        "id": "cctv_10315",
        "url": "/georgiasnapshots/GWIN-CAM-141.jpg",
        "name": "SUGARLOAF PKWY : FIVE FORKS TRICKUM RD"
    }, {
        "id": "cctv_15449",
        "url": "/georgiasnapshots/HNRY-CAM-921.jpg",
        "name": "SR 155 : King Mill Rd/Ind Blvd"
    }, {
        "id": "cctv_12926",
        "url": "/georgiasnapshots/COBB-CAM-253.jpg",
        "name": "Dallas Hwy : Casteel/Old Hamilton Rd"
    }, {
        "id": "cctv_13217",
        "stream": "/georgiavss4/gdot-cam-772.stream/playlist.m3u8",
        "name": "I-675 : S OF SR 138"
    }, {
        "id": "cctv_5245",
        "stream": "/georgiavss2/gdot-cam-062.stream/playlist.m3u8",
        "name": "I-75 : FOREST PKWY RAMP METER"
    }, {
        "id": "cctv_46384",
        "url": "/georgiasnapshots/GDOT-CAM-633.jpg",
        "name": "SR 54 : SOUTHSIDE IND PKWY"
    }, {
        "id": "cctv_5121",
        "stream": "/georgiavss2/gdot-cam-038.stream/playlist.m3u8",
        "name": "I-85 : CHESHIRE BRIDGE"
    }, {
        "id": "cctv_15370",
        "stream": "/georgiavss1/brok-cam-201.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Sams Club Dwy"
    }, {
        "id": "cctv_6253",
        "url": "/georgiasnapshots/ROSWELL-CAM-202.jpg",
        "name": "SR 92 : Bent Grass Dr"
    }, {
        "id": "cctv_15184",
        "url": "/georgiasnapshots/MAR-CAM-201.jpg",
        "name": "SR 120A/N Marietta Pkwy : I-75 NB Ramp"
    }, {
        "id": "cctv_16268",
        "url": "/georgiasnapshots/COJC-CAM-770.jpg",
        "name": "Johns Creek Pkwy : Technology Circle"
    }, {
        "id": "cctv_7318",
        "url": "/georgiasnapshots/COBB-CAM-058.jpg",
        "name": "SR 3 / Cobb Pkwy : Cumberland Blvd"
    }, {
        "id": "cctv_5237",
        "stream": "/georgiavss3/gdot-cam-594.stream/playlist.m3u8",
        "name": "SR 141 : JIMMY CARTER BLVD"
    }, {
        "id": "cctv_5330",
        "url": "/georgiasnapshots/GDOT-CAM-827.jpg",
        "name": "GA 400 : ABERNATHY RD"
    }, {
        "id": "cctv_5058",
        "stream": "/georgiavss2/gdot-cam-031.stream/playlist.m3u8",
        "name": "I-75 : S OF CHATT RIVER"
    }, {
        "id": "cctv_32666",
        "url": "/georgiasnapshots/DUN-CAM-151.jpg",
        "name": "Chamblee Dunwoody Rd : Dunwoody Village Pky"
    }, {
        "id": "cctv_10167",
        "url": "/georgiasnapshots/GDOT-CAM-585.jpg",
        "name": "I-285 : EVANS RD"
    }, {
        "id": "cctv_6829",
        "stream": "/georgiavss1/atl-cam-057.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Caroline St NE"
    }, {
        "id": "cctv_32535",
        "url": "/georgiasnapshots/CHAM-CAM-006.jpg",
        "name": "SR 13 / Buford Hwy : CDC Driveway"
    }, {
        "id": "cctv_5226",
        "stream": "/georgiavss3/gdot-cam-575.stream/playlist.m3u8",
        "name": "75/85 : FREEDOM PKWY RAMP METER"
    }, {
        "id": "cctv_15317",
        "url": "/georgiasnapshots/GDOT-CAM-059.jpg",
        "name": "SR 166 : Sylvan Road"
    }, {
        "id": "cctv_10515",
        "url": "/georgiasnapshots/CLAY-CAM-265.jpg",
        "name": "Anvilblock Rd : Lunsford Dr"
    }, {
        "id": "cctv_15514",
        "stream": "/georgiavss3/gdot-cam-469.stream/playlist.m3u8",
        "name": "I-75 : AT TERRELL MILL RD"
    }, {
        "id": "cctv_16244",
        "url": "/georgiasnapshots/COJC-CAM-705.jpg",
        "name": "McGinnis Ferry Rd : Sargent Rd"
    }, {
        "id": "cctv_15285",
        "stream": "/georgiavss1/brok-cam-101.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Colonial Dr"
    }, {
        "id": "cctv_12957",
        "stream": "/georgiavss4/gdot-cam-809.stream/playlist.m3u8",
        "name": "GA 400 : 1 MI S Of LENOX RD"
    }, {
        "id": "cctv_13346",
        "stream": "/georgiavss1/atl-cam-279.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Joseph E Lowery Blvd"
    }, {
        "id": "cctv_16249",
        "url": "/georgiasnapshots/COJC-CAM-650.jpg",
        "name": "Jones Bridge Rd : Douglas Rd"
    }, {
        "id": "cctv_7218",
        "stream": "/georgiavss1/atl-cam-010.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Peachtree Memorial Dr"
    }, {
        "id": "cctv_7357",
        "url": "/georgiasnapshots/COBB-CAM-220.jpg",
        "name": "Sandy Plains Rd : Piedmont Rd"
    }, {
        "id": "cctv_15580",
        "stream": "/georgiavss4/gdot-cam-622.stream/playlist.m3u8",
        "name": "I-285 : COBB PKY WB ENT/EB EXT"
    }, {
        "id": "cctv_7351",
        "url": "/georgiasnapshots/COBB-CAM-334.jpg",
        "name": "Paces Ferry Rd : I-285"
    }, {
        "id": "cctv_5137",
        "stream": "/georgiavss3/gdot-cam-411.stream/playlist.m3u8",
        "name": "I-75 : GRESHAM RD"
    }, {
        "id": "cctv_9123",
        "url": "/georgiasnapshots/COBB-CAM-331.jpg",
        "name": "Atlanta Rd : Brownwood Ln"
    }, {
        "id": "cctv_4935",
        "stream": "/georgiavss2/gdot-cam-151.stream/playlist.m3u8",
        "name": "75/85 : 17TH ST"
    }, {
        "id": "cctv_10354",
        "url": "/georgiasnapshots/GWIN-CAM-180.jpg",
        "name": "SR 20 : Commerce Dr / Frontier Dr"
    }, {
        "id": "cctv_5424",
        "stream": "/georgiavss2/gdot-cam-127.stream/playlist.m3u8",
        "name": "SR 316 : BOGGS RD"
    }, {
        "id": "cctv_15233",
        "stream": "/georgiavss1/atl-cam-902.stream/playlist.m3u8",
        "name": "SR 9 (Spring St) : 17th St"
    }, {
        "id": "cctv_13265",
        "stream": "/georgiavss4/gdot-cam-740.stream/playlist.m3u8",
        "name": "I-75 : N OF HUDSON BR"
    }, {
        "id": "cctv_5218",
        "stream": "/georgiavss3/gdot-cam-555.stream/playlist.m3u8",
        "name": "I-85 : PLEASANT HILL RAMP METER"
    }, {
        "id": "cctv_5035",
        "stream": "/georgiavss2/gdot-cam-268.stream/playlist.m3u8",
        "name": "I-285 : E OF CLIFTON SPRINGS RD"
    }, {
        "id": "cctv_15454",
        "url": "/georgiasnapshots/ATL-CAM-964.jpg",
        "name": "Windsor St : Rawson St / I-20 Ramp"
    }, {
        "id": "cctv_6833",
        "stream": "/georgiavss1/dek-cam-053.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Henrico Rd"
    }, {
        "id": "cctv_5164",
        "stream": "/georgiavss3/gdot-cam-436.stream/playlist.m3u8",
        "name": "I-75 : N OF CHASTAIN RD"
    }, {
        "id": "cctv_10247",
        "url": "/georgiasnapshots/GWIN-CAM-073.jpg",
        "name": "SR 378 : PIONEER PARK PL / W of ARC WAY"
    }, {
        "id": "cctv_15309",
        "url": "/georgiasnapshots/ATL-CAM-938.jpg",
        "name": "North Ave : Argonne Ave/Central Park Pl"
    }, {
        "id": "cctv_13312",
        "url": "/georgiasnapshots/DEK-CAM-042.jpg",
        "name": "SR 12 (Covington Hwy) : Evans Mill Rd"
    }, {
        "id": "cctv_10240",
        "url": "/georgiasnapshots/GWIN-CAM-066.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : W of TAYLOR RD"
    }, {
        "id": "cctv_5005",
        "stream": "/georgiavss2/gdot-cam-238.stream/playlist.m3u8",
        "name": "I-285 : S OF HENDERSON RD"
    }, {
        "id": "cctv_10357",
        "url": "/georgiasnapshots/GWIN-CAM-183.jpg",
        "name": "COLLINS HILL RD : COLLINS IND WAY - LENDON CONN"
    }, {
        "id": "cctv_5134",
        "stream": "/georgiavss3/gdot-cam-409.stream/playlist.m3u8",
        "name": "I-75 : NORTH OF S 120 LOOP"
    }, {
        "id": "cctv_10143",
        "url": "/georgiasnapshots/COBB-CAM-340.jpg",
        "name": "SR 3/Cobb Pkwy : Blue Springs/Jim Owens Rd"
    }, {
        "id": "cctv_10336",
        "url": "/georgiasnapshots/GWIN-CAM-162.jpg",
        "name": "SR 124 : CENTERVILLE ES / VILLAGE GLEN DR"
    }, {
        "id": "cctv_13588",
        "stream": "/georgiavss1/brok-cam-007.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : N Cliff Valley Rd"
    }, {
        "id": "cctv_12911",
        "url": "/georgiasnapshots/COBB-CAM-215.jpg",
        "name": "Sandy Plains Rd : Scufflegrit Rd"
    }, {
        "id": "cctv_15247",
        "stream": "/georgiavss1/atl-cam-411.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Maynard Terrace"
    }, {
        "id": "cctv_4979",
        "stream": "/georgiavss2/gdot-cam-214.stream/playlist.m3u8",
        "name": "I-285 : E OF ROSWELL RD"
    }, {
        "id": "cctv_13078",
        "stream": "/georgiavss1/atl-cam-082.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : McDaniel St"
    }, {
        "id": "cctv_15403",
        "stream": "/georgiavss2/gdot-cam-293.stream/playlist.m3u8",
        "name": "I-20 : SR 5/Bill Arp Rd"
    }, {
        "id": "cctv_5709",
        "stream": "/georgiavss3/gdot-cam-586.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : S of Chatt River Park"
    }, {
        "id": "cctv_15319",
        "url": "/georgiasnapshots/MAR-CAM-114.jpg",
        "name": "SR 3/Cobb Pkwy : Lifes Way"
    }, {
        "id": "cctv_10284",
        "url": "/georgiasnapshots/GWIN-CAM-110.jpg",
        "name": "SATELLITE BLVD : OLD NORCROSS RD EAST"
    }, {
        "id": "cctv_10448",
        "url": "/georgiasnapshots/CLAY-CAM-040.jpg",
        "name": "SR 42 : Fielder Rd"
    }, {
        "id": "cctv_13212",
        "url": "/georgiasnapshots/COBB-CAM-262.jpg",
        "name": "SR 6 : Florence Rd"
    }, {
        "id": "cctv_13716",
        "stream": "/georgiavss1/dek-cam-157.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : Hambrick Rd"
    }, {
        "id": "cctv_10415",
        "url": "/georgiasnapshots/GCDOT-IVDS-212-PH8.jpg",
        "name": "SR 378 : PARK DR / VULCAN DRWY(PH8)"
    }, {
        "id": "cctv_46414",
        "stream": "/georgiavss1/atl-cam-274.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Wood Sr"
    }, {
        "id": "cctv_46311",
        "url": "/georgiasnapshots/GWIN-CAM-261.jpg",
        "name": "OLD PEACHTREE RD : PEACHTREE RIDGE HS"
    }, {
        "id": "cctv_32596",
        "url": "/georgiasnapshots/COBB-CAM-014.jpg",
        "name": "Barrett Pkwy : Ridenour Blvd"
    }, {
        "id": "cctv_9175",
        "url": "/georgiasnapshots/COBB-CAM-075.jpg",
        "name": "Mableton Pkwy : South Gordon Rd"
    }, {
        "id": "cctv_5109",
        "stream": "/georgiavss3/gdot-cam-369.stream/playlist.m3u8",
        "name": "I-20 : W OF CANDLER RD"
    }, {
        "id": "cctv_15590",
        "stream": "/georgiavss3/gdot-cam-470.stream/playlist.m3u8",
        "name": "I-75 : N TERRELL MILL EXP ON/OFF"
    }, {
        "id": "cctv_13105",
        "url": "/georgiasnapshots/GWIN-CAM-279.jpg",
        "name": "SR 20 : Sycamore Rd / W Broad St"
    }, {
        "id": "cctv_10232",
        "url": "/georgiasnapshots/GWIN-CAM-058.jpg",
        "name": "SR 124 : SR 20 / GRAYSON HWY / CLAYTON ST"
    }, {
        "id": "cctv_5716",
        "stream": "/georgiavss2/gdot-cam-118.stream/playlist.m3u8",
        "name": "I-85 : JUST S OF I-285"
    }, {
        "id": "cctv_15464",
        "stream": "/georgiavss3/gdot-cam-561.stream/playlist.m3u8",
        "name": "I-575 : S OF RIDGEWALK PKY"
    }, {
        "id": "cctv_15502",
        "stream": "/georgiavss3/gdot-cam-497.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKY ENTRANCE"
    }, {
        "id": "cctv_5373",
        "stream": "/georgiavss4/gdot-cam-937.stream/playlist.m3u8",
        "name": "I-285 : 1 MI S OF LANGFORD PKY"
    }, {
        "id": "cctv_15971",
        "stream": "/georgiavss2/gdot-cam-175.stream/playlist.m3u8",
        "name": "I-85 : HAMILTON MILL RD"
    }, {
        "id": "cctv_10209",
        "url": "/georgiasnapshots/GWIN-CAM-035.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : ABBOTS BRIDGE RD"
    }, {
        "id": "cctv_15188",
        "url": "/georgiasnapshots/MAR-CAM-205.jpg",
        "name": "SR 120/N Marietta Pkwy : Whitlock Ave"
    }, {
        "id": "cctv_5195",
        "stream": "/georgiavss3/gdot-cam-504.stream/playlist.m3u8",
        "name": "I-575 : NOONDAY CREEK"
    }, {
        "id": "cctv_13111",
        "url": "/georgiasnapshots/GWIN-CAM-287.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Harbins Rd"
    }, {
        "id": "cctv_10381",
        "url": "/georgiasnapshots/GWIN-CAM-207.jpg",
        "name": "DACULA RD : FENCE RD"
    }, {
        "id": "cctv_15261",
        "url": "/georgiasnapshots/A-TEST-CAM-005.jpg",
        "name": "RTOP-TEST : 1101"
    }, {
        "id": "cctv_32614",
        "url": "/georgiasnapshots/ATL-CAM-989.jpg",
        "name": "Decatur St : Grant St / Hilliard St"
    }, {
        "id": "cctv_15361",
        "url": "/georgiasnapshots/CLAY-CAM-065.jpg",
        "name": "SR 331 / Forest Pkwy : Frontage Rd"
    }, {
        "id": "cctv_10457",
        "url": "/georgiasnapshots/CLAY-CAM-053.jpg",
        "name": "SR 54 / Jonesboro Rd : Reynolds Rd"
    }, {
        "id": "cctv_5291",
        "stream": "/georgiavss4/gdot-cam-719.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BRIDGE"
    }, {
        "id": "cctv_12975",
        "stream": "/georgiavss4/gdot-cam-814.stream/playlist.m3u8",
        "name": "GA 400 : S OF LENOX RD/SR 141 CONN"
    }, {
        "id": "cctv_13678",
        "url": "/georgiasnapshots/MAU%20Brining%20Operations.jpg",
        "name": "Kennedy Dr : Kennedy Rd"
    }, {
        "id": "cctv_15992",
        "url": "/georgiasnapshots/GDOT-CAM-799.jpg",
        "name": "I-85 : 1 MI N OF HAMILTON MILL"
    }, {
        "id": "cctv_15966",
        "stream": "/georgiavss2/gdot-cam-161.stream/playlist.m3u8",
        "name": "I-85 : S OF I-985"
    }, {
        "id": "cctv_13771",
        "stream": "/georgiavss1/atl-cam-601.stream/playlist.m3u8",
        "name": "Cheshire Bridge Rd : I-85 NB Ramp"
    }, {
        "id": "cctv_9059",
        "stream": "/georgiavss1/atl-cam-047.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : N Atlanta High School"
    }, {
        "id": "cctv_15487",
        "stream": "/georgiavss3/gdot-cam-492.stream/playlist.m3u8",
        "name": "I-75 : N OF BELLS FERRY RD"
    }, {
        "id": "cctv_13305",
        "stream": "/georgiavss1/dek-cam-034.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Wesley Chapel Rd"
    }, {
        "id": "cctv_32941",
        "url": "/georgiasnapshots/ATL-CAM-991.jpg",
        "name": "Dekalb Ave : Rocky Ford Rd / Dekalb Pl"
    }, {
        "id": "cctv_5423",
        "stream": "/georgiavss2/gdot-cam-126.stream/playlist.m3u8",
        "name": "I-85 : BOGGS RD"
    }, {
        "id": "cctv_15252",
        "url": "/georgiasnapshots/ATL-CAM-907.jpg",
        "name": "Piedmont Ave : 14th St"
    }, {
        "id": "cctv_16248",
        "url": "/georgiasnapshots/COJC-CAM-645.jpg",
        "name": "Jones Bridge Rd : Sargent Rd"
    }, {
        "id": "cctv_46296",
        "url": "/georgiasnapshots/GWIN-CAM-230.jpg",
        "name": "US 78 : ROSEBUD RD"
    }, {
        "id": "cctv_10396",
        "url": "/georgiasnapshots/GWIN-CAM-237.jpg",
        "name": "SUWANEE DAM RD : TENCH RD"
    }, {
        "id": "cctv_10395",
        "url": "/georgiasnapshots/GWIN-CAM-236.jpg",
        "name": "SUWANEE DAM RD : SETTLES BRIDGE RD"
    }, {
        "id": "cctv_7356",
        "url": "/georgiasnapshots/COBB-CAM-163.jpg",
        "name": "SR 120 / Roswell Rd : Robinson West"
    }, {
        "id": "cctv_13108",
        "url": "/georgiasnapshots/GWIN-CAM-276.jpg",
        "name": "SR 20 : Rock Springs Rd"
    }, {
        "id": "cctv_13264",
        "stream": "/georgiavss4/gdot-cam-728.stream/playlist.m3u8",
        "name": "SR 138 : I-75 SB RAMP"
    }, {
        "id": "cctv_4997",
        "stream": "/georgiavss2/gdot-cam-230.stream/playlist.m3u8",
        "name": "I-285 : BUFORD HIGHWAY"
    }, {
        "id": "cctv_16080",
        "url": "/georgiasnapshots/MAR-CAM-601.jpg",
        "name": "SR 280 / Delk Rd : Franklin Gateway"
    }, {
        "id": "cctv_16223",
        "url": "/georgiasnapshots/COJC-CAM-465.jpg",
        "name": "State Bridge Rd : Home Depot"
    }, {
        "id": "cctv_13091",
        "stream": "/georgiavss1/doug-cam-039.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Wenona St"
    }, {
        "id": "cctv_46272",
        "url": "/georgiasnapshots/GWIN-CAM-210.jpg",
        "name": "PLEASANT HILL RD : MAY RD"
    }, {
        "id": "cctv_16359",
        "url": "/georgiasnapshots/FORS-CAM-014.jpg",
        "name": "SR 9/Dahlonega Hwy : SR 20/West Maple Dr."
    }, {
        "id": "cctv_10342",
        "url": "/georgiasnapshots/GWIN-CAM-168.jpg",
        "name": "SR 20 : HERRING RD"
    }, {
        "id": "cctv_10322",
        "url": "/georgiasnapshots/GWIN-CAM-148.jpg",
        "name": "PLEASANT HILL RD : CRUSE RD"
    }, {
        "id": "cctv_15408",
        "stream": "/georgiavss2/gdot-cam-304.stream/playlist.m3u8",
        "name": "I-20 : Midway Rd Overpass"
    }, {
        "id": "cctv_46291",
        "url": "/georgiasnapshots/BROK-CAM-087",
        "name": "Perimeter Summit Pkwy : Parkside Pl"
    }, {
        "id": "cctv_5120",
        "stream": "/georgiavss3/gdot-cam-379.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL RD"
    }, {
        "id": "cctv_13147",
        "url": "/georgiasnapshots/ROSWELL-CAM-208.jpg",
        "name": "SR 92 : Roswell Crossing"
    }, {
        "id": "cctv_13604",
        "stream": "/georgiavss1/alph-cam-022.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : SR 400 SB Ramp"
    }, {
        "id": "cctv_9119",
        "url": "/georgiasnapshots/COBB-CAM-244.jpg",
        "name": "Powder Springs Rd : Forest Hill Dr"
    }, {
        "id": "cctv_15366",
        "url": "/georgiasnapshots/CLAY-CAM-199.jpg",
        "name": "Upper Riverdale Rd : Lamar Hutcheson Pkwy"
    }, {
        "id": "cctv_5960",
        "stream": "/georgiavss4/gdot-cam-616.stream/playlist.m3u8",
        "name": "I-675 : CEDAR GROVE RD"
    }, {
        "id": "cctv_7211",
        "stream": "/georgiavss1/atl-cam-025.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Cheshire Br Rd"
    }, {
        "id": "cctv_13081",
        "stream": "/georgiavss1/atl-cam-272.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : I-285 NB Ramp"
    }, {
        "id": "cctv_13228",
        "stream": "/georgiavss4/gdot-cam-739.stream/playlist.m3u8",
        "name": "I-75 : S OF FLIPPEN RD"
    }, {
        "id": "cctv_6263",
        "url": "/georgiasnapshots/ROSWELL-CAM-116.jpg",
        "name": "SR 140 : Eves Rd"
    }, {
        "id": "cctv_4972",
        "stream": "/georgiavss2/gdot-cam-208.stream/playlist.m3u8",
        "name": "I-285 : WEST OF RVRSIDE DR"
    }, {
        "id": "cctv_10325",
        "url": "/georgiasnapshots/GWIN-CAM-151.jpg",
        "name": "PLEASANT HILL RD : CLUB DR"
    }, {
        "id": "cctv_15395",
        "stream": "/georgiavss3/gdot-cam-543.stream/playlist.m3u8",
        "name": "I-575 : N BOOTH RD"
    }, {
        "id": "cctv_15987",
        "stream": "/georgiavss2/gdot-cam-153.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 120"
    }, {
        "id": "cctv_32604",
        "url": "/georgiasnapshots/COBB-CAM-107.jpg",
        "name": "Johnson Ferry Rd : Bishop Lake Rd"
    }, {
        "id": "cctv_15352",
        "stream": "http://vss12live.dot.ga.gov:80/lo/brok-cam-051.stream/playlist.m3u8",
        "name": "SR 42 / N. Druid Hills : Tullie Rd / Executive Park"
    }, {
        "id": "cctv_15314",
        "url": "/georgiasnapshots/ATL-CAM-941.jpg",
        "name": "Marietta St : Peachtree St"
    }, {
        "id": "cctv_12967",
        "stream": "/georgiavss4/gdot-cam-822.stream/playlist.m3u8",
        "name": "GA 400 : S OF NORTHLAND DR"
    }, {
        "id": "cctv_15459",
        "stream": "/georgiavss1/alph-cam-031.stream/playlist.m3u8",
        "name": "North Point Pkwy : Webb Bridge Rd"
    }, {
        "id": "cctv_15583",
        "stream": "/georgiavss3/gdot-cam-457.stream/playlist.m3u8",
        "name": "I-75 : S OF AKERS MILL RD"
    }, {
        "id": "cctv_10365",
        "url": "/georgiasnapshots/GWIN-CAM-191.jpg",
        "name": "SR 10 : Wisteria Dr / Skyland Dr"
    }, {
        "id": "cctv_9335",
        "stream": "/georgiavss1/atl-cam-095.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : W Paces Ferry Rd"
    }, {
        "id": "cctv_46314",
        "url": "/georgiasnapshots/GC-CAM-264.jpg",
        "name": "OLD PEACHTREE RD : DISTRIBUTION DR"
    }, {
        "id": "cctv_5128",
        "stream": "/georgiavss3/gdot-cam-403.stream/playlist.m3u8",
        "name": "I-75 : DELK RD"
    }, {
        "id": "cctv_15969",
        "stream": "/georgiavss2/gdot-cam-166.stream/playlist.m3u8",
        "name": "I-85 : 1 MILE S OF SR 20"
    }, {
        "id": "cctv_13618",
        "url": "/georgiasnapshots/COBB-CAM-170.jpg",
        "name": "SR 120 / Roswell Rd : Wood Trail Ln"
    }, {
        "id": "cctv_4983",
        "stream": "/georgiavss2/gdot-cam-218.stream/playlist.m3u8",
        "name": "I-285 : PEACHTREE-DNWDY"
    }, {
        "id": "cctv_10237",
        "url": "/georgiasnapshots/GWIN-CAM-063.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : RIVERSIDE PKWY"
    }, {
        "id": "cctv_8794",
        "url": "/georgiasnapshots/COBB-CAM-341.jpg",
        "name": "SR 3 / Cobb Pkwy : Kennesaw Due West Rd"
    }, {
        "id": "cctv_5304",
        "stream": "/georgiavss4/gdot-cam-779.stream/playlist.m3u8",
        "name": "US 78 : RAMP TO I-285 N"
    }, {
        "id": "cctv_5107",
        "stream": "/georgiavss3/gdot-cam-367.stream/playlist.m3u8",
        "name": "I-20 : E OF FLAT SHOALS"
    }, {
        "id": "cctv_15399",
        "stream": "/georgiavss3/gdot-cam-545.stream/playlist.m3u8",
        "name": "I-575 : AT HAWKINS STORE ROAD"
    }, {
        "id": "cctv_15438",
        "stream": "/georgiavss3/gdot-cam-565.stream/playlist.m3u8",
        "name": "I-575 : SIXES RD ENT RAMP"
    }, {
        "id": "cctv_5298",
        "stream": "/georgiavss2/gdot-cam-076.stream/playlist.m3u8",
        "name": "I-85 : AIRPORT EXIT"
    }, {
        "id": "cctv_15175",
        "url": "/georgiasnapshots/MAR-CAM-106.jpg",
        "name": "SR 3/Cobb Pkwy : SR 3C/Roswell St"
    }, {
        "id": "cctv_5185",
        "stream": "/georgiavss2/gdot-cam-046.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285 (MORELAND INTRCHGE)"
    }, {
        "id": "cctv_4991",
        "stream": "/georgiavss2/gdot-cam-225.stream/playlist.m3u8",
        "name": "I-285 : W OF N PEACHTREE"
    }, {
        "id": "cctv_16211",
        "url": "/georgiasnapshots/ATL-CAM-976.jpg",
        "name": "Peachtree Center Avenue : Baker St"
    }, {
        "id": "cctv_10426",
        "stream": "/georgiavss1/fay-cam-203.stream/playlist.m3u8",
        "name": "SR 314 : Grove Park Entry / Lowes"
    }, {
        "id": "cctv_10216",
        "url": "/georgiasnapshots/GWIN-CAM-042.jpg",
        "name": "SR 20 : Woodward Crossing Blvd"
    }, {
        "id": "cctv_5242",
        "stream": "/georgiavss3/gdot-cam-599.stream/playlist.m3u8",
        "name": "SR 141 : TILLY MILL RD"
    }, {
        "id": "cctv_13121",
        "url": "/georgiasnapshots/HNRY-CAM-008.jpg",
        "name": "SR 20 : SR 42 SB / Jonesboro Rd"
    }, {
        "id": "cctv_15301",
        "stream": "/georgiavss1/atl-cam-931.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Baker St"
    }, {
        "id": "cctv_10280",
        "url": "/georgiasnapshots/GWIN-CAM-106.jpg",
        "name": "SATELLITE BLVD : N of PARAGON"
    }, {
        "id": "cctv_5339",
        "stream": "/georgiavss4/gdot-cam-835.stream/playlist.m3u8",
        "name": "GA 400 : S OF HOLCOMB BR"
    }, {
        "id": "cctv_13151",
        "url": "/georgiasnapshots/ROSWELL-CAM-404.jpg",
        "name": "Mansell Rd : Eagle Crest Village Ln"
    }, {
        "id": "cctv_13677",
        "url": "/georgiasnapshots/CLAY-CAM-012.jpg",
        "name": "SR 139 / Church St : King Rd"
    }, {
        "id": "cctv_8811",
        "stream": "/georgiavss4/gdot-cam-855.stream/playlist.m3u8",
        "name": "GA 400 : NEAR PEACHTREE PKWY"
    }, {
        "id": "cctv_15390",
        "stream": "/georgiavss3/gdot-cam-549.stream/playlist.m3u8",
        "name": "I-575 : S OF SR 92"
    }, {
        "id": "cctv_5317",
        "stream": "/georgiavss4/gdot-cam-790.stream/playlist.m3u8",
        "name": "US 78 : HUGH HOWELL RD"
    }, {
        "id": "cctv_13086",
        "url": "/georgiasnapshots/COBB-CAM-120.jpg",
        "name": "Akers Mill Rd : Overton Park Dr"
    }, {
        "id": "cctv_15613",
        "stream": "/georgiavss3/gdot-cam-475.stream/playlist.m3u8",
        "name": "I-75 : DELK RD EXIT"
    }, {
        "id": "cctv_5078",
        "stream": "/georgiavss3/gdot-cam-340.stream/playlist.m3u8",
        "name": "I-20 : E OF LANGHORN ST"
    }, {
        "id": "cctv_5321",
        "stream": "/georgiavss4/gdot-cam-794.stream/playlist.m3u8",
        "name": "US 78 : W OF JEFFERSON DAVIS RD"
    }, {
        "id": "cctv_7226",
        "stream": "/georgiavss1/atl-cam-019.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Darlington Rd"
    }, {
        "id": "cctv_13558",
        "url": "/georgiasnapshots/CLAY-CAM-153.jpg",
        "name": "SR 138 / Lake Spivey Rd : Hannover Pkwy"
    }, {
        "id": "cctv_12947",
        "url": "/georgiasnapshots/DOUG-CAM-023.jpg",
        "name": "Douglas Blvd : Lowes Entrance"
    }, {
        "id": "cctv_8826",
        "stream": "/georgiavss1/atl-cam-028.stream/playlist.m3u8",
        "name": "Lenox Rd : GA 400"
    }, {
        "id": "cctv_5013",
        "stream": "/georgiavss2/gdot-cam-245.stream/playlist.m3u8",
        "name": "I-285 : STONE MT FRWY-US 78"
    }, {
        "id": "cctv_16093",
        "url": "/georgiasnapshots/ATL-CAM-974.jpg",
        "name": "10th St : Fowler St"
    }, {
        "id": "cctv_7346",
        "url": "/georgiasnapshots/COBB-CAM-320.jpg",
        "name": "Chastain Rd : I-75 SB Ramp"
    }, {
        "id": "cctv_13190",
        "stream": "/georgiavss1/atl-cam-271.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : SR 70 (Fulton Industrial Blvd)"
    }, {
        "id": "cctv_12897",
        "url": "/georgiasnapshots/COBB-CAM-312.jpg",
        "name": "Bells Ferry Rd : Shiloh/Shallowford Rd"
    }, {
        "id": "cctv_15542",
        "stream": "/georgiavss3/gdot-cam-567.stream/playlist.m3u8",
        "name": "I-575 : N OF SIXES RD"
    }, {
        "id": "cctv_15293",
        "stream": "/georgiavss1/atl-cam-540.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : MLK Jr Dr / M-B Stadium"
    }, {
        "id": "cctv_13742",
        "url": "/georgiasnapshots/COBB-CAM-044.jpg",
        "name": "Powers Ferry Rd : Interstate North Pkwy"
    }, {
        "id": "cctv_13059",
        "stream": "/georgiavss1/atl-cam-079.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Manford Rd"
    }, {
        "id": "cctv_16228",
        "url": "/georgiasnapshots/COJC-CAM-525.jpg",
        "name": "Old Alabama Rd : Haynes Bridge Rd"
    }, {
        "id": "cctv_10185",
        "url": "/georgiasnapshots/GWIN-CAM-007.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Jimmy Carter Blvd / Mountain Ind Blvd"
    }, {
        "id": "cctv_5328",
        "stream": "/georgiavss4/gdot-cam-825.stream/playlist.m3u8",
        "name": "GA 400 : N OF I-285"
    }, {
        "id": "cctv_15903",
        "url": "/georgiasnapshots/HNRY-CAM-007.jpg",
        "name": "SR 81 : Racetrack Rd"
    }, {
        "id": "cctv_13669",
        "stream": "/georgiavss1/dek-cam-228.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : I-285 EB Ramp"
    }, {
        "id": "cctv_5256",
        "stream": "/georgiavss4/gdot-cam-658.stream/playlist.m3u8",
        "name": "I-285 : CD LANES - NO TRAFFIC"
    }, {
        "id": "cctv_9062",
        "stream": "/georgiavss1/atl-cam-046.stream/playlist.m3u8",
        "name": "Mt Paran Rd : I-75 NB Ramp"
    }, {
        "id": "cctv_13336",
        "url": "/georgiasnapshots/GWIN-CAM-323.jpg",
        "name": "SR 140 : Atlantic Blvd"
    }, {
        "id": "cctv_12962",
        "stream": "/georgiavss4/gdot-cam-819.stream/playlist.m3u8",
        "name": "GA 400 : LORIDANS DR"
    }, {
        "id": "cctv_5588",
        "stream": "/georgiavss4/gdot-cam-671.stream/playlist.m3u8",
        "name": "I-285 : W OF LAKE MIRROR"
    }, {
        "id": "cctv_10266",
        "url": "/georgiasnapshots/GWIN-CAM-092.jpg",
        "name": "OLD NORCROSS RD : BRECKINRIDGE BLVD"
    }, {
        "id": "cctv_16227",
        "url": "/georgiasnapshots/COJC-CAM-470.jpg",
        "name": "State Bridge Rd : Parkway Baptist"
    }, {
        "id": "cctv_10187",
        "url": "/georgiasnapshots/GWIN-CAM-009.jpg",
        "name": "SR 140 : S Norcross-Tucker Rd / Singleton Rd"
    }, {
        "id": "cctv_10412",
        "url": "/georgiasnapshots/GCDOT-IVDS-075-PH4.jpg",
        "name": "WEST PARK PLACE BLVD : US 78 EB RAMPS"
    }, {
        "id": "cctv_32632",
        "url": "/georgiasnapshots/HALL-CAM-013.JPG",
        "name": "I-985 SB : SR 53"
    }, {
        "id": "cctv_7307",
        "url": "/georgiasnapshots/COBB-CAM-033.jpg",
        "name": "Windy Hill Rd : CMS (Roswell St)"
    }, {
        "id": "cctv_13079",
        "stream": "/georgiavss1/atl-cam-094.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : I-75 SB Ramp"
    }, {
        "id": "cctv_46427",
        "url": "/georgiasnapshots/FULT-CAM-009.jpg",
        "name": "GA 154/ Womack Ave : Hardee Ave"
    }, {
        "id": "cctv_10468",
        "url": "/georgiasnapshots/CLAY-CAM-074.jpg",
        "name": "Main St (JB) : College St"
    }, {
        "id": "cctv_9115",
        "stream": "/georgiavss1/atl-cam-051.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Wieuca Rd"
    }, {
        "id": "cctv_5118",
        "stream": "/georgiavss3/gdot-cam-377.stream/playlist.m3u8",
        "name": "I-20 : E OF I-285 (DEKALB)"
    }, {
        "id": "cctv_10136",
        "url": "/georgiasnapshots/COBB-CAM-212.jpg",
        "name": "Shallowford Rd : Mabry Rd"
    }, {
        "id": "cctv_15421",
        "stream": "/georgiavss3/gdot-cam-317.stream/playlist.m3u8",
        "name": "I-20 : West of Riverside Pkwy"
    }, {
        "id": "cctv_5400",
        "stream": "/georgiavss4/gdot-cam-962.stream/playlist.m3u8",
        "name": "I-285 : N OF SOUTH COBB DR"
    }, {
        "id": "cctv_5221",
        "stream": "/georgiavss3/gdot-cam-578.stream/playlist.m3u8",
        "name": "75/85 : UNIVERSITY AVE RAMP METER"
    }, {
        "id": "cctv_15259",
        "url": "/georgiasnapshots/DEK-CAM-201.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Walmart SC"
    }, {
        "id": "cctv_9058",
        "stream": "/georgiavss1/atl-cam-045.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : Mt. Paran Rd."
    }, {
        "id": "cctv_15282",
        "stream": "/georgiavss1/atl-cam-920.stream/playlist.m3u8",
        "name": "Marietta St : Centennial Olympic Park Dr"
    }, {
        "id": "cctv_46397",
        "url": "/georgiasnapshots/BROK-CAM-081.jpg",
        "name": "Ashford Dunwoody Rd : I-285 EB Ramp"
    }, {
        "id": "cctv_15410",
        "stream": "/georgiavss2/gdot-cam-297.stream/playlist.m3u8",
        "name": "I-20 : East of Prestley Mill Rd"
    }, {
        "id": "cctv_5019",
        "stream": "/georgiavss2/gdot-cam-250.stream/playlist.m3u8",
        "name": "I-285 : NORTH DECATUR RD"
    }, {
        "id": "cctv_15359",
        "stream": "/georgiavss1/atl-cam-804.stream/playlist.m3u8",
        "name": "SR 3 / Central Ave : Browns Mill Rd"
    }, {
        "id": "cctv_16081",
        "stream": "/georgiavss1/doug-cam-034.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : I-20 WB Ramp"
    }, {
        "id": "cctv_13757",
        "url": "/georgiasnapshots/SMYR-CAM-006.jpg",
        "name": "SR 280/S Cobb Dr : Concord Rd"
    }, {
        "id": "cctv_8959",
        "stream": "/georgiavss1/dek-cam-001.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Lakeshore Dr / N Ponce"
    }, {
        "id": "cctv_13251",
        "stream": "/georgiavss4/gdot-cam-679.stream/playlist.m3u8",
        "name": "JONESBORO RD : FOSTER DR"
    }, {
        "id": "cctv_5205",
        "stream": "/georgiavss3/gdot-cam-513.stream/playlist.m3u8",
        "name": "I-575 : 1 MI S OF HWY 92"
    }, {
        "id": "cctv_9158",
        "stream": "/georgiavss1/dek-cam-009.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Church St"
    }, {
        "id": "cctv_13737",
        "url": "/georgiasnapshots/COBB-CAM-106.jpg",
        "name": "Johnson Ferry Rd : Sewell Mill Rd"
    }, {
        "id": "cctv_13562",
        "stream": "/georgiavss4/gdot-cam-730.stream/playlist.m3u8",
        "name": "I-75 : N OF I-675"
    }, {
        "id": "cctv_10200",
        "url": "/georgiasnapshots/GWIN-CAM-026.jpg",
        "name": "STEVE REYNOLDS BLVD : I-85 NB RAMP"
    }, {
        "id": "cctv_4934",
        "stream": "/georgiavss2/gdot-cam-150.stream/playlist.m3u8",
        "name": "75/85 : 17TH ST"
    }, {
        "id": "cctv_13351",
        "url": "/georgiasnapshots/DEK-CAM-303.jpg",
        "name": "SR 155 / Clairmont Rd : Starvine Way"
    }, {
        "id": "cctv_10194",
        "url": "/georgiasnapshots/GWIN-CAM-016.jpg",
        "name": "SR 10 : SR 124 (Scenic Hwy)"
    }, {
        "id": "cctv_5096",
        "stream": "/georgiavss3/gdot-cam-357.stream/playlist.m3u8",
        "name": "I-20 : MORELAND AVE"
    }, {
        "id": "cctv_12922",
        "url": "/georgiasnapshots/COBB-CAM-110.jpg",
        "name": "SR 360/Macland Rd : Barrett Pkwy"
    }, {
        "id": "cctv_10536",
        "url": "/georgiasnapshots/COBB-CAM-240.jpg",
        "name": "SR 360/Powder Springs Rd : Callaway/Cheatham Hill Rd"
    }, {
        "id": "cctv_46452",
        "url": "/georgiasnapshots/FULT-CAM-030.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Stonewall Tell Rd"
    }, {
        "id": "cctv_5045",
        "stream": "/georgiavss2/gdot-cam-277.stream/playlist.m3u8",
        "name": "I-285 : JONESBORO RD"
    }, {
        "id": "cctv_10405",
        "url": "/georgiasnapshots/GWIN-CAM-246.jpg",
        "name": "SR 140 : Dawson Blvd"
    }, {
        "id": "cctv_16135",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.9.jpg",
        "name": "I-20 : west of Turner Rd/Exit 75"
    }, {
        "id": "cctv_5430",
        "stream": "/georgiavss2/gdot-cam-133.stream/playlist.m3u8",
        "name": "I-85 : OLD PEACHTREE"
    }, {
        "id": "cctv_5052",
        "stream": "/georgiavss2/gdot-cam-283.stream/playlist.m3u8",
        "name": "I-285 : COVINGTON HWY RAMP METER"
    }, {
        "id": "cctv_15328",
        "url": "/georgiasnapshots/ATL-CAM-947.jpg",
        "name": "Marietta St : Forsyth St"
    }, {
        "id": "cctv_4924",
        "stream": "/georgiavss2/gdot-cam-106.stream/playlist.m3u8",
        "name": "I-85 : BEAVER RUIN"
    }, {
        "id": "cctv_15955",
        "stream": "/georgiavss2/gdot-cam-154.stream/playlist.m3u8",
        "name": "I-85 : N OF OLD PEACHTREE RD"
    }, {
        "id": "cctv_5203",
        "stream": "/georgiavss3/gdot-cam-511.stream/playlist.m3u8",
        "name": "I-575 : HAWKINS STORE RD"
    }, {
        "id": "cctv_16294",
        "stream": "/georgiavss1/atl-cam-076.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Atlanta Metropolitan College"
    }, {
        "id": "cctv_9069",
        "stream": "/georgiavss1/alph-cam-006.stream/playlist.m3u8",
        "name": "SR 9 : SR 120 (Old Milton Parkway)"
    }, {
        "id": "cctv_9172",
        "url": "/georgiasnapshots/COBB-CAM-070.jpg",
        "name": "Floyd Rd : Clay Rd"
    }, {
        "id": "cctv_13769",
        "stream": "/georgiavss1/atl-cam-604.stream/playlist.m3u8",
        "name": "Sidney Marcus Blvd : SR 400 NB Ramp"
    }, {
        "id": "cctv_13140",
        "url": "/georgiasnapshots/ROSWELL-CAM-112.jpg",
        "name": "SR 140 : Steeple Chase Dr West"
    }, {
        "id": "cctv_10306",
        "url": "/georgiasnapshots/GWIN-CAM-132.jpg",
        "name": "SUGARLOAF PKWY : MEADOW CHURCH RD"
    }, {
        "id": "cctv_32607",
        "url": "/georgiasnapshots/COBB-CAM-147.jpg",
        "name": "Cumberland Pkwy : Mt Wilkinson"
    }, {
        "id": "cctv_13730",
        "url": "/georgiasnapshots/SMYR-CAM-013.jpg",
        "name": "Atlanta Rd : Pat Mell Rd"
    }, {
        "id": "cctv_5953",
        "stream": "/georgiavss3/gdot-cam-609.stream/playlist.m3u8",
        "name": "I-675 : S OF ELLENWOOD RD"
    }, {
        "id": "cctv_10255",
        "url": "/georgiasnapshots/GWIN-CAM-081.jpg",
        "name": "OLD NORCROSS RD : W of SR 120"
    }, {
        "id": "cctv_5351",
        "stream": "/georgiavss4/gdot-cam-848.stream/playlist.m3u8",
        "name": "GA 400 : N OF WINDWARD PKWY"
    }, {
        "id": "cctv_7330",
        "url": "/georgiasnapshots/COBB-CAM-103.jpg",
        "name": "Johnson Ferry Rd : Princeton Lake"
    }, {
        "id": "cctv_32586",
        "url": "/georgiasnapshots/HALL-CAM-006.jpg",
        "name": "I-985 NB : Spout Springs Rd"
    }, {
        "id": "cctv_46302",
        "url": "/georgiasnapshots/GWIN-CAM-251.jpg",
        "name": "SR 124 : HAMILTON MILL RD/PKWY"
    }, {
        "id": "cctv_6252",
        "url": "/georgiasnapshots/ROSWELL-CAM-204.jpg",
        "name": "SR 92 : Crabapple Rd"
    }, {
        "id": "cctv_10382",
        "url": "/georgiasnapshots/GWIN-CAM-208.jpg",
        "name": "DACULA RD : DACULA PARK and LIBRARY"
    }, {
        "id": "cctv_10385",
        "url": "/georgiasnapshots/GWIN-CAM-219.jpg",
        "name": "INDIAN TRAIL LILBURN RD : OAKBROOK PKWY"
    }, {
        "id": "cctv_13171",
        "url": "/georgiasnapshots/COBB-CAM-026.jpg",
        "name": "SR 280/South Cobb Dr : Barclay Cir"
    }, {
        "id": "cctv_12980",
        "url": "/georgiasnapshots/GDOT-CAM-148.jpg",
        "name": "SR 316 : SR 20"
    }, {
        "id": "cctv_13752",
        "url": "/georgiasnapshots/SMYR-CAM-001.jpg",
        "name": "SR 280/S Cobb Dr : I-285"
    }, {
        "id": "cctv_15271",
        "url": "/georgiasnapshots/ATL-CAM-910.jpg",
        "name": "North Ave : Hunt St"
    }, {
        "id": "cctv_13237",
        "stream": "/georgiavss4/gdot-cam-675.stream/playlist.m3u8",
        "name": "FOSTER DR : JONESBORO RD"
    }, {
        "id": "cctv_10180",
        "url": "/georgiasnapshots/GWIN-CAM-002.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Ronald Reagan Pkwy"
    }, {
        "id": "cctv_12898",
        "url": "/georgiasnapshots/COBB-CAM-155.jpg",
        "name": "Canton Rd : Ebenezer Rd"
    }, {
        "id": "cctv_15606",
        "stream": "/georgiavss3/gdot-cam-458.stream/playlist.m3u8",
        "name": "I-75 : S OF I-285/COBB CLOVERLEAF"
    }, {
        "id": "cctv_5248",
        "stream": "/georgiavss4/gdot-cam-650.stream/playlist.m3u8",
        "name": "I-285 : W OF RIVERDALE RD-CMS 243"
    }, {
        "id": "cctv_5382",
        "stream": "/georgiavss4/gdot-cam-945.stream/playlist.m3u8",
        "name": "I-285 : N OF CASCADE RD"
    }, {
        "id": "cctv_12987",
        "url": "/georgiasnapshots/GWIN-CAM-272.jpg",
        "name": "SR 140 : Holcomb Bridge Road"
    }, {
        "id": "cctv_4968",
        "stream": "/georgiavss2/gdot-cam-204.stream/playlist.m3u8",
        "name": "I-285 : 1 MI W OF PWRS FRY"
    }, {
        "id": "cctv_16231",
        "url": "/georgiasnapshots/COJC-CAM-540.jpg",
        "name": "Old Alabama Rd : Timberstone Rd"
    }, {
        "id": "cctv_46322",
        "url": "/georgiasnapshots/GWIN-CAM-331.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SAWMILL RD"
    }, {
        "id": "cctv_6805",
        "stream": "/georgiavss4/gdot-cam-704.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 54"
    }, {
        "id": "cctv_9080",
        "url": "/georgiasnapshots/ALPH-CAM-014b.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }, {
        "id": "cctv_4948",
        "stream": "/georgiavss2/gdot-cam-186.stream/playlist.m3u8",
        "name": "I-85 : N OF FLAT SHOALS RD"
    }, {
        "id": "cctv_10502",
        "url": "/georgiasnapshots/CLAY-CAM-207.jpg",
        "name": "Forest Pkwy : Quiktrip Way"
    }, {
        "id": "cctv_4919",
        "stream": "/georgiavss2/gdot-cam-101.stream/playlist.m3u8",
        "name": "I-85 : S OF CENTER WAY"
    }, {
        "id": "cctv_7343",
        "url": "/georgiasnapshots/COBB-CAM-301.jpg",
        "name": "Johnson Ferry Rd : Columns Dr"
    }, {
        "id": "cctv_5249",
        "stream": "/georgiavss4/gdot-cam-651.stream/playlist.m3u8",
        "name": "I-285 : E OF RIVERDALE RD-CMS 244"
    }, {
        "id": "cctv_13257",
        "stream": "/georgiavss1/fors-cam-005.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Samples Rd / Trammel Rd"
    }, {
        "id": "cctv_15273",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-079.jpg",
        "name": "I-20 : Milepost 079"
    }, {
        "id": "cctv_13584",
        "stream": "/georgiavss1/dek-cam-229.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : I-285 WB Ramp"
    }, {
        "id": "cctv_6323",
        "url": "/georgiasnapshots/COJC-CAM-450.jpg",
        "name": "State Bridge Rd : Johns Creek HS"
    }, {
        "id": "cctv_9182",
        "url": "/georgiasnapshots/COBB-CAM-328.jpg",
        "name": "Atlanta Rd : Old Concord Rd"
    }, {
        "id": "cctv_5190",
        "stream": "/georgiavss2/gdot-cam-050.stream/playlist.m3u8",
        "name": "SR 166 : MAXELL DR"
    }, {
        "id": "cctv_15552",
        "stream": "/georgiavss3/gdot-cam-484.stream/playlist.m3u8",
        "name": "I-75 : SR 120/ROSWELL RD"
    }, {
        "id": "cctv_9078",
        "stream": "/georgiavss1/alph-cam-013.stream/playlist.m3u8",
        "name": "SR 9 : Windward Pkwy"
    }, {
        "id": "cctv_10519",
        "url": "/georgiasnapshots/CLAY-CAM-C603.jpg",
        "name": "SR 3 / Tara Blvd : Near Sherwood Dr"
    }, {
        "id": "cctv_10319",
        "url": "/georgiasnapshots/GWIN-CAM-145.jpg",
        "name": "SR 20 : Gwinnett Braves"
    }, {
        "id": "cctv_5235",
        "stream": "/georgiavss3/gdot-cam-592.stream/playlist.m3u8",
        "name": "SR 141 : S of Holcomb Bridge Rd"
    }, {
        "id": "cctv_12953",
        "stream": "/georgiavss1/dek-cam-616.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : I-85 NB Ramp"
    }, {
        "id": "cctv_6304",
        "stream": "/georgiavss1/atl-cam-015.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lenox Rd"
    }, {
        "id": "cctv_5192",
        "stream": "/georgiavss3/gdot-cam-501.stream/playlist.m3u8",
        "name": "I-575 : S OF BARRETT PKWY"
    }, {
        "id": "cctv_5075",
        "stream": "/georgiavss3/gdot-cam-338.stream/playlist.m3u8",
        "name": "I-20 : W OF LANGHORN ST"
    }, {
        "id": "cctv_4927",
        "stream": "/georgiavss2/gdot-cam-109.stream/playlist.m3u8",
        "name": "I-85 : STEVE REYNOLDS"
    }, {
        "id": "cctv_46441",
        "url": "/georgiasnapshots/FULT-CAM-018.jpg",
        "name": "GA 3/US 41/ N. Main St : Washington Rd/ Legion Way"
    }, {
        "id": "cctv_9033",
        "url": "/georgiasnapshots/ROSWELL-CAM-316.jpg",
        "name": "SR 9 : Alpine Dr"
    }, {
        "id": "cctv_15525",
        "stream": "/georgiavss3/gdot-cam-541.stream/playlist.m3u8",
        "name": "I-575 : CHASTAIN RD"
    }, {
        "id": "cctv_32618",
        "url": "/georgiasnapshots/DUN-CAM-113.jpg",
        "name": "Ashford Dunwoody Rd : Hammond Dr"
    }, {
        "id": "cctv_16241",
        "url": "/georgiasnapshots/COJC-CAM-630.jpg",
        "name": "Jones Bridge Rd : Taylor Rd"
    }, {
        "id": "cctv_5029",
        "stream": "/georgiavss2/gdot-cam-262.stream/playlist.m3u8",
        "name": "I-285 : I-20 ENT RAMP"
    }, {
        "id": "cctv_5420",
        "stream": "/georgiavss2/gdot-cam-123.stream/playlist.m3u8",
        "name": "I-85 : S OF SR316"
    }, {
        "id": "cctv_5141",
        "stream": "/georgiavss3/gdot-cam-415.stream/playlist.m3u8",
        "name": "I-75 : S OF ALLGOOD RD"
    }, {
        "id": "cctv_13156",
        "url": "/georgiasnapshots/ROSWELL-CAM-414.jpg",
        "name": "Pine Grove : Coleman Rd"
    }, {
        "id": "cctv_10362",
        "url": "/georgiasnapshots/GWIN-CAM-188.jpg",
        "name": "ANNISTOWN RD : W of JUHAN RD / W of SPAIN RD"
    }, {
        "id": "cctv_9179",
        "url": "/georgiasnapshots/COBB-CAM-232.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : SR 139 (Floyd Road / Mableton Parkway)"
    }, {
        "id": "cctv_16253",
        "url": "/georgiasnapshots/ATL-CAM-986.jpg",
        "name": "Memorial Dr : Central Ave"
    }, {
        "id": "cctv_6758",
        "stream": "/georgiavss3/gdot-cam-582.stream/playlist.m3u8",
        "name": "I-75 : AT BROOKWOOD CURVE"
    }, {
        "id": "cctv_5286",
        "stream": "/georgiavss4/gdot-cam-714.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }, {
        "id": "cctv_10332",
        "url": "/georgiasnapshots/GWIN-CAM-158.jpg",
        "name": "SR 124 : N of TELIDA TR / N of NORRIS LAKE RD"
    }, {
        "id": "cctv_13223",
        "stream": "/georgiavss1/atl-cam-155.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : SR 155 (Candler Rd)"
    }, {
        "id": "cctv_12979",
        "url": "/georgiasnapshots/GDOT-CAM-147.jpg",
        "name": "SR 316 : COLLINS HILL RD"
    }, {
        "id": "cctv_5388",
        "stream": "/georgiavss4/gdot-cam-951.stream/playlist.m3u8",
        "name": "I-285 : N OF I-20 (FULTON)"
    }, {
        "id": "cctv_5115",
        "stream": "/georgiavss3/gdot-cam-374.stream/playlist.m3u8",
        "name": "I-20 : I-285 (DEKALB)"
    }, {
        "id": "cctv_16236",
        "url": "/georgiasnapshots/COJC-CAM-565.jpg",
        "name": "Old Alabama Rd : Buice Rd"
    }, {
        "id": "cctv_10294",
        "url": "/georgiasnapshots/GWIN-CAM-120.jpg",
        "name": "SR 13 / US 23 : N NORCROSS-TUCKER RD"
    }, {
        "id": "cctv_7223",
        "stream": "/georgiavss1/atl-cam-006.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Rumson Rd"
    }, {
        "id": "cctv_15510",
        "stream": "/georgiavss3/gdot-cam-523.stream/playlist.m3u8",
        "name": "I-75 : CHASTAIN RD"
    }, {
        "id": "cctv_5009",
        "stream": "/georgiavss2/gdot-cam-241.stream/playlist.m3u8",
        "name": "I-285 : LAVISTA RD"
    }, {
        "id": "cctv_12958",
        "stream": "/georgiavss4/gdot-cam-811.stream/playlist.m3u8",
        "name": "GA 400 : SOUTH OF TUNNEL"
    }, {
        "id": "cctv_5407",
        "stream": "/georgiavss4/gdot-cam-969.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO PACES FERRY RD"
    }, {
        "id": "cctv_5949",
        "stream": "/georgiavss3/gdot-cam-605.stream/playlist.m3u8",
        "name": "I-675 : SR 42"
    }, {
        "id": "cctv_32968",
        "url": "/georgiasnapshots/COJC-CAM-740.jpg",
        "name": "McGinnis Ferry Road : Lakefield Drive"
    }, {
        "id": "cctv_46446",
        "url": "/georgiasnapshots/FULT-CAM-023.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : Gresham St"
    }, {
        "id": "cctv_10497",
        "url": "/georgiasnapshots/CLAY-CAM-191.jpg",
        "name": "SR 3 / Tara Blvd : Justice Complex"
    }, {
        "id": "cctv_10270",
        "url": "/georgiasnapshots/GWIN-CAM-096.jpg",
        "name": "SR 120 : HURRICANE SHOALS RD"
    }, {
        "id": "cctv_13232",
        "stream": "/georgiavss4/gdot-cam-755.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81"
    }, {
        "id": "cctv_9027",
        "url": "/georgiasnapshots/ROSWELL-CAM-304.jpg",
        "name": "SR 9 : Jones Dr"
    }, {
        "id": "cctv_10179",
        "url": "/georgiasnapshots/GWIN-CAM-001.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Bethesda School Rd / Bethesda Church Rd"
    }, {
        "id": "cctv_5022",
        "stream": "/georgiavss2/gdot-cam-255.stream/playlist.m3u8",
        "name": "I-285 : N OF COVINGTON HWY"
    }, {
        "id": "cctv_5199",
        "stream": "/georgiavss3/gdot-cam-508.stream/playlist.m3u8",
        "name": "I-575 : S OF BELLS FERRY RD"
    }, {
        "id": "cctv_5259",
        "stream": "/georgiavss4/gdot-cam-660.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 4"
    }, {
        "id": "cctv_16263",
        "url": "/georgiasnapshots/COJC-CAM-725.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Pkwy E"
    }, {
        "id": "cctv_5398",
        "stream": "/georgiavss4/gdot-cam-960.stream/playlist.m3u8",
        "name": "I-285 : S OF S COBB DR"
    }, {
        "id": "cctv_15726",
        "stream": "/georgiavss3/gdot-cam-546.stream/playlist.m3u8",
        "name": "I-575 : S OF SHALLOWFORD RD"
    }, {
        "id": "cctv_15534",
        "stream": "/georgiavss4/gdot-cam-698.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : E OF I-75 ON/OFF EXP RAMP"
    }, {
        "id": "cctv_13216",
        "stream": "/georgiavss4/gdot-cam-773.stream/playlist.m3u8",
        "name": "I-675 : EXPRESS LN ENTR/EXIT"
    }, {
        "id": "cctv_13754",
        "url": "/georgiasnapshots/SMYR-CAM-003.jpg",
        "name": "SR 280/S Cobb Dr : Wright Rd/S Cobb Ind Blvd"
    }, {
        "id": "cctv_5158",
        "stream": "/georgiavss3/gdot-cam-430.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY EXIT"
    }, {
        "id": "cctv_10454",
        "url": "/georgiasnapshots/CLAY-CAM-048.jpg",
        "name": "SR 54 : Lake Harbin Rd"
    }, {
        "id": "cctv_15488",
        "stream": "/georgiavss4/gdot-cam-692.stream/playlist.m3u8",
        "name": "BIG SHANTY RD : GEORGE BUSBEE PKY"
    }, {
        "id": "cctv_9071",
        "url": "/georgiasnapshots/ALPH-CAM-007b.jpg",
        "name": "Windward Pkwy : GA 400 NB"
    }, {
        "id": "cctv_13316",
        "url": "/georgiasnapshots/DEK-CAM-020.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Northlake Pkwy / Cooledge Rd"
    }, {
        "id": "cctv_4970",
        "stream": "/georgiavss2/gdot-cam-206.stream/playlist.m3u8",
        "name": "I-285 : NORTHSIDE DR"
    }, {
        "id": "cctv_10279",
        "url": "/georgiasnapshots/GWIN-CAM-105.jpg",
        "name": "SATELLITE BLVD : N of POND RD"
    }, {
        "id": "cctv_10263",
        "url": "/georgiasnapshots/GWIN-CAM-089.jpg",
        "name": "OLD NORCROSS RD : HERRINGTON RD"
    }, {
        "id": "cctv_10482",
        "url": "/georgiasnapshots/CLAY-CAM-132.jpg",
        "name": "SR 42 : Dale Rd / Evans Dr"
    }, {
        "id": "cctv_5958",
        "stream": "/georgiavss4/gdot-cam-614.stream/playlist.m3u8",
        "name": "I-675 : GRANT RD"
    }, {
        "id": "cctv_46411",
        "stream": "/georgiavss1/atl-cam-097.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : W Wesley Rd"
    }, {
        "id": "cctv_5583",
        "stream": "/georgiavss4/gdot-cam-646.stream/playlist.m3u8",
        "name": "I-285 : NEAR RAMP FROM I-85 S"
    }, {
        "id": "cctv_4939",
        "stream": "/georgiavss2/gdot-cam-178.stream/playlist.m3u8",
        "name": "I-85 : N OF SPENCE RD"
    }, {
        "id": "cctv_32667",
        "url": "/georgiasnapshots/DUN-CAM-152.jpg",
        "name": "Chamblee Dunwoody Rd : Mt Vernon Rd"
    }, {
        "id": "cctv_13573",
        "stream": "/georgiavss1/alph-cam-021.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Haynes Bridge Rd"
    }, {
        "id": "cctv_7196",
        "stream": "/georgiavss1/atl-cam-209.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Ponce De Leon Place"
    }, {
        "id": "cctv_4951",
        "stream": "/georgiavss2/gdot-cam-189.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285"
    }, {
        "id": "cctv_13343",
        "stream": "/georgiavss4/gdot-cam-761.stream/playlist.m3u8",
        "name": "I-75 : AT SR 155"
    }, {
        "id": "cctv_12915",
        "url": "/georgiasnapshots/COBB-CAM-221.jpg",
        "name": "Sandy Plains Rd : Canton Rd Connector"
    }, {
        "id": "cctv_13131",
        "url": "/georgiasnapshots/COBB-CAM-161.jpg",
        "name": "SR 120 / Roswell Rd : Old Canton Rd"
    }, {
        "id": "cctv_7328",
        "url": "/georgiasnapshots/COBB-CAM-101.jpg",
        "name": "Johnson Ferry Rd : Lower Roswell Rd"
    }, {
        "id": "cctv_5161",
        "stream": "/georgiavss3/gdot-cam-433.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }, {
        "id": "cctv_13248",
        "stream": "/georgiavss4/gdot-cam-727.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }, {
        "id": "cctv_5212",
        "stream": "/georgiavss2/gdot-cam-055.stream/playlist.m3u8",
        "name": "SR 166 : E OF STANTON RD"
    }, {
        "id": "cctv_15228",
        "stream": "/georgiavss1/dek-cam-032.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Mercer Rd"
    }, {
        "id": "cctv_6313",
        "url": "/georgiasnapshots/COJC-CAM-235.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Bell Rd / Johns Creek Commons"
    }, {
        "id": "cctv_9163",
        "url": "/georgiasnapshots/COBB-CAM-112.jpg",
        "name": "SR 360/Macland Rd : Lost Mountain/New Macland Rd"
    }, {
        "id": "cctv_16321",
        "url": "/georgiasnapshots/COBB-CAM-307.jpg",
        "name": "Cherokee St/Wade Green Rd : Jiles Rd"
    }, {
        "id": "cctv_7214",
        "stream": "/georgiavss1/atl-cam-027.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Monroe Dr"
    }, {
        "id": "cctv_5343",
        "stream": "/georgiavss4/gdot-cam-839.stream/playlist.m3u8",
        "name": "GA 400 : MANSELL RD"
    }, {
        "id": "cctv_15243",
        "stream": "/georgiavss4/gdot-cam-620.stream/playlist.m3u8",
        "name": "I-285 : PACES FERRY"
    }, {
        "id": "cctv_5377",
        "stream": "/georgiavss4/gdot-cam-940.stream/playlist.m3u8",
        "name": "I-285 : N OF LANGFORD PKWY"
    }, {
        "id": "cctv_32592",
        "url": "c2c.dot.ga.gov/snapshots/COBB-CAM-145.jpg",
        "name": "Cumberland Pkwy : Paces Ferry"
    }, {
        "id": "cctv_5130",
        "stream": "/georgiavss3/gdot-cam-406.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO S 120 LOOP"
    }, {
        "id": "cctv_46432",
        "url": "/georgiasnapshots/FULT-CAM-013.jpg",
        "name": "Ga14/ US 29/ N Main : W. Cleveland/ Marta Entrance"
    }, {
        "id": "cctv_10456",
        "url": "/georgiasnapshots/CLAY-CAM-052.jpg",
        "name": "SR 54 / Jonesboro Rd : SR 331 / Forest Pkwy"
    }, {
        "id": "cctv_5030",
        "stream": "/georgiavss2/gdot-cam-263.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20"
    }, {
        "id": "cctv_6243",
        "url": "/georgiasnapshots/HNRY-CAM-912.jpg",
        "name": "SR 20 : SR 81"
    }, {
        "id": "cctv_10165",
        "stream": "/georgiavss2/gdot-cam-143.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : PIEDMONT RD / MI 2.2"
    }, {
        "id": "cctv_10416",
        "url": "/georgiasnapshots/GCDOT-IVDS-216-PH3.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : US 23 /SR13"
    }, {
        "id": "cctv_13060",
        "url": "/georgiasnapshots/A-TEST-CAM-010.jpg",
        "name": "E. Confederate : TMC"
    }, {
        "id": "cctv_10355",
        "url": "/georgiasnapshots/GWIN-CAM-181.jpg",
        "name": "SR 20 : Broadmoor Blvd"
    }, {
        "id": "cctv_10361",
        "url": "/georgiasnapshots/GWIN-CAM-187.jpg",
        "name": "ANNISTOWN RD : NORTH DESHONG RD / ROCKBRIDGE RD"
    }, {
        "id": "cctv_46300",
        "url": "/georgiasnapshots/GWIN-CAM-250.jpg",
        "name": "OLD NORCROSS RD : BRASS KEY CT / HS DRWY"
    }, {
        "id": "cctv_4932",
        "stream": "/georgiavss2/gdot-cam-014.stream/playlist.m3u8",
        "name": "75/85 : COURTLAND ST"
    }, {
        "id": "cctv_15404",
        "stream": "/georgiavss2/gdot-cam-303.stream/playlist.m3u8",
        "name": "I-20 : SR 92/Fairburn Rd"
    }, {
        "id": "cctv_13297",
        "url": "/georgiasnapshots/GWIN-CAM-283.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Beaver Ruin Village SC"
    }, {
        "id": "cctv_10328",
        "url": "/georgiasnapshots/GWIN-CAM-154.jpg",
        "name": "PLEASANT HILL RD : OLD NORCROSS RD"
    }, {
        "id": "cctv_10411",
        "url": "/georgiasnapshots/GCDOT-IVDS-022-PH3.jpg",
        "name": "SR 120 : LANGLEY DR / DRWY(PH3)"
    }, {
        "id": "cctv_8810",
        "stream": "/georgiavss4/gdot-cam-854.stream/playlist.m3u8",
        "name": "GA 400 : NEAR SHILOH RD"
    }, {
        "id": "cctv_10204",
        "url": "/georgiasnapshots/GWIN-CAM-030.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : REPS MILLER RD"
    }, {
        "id": "cctv_10421",
        "url": "/georgiasnapshots/GCDOT-IVDS-421-PH8.jpg",
        "name": "SR 13 / US 23 : CEMETERY ST"
    }, {
        "id": "cctv_10168",
        "stream": "/georgiavss1/cher-cam-012.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Bells Ferry Rd"
    }, {
        "id": "cctv_13243",
        "stream": "/georgiavss4/gdot-cam-735.stream/playlist.m3u8",
        "name": "I-75 : N OF WALT STEPHENS"
    }, {
        "id": "cctv_4926",
        "stream": "/georgiavss2/gdot-cam-108.stream/playlist.m3u8",
        "name": "I-85 : S OF STEVE REYNOLDS"
    }, {
        "id": "cctv_5372",
        "stream": "/georgiavss4/gdot-cam-936.stream/playlist.m3u8",
        "name": "I-285 : N OF REDWINE RD"
    }, {
        "id": "cctv_5148",
        "stream": "/georgiavss3/gdot-cam-421.stream/playlist.m3u8",
        "name": "I-75 : N OF CANTON RD"
    }, {
        "id": "cctv_5167",
        "stream": "/georgiavss3/gdot-cam-439.stream/playlist.m3u8",
        "name": "I-75 : S OF WADE GREEN RD"
    }, {
        "id": "cctv_5335",
        "stream": "/georgiavss4/gdot-cam-831.stream/playlist.m3u8",
        "name": "GA 400 : S OF NORTHRIDGE"
    }, {
        "id": "cctv_5135",
        "stream": "/georgiavss2/gdot-cam-041.stream/playlist.m3u8",
        "name": "I-85 : NEAR CLAIRMONT RD"
    }, {
        "id": "cctv_9144",
        "stream": "/georgiavss1/atl-cam-068.stream/playlist.m3u8",
        "name": "SR 141 Conn / Lenox Rd : Phipps Blvd"
    }, {
        "id": "cctv_7192",
        "stream": "/georgiavss1/atl-cam-202.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Piedmont Ave"
    }, {
        "id": "cctv_4946",
        "stream": "/georgiavss2/gdot-cam-184.stream/playlist.m3u8",
        "name": "I-85 : 1 MI N OF SR 138"
    }, {
        "id": "cctv_5404",
        "stream": "/georgiavss4/gdot-cam-966.stream/playlist.m3u8",
        "name": "I-285 : N OF S ATLANTA RD"
    }, {
        "id": "cctv_10285",
        "url": "/georgiasnapshots/GWIN-CAM-111.jpg",
        "name": "SATELLITE BLVD : BOGGS RD"
    }, {
        "id": "cctv_5032",
        "stream": "/georgiavss2/gdot-cam-265.stream/playlist.m3u8",
        "name": "I-285 : FLAT SHOALS PKWY"
    }, {
        "id": "cctv_13601",
        "url": "/georgiasnapshots/PAUL-CAM-014.jpg",
        "name": "SR 6 : SR 120-360 (Charles Hardy Pkwy) / W Bill Carruth Pkwy"
    }, {
        "id": "cctv_5428",
        "stream": "/georgiavss2/gdot-cam-131.stream/playlist.m3u8",
        "name": "I-85 : SUGARLOAF PKWY"
    }, {
        "id": "cctv_15485",
        "stream": "/georgiavss3/gdot-cam-522.stream/playlist.m3u8",
        "name": "I-75 : S OF CHASTAIN RD"
    }, {
        "id": "cctv_7200",
        "stream": "/georgiavss1/atl-cam-216.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Oakdale Rd"
    }, {
        "id": "cctv_13550",
        "url": "/georgiasnapshots/COBB-CAM-236.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Cooper Lake Rd"
    }, {
        "id": "cctv_5146",
        "stream": "/georgiavss2/gdot-cam-042.stream/playlist.m3u8",
        "name": "I-85 : 1 MI N OF CLAIRMONT"
    }, {
        "id": "cctv_15244",
        "stream": "/georgiavss1/brok-cam-010.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : N of Briarwood Rd / Hawk #6"
    }, {
        "id": "cctv_10476",
        "url": "/georgiasnapshots/CLAY-CAM-121.jpg",
        "name": "SR 85 : GARDEN WALK BLVD"
    }, {
        "id": "cctv_13268",
        "stream": "/georgiavss1/fult-cam-001.stream/playlist.m3u8",
        "name": "SR 6 : N Commerce Dr"
    }, {
        "id": "cctv_46310",
        "url": "/georgiasnapshots/GC-CAM-260.jpg",
        "name": "OLD PEACHTREE RD : S SCALES RD"
    }, {
        "id": "cctv_15455",
        "url": "/georgiasnapshots/ATL-CAM-965.jpg",
        "name": "Decatur St : Jesse Hill Jr Dr"
    }, {
        "id": "cctv_5261",
        "stream": "/georgiavss4/gdot-cam-662.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 2"
    }, {
        "id": "cctv_16283",
        "url": "/georgiasnapshots/COBB-CAM-116.jpg",
        "name": "Windy Ridge Pkwy : Hank Aaron Way"
    }, {
        "id": "cctv_16205",
        "stream": "/georgiavss1/atl-cam-533.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : SR 8 (Hollowell Parkway)"
    }, {
        "id": "cctv_10244",
        "url": "/georgiasnapshots/GWIN-CAM-070.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : US 23 /SR 13"
    }, {
        "id": "cctv_10350",
        "url": "/georgiasnapshots/GWIN-CAM-176.jpg",
        "name": "SR 20 : I-985 SB Ramp"
    }, {
        "id": "cctv_10274",
        "url": "/georgiasnapshots/GWIN-CAM-100.jpg",
        "name": "SR 120 : PERRY ST"
    }, {
        "id": "cctv_12972",
        "stream": "/georgiavss4/gdot-cam-808.stream/playlist.m3u8",
        "name": "GA 400 : N OF SIDNEY MARCUS BLVD"
    }, {
        "id": "cctv_46413",
        "stream": "/georgiavss1/atl-cam-267.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : Stiff St / MARTA"
    }, {
        "id": "cctv_13221",
        "url": "/georgiasnapshots/DEK-CAM-028.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Lavista Rd"
    }, {
        "id": "cctv_5213",
        "stream": "/georgiavss3/gdot-cam-550.stream/playlist.m3u8",
        "name": "I-85 : CHESHIRE BR RD"
    }, {
        "id": "cctv_15965",
        "stream": "/georgiavss2/gdot-cam-172.stream/playlist.m3u8",
        "name": "I-85 : 1.3 MILE N OF SR 20"
    }, {
        "id": "cctv_8944",
        "url": "/georgiasnapshots/HNRY-CAM-915.jpg",
        "name": "Jodeco Rd : Patrick Henry Blvd"
    }, {
        "id": "cctv_10181",
        "url": "/georgiasnapshots/GWIN-CAM-003.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Lester Rd / Pleasant Hill Rd"
    }, {
        "id": "cctv_10273",
        "url": "/georgiasnapshots/GWIN-CAM-099.jpg",
        "name": "SR 120 : E of LANGLEY DR"
    }, {
        "id": "cctv_9124",
        "url": "/georgiasnapshots/COBB-CAM-067.jpg",
        "name": "Atlanta Rd : Paces Ferry Rd"
    }, {
        "id": "cctv_10254",
        "url": "/georgiasnapshots/GWIN-CAM-080.jpg",
        "name": "SR 378 : US 23 /SR 13"
    }, {
        "id": "cctv_32599",
        "url": "/georgiasnapshots/COBB-CAM-348.jpg",
        "name": "Stilesboro Rd : Kennesaw Due West"
    }, {
        "id": "cctv_15197",
        "url": "/georgiasnapshots/MAR-CAM310.jpg",
        "name": "SR 120/S Marietta Pkwy : Manget St"
    }, {
        "id": "cctv_10480",
        "url": "/georgiasnapshots/CLAY-CAM-130.jpg",
        "name": "SR 138 : I-675 SB RAMP"
    }, {
        "id": "cctv_9191",
        "stream": "/georgiavss1/atl-cam-071.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : North Ave"
    }, {
        "id": "cctv_12978",
        "url": "/georgiasnapshots/GDOT-CAM-146.jpg",
        "name": "SR 316 : W OF COLLINS HILL"
    }, {
        "id": "cctv_7350",
        "url": "/georgiasnapshots/COBB-CAM-333.jpg",
        "name": "Atlanta Rd : I-285 Interchange"
    }, {
        "id": "cctv_15597",
        "stream": "/georgiavss3/gdot-cam-461.stream/playlist.m3u8",
        "name": "I-75 : RAMPS TO I-285 E/W"
    }, {
        "id": "cctv_5039",
        "stream": "/georgiavss2/gdot-cam-271.stream/playlist.m3u8",
        "name": "I-285 : BOULDERCREST RD"
    }, {
        "id": "cctv_5367",
        "stream": "/georgiavss4/gdot-cam-931.stream/playlist.m3u8",
        "name": "I-285 : S OF WASHINGTON RD"
    }, {
        "id": "cctv_4921",
        "stream": "/georgiavss2/gdot-cam-103.stream/playlist.m3u8",
        "name": "I-85 : S OF INDIAN TRAIL"
    }, {
        "id": "cctv_15492",
        "stream": "/georgiavss3/gdot-cam-560.stream/playlist.m3u8",
        "name": "I-575 : 3/4 MI N OF TOWNE LAKE PKY"
    }, {
        "id": "cctv_12956",
        "stream": "/georgiavss4/gdot-cam-806.stream/playlist.m3u8",
        "name": "GA 400 : JUST NORTH OF I-85"
    }, {
        "id": "cctv_13746",
        "url": "/georgiasnapshots/COBB-CAM-027.jpg",
        "name": "SR 280/South Cobb Dr : Beech Rd"
    }, {
        "id": "cctv_10222",
        "url": "/georgiasnapshots/GWIN-CAM-048.jpg",
        "name": "SR 140 : Peachtree Corners Cir"
    }, {
        "id": "cctv_5227",
        "stream": "/georgiavss3/gdot-cam-576.stream/playlist.m3u8",
        "name": "75/85 : LINDEN/SPRING RAMP METER"
    }, {
        "id": "cctv_10513",
        "url": "/georgiasnapshots/CLAY-CAM-261.jpg",
        "name": "Anvilblock Rd : Grant Rd"
    }, {
        "id": "cctv_4981",
        "stream": "/georgiavss2/gdot-cam-216.stream/playlist.m3u8",
        "name": "I-285 : GA 400 SB"
    }, {
        "id": "cctv_12927",
        "url": "/georgiasnapshots/COBB-CAM-258.jpg",
        "name": "Dallas Hwy : Avenue West Cobb"
    }, {
        "id": "cctv_5954",
        "stream": "/georgiavss4/gdot-cam-610.stream/playlist.m3u8",
        "name": "I-675 : ELLENWOOD RD"
    }, {
        "id": "cctv_15191",
        "url": "/georgiasnapshots/MAR-CAM-302.jpg",
        "name": "SR 120/S Marietta Pkwy : Fairground St"
    }, {
        "id": "cctv_10213",
        "url": "/georgiasnapshots/GWIN-CAM-039.jpg",
        "name": "SR 20 : Old Peachtree Rd"
    }, {
        "id": "cctv_12965",
        "stream": "/georgiavss4/gdot-cam-824.stream/playlist.m3u8",
        "name": "GA 400 : JOHNSON FERRY RD"
    }, {
        "id": "cctv_32615",
        "url": "/georgiasnapshots/DUN-CAM-110.jpg",
        "name": "Perimeter Center West : Perimeter Center Place"
    }, {
        "id": "cctv_32582",
        "url": "/georgiasnapshots/HALL-CAM-002.jpg",
        "name": "SR 347/ Lanier Is Pkwy : I-985 SB"
    }, {
        "id": "cctv_13321",
        "stream": "/georgiavss4/gdot-cam-774.stream/playlist.m3u8",
        "name": "I-75 : AT I-675"
    }, {
        "id": "cctv_4918",
        "stream": "/georgiavss2/gdot-cam-100.stream/playlist.m3u8",
        "name": "I-85 : N OF JIMMY CARTER"
    }, {
        "id": "cctv_5208",
        "stream": "/georgiavss3/gdot-cam-516.stream/playlist.m3u8",
        "name": "I-575 : N OF HWY 92"
    }, {
        "id": "cctv_6303",
        "stream": "/georgiavss1/atl-cam-001.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Wieuca Rd"
    }, {
        "id": "cctv_13318",
        "url": "/georgiasnapshots/COBB-CAM-237.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Queen Mill Rd"
    }, {
        "id": "cctv_5209",
        "stream": "/georgiavss2/gdot-cam-052.stream/playlist.m3u8",
        "name": "SR 166 : E OF DODSON DR"
    }, {
        "id": "cctv_5399",
        "stream": "/georgiavss4/gdot-cam-961.stream/playlist.m3u8",
        "name": "I-285 : SOUTH COBB DR"
    }, {
        "id": "cctv_16300",
        "url": "/georgiasnapshots/COBB-CAM-008.jpg",
        "name": "SR 5/Austell Rd : Roberta Dr"
    }, {
        "id": "cctv_15241",
        "url": "/georgiasnapshots/GDOT-CAM-061.jpg",
        "name": "I-85 : North of Metropolitan Pkwy"
    }, {
        "id": "cctv_5946",
        "stream": "/georgiavss3/gdot-cam-602.stream/playlist.m3u8",
        "name": "I-675 : SR 138"
    }, {
        "id": "cctv_32608",
        "url": "/georgiasnapshots/COBB-CAM-146.jpg",
        "name": "Paces Ferry : Spring Hill Pkwy"
    }, {
        "id": "cctv_7225",
        "stream": "/georgiavss1/atl-cam-020.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Sidney Marcus Blvd"
    }, {
        "id": "cctv_5172",
        "stream": "/georgiavss3/gdot-cam-443.stream/playlist.m3u8",
        "name": "I-75 : S OF HICKORY GROVE RD"
    }, {
        "id": "cctv_9030",
        "url": "/georgiasnapshots/ROSWELL-CAM-310.jpg",
        "name": "SR 9 : Magnolia/Canton St"
    }, {
        "id": "cctv_6300",
        "stream": "/georgiavss1/atl-cam-016.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Pharr Rd"
    }, {
        "id": "cctv_15283",
        "stream": "/georgiavss1/atl-cam-539.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Carter St"
    }, {
        "id": "cctv_5246",
        "stream": "/georgiavss2/gdot-cam-063.stream/playlist.m3u8",
        "name": "I-75 : N OF TARA BLVD"
    }, {
        "id": "cctv_13753",
        "url": "/georgiasnapshots/SMYR-CAM-002.jpg",
        "name": "SR 280/S Cobb Dr : Highlands Pkwy"
    }, {
        "id": "cctv_46284",
        "url": "/georgiasnapshots/GWIN-CAM-217.jpg",
        "name": "PLEASANT HILL RD : SWEET BOTTOM DR"
    }, {
        "id": "cctv_15959",
        "url": "/georgiasnapshots/GDOT-CAM-158.jpg",
        "name": "I-85 : N OF L-VILLE/SUWANEE RD"
    }, {
        "id": "cctv_13358",
        "url": "/georgiasnapshots/ROCK-CAM-115.jpg",
        "name": "SR 138 / Walnut Grove Rd : Dogwood Dr"
    }, {
        "id": "cctv_16247",
        "url": "/georgiasnapshots/COJC-CAM-720.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Town Center"
    }, {
        "id": "cctv_10346",
        "url": "/georgiasnapshots/GWIN-CAM-172.jpg",
        "name": "SR 20 : N of WEBB GIN HOUSE RD"
    }, {
        "id": "cctv_16269",
        "url": "/georgiasnapshots/COJC-CAM-775.jpg",
        "name": "Johns Creek Pkwy : Lakefield Dr"
    }, {
        "id": "cctv_10267",
        "url": "/georgiasnapshots/GWIN-CAM-093.jpg",
        "name": "SR 120 : JACKSON ST"
    }, {
        "id": "cctv_12963",
        "url": "/georgiasnapshots/GDOT-CAM-117.jpg",
        "name": "I-85 : JUST S OF I-285 (LOW MOUNT)"
    }, {
        "id": "cctv_13067",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.jpg",
        "name": "I-20 : LITHONIA IND BLVD"
    }, {
        "id": "cctv_5281",
        "stream": "/georgiavss2/gdot-cam-071.stream/playlist.m3u8",
        "name": "I-85 : CLEVELAND AVE"
    }, {
        "id": "cctv_13293",
        "stream": "/georgiavss4/gdot-cam-743.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF HUDSON BR"
    }, {
        "id": "cctv_32557",
        "url": "/georgiasnapshots/GDOT-CAM-663.jpg",
        "name": "I-285 : INSIDE 5TH RNWY TUNNEL"
    }, {
        "id": "cctv_5708",
        "stream": "/georgiavss3/gdot-cam-587.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : E Jones Br Rd"
    }, {
        "id": "cctv_9138",
        "stream": "/georgiavss1/cham-cam-107.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Chamblee-Dunwoody Rd"
    }, {
        "id": "cctv_5020",
        "stream": "/georgiavss2/gdot-cam-253.stream/playlist.m3u8",
        "name": "I-285 : DURHAM PARK RD"
    }, {
        "id": "cctv_15392",
        "stream": "/georgiavss3/gdot-cam-548.stream/playlist.m3u8",
        "name": "I-575 : S OF HWY 92"
    }, {
        "id": "cctv_5340",
        "stream": "/georgiavss4/gdot-cam-836.stream/playlist.m3u8",
        "name": "GA 400 : HOLCOMB BR RD"
    }, {
        "id": "cctv_15536",
        "stream": "/georgiavss3/gdot-cam-472.stream/playlist.m3u8",
        "name": "I-75 : S OF DELK RD"
    }, {
        "id": "cctv_15286",
        "url": "/georgiasnapshots/ATL-CAM-921.jpg",
        "name": "SR 8 / North Ave : Courtland St / Juniper St"
    }, {
        "id": "cctv_13092",
        "stream": "/georgiavss1/doug-cam-040.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Tonya Ln/Sutton Dr"
    }, {
        "id": "cctv_5385",
        "stream": "/georgiavss4/gdot-cam-948.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20 (FULTON)"
    }, {
        "id": "cctv_15429",
        "stream": "/georgiavss2/gdot-cam-308.stream/playlist.m3u8",
        "name": "I-20 : West of Lee Rd"
    }, {
        "id": "cctv_5359",
        "stream": "/georgiavss2/gdot-cam-087.stream/playlist.m3u8",
        "name": "I-85 : JIMMY CARTER BLVD"
    }, {
        "id": "cctv_16224",
        "url": "/georgiasnapshots/COJC-CAM-505.jpg",
        "name": "Nesbit Ferry Rd : Mt Pisgah Christian School"
    }, {
        "id": "cctv_7319",
        "url": "/georgiasnapshots/COBB-CAM-059.jpg",
        "name": "SR 3/Cobb Pkwy : Paces Mill Rd"
    }, {
        "id": "cctv_15232",
        "stream": "/georgiavss1/atl-cam-901.stream/playlist.m3u8",
        "name": "SR 9 (Spring St) : 14th St"
    }, {
        "id": "cctv_13231",
        "stream": "/georgiavss4/gdot-cam-766.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }, {
        "id": "cctv_7316",
        "url": "/georgiasnapshots/COBB-CAM-056.jpg",
        "name": "SR 3/Cobb Pkwy : Akers Mill Rd"
    }, {
        "id": "cctv_13548",
        "url": "/georgiasnapshots/DEK-CAM-310.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Panthersville Rd / Fairlake Dr"
    }, {
        "id": "cctv_5091",
        "stream": "/georgiavss3/gdot-cam-352.stream/playlist.m3u8",
        "name": "I-20 : HILL ST"
    }, {
        "id": "cctv_5352",
        "stream": "/georgiavss4/gdot-cam-849.stream/playlist.m3u8",
        "name": "GA 400 : S OF MCGINNIS FERRY RD"
    }, {
        "id": "cctv_5730",
        "stream": "/georgiavss2/gdot-cam-299.stream/playlist.m3u8",
        "name": "I-285 : POWERS FERRY RD"
    }, {
        "id": "cctv_15235",
        "url": "/georgiasnapshots/ATL-CAM-904.jpg",
        "name": "SR 8 (North Ave) : Williams St"
    }, {
        "id": "cctv_13211",
        "stream": "/georgiavss1/fult-cam-006.stream/playlist.m3u8",
        "name": "SR 6 : Herschel Rd"
    }, {
        "id": "cctv_6255",
        "url": "/georgiasnapshots/ROSWELL-CAM-142.jpg",
        "name": "SR 140/92 : SR 9/Alpharetta St"
    }, {
        "id": "cctv_5271",
        "stream": "/georgiavss2/gdot-cam-069.stream/playlist.m3u8",
        "name": "I-75 : N OF FOREST PKWY"
    }, {
        "id": "cctv_6250",
        "url": "/georgiasnapshots/ROSWELL-CAM-214.jpg",
        "name": "SR 92 : Hardscrabble Rd"
    }, {
        "id": "cctv_15961",
        "stream": "/georgiavss2/gdot-cam-162.stream/playlist.m3u8",
        "name": "I-85 : I-985"
    }, {
        "id": "cctv_13124",
        "url": "/georgiasnapshots/ROSWELL-CAM-422.jpg",
        "name": "SR 120 : Willeo Rd"
    }, {
        "id": "cctv_12942",
        "url": "/georgiasnapshots/DOUG-CAM-003.jpg",
        "name": "Chapel Hill Rd : S. Elizabeth Dr"
    }, {
        "id": "cctv_13200",
        "stream": "/georgiavss1/doug-cam-088.stream/playlist.m3u8",
        "name": "SR 6 : N Blairs Bridge Rd"
    }, {
        "id": "cctv_46442",
        "url": "/georgiasnapshots/FULT-CAM-019.jpg",
        "name": "GA 279/ Old National Hwy : Walmart Entrance/ McGee Landing"
    }, {
        "id": "cctv_5004",
        "stream": "/georgiavss2/gdot-cam-237.stream/playlist.m3u8",
        "name": "I-285 : HENDERSON RD"
    }, {
        "id": "cctv_15179",
        "url": "/georgiasnapshots/MAR-CAM-110.jpg",
        "name": "SR 3/Cobb Pkwy : Spinks Dr"
    }, {
        "id": "cctv_15296",
        "url": "/georgiasnapshots/ATL-CAM-926.jpg",
        "name": "Ted Turner Dr : Mitchell St"
    }, {
        "id": "cctv_32669",
        "url": "/georgiasnapshots/DUN-CAM-160.jpg",
        "name": "Mt Vernon Rd : Dunwoody Village Pky"
    }, {
        "id": "cctv_10268",
        "url": "/georgiasnapshots/GWIN-CAM-094.jpg",
        "name": "SR 120 : CLAYTON ST"
    }, {
        "id": "cctv_10432",
        "url": "/georgiasnapshots/CLAY-CAM-011.jpg",
        "name": "SR 139 : I-285 WB Ramp"
    }, {
        "id": "cctv_9161",
        "stream": "/georgiavss1/dek-cam-004.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : W Ponce De Leon Ave"
    }, {
        "id": "cctv_9061",
        "stream": "/georgiavss1/atl-cam-049.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : Northgate"
    }, {
        "id": "cctv_10248",
        "url": "/georgiasnapshots/GWIN-CAM-074.jpg",
        "name": "SR 378 : STEVE REYNOLDS BLVD"
    }, {
        "id": "cctv_10449",
        "url": "/georgiasnapshots/CLAY-CAM-042.jpg",
        "name": "SR 3 TB : SR 54"
    }, {
        "id": "cctv_15187",
        "url": "/georgiasnapshots/MAR-CAM-204.jpg",
        "name": "SR 120A/N Marietta Pkwy : Church St"
    }, {
        "id": "cctv_13559",
        "url": "/georgiasnapshots/CLAY-CAM-171.jpg",
        "name": "SR 138 / Lake Spivey Rd : I-75 SB Ramp"
    }, {
        "id": "cctv_5347",
        "stream": "/georgiavss4/gdot-cam-844.stream/playlist.m3u8",
        "name": "GA 400 : OLD MILTON PKWY"
    }, {
        "id": "cctv_13057",
        "stream": "/georgiavss1/fult-cam-004.stream/playlist.m3u8",
        "name": "SR 6 : I-285 NB Ramps"
    }, {
        "id": "cctv_7335",
        "url": "/georgiasnapshots/COBB-CAM-210.jpg",
        "name": "Shallowford Rd : Steinhauer Rd"
    }, {
        "id": "cctv_16365",
        "url": "/georgiasnapshots/FORS-CAM-016.jpg",
        "name": "SR 20 : Tribble Gap Rd"
    }, {
        "id": "cctv_9037",
        "url": "/georgiasnapshots/ROSWELL-CAM-322.jpg",
        "name": "SR 9 : Elkins Rd"
    }, {
        "id": "cctv_10195",
        "url": "/georgiasnapshots/GWIN-CAM-017.jpg",
        "name": "SR 10 : High Point Rd"
    }, {
        "id": "cctv_7199",
        "stream": "/georgiavss1/atl-cam-040.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : SR 42 (Briarcliff Road / Moreland Avenue)"
    }, {
        "id": "cctv_15582",
        "stream": "/georgiavss4/gdot-cam-632.stream/playlist.m3u8",
        "name": "I-285 : W OF N-SIDE DR/POWERS FRY"
    }, {
        "id": "cctv_16132",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-073.jpg",
        "name": "I-20 : Fairington Dr"
    }, {
        "id": "cctv_16257",
        "stream": "/georgiavss1/atl-cam-530.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 10th St"
    }, {
        "id": "cctv_13085",
        "url": "/georgiasnapshots/COBB-CAM-324.jpg",
        "name": "Frey Rd : Hopkins Rd/Skip Spann Bridge"
    }, {
        "id": "cctv_5370",
        "stream": "/georgiavss4/gdot-cam-934.stream/playlist.m3u8",
        "name": "I-285 : CAMP CREEK PKWY"
    }, {
        "id": "cctv_15386",
        "url": "/georgiasnapshots/ATL-CAM-958.jpg",
        "name": "Mitchell St : Pryor St"
    }, {
        "id": "cctv_46294",
        "url": "/georgiasnapshots/GWIN-CAM-229.jpg",
        "name": "US 78 : COOPER RD"
    }, {
        "id": "cctv_7301",
        "url": "/georgiasnapshots/COBB-CAM-019.jpg",
        "name": "Stilesboro Rd : Stanley Rd"
    }, {
        "id": "cctv_10339",
        "url": "/georgiasnapshots/GWIN-CAM-165.jpg",
        "name": "SR 124 : ASHWORTH LAKE RD"
    }, {
        "id": "cctv_5070",
        "stream": "/georgiavss3/gdot-cam-333.stream/playlist.m3u8",
        "name": "I-20 : E OF HOLMES DR"
    }, {
        "id": "cctv_5069",
        "stream": "/georgiavss3/gdot-cam-332.stream/playlist.m3u8",
        "name": "I-20 : E OF HOLMES DR"
    }, {
        "id": "cctv_5082",
        "stream": "/georgiavss3/gdot-cam-344.stream/playlist.m3u8",
        "name": "I-20 : LEE ST"
    }, {
        "id": "cctv_15299",
        "stream": "/georgiavss1/atl-cam-928.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Luckie St"
    }, {
        "id": "cctv_32601",
        "url": "/georgiasnapshots/COBB-CAM-349.jpg",
        "name": "Frey Rd : Campus Loop"
    }, {
        "id": "cctv_13049",
        "url": "/georgiasnapshots/COBB-CAM-007.jpg",
        "name": "SR 5/Austell Rd : Pair Rd"
    }, {
        "id": "cctv_5119",
        "stream": "/georgiavss3/gdot-cam-378.stream/playlist.m3u8",
        "name": "I-20 : WESLEY CHAPEL RD"
    }, {
        "id": "cctv_32630",
        "url": "/georgiasnapshots/HALL-CAM-011",
        "name": "SR 13 : SR 53"
    }, {
        "id": "cctv_16360",
        "stream": "/georgiavss1/atl-cam-538.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Magnolia St"
    }, {
        "id": "cctv_15500",
        "stream": "/georgiavss3/gdot-cam-530.stream/playlist.m3u8",
        "name": "I-75 : N OF HICKORY GROVE"
    }, {
        "id": "cctv_13547",
        "stream": "/georgiavss1/dek-cam-306.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : McAfee Rd"
    }, {
        "id": "cctv_12920",
        "url": "/georgiasnapshots/COBB-CAM-113.jpg",
        "name": "SR 360/Macland Rd : Villa Rica Rd"
    }, {
        "id": "cctv_13768",
        "url": "/georgiasnapshots/DEK-CAM-619.jpg",
        "name": "N Druid Hills Rd : SR 236 / LaVista Rd"
    }, {
        "id": "cctv_6309",
        "stream": "/georgiavss2/gdot-cam-200.stream/playlist.m3u8",
        "name": "I-285 : AT CHAM-DNWDY"
    }, {
        "id": "cctv_10198",
        "url": "/georgiasnapshots/GWIN-CAM-020.jpg",
        "name": "SR 10 : E Park Place Blvd"
    }, {
        "id": "cctv_16318",
        "url": "/georgiasnapshots/COBB-CAM-305.jpg",
        "name": "Wade Green Rd : I-75 NB"
    }, {
        "id": "cctv_6298",
        "stream": "/georgiavss1/atl-cam-043.stream/playlist.m3u8",
        "name": "Lenox Rd : E Paces Ferry"
    }, {
        "id": "cctv_5380",
        "stream": "/georgiavss4/gdot-cam-943.stream/playlist.m3u8",
        "name": "I-285 : S OF CASCADE RD"
    }, {
        "id": "cctv_5322",
        "stream": "/georgiavss4/gdot-cam-795.stream/playlist.m3u8",
        "name": "US 78 : 1 mi E of Hugh Howell Rd"
    }, {
        "id": "cctv_9068",
        "stream": "/georgiavss1/alph-cam-005.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Westside Pkwy"
    }, {
        "id": "cctv_10282",
        "url": "/georgiasnapshots/GWIN-CAM-108.jpg",
        "name": "SATELLITE BLVD : GWINNETT PLANTATION WAY"
    }, {
        "id": "cctv_5266",
        "stream": "/georgiavss4/gdot-cam-667.stream/playlist.m3u8",
        "name": "I-285 : 5TH RUNWAY TUNNEL ENTRANCE"
    }, {
        "id": "cctv_10235",
        "url": "/georgiasnapshots/GWIN-CAM-061.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SR 120"
    }, {
        "id": "cctv_5276",
        "stream": "/georgiavss4/gdot-cam-705.stream/playlist.m3u8",
        "name": "I-75 : S OF JONESBORO RD"
    }, {
        "id": "cctv_13583",
        "stream": "/georgiavss1/dek-cam-232.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Pinetree Plaza"
    }, {
        "id": "cctv_10251",
        "url": "/georgiasnapshots/GWIN-CAM-077.jpg",
        "name": "SR 378 : INDIAN TRAIL - LILBURN RD"
    }, {
        "id": "cctv_13199",
        "stream": "/georgiavss1/doug-cam-090.stream/playlist.m3u8",
        "name": "SR 6 : Maxham Rd"
    }, {
        "id": "cctv_46456",
        "url": "/georgiasnapshots/FULT-CAM-034.jpg",
        "name": "SR 14 Alt/ South Fulton Pkwy : Cedar Grove Rd"
    }, {
        "id": "cctv_15517",
        "stream": "/georgiavss3/gdot-cam-495.stream/playlist.m3u8",
        "name": "I-575 : JUST N OF I-75"
    }, {
        "id": "cctv_5014",
        "stream": "/georgiavss2/gdot-cam-246.stream/playlist.m3u8",
        "name": "I-285 : STONE MT FRWY- US 78"
    }, {
        "id": "cctv_4955",
        "stream": "/georgiavss2/gdot-cam-192.stream/playlist.m3u8",
        "name": "I-85 : I-285 FULTON CO"
    }, {
        "id": "cctv_16062",
        "url": "/georgiasnapshots/COBB-CAM-098.jpg",
        "name": "Terrell Mill Rd : Greenwood Trl"
    }, {
        "id": "cctv_5425",
        "stream": "/georgiavss2/gdot-cam-128.stream/playlist.m3u8",
        "name": "SR 316 : HERRINGTON RD"
    }, {
        "id": "cctv_13610",
        "url": "/georgiasnapshots/ATL-CAM-063.jpg",
        "name": "SR 42 (Moreland Ave) : Faith Ave / McPherson Ave"
    }, {
        "id": "cctv_15970",
        "url": "/georgiasnapshots/GDOT-CAM-797.jpg",
        "name": "I-85 : S OF HAMILTON MILL RD"
    }, {
        "id": "cctv_10217",
        "url": "/georgiasnapshots/GWIN-CAM-043.jpg",
        "name": "SR 20 : SR 324 (Gravel Springs Rd) / Financial Center"
    }, {
        "id": "cctv_5027",
        "stream": "/georgiavss2/gdot-cam-260.stream/playlist.m3u8",
        "name": "I-285 : N OF SNAPFINGER RD"
    }, {
        "id": "cctv_7339",
        "url": "/georgiasnapshots/COBB-CAM-251.jpg",
        "name": "Dallas Hwy : Bob Cox Rd"
    }, {
        "id": "cctv_15334",
        "stream": "/georgiavss1/atl-cam-543.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Fair St"
    }, {
        "id": "cctv_5379",
        "stream": "/georgiavss4/gdot-cam-942.stream/playlist.m3u8",
        "name": "I-285 : 1 MI N OF LANGFORD PKWY"
    }, {
        "id": "cctv_15339",
        "url": "/georgiasnapshots/ATL-CAM-950.jpg",
        "name": "SR 14 (Peters St) : Ted Turner Dr"
    }, {
        "id": "cctv_10471",
        "url": "/georgiasnapshots/CLAY-CAM-103.jpg",
        "name": "SR 331 / Forest Pkwy : North Pkwy"
    }, {
        "id": "cctv_4960",
        "stream": "/georgiavss2/gdot-cam-197.stream/playlist.m3u8",
        "name": "I-85 : SULLIVAN RD"
    }, {
        "id": "cctv_5364",
        "stream": "/georgiavss2/gdot-cam-092.stream/playlist.m3u8",
        "name": "I-85 : PEACHTREE ST OVERPASS"
    }, {
        "id": "cctv_5154",
        "stream": "/georgiavss3/gdot-cam-427.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY"
    }, {
        "id": "cctv_13735",
        "url": "/georgiasnapshots/COBB-CAM-128.jpg",
        "name": "Windy Ridge Pkwy : Cir 75 Pkwy"
    }, {
        "id": "cctv_5300",
        "stream": "/georgiavss4/gdot-cam-775.stream/playlist.m3u8",
        "name": "US 78 : ORION DR"
    }, {
        "id": "cctv_15986",
        "stream": "/georgiavss2/gdot-cam-152.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 120"
    }, {
        "id": "cctv_10493",
        "url": "/georgiasnapshots/CLAY-CAM-176.jpg",
        "name": "SR 3 / Tara Blvd : Poston Rd"
    }, {
        "id": "cctv_46275",
        "url": "/georgiasnapshots/GWIN-CAM-212.jpg",
        "name": "PLEASANT HILL RD : TREE SUMMIT PKWY"
    }, {
        "id": "cctv_5176",
        "stream": "/georgiavss3/gdot-cam-447.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }, {
        "id": "cctv_6317",
        "url": "/georgiasnapshots/COJC-CAM-215.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Old Alabama Rd"
    }, {
        "id": "cctv_7210",
        "stream": "/georgiavss1/atl-cam-030.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : Peachtree Valley Rd"
    }, {
        "id": "cctv_8957",
        "stream": "/georgiavss1/dek-cam-016.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Montreal Rd (East)"
    }, {
        "id": "cctv_13154",
        "url": "/georgiasnapshots/ROSWELL-CAM-410.jpg",
        "name": "Crabapple Rd : Houze Way"
    }, {
        "id": "cctv_4961",
        "stream": "/georgiavss2/gdot-cam-198.stream/playlist.m3u8",
        "name": "I-85 : N OF RIVERDALE RD"
    }, {
        "id": "cctv_5050",
        "stream": "/georgiavss2/gdot-cam-281.stream/playlist.m3u8",
        "name": "I-285 : W OF US 19"
    }, {
        "id": "cctv_4971",
        "stream": "/georgiavss2/gdot-cam-207.stream/playlist.m3u8",
        "name": "I-285 : NEW NORTHSIDE"
    }, {
        "id": "cctv_6299",
        "stream": "/georgiavss1/atl-cam-014.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : SR 9 / Roswell Rd"
    }, {
        "id": "cctv_9075",
        "url": "/georgiasnapshots/ALPH-CAM-010b.jpg",
        "name": "Windward Pkwy : SR 400 SB"
    }, {
        "id": "cctv_5184",
        "stream": "/georgiavss3/gdot-cam-454.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF SR 92"
    }, {
        "id": "cctv_10533",
        "url": "/georgiasnapshots/COBB-CAM-090.jpg",
        "name": "Terrell Mill Rd : Delk Rd"
    }, {
        "id": "cctv_13596",
        "stream": "/georgiavss4/gdot-cam-685.stream/playlist.m3u8",
        "name": "I-75 : N OF FLIPPEN RD"
    }, {
        "id": "cctv_13332",
        "stream": "/georgiavss4/gdot-cam-765.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }, {
        "id": "cctv_10463",
        "url": "/georgiasnapshots/CLAY-CAM-061.jpg",
        "name": "SR 85 : Pointe South Pkwy"
    }, {
        "id": "cctv_15389",
        "stream": "/georgiavss3/gdot-cam-547.stream/playlist.m3u8",
        "name": "I-575 : AT SHALLOWFORD"
    }, {
        "id": "cctv_13218",
        "stream": "/georgiavss4/gdot-cam-770.stream/playlist.m3u8",
        "name": "I-675 : N OF SR 138"
    }, {
        "id": "cctv_15308",
        "url": "/georgiasnapshots/ATL-CAM-937.jpg",
        "name": "Mitchell St : Washington St"
    }, {
        "id": "cctv_16370",
        "url": "/georgiasnapshots/FORS-CAM-018.jpg",
        "name": "SR 400 SB Ramp : Bald Ridge Marina"
    }, {
        "id": "cctv_13118",
        "url": "/georgiasnapshots/COBB-CAM-167.jpg",
        "name": "SR 120 / Roswell Rd : N Greenbriar Pkwy"
    }, {
        "id": "cctv_15977",
        "stream": "/georgiavss2/gdot-cam-165.stream/playlist.m3u8",
        "name": "I-85 : S OF SR 20"
    }, {
        "id": "cctv_5297",
        "stream": "/georgiavss2/gdot-cam-075.stream/playlist.m3u8",
        "name": "I-85 : AT VIRGINIA AVE EXIT"
    }, {
        "id": "cctv_15435",
        "stream": "/georgiavss3/gdot-cam-559.stream/playlist.m3u8",
        "name": "I-575 : N OF TOWNE LAKE"
    }, {
        "id": "cctv_8828",
        "stream": "/georgiavss1/atl-cam-035.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Highland Dr"
    }, {
        "id": "cctv_13145",
        "url": "/georgiasnapshots/ROSWELL-CAM-136.jpg",
        "name": "SR 140 : Old Holcomb Bridge Rd/Riverwood Ln"
    }, {
        "id": "cctv_5586",
        "stream": "/georgiavss4/gdot-cam-649.stream/playlist.m3u8",
        "name": "I-285 : E OF RIVERDALE RD"
    }, {
        "id": "cctv_6268",
        "url": "/georgiasnapshots/ROSWELL-CAM-100.jpg",
        "name": "SR 140 : Barnwell Rd/Ellard Dr"
    }, {
        "id": "cctv_16259",
        "url": "/georgiasnapshots/ATL-CAM-984.jpg",
        "name": "SR 280 / Hamilton E Holmes Dr : Godfrey Dr / Harvel Dr"
    }, {
        "id": "cctv_15183",
        "url": "/georgiasnapshots/MAR-CAM-200.jpg",
        "name": "SR 120A/N Marietta Pkwy : Wallace Rd"
    }, {
        "id": "cctv_5079",
        "stream": "/georgiavss3/gdot-cam-341.stream/playlist.m3u8",
        "name": "I-20 : LAWTON ST"
    }, {
        "id": "cctv_7327",
        "url": "/georgiasnapshots/COBB-CAM-093.jpg",
        "name": "Lower Roswell Rd : Old Canton Rd"
    }, {
        "id": "cctv_10302",
        "url": "/georgiasnapshots/GWIN-CAM-128.jpg",
        "name": "SR 13 / US 23 : SUGARLOAF PKWY"
    }, {
        "id": "cctv_13272",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-015.jpg",
        "name": "I-985 : Plainview Road"
    }, {
        "id": "cctv_5046",
        "stream": "/georgiavss2/gdot-cam-278.stream/playlist.m3u8",
        "name": "I-285 : E OF CONLEY RD"
    }, {
        "id": "cctv_5025",
        "stream": "/georgiavss2/gdot-cam-259.stream/playlist.m3u8",
        "name": "I-285 : GLENWOOD RD"
    }, {
        "id": "cctv_6320",
        "url": "/georgiasnapshots/COJC-CAM-405.jpg",
        "name": "State Bridge Rd : Kimball Bridge"
    }, {
        "id": "cctv_5329",
        "stream": "/georgiavss4/gdot-cam-826.stream/playlist.m3u8",
        "name": "GA 400 : S OF ABERNATHY RD"
    }, {
        "id": "cctv_6826",
        "stream": "/georgiavss1/cher-cam-004.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Wigley Rd"
    }, {
        "id": "cctv_13361",
        "url": "/georgiasnapshots/ROCK-CAM-109.jpg",
        "name": "SR 138 / McDonough Rd : Old McDonough Rd"
    }, {
        "id": "cctv_10317",
        "url": "/georgiasnapshots/GWIN-CAM-143.jpg",
        "name": "SUGARLOAF PKWY : SR 20"
    }, {
        "id": "cctv_12902",
        "url": "/georgiasnapshots/COBB-CAM-318.jpg",
        "name": "Chastain Rd : Big Shanty Rd"
    }, {
        "id": "cctv_5063",
        "stream": "/georgiavss3/gdot-cam-327.stream/playlist.m3u8",
        "name": "I-20 : 285 NB EXIT"
    }, {
        "id": "cctv_13654",
        "url": "/georgiasnapshots/COBB-CAM-131.jpg",
        "name": "Windy Ridge Pkwy : Interstate North Cir"
    }, {
        "id": "cctv_15170",
        "url": "/georgiasnapshots/MAR-CAM-101.jpg",
        "name": "SR 3/Cobb Pkwy : Canton Rd Conn"
    }, {
        "id": "cctv_13054",
        "stream": "/georgiavss1/atl-cam-077.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Lakewood Ave"
    }, {
        "id": "cctv_6860",
        "stream": "/georgiavss1/cojc-cam-140.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Abbotts Bridge Rd"
    }, {
        "id": "cctv_13340",
        "stream": "/georgiavss4/gdot-cam-756.stream/playlist.m3u8",
        "name": "I-75 : ON SR 20/81 ENTR RAMP"
    }, {
        "id": "cctv_15176",
        "url": "/georgiasnapshots/MAR-CAM-107.jpg",
        "name": "SR 3/Cobb Pkwy : Gresham Rd"
    }, {
        "id": "cctv_5123",
        "stream": "/georgiavss2/gdot-cam-004.stream/playlist.m3u8",
        "name": "75/85 : N OF LANGFORD PKWY"
    }, {
        "id": "cctv_4990",
        "stream": "/georgiavss2/gdot-cam-224.stream/playlist.m3u8",
        "name": "I-285 : N SHALLOWFORD"
    }, {
        "id": "cctv_46391",
        "url": "/georgiasnapshots/ATL-CAM-062.jpg",
        "name": "Dekalb Ave : Oakdale Rd/Whitefoord Ave"
    }, {
        "id": "cctv_5157",
        "stream": "/georgiavss2/gdot-cam-043.stream/playlist.m3u8",
        "name": "I-85 : S OF SHALLOWFORD RD"
    }, {
        "id": "cctv_6247",
        "url": "/georgiasnapshots/ROSWELL-CAM-218.jpg",
        "name": "SR 92 : Wildwood Springs Dr/Steeple Run"
    }, {
        "id": "cctv_4942",
        "stream": "/georgiavss2/gdot-cam-180.stream/playlist.m3u8",
        "name": "I-85 : N OF FAYETTEVILLE RD"
    }, {
        "id": "cctv_5414",
        "stream": "/georgiavss2/gdot-cam-140.stream/playlist.m3u8",
        "name": "Clairmont Rd : I-85 SB EXIT RAMP"
    }, {
        "id": "cctv_32619",
        "url": "/georgiasnapshots/DUN-CAM-131.jpg",
        "name": "Hammond Dr : Mall South Ent"
    }, {
        "id": "cctv_9183",
        "url": "/georgiasnapshots/COBB-CAM-0343.jpg",
        "name": "SR 3/Cobb Pkwy : Mars Hill Rd"
    }, {
        "id": "cctv_5036",
        "stream": "/georgiavss2/gdot-cam-269.stream/playlist.m3u8",
        "name": "I-285 : CLIFTON SPRINGS RD"
    }, {
        "id": "cctv_9072",
        "url": "/georgiasnapshots/ALPH-CAM-008.jpg",
        "name": "Windward Pkwy : North Point Pkwy"
    }, {
        "id": "cctv_5290",
        "stream": "/georgiavss4/gdot-cam-718.stream/playlist.m3u8",
        "name": "I-75 : N OF HUDSON BRIDGE RD"
    }, {
        "id": "cctv_32621",
        "url": "/georgiasnapshots/DUN-CAM-133.jpg",
        "name": "Perimeter Ctr Pkwy : Mall Ent"
    }, {
        "id": "cctv_13148",
        "url": "/georgiasnapshots/ROSWELL-CAM-212.jpg",
        "name": "SR 92 : Westwind Blvd/Manchester Way"
    }, {
        "id": "cctv_10356",
        "url": "/georgiasnapshots/GWIN-CAM-182.jpg",
        "name": "SR 20 : SR 141 (Peachtree Industrial Blvd)"
    }, {
        "id": "cctv_10472",
        "url": "/georgiasnapshots/CLAY-CAM-107.jpg",
        "name": "Mt Zion Rd : Southlake Pkwy"
    }, {
        "id": "cctv_13170",
        "url": "/georgiasnapshots/COBB-CAM-024.jpg",
        "name": "SR 280/South Cobb Dr : Appleton Dr"
    }, {
        "id": "cctv_4936",
        "stream": "/georgiavss2/gdot-cam-016.stream/playlist.m3u8",
        "name": "75/85 : SPRING ST"
    }, {
        "id": "cctv_4985",
        "stream": "/georgiavss2/gdot-cam-022.stream/playlist.m3u8",
        "name": "I-85 : 10th/14th/17th St Exit"
    }, {
        "id": "cctv_15304",
        "url": "/georgiasnapshots/ATL-CAM-934.jpg",
        "name": "Mitchell St : Forsyth St"
    }, {
        "id": "cctv_46315",
        "url": "/georgiasnapshots/GC-CAM-265.jpg",
        "name": "OLD PEACHTREE RD : I-85 SB RAMP"
    }, {
        "id": "cctv_10453",
        "url": "/georgiasnapshots/CLAY-CAM-046.jpg",
        "name": "SR 54 : I-75 NB Ramp"
    }, {
        "id": "cctv_5160",
        "stream": "/georgiavss3/gdot-cam-432.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }, {
        "id": "cctv_15456",
        "url": "/georgiasnapshots/ATL-CAM-966.jpg",
        "name": "Hank Aaron Dr / Capitol Ave : Georgia Ave"
    }, {
        "id": "cctv_12923",
        "url": "/georgiasnapshots/COBB-CAM-303.jpg",
        "name": "Johnson Ferry Rd : Woodlawn Dr"
    }, {
        "id": "cctv_13220",
        "stream": "/georgiavss4/gdot-cam-768.stream/playlist.m3u8",
        "name": "I-675 : AT US 23/SR 42"
    }, {
        "id": "cctv_13311",
        "url": "/georgiasnapshots/DEK-CAM-040.jpg",
        "name": "SR 12 (Covington Hwy) : Dekalb Medical Pkwy"
    }, {
        "id": "cctv_13089",
        "url": "/georgiasnapshots/COBB-CAM-123.jpg",
        "name": "Cumberland Blvd : Walton Riverwood"
    }, {
        "id": "cctv_5179",
        "stream": "/georgiavss2/gdot-cam-045.stream/playlist.m3u8",
        "name": "I-85 : CHAMBLEE-TUCKER"
    }, {
        "id": "cctv_9079",
        "url": "/georgiasnapshots/ALPH-CAM-014a.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }, {
        "id": "cctv_10260",
        "url": "/georgiasnapshots/GWIN-CAM-086.jpg",
        "name": "OLD NORCROSS RD : SUGARLOAF PKWY"
    }, {
        "id": "cctv_46409",
        "stream": "/georgiavss1/atl-cam-091.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Chapel St/Spelman Ln"
    }, {
        "id": "cctv_7298",
        "url": "/georgiasnapshots/COBB-CAM-014.jpg",
        "name": "Barrett Pkwy : Cobb Place Blvd (East)"
    }, {
        "id": "cctv_15418",
        "stream": "/georgiavss2/gdot-cam-311.stream/playlist.m3u8",
        "name": "I-20 : East of Mt Vernon Rd"
    }, {
        "id": "cctv_8829",
        "stream": "/georgiavss1/atl-cam-036.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Stratford Rd"
    }, {
        "id": "cctv_32595",
        "url": "/georgiasnapshots/COBB-CAM-069.jpg",
        "name": "East-West Conn. : Highland Ridge"
    }, {
        "id": "cctv_4984",
        "stream": "/georgiavss2/gdot-cam-219.stream/playlist.m3u8",
        "name": "I-285 : ASHFORD-DNWDY"
    }, {
        "id": "cctv_10310",
        "url": "/georgiasnapshots/GWIN-CAM-136.jpg",
        "name": "SUGARLOAF PKWY : GWINNNETT TECHNICAL COLLEGE"
    }, {
        "id": "cctv_10501",
        "url": "/georgiasnapshots/CLAY-CAM-206.jpg",
        "name": "SR 139 / Riverdale Rd : SR 314 / W Fayetteville Rd"
    }, {
        "id": "cctv_5231",
        "stream": "/georgiavss3/gdot-cam-581.stream/playlist.m3u8",
        "name": "I-285 : BUFORD HWY RAMP METER"
    }, {
        "id": "cctv_5047",
        "stream": "/georgiavss2/gdot-cam-279.stream/playlist.m3u8",
        "name": "I-285 : W OF CONLEY RD"
    }, {
        "id": "cctv_15420",
        "stream": "/georgiavss2/gdot-cam-314.stream/playlist.m3u8",
        "name": "I-20 : Thornton Rd"
    }, {
        "id": "cctv_15725",
        "stream": "/georgiavss3/gdot-cam-540.stream/playlist.m3u8",
        "name": "I-575 : N OF BARRETT PKY"
    }, {
        "id": "cctv_10488",
        "url": "/georgiasnapshots/CLAY-CAM-156.jpg",
        "name": "SR 139 : GARDEN WALK BLVD"
    }, {
        "id": "cctv_10483",
        "url": "/georgiasnapshots/CLAY-CAM-134.jpg",
        "name": "SR 138 : N MAIN ST"
    }, {
        "id": "cctv_9141",
        "stream": "/georgiavss1/cham-cam-102.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Johnson Ferry Rd"
    }, {
        "id": "cctv_5222",
        "stream": "/georgiavss3/gdot-cam-571.stream/playlist.m3u8",
        "name": "75/85 : RDA BLVD RAMP METER"
    }, {
        "id": "cctv_16240",
        "url": "/georgiasnapshots/COJC-CAM-625.jpg",
        "name": "Jones Bridge Rd : Saddle Brook Shopping Center"
    }, {
        "id": "cctv_15287",
        "url": "/georgiasnapshots/ATL-CAM-922.jpg",
        "name": "North Ave : Boulevard"
    }, {
        "id": "cctv_15503",
        "stream": "/georgiavss4/gdot-cam-699.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : EAST OF I-75"
    }, {
        "id": "cctv_32933",
        "url": "/georgiasnapshots/BROK-CAM-083.jpg",
        "name": "Perimeter Center Pky : Lake Hearn"
    }, {
        "id": "cctv_10208",
        "url": "/georgiasnapshots/GWIN-CAM-034.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : PLEASANT HILL RD"
    }, {
        "id": "cctv_13159",
        "url": "/georgiasnapshots/ROSWELL-CAM-420.jpg",
        "name": "Riverside Rd : Riverside Park/Riviera Rd"
    }, {
        "id": "cctv_15571",
        "url": "/georgiasnapshots/HNRY-CAM-100.jpg",
        "name": "SR 81 : N/S BETHANY RD"
    }, {
        "id": "cctv_5280",
        "stream": "/georgiavss4/gdot-cam-709.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF MT ZION BLVD"
    }, {
        "id": "cctv_15276",
        "stream": "/georgiavss1/atl-cam-914.stream/playlist.m3u8",
        "name": "Marietta St : Ivan Allen Jr Blvd"
    }, {
        "id": "cctv_13247",
        "stream": "/georgiavss4/gdot-cam-741.stream/playlist.m3u8",
        "name": "I-75 : AT HUDSON BR RD"
    }, {
        "id": "cctv_46415",
        "stream": "/georgiavss1/atl-cam-268.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : SR 280 / Holmes Dr / Jackson Pkwy"
    }, {
        "id": "cctv_46447",
        "url": "/georgiasnapshots/FULT-CAM-024.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : GA 138/ Jonesboro Rd"
    }, {
        "id": "cctv_15463",
        "stream": "/georgiavss3/gdot-cam-569.stream/playlist.m3u8",
        "name": "I-575 : N OF RABBIT HILL RD"
    }, {
        "id": "cctv_5131",
        "stream": "/georgiavss3/gdot-cam-405.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF S 120 LOOP"
    }, {
        "id": "cctv_10404",
        "url": "/georgiasnapshots/GWIN-CAM-245.jpg",
        "name": "SR 140 : Tracy Valley Dr / Gale Dr"
    }, {
        "id": "cctv_8966",
        "stream": "/georgiavss1/brok-cam-105.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Town Blvd"
    }, {
        "id": "cctv_5095",
        "stream": "/georgiavss3/gdot-cam-356.stream/playlist.m3u8",
        "name": "I-20 : W OF MORELAND AVE"
    }, {
        "id": "cctv_5376",
        "stream": "/georgiavss2/gdot-cam-094.stream/playlist.m3u8",
        "name": "I-85 : 1 MI S OF SHALLOWFORD"
    }, {
        "id": "cctv_4950",
        "stream": "/georgiavss2/gdot-cam-188.stream/playlist.m3u8",
        "name": "I-85 : N OF BUFFINGTON RD"
    }, {
        "id": "cctv_5344",
        "stream": "/georgiavss2/gdot-cam-084.stream/playlist.m3u8",
        "name": "I-85 : S OF PLEASANTDALE RD"
    }, {
        "id": "cctv_5393",
        "stream": "/georgiavss4/gdot-cam-956.stream/playlist.m3u8",
        "name": "I-285 : N OF BOLTON RD"
    }, {
        "id": "cctv_7213",
        "stream": "/georgiavss1/atl-cam-012.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Colonial Homes Dr"
    }, {
        "id": "cctv_6818",
        "url": "/georgiasnapshots/COJC-CAM-475.jpg",
        "name": "State Bridge Rd : St Georgian"
    }, {
        "id": "cctv_16369",
        "url": "/georgiasnapshots/BROK-CAM-073.jpg",
        "name": "Ashford Dunwoody Rd : Johnson Ferry Rd"
    }, {
        "id": "cctv_13748",
        "url": "/georgiasnapshots/COBB-CAM-117.jpg",
        "name": "Circle 75 Pkwy : Heritage Ct"
    }, {
        "id": "cctv_10226",
        "url": "/georgiasnapshots/GWIN-CAM-052.jpg",
        "name": "SR 124 : N of DOGWOOD RD"
    }, {
        "id": "cctv_9171",
        "url": "/georgiasnapshots/COBB-CAM-068.jpg",
        "name": "EW Connector : Fontaine Rd"
    }, {
        "id": "cctv_4996",
        "stream": "/georgiavss2/gdot-cam-023.stream/playlist.m3u8",
        "name": "I-75 : N OF BROOKWOOD INTRCHGE"
    }, {
        "id": "cctv_12899",
        "url": "/georgiasnapshots/COBB-CAM-154.jpg",
        "name": "Canton Rd : Shallowford Rd"
    }, {
        "id": "cctv_16358",
        "url": "http://navigatos-c2c.dot.ga.gov/snapshots/FORS-CAM-013.JPG",
        "name": "SR 9/Atlanta Hwy : SR 371/Post Rd/Mullinax Rd"
    }, {
        "id": "cctv_10397",
        "url": "/georgiasnapshots/GWIN-CAM-238.jpg",
        "name": "SUWANEE DAM RD : LEVEL CREEK RD - MOORE RD"
    }, {
        "id": "cctv_13236",
        "stream": "/georgiavss4/gdot-cam-771.stream/playlist.m3u8",
        "name": "I-675 : N OF SR 138"
    }, {
        "id": "cctv_46305",
        "url": "/georgiasnapshots/GWIN-CAM-255.jpg",
        "name": "SR 316 : SR 8/WINDER HWY"
    }, {
        "id": "cctv_16068",
        "stream": "/georgiavss1/atl-cam-968.stream/playlist.m3u8",
        "name": "Boulevard : United Ave"
    }, {
        "id": "cctv_10528",
        "url": "/georgiasnapshots/CLAY-CAM-x900.jpg",
        "name": "Garden Walk Blvd : CR Drew HS"
    }, {
        "id": "cctv_13109",
        "url": "/georgiasnapshots/GWIN-CAM-278.jpg",
        "name": "SR 20 : Sudderth Rd"
    }, {
        "id": "cctv_5331",
        "stream": "/georgiavss4/gdot-cam-828.stream/playlist.m3u8",
        "name": "GA 400 : AT MARTA N SPRINGS EXIT"
    }, {
        "id": "cctv_15248",
        "stream": "/georgiavss3/gdot-cam-536.stream/playlist.m3u8",
        "name": "I-75 : JUST S OF SR 92"
    }, {
        "id": "cctv_46455",
        "url": "/georgiasnapshots/FULT-CAM-033.jpg",
        "name": "GA 92/ Campbellton/ Fairburn Rd : GA 92/ Campbellton/ Fairburn Rd"
    }, {
        "id": "cctv_10290",
        "url": "/georgiasnapshots/GWIN-CAM-116.jpg",
        "name": "SATELLITE BLVD : MCGINNIS FERRY RD"
    }, {
        "id": "cctv_7312",
        "url": "/georgiasnapshots/COBB-CAM-052.jpg",
        "name": "SR 3 / Cobb Pkwy : Herodian Way"
    }, {
        "id": "cctv_16327",
        "url": "/georgiasnapshots/COBB-CAM-351.jpg",
        "name": "George Busbee Pkwy : Town Center Dr"
    }, {
        "id": "cctv_5355",
        "stream": "/georgiavss4/gdot-cam-851.stream/playlist.m3u8",
        "name": "GA 400 : N OF UNION HILL RD"
    }, {
        "id": "cctv_32610",
        "url": "/georgiasnapshots/COBB-CAM-209.jpg",
        "name": "Shallowford Rd : Gordy Pkwy (West)"
    }, {
        "id": "cctv_10535",
        "stream": "/georgiavss1/dek-cam-029.stream/playlist.m3u8",
        "name": "SR 141 : Motors Industrial Way"
    }, {
        "id": "cctv_13273",
        "stream": "/georgiavss4/gdot-cam-745.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF HUDSON BR"
    }, {
        "id": "cctv_46481",
        "url": "/georgiasnapshots/CHER-CAM-104.jpg",
        "name": "SR 140 : Hickory Rd"
    }, {
        "id": "cctv_15475",
        "stream": "/georgiavss3/gdot-cam-487.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY/SR 120 EXIT"
    }, {
        "id": "cctv_15229",
        "stream": "/georgiavss1/brok-cam-209.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Dresden Dr"
    }, {
        "id": "cctv_13263",
        "stream": "/georgiavss4/gdot-cam-734.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }, {
        "id": "cctv_13714",
        "stream": "/georgiavss1/dek-cam-307.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : I-20 EB Ramp"
    }, {
        "id": "cctv_5057",
        "stream": "/georgiavss2/gdot-cam-301.stream/playlist.m3u8",
        "name": "I-20 : FLAT SHOALS RD RAMP METER"
    }, {
        "id": "cctv_15993",
        "url": "/georgiasnapshots/GDOT-CAM-800.jpg",
        "name": "I-85 : S OF SPOUT SPRINGS RD"
    }, {
        "id": "cctv_15451",
        "url": "/georgiasnapshots/ATL-CAM-960.jpg",
        "name": "MLK Jr Dr : Peachtree St"
    }, {
        "id": "cctv_15409",
        "stream": "/georgiavss3/gdot-cam-318.stream/playlist.m3u8",
        "name": "I-20 : Riverside Pkwy"
    }, {
        "id": "cctv_5234",
        "stream": "/georgiavss3/gdot-cam-591.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : N of Jay Bird Alley NW"
    }, {
        "id": "cctv_5110",
        "stream": "/georgiavss2/gdot-cam-037.stream/playlist.m3u8",
        "name": "I-85 : GA 400 RAMPS"
    }, {
        "id": "cctv_10299",
        "url": "/georgiasnapshots/GWIN-CAM-125.jpg",
        "name": "SR 13 / US 23 : PLEASANT HILL RD"
    }, {
        "id": "cctv_15239",
        "url": "/georgiasnapshots/HNRY-CAM-108.jpg",
        "name": "SR 138 / N Henry Blvd : Shields Rd / Flippen Rd"
    }, {
        "id": "cctv_6251",
        "url": "/georgiasnapshots/ROSWELL-CAM-210.jpg",
        "name": "SR 92 : Woodstock Rd/King Rd"
    }, {
        "id": "cctv_16230",
        "url": "/georgiasnapshots/COJC-CAM-535.jpg",
        "name": "Old Alabama Rd : Brumbelow Rd"
    }, {
        "id": "cctv_9178",
        "url": "/georgiasnapshots/COBB-CAM-231.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Dodgen Rd"
    }, {
        "id": "cctv_13672",
        "stream": "/georgiavss1/cham-cam-012.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Shallowford Rd"
    }, {
        "id": "cctv_10269",
        "url": "/georgiasnapshots/GWIN-CAM-095.jpg",
        "name": "SR 120 : E of OLD NORCROSS RD"
    }, {
        "id": "cctv_10207",
        "url": "/georgiasnapshots/GWIN-CAM-033.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : N BERKELEY LAKE RD"
    }, {
        "id": "cctv_13731",
        "url": "/georgiasnapshots/COBB-CAM-118.jpg",
        "name": "Circle 75 Pkwy : Herodian Way"
    }, {
        "id": "cctv_15316",
        "url": "/georgiasnapshots/ATL-CAM-943.jpg",
        "name": "Williams St : John Portman Blvd"
    }, {
        "id": "cctv_7359",
        "url": "/georgiasnapshots/COBB-CAM-448.jpg",
        "name": "County Services Pkwy : County Services Pkwy"
    }, {
        "id": "cctv_46558",
        "url": "/georgiasnapshots/BROK-CAM-077.jpg",
        "name": "Ashford Dunwoody : Perimeter Summit"
    }, {
        "id": "cctv_5383",
        "stream": "/georgiavss4/gdot-cam-946.stream/playlist.m3u8",
        "name": "I-285 : N OF BENJAMIN E MAYS DR"
    }, {
        "id": "cctv_5090",
        "stream": "/georgiavss3/gdot-cam-351.stream/playlist.m3u8",
        "name": "I-20 : E OF CAPITOL AVE"
    }, {
        "id": "cctv_16319",
        "url": "/georgiasnapshots/COBB-CAM-306.jpg",
        "name": "Wade Green Rd : I-75 SB"
    }, {
        "id": "cctv_10314",
        "url": "/georgiasnapshots/GWIN-CAM-140.jpg",
        "name": "SUGARLOAF PKWY : LONGMONT DR"
    }, {
        "id": "cctv_4976",
        "stream": "/georgiavss2/gdot-cam-211.stream/playlist.m3u8",
        "name": "I-285 : LONG ISLAND DR"
    }, {
        "id": "cctv_10386",
        "url": "/georgiasnapshots/GWIN-CAM-220.jpg",
        "name": "INDIAN TRAIL LILBURN RD : GEORGIA BELLE CT"
    }, {
        "id": "cctv_12912",
        "url": "/georgiasnapshots/COBB-CAM-216.jpg",
        "name": "Sandy Plains Rd : Trickum Rd"
    }, {
        "id": "cctv_13605",
        "stream": "/georgiavss1/alph-cam-023.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : SR 400 NB Ramp"
    }, {
        "id": "cctv_15968",
        "stream": "/georgiavss2/gdot-cam-171.stream/playlist.m3u8",
        "name": "I-85 : 1 MILE N OF SR 20"
    }, {
        "id": "cctv_16229",
        "url": "/georgiasnapshots/COJC-CAM-530.jpg",
        "name": "Old Alabama Rd : Newtown Park/Fire Station 63"
    }, {
        "id": "cctv_8832",
        "stream": "/georgiavss1/atl-cam-039.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : E Andrews Dr"
    }, {
        "id": "cctv_5285",
        "stream": "/georgiavss4/gdot-cam-713.stream/playlist.m3u8",
        "name": "I-75 : I-675"
    }, {
        "id": "cctv_9304",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.jpg",
        "name": "I-75 : GLADE RD"
    }, {
        "id": "cctv_10349",
        "url": "/georgiasnapshots/GWIN-CAM-175.jpg",
        "name": "SR 20 : GWINNETT DR"
    }, {
        "id": "cctv_10241",
        "url": "/georgiasnapshots/GWIN-CAM-067.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of McGINNIS FERRY RD"
    }, {
        "id": "cctv_5421",
        "stream": "/georgiavss2/gdot-cam-124.stream/playlist.m3u8",
        "name": "I-85 : SR 316"
    }, {
        "id": "cctv_16206",
        "url": "/georgiasnapshots/ATL-CAM-982.jpg",
        "name": "Ralph McGill Blvd : Courtland St"
    }, {
        "id": "cctv_9025",
        "url": "/georgiasnapshots/ROSWELL-CAM-300.jpg",
        "name": "SR 9 : Riverside Dr/Azalea Dr"
    }, {
        "id": "cctv_7347",
        "url": "/georgiasnapshots/COBB-CAM-321.jpg",
        "name": "McCollum Pkwy : Old 41 Hwy"
    }, {
        "id": "cctv_13215",
        "url": "/georgiasnapshots/DEK-CAM-022.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Fellowship Rd"
    }, {
        "id": "cctv_10281",
        "url": "/georgiasnapshots/GWIN-CAM-107.jpg",
        "name": "SATELLITE BLVD : PLEASANT HILL RD"
    }, {
        "id": "cctv_5003",
        "stream": "/georgiavss2/gdot-cam-236.stream/playlist.m3u8",
        "name": "I-285 : S OF CHAMBLEE-TCKR"
    }, {
        "id": "cctv_6249",
        "url": "/georgiasnapshots/ROSWELL-CAM-216.jpg",
        "name": "SR 92 : Bowen Rd/Mtn Park Rd"
    }, {
        "id": "cctv_16252",
        "url": "/georgiasnapshots/COJC-CAM-670.jpg",
        "name": "Abbotts Bridge Rd : Addison Way"
    }, {
        "id": "cctv_4947",
        "stream": "/georgiavss2/gdot-cam-185.stream/playlist.m3u8",
        "name": "I-85 : S OF FLAT SHOALS RD"
    }, {
        "id": "cctv_5001",
        "stream": "/georgiavss2/gdot-cam-234.stream/playlist.m3u8",
        "name": "I-285 : W OF CHAMBLEE-TCKR"
    }, {
        "id": "cctv_5243",
        "stream": "/georgiavss2/gdot-cam-006.stream/playlist.m3u8",
        "name": "75/85 : PRYOR ST"
    }, {
        "id": "cctv_13354",
        "url": "/georgiasnapshots/DEK-CAM-027.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : SR 236 / Hugh Howell Rd"
    }, {
        "id": "cctv_7368",
        "url": "/georgiasnapshots/COBB-CAM-313.jpg",
        "name": "George Busbee Pkwy : Big Shanty Rd"
    }, {
        "id": "cctv_13229",
        "stream": "/georgiavss4/gdot-cam-733.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }, {
        "id": "cctv_9065",
        "stream": "/georgiavss1/alph-cam-002.stream/playlist.m3u8",
        "name": "SR 9 / North Main St : Academy St / Milton Ave"
    }, {
        "id": "cctv_5102",
        "stream": "/georgiavss3/gdot-cam-362.stream/playlist.m3u8",
        "name": "I-20 : W OF FLAT SHOALS"
    }, {
        "id": "cctv_13058",
        "stream": "/georgiavss1/dek-cam-051.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : I-285 SB Ramp"
    }, {
        "id": "cctv_13080",
        "stream": "/georgiavss1/atl-cam-084.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Ivan Allen Jr Blvd"
    }, {
        "id": "cctv_5312",
        "stream": "/georgiavss4/gdot-cam-786.stream/playlist.m3u8",
        "name": "US 78 : W OF JULIETTE RD"
    }, {
        "id": "cctv_7207",
        "stream": "/georgiavss1/atl-cam-033.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : Deering Rd"
    }, {
        "id": "cctv_5016",
        "stream": "/georgiavss2/gdot-cam-248.stream/playlist.m3u8",
        "name": "I-285 : E PONCE DE LEON AVE"
    }, {
        "id": "cctv_10219",
        "url": "/georgiasnapshots/GWIN-CAM-045.jpg",
        "name": "US 29 : GWINNETT DR"
    }, {
        "id": "cctv_46412",
        "stream": "/georgiavss1/atl-cam-098.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Arden Rd/Castlewood Dr"
    }, {
        "id": "cctv_5008",
        "stream": "/georgiavss2/gdot-cam-240.stream/playlist.m3u8",
        "name": "I-285 : NORTHLAKE PKWY"
    }, {
        "id": "cctv_13765",
        "stream": "/georgiavss1/atl-cam-602.stream/playlist.m3u8",
        "name": "SR 13 : Lenox Rd / Cheshire Bridge Rd"
    }, {
        "id": "cctv_10188",
        "url": "/georgiasnapshots/GWIN-CAM-010.jpg",
        "name": "SR 140 : I-85 NB Ramp"
    }, {
        "id": "cctv_10522",
        "url": "/georgiasnapshots/CLAY-CAM-C606.jpg",
        "name": "SR 138 : Hillcrest Trail"
    }, {
        "id": "cctv_13580",
        "url": "/georgiasnapshots/HNRY-CAM-920.jpg",
        "name": "SR 20 : Regency Park Dr"
    }, {
        "id": "cctv_16312",
        "url": "/georgiasnapshots/COBB-CAM-138.jpg",
        "name": "Cobb Galleria Pkwy : BBT"
    }, {
        "id": "cctv_10413",
        "url": "/georgiasnapshots/GCDOT-IVDS-108-PH5.jpg",
        "name": "SR 378 : I-85 SB"
    }, {
        "id": "cctv_46423",
        "url": "/georgiasnapshots/DOUG-CAM-098.jpg",
        "name": "SR 8/ US 78/ Veterans Memorial HWY : GA 5/ Bill Arp Rd"
    }, {
        "id": "cctv_16314",
        "stream": "/georgiavss3/gdot-cam-496.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKY ENT RAMP"
    }, {
        "id": "cctv_12946",
        "url": "/georgiasnapshots/DOUG-CAM-021.jpg",
        "name": "Douglas Blvd : Stewart Pkwy"
    }, {
        "id": "cctv_13664",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-068.jpg",
        "name": "I-20 : W of Wesley Chapel Rd"
    }, {
        "id": "cctv_15546",
        "stream": "/georgiavss3/gdot-cam-556.stream/playlist.m3u8",
        "name": "I-575 : N OF SR 92"
    }, {
        "id": "cctv_5368",
        "stream": "/georgiavss4/gdot-cam-932.stream/playlist.m3u8",
        "name": "I-285 : WASHINGTON RD"
    }, {
        "id": "cctv_16216",
        "stream": "/georgiavss1/cojc-cam-245.stream/playlist.m3u8",
        "name": "SR 141 : Hospital Pkwy"
    }, {
        "id": "cctv_9031",
        "url": "/georgiasnapshots/ROSWELL-CAM-312.jpg",
        "name": "SR 9 : Norcross St"
    }, {
        "id": "cctv_13609",
        "url": "/georgiasnapshots/ATL-CAM-060.jpg",
        "name": "SR 42 (Moreland Ave) : United Ave"
    }, {
        "id": "cctv_5021",
        "stream": "/georgiavss2/gdot-cam-254.stream/playlist.m3u8",
        "name": "I-285 : NEAR INDIAN CREEK MARTA"
    }, {
        "id": "cctv_13255",
        "stream": "/georgiavss4/gdot-cam-759.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 20/81"
    }, {
        "id": "cctv_13563",
        "stream": "/georgiavss4/gdot-cam-736.stream/playlist.m3u8",
        "name": "I-75 : S OF WALT STEPHENS"
    }, {
        "id": "cctv_13600",
        "url": "/georgiasnapshots/COBB-CAM-263.jpg",
        "name": "SR 6 : Humphries Hill Rd"
    }, {
        "id": "cctv_7197",
        "stream": "/georgiavss1/atl-cam-210.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : SR 10/Freedom Pkwy"
    }, {
        "id": "cctv_6825",
        "stream": "/georgiavss1/cher-cam-009.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Mountain Brook"
    }, {
        "id": "cctv_10321",
        "url": "/georgiasnapshots/GWIN-CAM-147.jpg",
        "name": "PLEASANT HILL RD : MARY ST"
    }, {
        "id": "cctv_7323",
        "url": "/georgiasnapshots/COBB-CAM-063.jpg",
        "name": "EW Connector : South Cobb Drive"
    }, {
        "id": "cctv_6264",
        "url": "/georgiasnapshots/ROSWELL-CAM-114.jpg",
        "name": "SR 140 : Fouts Rd"
    }, {
        "id": "cctv_9159",
        "stream": "/georgiavss1/dek-cam-011.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Orion Dr"
    }, {
        "id": "cctv_15574",
        "stream": "/georgiavss3/gdot-cam-474.stream/playlist.m3u8",
        "name": "I-75 : DELK RD ENT RAMP"
    }, {
        "id": "cctv_15240",
        "url": "/georgiasnapshots/HNRY-CAM-110.jpg",
        "name": "SR 138 / N Henry Blvd : E Atlanta Rd"
    }, {
        "id": "cctv_13337",
        "url": "/georgiasnapshots/GWIN-CAM-323.jpg",
        "name": "SR 140 : Pacific Drive"
    }, {
        "id": "cctv_5055",
        "stream": "/georgiavss2/gdot-cam-030.stream/playlist.m3u8",
        "name": "I-75 : MT PARAN RD"
    }, {
        "id": "cctv_46507",
        "url": "/georgiasnapshots/ROCK-CAM-122.jpg",
        "name": "SR 138 : Eastview Rd/ Eastview Parkway"
    }, {
        "id": "cctv_46431",
        "stream": "/georgiavss1/atl-cam-266.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : James P Brawley Rd"
    }, {
        "id": "cctv_15393",
        "stream": "/georgiavss3/gdot-cam-557.stream/playlist.m3u8",
        "name": "I-575 : TOWN LAKE PKY EXIT"
    }, {
        "id": "cctv_12895",
        "url": "/georgiasnapshots/COBB-CAM-309.jpg",
        "name": "Bells Ferry Rd : Hawkins Store Rd"
    }, {
        "id": "cctv_15396",
        "stream": "/georgiavss1/atl-cam-067.stream/playlist.m3u8",
        "name": "SR 141 Conn / Lenox Rd : Tower Place Dr"
    }, {
        "id": "cctv_46286",
        "url": "/georgiasnapshots/GWIN-CAM-228.jpg",
        "name": "US 78 : SUMMIT CHASE DR"
    }, {
        "id": "cctv_12968",
        "stream": "/georgiavss4/gdot-cam-820.stream/playlist.m3u8",
        "name": "GA 400 : S OF WINDSOR PKWY"
    }, {
        "id": "cctv_5277",
        "stream": "/georgiavss4/gdot-cam-706.stream/playlist.m3u8",
        "name": "I-75 : AT MT ZION BLVD"
    }, {
        "id": "cctv_13665",
        "stream": "/georgiavss1/dek-cam-305.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : Glenwood Ave"
    }, {
        "id": "cctv_5260",
        "stream": "/georgiavss4/gdot-cam-661.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 3"
    }, {
        "id": "cctv_5390",
        "stream": "/georgiavss4/gdot-cam-953.stream/playlist.m3u8",
        "name": "I-285 : HOLLOWELL PKWY"
    }, {
        "id": "cctv_9114",
        "stream": "/georgiavss1/atl-cam-050.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Chastain Dr"
    }, {
        "id": "cctv_12916",
        "url": "/georgiasnapshots/COBB-CAM-217.jpg",
        "name": "Sandy Plains Rd : Wigley Rd"
    }, {
        "id": "cctv_6811",
        "url": "/georgiasnapshots/GDOT-CAM-518.jpg",
        "name": "I-575 : AT RIDGEWALK PKWY"
    }, {
        "id": "cctv_7229",
        "stream": "/georgiavss1/atl-cam-022.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lindbergh Dr / Way"
    }, {
        "id": "cctv_16353",
        "url": "/georgiasnapshots/FORS-CAM-008.jpg",
        "name": "SR 20/ East Maple St : Castleberry Rd"
    }, {
        "id": "cctv_6857",
        "stream": "/georgiavss1/fay-cam-101.stream/playlist.m3u8",
        "name": "SR 85 : SR 279 / Carnegie Pl"
    }, {
        "id": "cctv_15432",
        "stream": "/georgiavss2/gdot-cam-296.stream/playlist.m3u8",
        "name": "I-20 : Chapel Hill Rd"
    }, {
        "id": "cctv_6799",
        "stream": "/georgiavss1/cojc-cam-170.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : McGinnis Ferry Rd"
    }, {
        "id": "cctv_10307",
        "url": "/georgiasnapshots/GWIN-CAM-133.jpg",
        "name": "SUGARLOAF PKWY : IEC MIDBLOCK"
    }, {
        "id": "cctv_5042",
        "stream": "/georgiavss2/gdot-cam-274.stream/playlist.m3u8",
        "name": "I-285 : MORELAND AVE"
    }, {
        "id": "cctv_13310",
        "url": "/georgiasnapshots/DEK-CAM-039.jpg",
        "name": "SR 12 (Covington Hwy) : Panola Rd"
    }, {
        "id": "cctv_5325",
        "stream": "/georgiavss2/gdot-cam-080.stream/playlist.m3u8",
        "name": "I-75 : N OF CENTRAL AVE"
    }, {
        "id": "cctv_5202",
        "stream": "/georgiavss3/gdot-cam-510.stream/playlist.m3u8",
        "name": "I-575 : N OF BELLS FERRY RD"
    }, {
        "id": "cctv_15201",
        "url": "/georgiasnapshots/MAR-CAM-403.jpg",
        "name": "SR 120 / Whitlock Ave : Polk St Ext / Old Dallas Rd"
    }, {
        "id": "cctv_10443",
        "url": "/georgiasnapshots/CLAY-CAM-028.jpg",
        "name": "SR 3 / Tara Blvd : SR 138"
    }, {
        "id": "cctv_32527",
        "url": "/georgiasnapshots/GWIN-CAM-325.jpg",
        "name": "SR 124 : WEBB GIN HOUSE RD"
    }, {
        "id": "cctv_13549",
        "url": "/georgiasnapshots/DEK-CAM-313.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Wesley Chapel Rd / Flakes Mill Rd"
    }, {
        "id": "cctv_10288",
        "url": "/georgiasnapshots/GWIN-CAM-114.jpg",
        "name": "SATELLITE BLVD : OLD PEACHTREE RD"
    }, {
        "id": "cctv_32961",
        "url": "/georgiasnapshots/CLAY-CAM-201.jpg",
        "name": "SR 138 : I-675 NB Ramp"
    }, {
        "id": "cctv_15551",
        "stream": "/georgiavss3/gdot-cam-482.stream/playlist.m3u8",
        "name": "I-75 : S 120 LOOP/MARIETTA PKY"
    }, {
        "id": "cctv_16201",
        "url": "/georgiasnapshots/ATL-CAM-978.jpg",
        "name": "Baker St : Courtland St"
    }, {
        "id": "cctv_5395",
        "stream": "/georgiavss4/gdot-cam-958.stream/playlist.m3u8",
        "name": "I-285 : N OF CHATTAHOOCHEE RIVER"
    }, {
        "id": "cctv_5087",
        "stream": "/georgiavss3/gdot-cam-349.stream/playlist.m3u8",
        "name": "I-20 : CAPITOL AVE"
    }, {
        "id": "cctv_15618",
        "stream": "/georgiavss3/gdot-cam-519.stream/playlist.m3u8",
        "name": "I-75 : AT BARRETT PKWY ENTR"
    }, {
        "id": "cctv_13587",
        "stream": "/georgiavss1/cham-cam-003.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Dresden Dr"
    }, {
        "id": "cctv_9291",
        "url": "/georgiasnapshots/COBB-CAM-166.jpg",
        "name": "SR 120 / Roswell Rd : Wellstar Health Park"
    }, {
        "id": "cctv_10199",
        "url": "/georgiasnapshots/GWIN-CAM-025.jpg",
        "name": "STEVE REYNOLDS BLVD : CLUB DR"
    }, {
        "id": "cctv_4959",
        "stream": "/georgiavss2/gdot-cam-196.stream/playlist.m3u8",
        "name": "I-85 : N OF I-285 WEST"
    }, {
        "id": "cctv_5582",
        "stream": "/georgiavss4/gdot-cam-645.stream/playlist.m3u8",
        "name": "I-285 : NEAR I-85 / SOUTHSIDE"
    }, {
        "id": "cctv_4931",
        "stream": "/georgiavss2/gdot-cam-013.stream/playlist.m3u8",
        "name": "75/85 : COURTLAND ST"
    }, {
        "id": "cctv_5180",
        "stream": "/georgiavss3/gdot-cam-450.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF WOODSTOCK RD"
    }, {
        "id": "cctv_10343",
        "url": "/georgiasnapshots/GWIN-CAM-169.jpg",
        "name": "SR 20 : SR 84 / GRAYSON PKWY / GRAYSON NEW HOPE RD"
    }, {
        "id": "cctv_13141",
        "url": "/georgiasnapshots/ROSWELL-CAM-118.jpg",
        "name": "SR 140 : Calibre Creek Pkwy"
    }, {
        "id": "cctv_10500",
        "url": "/georgiasnapshots/CLAY-CAM-200.jpg",
        "name": "SR 85 : AIR LOGISTICS CENTER"
    }, {
        "id": "cctv_7331",
        "url": "/georgiasnapshots/COBB-CAM-104.jpg",
        "name": "Roswell Rd : Johnson Ferry Rd"
    }, {
        "id": "cctv_9166",
        "url": "/georgiasnapshots/COBB-CAM-003.jpg",
        "name": "SR 5/Austell Rd : Clay Rd"
    }, {
        "id": "cctv_5169",
        "stream": "/georgiavss3/gdot-cam-440.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD"
    }, {
        "id": "cctv_5957",
        "stream": "/georgiavss4/gdot-cam-613.stream/playlist.m3u8",
        "name": "I-675 : S OF GRANT RD"
    }, {
        "id": "cctv_13225",
        "stream": "/georgiavss1/fors-cam-001.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : SR 9 (Atlanta Highway)"
    }, {
        "id": "cctv_13375",
        "stream": "/georgiavss1/atl-cam-270.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Maynard Rd"
    }, {
        "id": "cctv_7340",
        "url": "/georgiasnapshots/COBB-CAM-252.jpg",
        "name": "Dallas Hwy : Lost Mountain Park"
    }, {
        "id": "cctv_10496",
        "url": "/georgiasnapshots/CLAY-CAM-181.jpg",
        "name": "SR 85 : Airport South Pkwy"
    }, {
        "id": "cctv_15558",
        "stream": "/georgiavss3/gdot-cam-459.stream/playlist.m3u8",
        "name": "I-75 : I-285 ON/OFF EXPRESS RAMP"
    }, {
        "id": "cctv_15222",
        "url": "/georgiasnapshots/COBB-CAM-137.jpg",
        "name": "Windy Ridge Pkwy : Heritage Ct"
    }, {
        "id": "cctv_15974",
        "stream": "/georgiavss2/gdot-cam-174.stream/playlist.m3u8",
        "name": "I-85 : N OF GRAVEL SPRINGS RD"
    }, {
        "id": "cctv_6244",
        "url": "/georgiasnapshots/HNRY-CAM-913.jpg",
        "name": "SR 20 : I-75 SB"
    }, {
        "id": "cctv_13675",
        "stream": "/georgiavss1/atl-cam-064.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : I-20 WB Ramp"
    }, {
        "id": "cctv_10311",
        "url": "/georgiasnapshots/GWIN-CAM-137.jpg",
        "name": "SUGARLOAF PKWY : SR 316 WB RAMPS"
    }, {
        "id": "cctv_10236",
        "url": "/georgiasnapshots/GWIN-CAM-062.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of WALTHER BLVD"
    }, {
        "id": "cctv_15353",
        "stream": "http://vss12live.dot.ga.gov:80/lo/dek-cam-451.stream/playlist.m3u8",
        "name": "N Druid Hills Rd NE : Briarcliff HS"
    }, {
        "id": "cctv_32605",
        "url": "/georgiasnapshots/COBB-CAM-089.jpg",
        "name": "Lower Roswell Rd : Indian Hills"
    }, {
        "id": "cctv_10439",
        "url": "/georgiasnapshots/CLAY-CAM-023.jpg",
        "name": "SR 3 / Old Dixie Hwy : Holiday Blvd"
    }, {
        "id": "cctv_10231",
        "url": "/georgiasnapshots/GWIN-CAM-057.jpg",
        "name": "SR 124 : S of GWINNETT DR"
    }, {
        "id": "cctv_10477",
        "url": "/georgiasnapshots/CLAY-CAM-123.jpg",
        "name": "SR 138 : Mt Zion Rd"
    }, {
        "id": "cctv_10429",
        "url": "/georgiasnapshots/CLAY-CAM-006.jpg",
        "name": "SR 138 : Taylor Rd"
    }, {
        "id": "cctv_15365",
        "url": "/georgiasnapshots/CLAY-CAM-100.jpg",
        "name": "SR 331 / Forest Pkwy : Clark Howell Hwy"
    }, {
        "id": "cctv_10372",
        "url": "/georgiasnapshots/GWIN-CAM-198.jpg",
        "name": "SR 324 : MORGAN RD"
    }, {
        "id": "cctv_7308",
        "url": "/georgiasnapshots/COBB-CAM-045.jpg",
        "name": "Powers Ferry Rd : Windy Hill Rd"
    }, {
        "id": "cctv_10424",
        "url": "/georgiasnapshots/GCDOT-IVDS-631.jpg",
        "name": "SUWANEE DAM RD : SETTLES BRIDGE RD"
    }, {
        "id": "cctv_6830",
        "stream": "/georgiavss1/atl-cam-556.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Hardee St NE"
    }, {
        "id": "cctv_5272",
        "stream": "/georgiavss2/gdot-cam-007.stream/playlist.m3u8",
        "name": "75/85 : FULTON ST"
    }, {
        "id": "cctv_5142",
        "stream": "/georgiavss3/gdot-cam-416.stream/playlist.m3u8",
        "name": "I-75 : ALLGOOD RD"
    }, {
        "id": "cctv_15279",
        "stream": "/georgiavss1/atl-cam-917.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Martin Luther King Jr Dr"
    }, {
        "id": "cctv_8814",
        "stream": "/georgiavss1/atl-cam-023.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lakeshore Dr"
    }, {
        "id": "cctv_16220",
        "url": "/georgiasnapshots/COJC-CAM-415.jpg",
        "name": "State Bridge Rd : Saddle Brook Shop Center"
    }, {
        "id": "cctv_15251",
        "stream": "/georgiavss1/atl-cam-906.stream/playlist.m3u8",
        "name": "Peachtree St : 14th St"
    }, {
        "id": "cctv_6324",
        "url": "/georgiasnapshots/COJC-CAM-665.jpg",
        "name": "McGinnis Ferry Rd : 7 Oaks Pkwy/Brassfield Dr"
    }, {
        "id": "cctv_7304",
        "url": "/georgiasnapshots/COBB-CAM-023.jpg",
        "name": "SR 280/South Cobb Dr : Austell Rd"
    }, {
        "id": "cctv_10186",
        "url": "/georgiasnapshots/GWIN-CAM-008.jpg",
        "name": "SR 140 : Rockbridge Rd"
    }, {
        "id": "cctv_12986",
        "url": "/georgiasnapshots/GWIN-CAM-271",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Oakland Road"
    }, {
        "id": "cctv_10164",
        "url": "/georgiasnapshots/HNRY-CAM-918.jpg",
        "name": "SR 20 : South Point Blvd"
    }, {
        "id": "cctv_13193",
        "url": "/georgiasnapshots/COBB-CAM-234.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Jefferson St"
    }, {
        "id": "cctv_5951",
        "stream": "/georgiavss3/gdot-cam-607.stream/playlist.m3u8",
        "name": "I-675 : N OF REX RD"
    }, {
        "id": "cctv_5316",
        "stream": "/georgiavss2/gdot-cam-079.stream/playlist.m3u8",
        "name": "I-75 : CLEVELAND AVE"
    }, {
        "id": "cctv_12907",
        "url": "/georgiasnapshots/COBB-CAM-314.jpg",
        "name": "Chastain Rd : McCollum Pkwy/Duncan Rd"
    }, {
        "id": "cctv_15439",
        "stream": "/georgiavss3/gdot-cam-562.stream/playlist.m3u8",
        "name": "I-575 : RIDGEWALK PKY"
    }, {
        "id": "cctv_7206",
        "stream": "/georgiavss1/atl-cam-031.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Collier Rd"
    }, {
        "id": "cctv_4958",
        "stream": "/georgiavss2/gdot-cam-195.stream/playlist.m3u8",
        "name": "I-85 : N OF OLD NATIONAL HWY"
    }, {
        "id": "cctv_5138",
        "stream": "/georgiavss3/gdot-cam-412.stream/playlist.m3u8",
        "name": "I-75 : N 120 LOOP"
    }, {
        "id": "cctv_16094",
        "url": "/georgiasnapshots/ATL-CAM-975.jpg",
        "name": "Joseph E Lowery Blvd : Park St / I-20 WB Ramp"
    }, {
        "id": "cctv_5319",
        "stream": "/georgiavss4/gdot-cam-792.stream/playlist.m3u8",
        "name": "US 78 : E OF HUGH HOWELL RD"
    }, {
        "id": "cctv_13120",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-080.jpg",
        "name": "I-20 : WEST AVE"
    }, {
        "id": "cctv_15511",
        "stream": "/georgiavss3/gdot-cam-527.stream/playlist.m3u8",
        "name": "I-75 : N OF SHILOH RD"
    }, {
        "id": "cctv_9028",
        "url": "/georgiasnapshots/ROSWELL-CAM-306.jpg",
        "name": "SR 9 : SR 120/Mill St"
    }, {
        "id": "cctv_13365",
        "stream": "/georgiavss4/gdot-cam-758.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81 EXIT"
    }, {
        "id": "cctv_13194",
        "url": "/georgiasnapshots/COBB-CAM-235.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Maxham Rd"
    }, {
        "id": "cctv_13150",
        "url": "/georgiasnapshots/ROSWELL-CAM-402.jpg",
        "name": "Mansell Rd : SR 140/Houze Rd"
    }, {
        "id": "cctv_13239",
        "stream": "/georgiavss4/gdot-cam-681.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 713/714"
    }, {
        "id": "cctv_15363",
        "url": "/georgiasnapshots/CLAY-CAM-095.jpg",
        "name": "Upper Riverdale Rd : Roy Hue Rd"
    }, {
        "id": "cctv_16237",
        "url": "/georgiasnapshots/COJC-CAM-610.jpg",
        "name": "Jones Bridge Rd : Waters Rd"
    }, {
        "id": "cctv_32581",
        "url": "/georgiasnapshots/HALL-CAM-001.jpg",
        "name": "SR 347/Lanier Is Pkwy : Bristrol Ind Rd"
    }, {
        "id": "cctv_8805",
        "stream": "/georgiavss3/gdot-cam-380.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL"
    }, {
        "id": "cctv_5153",
        "stream": "/georgiavss3/gdot-cam-426.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY"
    }, {
        "id": "cctv_13048",
        "stream": "/georgiavss1/atl-cam-087.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 14th St"
    }, {
        "id": "cctv_4917",
        "stream": "/georgiavss2/gdot-cam-010.stream/playlist.m3u8",
        "name": "75/85 : GRADY CURVE"
    }, {
        "id": "cctv_5284",
        "stream": "/georgiavss4/gdot-cam-712.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 138"
    }, {
        "id": "cctv_9089",
        "url": "/georgiasnapshots/COBB-CAM-006.jpg",
        "name": "SR 5/Austell Rd : Pat Mell Rd"
    }, {
        "id": "cctv_13743",
        "url": "/georgiasnapshots/COBB-CAM-119.jpg",
        "name": "Cumberland Pkwy : Cumberland Blvd"
    }, {
        "id": "cctv_5099",
        "stream": "/georgiavss2/gdot-cam-036.stream/playlist.m3u8",
        "name": "I-85 : MONROE DR"
    }, {
        "id": "cctv_15550",
        "stream": "/georgiavss3/gdot-cam-481.stream/playlist.m3u8",
        "name": "I-75 : S OF S 120 LOOP/MARIETTA PKY"
    }, {
        "id": "cctv_13749",
        "url": "/georgiasnapshots/COBB-CAM-127.jpg",
        "name": "Circle 75 Pkwy : Pedestrian Bridge"
    }, {
        "id": "cctv_15330",
        "url": "/georgiasnapshots/ATL-CAM-945.jpg",
        "name": "Williams St : West Peachtree Pl"
    }, {
        "id": "cctv_5707",
        "stream": "/georgiavss3/gdot-cam-588.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : Peachtree Corners Cir"
    }, {
        "id": "cctv_15335",
        "url": "/georgiasnapshots/ATL-CAM-951.jpg",
        "name": "Piedmont Ave : Ellis St"
    }, {
        "id": "cctv_5366",
        "stream": "/georgiavss4/gdot-cam-930.stream/playlist.m3u8",
        "name": "I-285 : I-85 SOUTH (FULTON)"
    }, {
        "id": "cctv_12959",
        "stream": "/georgiavss4/gdot-cam-812.stream/playlist.m3u8",
        "name": "GA 400 : ENTRANCE TO TUNNEL"
    }, {
        "id": "cctv_5293",
        "stream": "/georgiavss4/gdot-cam-720.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BRIDGE"
    }, {
        "id": "cctv_5386",
        "stream": "/georgiavss2/gdot-cam-095.stream/playlist.m3u8",
        "name": "I-75 : W PACES ENT RAMP"
    }, {
        "id": "cctv_5094",
        "stream": "/georgiavss3/gdot-cam-355.stream/playlist.m3u8",
        "name": "I-20 : GLENWOOD CON/BILL KENNEDY WAY"
    }, {
        "id": "cctv_4937",
        "stream": "/georgiavss2/gdot-cam-017.stream/playlist.m3u8",
        "name": "75/85 : NORTH AVE"
    }, {
        "id": "cctv_10182",
        "url": "/georgiasnapshots/GWIN-CAM-004.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Arcado Rd / Beaver Ruin Rd"
    }, {
        "id": "cctv_13561",
        "stream": "/georgiavss4/gdot-cam-750.stream/playlist.m3u8",
        "name": "I-75 : S OF MT CARMEL"
    }, {
        "id": "cctv_10486",
        "url": "/georgiasnapshots/CLAY-CAM-148.jpg",
        "name": "SR 42 : LAKE HARBIN RD"
    }, {
        "id": "cctv_32616",
        "url": "/georgiasnapshots/DUN-CAM-111.jpg",
        "name": "Ashford Dunwoody Rd : Perimeter Center East"
    }, {
        "id": "cctv_10210",
        "url": "/georgiasnapshots/GWIN-CAM-036.jpg",
        "name": "SR 20 : SR 316 WB Ramp"
    }, {
        "id": "cctv_32591",
        "url": "/georgiasnapshots/COBB-CAM-151.jpg",
        "name": "Canton Rd : Jamerson Rd"
    }, {
        "id": "cctv_5955",
        "stream": "/georgiavss4/gdot-cam-611.stream/playlist.m3u8",
        "name": "I-675 : NORF STHRN RAILROAD"
    }, {
        "id": "cctv_5228",
        "stream": "/georgiavss3/gdot-cam-579.stream/playlist.m3u8",
        "name": "I-285 : RIVERSIDE DR RAMP METER"
    }, {
        "id": "cctv_6827",
        "stream": "/georgiavss1/atl-cam-559.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Freedom Pkwy Conn."
    }, {
        "id": "cctv_10520",
        "url": "/georgiasnapshots/CLAY-CAM-C604.jpg",
        "name": "SR 3 / Tara Blvd : Central Ave"
    }, {
        "id": "cctv_8954",
        "stream": "/georgiavss1/dek-cam-003.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Artwood Rd"
    }, {
        "id": "cctv_5415",
        "stream": "/georgiavss2/gdot-cam-141.stream/playlist.m3u8",
        "name": "Clairmont Rd : BRIARCLIFF RD"
    }, {
        "id": "cctv_32609",
        "url": "/georgiasnapshots/COBB-CAM-108.jpg",
        "name": "Johnson Ferry Rd : Lassiter Rd"
    }, {
        "id": "cctv_15190",
        "url": "/georgiasnapshots/MAR-CAM-301.jpg",
        "name": "SR 120/S Marietta Pkwy : Powder Springs St"
    }, {
        "id": "cctv_4982",
        "stream": "/georgiavss2/gdot-cam-217.stream/playlist.m3u8",
        "name": "I-285 : GA 400 NB"
    }, {
        "id": "cctv_5253",
        "stream": "/georgiavss4/gdot-cam-655.stream/playlist.m3u8",
        "name": "I-285 : CD LANES (NO TRAFFIC)"
    }, {
        "id": "cctv_5269",
        "stream": "/georgiavss2/gdot-cam-067.stream/playlist.m3u8",
        "name": "I-75 : NEAR KENNEDY DR"
    }, {
        "id": "cctv_9082",
        "url": "/georgiasnapshots/ALPH-CAM-014d.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }, {
        "id": "cctv_5214",
        "stream": "/georgiavss3/gdot-cam-551.stream/playlist.m3u8",
        "name": "I-85 : N DRUID HILLS RAMP METER"
    }, {
        "id": "cctv_5947",
        "stream": "/georgiavss3/gdot-cam-603.stream/playlist.m3u8",
        "name": "I-675 : 3/4 MI N OF SR 138"
    }, {
        "id": "cctv_5112",
        "stream": "/georgiavss3/gdot-cam-371.stream/playlist.m3u8",
        "name": "I-20 : W OF COLUMBIA DR"
    }, {
        "id": "cctv_13613",
        "url": "/georgiasnapshots/PAUL-CAM-012.jpg",
        "name": "SR 6 : SR 6 Business (Atlanta Highway)"
    }, {
        "id": "cctv_9108",
        "url": "/georgiasnapshots/COBB-CAM-500.jpg",
        "name": "Villa Rica Rd : West Sandtown Rd"
    }, {
        "id": "cctv_15535",
        "stream": "/georgiavss3/gdot-cam-529.stream/playlist.m3u8",
        "name": "I-75 : S OF HICKORY GROVE RD"
    }, {
        "id": "cctv_13234",
        "stream": "/georgiavss4/gdot-cam-751.stream/playlist.m3u8",
        "name": "I-75 : AT TOLL POINT 2"
    }, {
        "id": "cctv_15600",
        "stream": "/georgiavss4/gdot-cam-631.stream/playlist.m3u8",
        "name": "I-285 : NEW NORTHSIDE DR"
    }, {
        "id": "cctv_10347",
        "url": "/georgiasnapshots/GWIN-CAM-173.jpg",
        "name": "SR 20 : N of PLANTATION BLVD / PARK PLACE DR"
    }, {
        "id": "cctv_10388",
        "url": "/georgiasnapshots/GWIN-CAM-222.jpg",
        "name": "INDIAN TRAIL LILBURN RD : STEVE REYNOLDS BLVD - SINGLETON RD"
    }, {
        "id": "cctv_16357",
        "url": "http://navigatos-c2c.dot.ga.gov/snapshots/FORS-CAM-012.JPG",
        "name": "SR 9/Atlanta Hwy : Francis Rd/ Grassland Pkwy"
    }, {
        "id": "cctv_16301",
        "url": "/georgiasnapshots/COBB-CAM-094.jpg",
        "name": "Lower Roswell Rd : Holt Rd"
    }, {
        "id": "cctv_7353",
        "url": "/georgiasnapshots/COBB-CAM-336.jpg",
        "name": "SR 3/Cobb Pkwy : McCollum Pkwy"
    }, {
        "id": "cctv_12964",
        "stream": "/georgiavss4/gdot-cam-821.stream/playlist.m3u8",
        "name": "GA 400 : WINDSOR PKWY"
    }, {
        "id": "cctv_13350",
        "url": "/georgiasnapshots/DEK-CAM-301.jpg",
        "name": "SR 155 / Clairmont Rd : Mason Mill Rd"
    }, {
        "id": "cctv_6302",
        "stream": "/georgiavss1/atl-cam-041.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Sidney Marcus Blvd"
    }, {
        "id": "cctv_15428",
        "stream": "/georgiavss2/gdot-cam-316.stream/playlist.m3u8",
        "name": "I-20 : East of Thornton Rd/SR 6"
    }, {
        "id": "cctv_13736",
        "url": "/georgiasnapshots/COBB-CAM-129.jpg",
        "name": "Windy Ridge Pkwy : Cir 75 Pkwy"
    }, {
        "id": "cctv_10203",
        "url": "/georgiasnapshots/GWIN-CAM-029.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : HOLCOMB BRIDGE RD"
    }, {
        "id": "cctv_6262",
        "url": "/georgiasnapshots/ROSWELL-CAM-120.jpg",
        "name": "SR 140 : Martins Landing Dr/Terramont Way"
    }, {
        "id": "cctv_5357",
        "stream": "/georgiavss4/gdot-cam-853.stream/playlist.m3u8",
        "name": "GA 400 : MCFARLAND RD"
    }, {
        "id": "cctv_9139",
        "stream": "/georgiavss1/cham-cam-104.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Chamblee-Tucker Rd"
    }, {
        "id": "cctv_12914",
        "url": "/georgiasnapshots/COBB-CAM-222.jpg",
        "name": "Sandy Plains Rd : Canton Rd"
    }, {
        "id": "cctv_16246",
        "url": "/georgiasnapshots/COJC-CAM-715.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Pkwy W"
    }, {
        "id": "cctv_5350",
        "stream": "/georgiavss4/gdot-cam-847.stream/playlist.m3u8",
        "name": "GA 400 : WINDWARD PKWY"
    }, {
        "id": "cctv_10249",
        "url": "/georgiasnapshots/GWIN-CAM-075.jpg",
        "name": "SR 378 : SHACKLEFORD RD / E of I-85"
    }, {
        "id": "cctv_5053",
        "stream": "/georgiavss2/gdot-cam-029.stream/playlist.m3u8",
        "name": "I-75 : N OF W PACES FERRY RD"
    }, {
        "id": "cctv_13294",
        "stream": "/georgiavss1/dek-cam-031.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Redwing Cir"
    }, {
        "id": "cctv_9180",
        "url": "/georgiasnapshots/COBB-CAM-233.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : South Gordon Rd"
    }, {
        "id": "cctv_46410",
        "url": "/georgiasnapshots/COBB-CAM-450.jpg",
        "name": "Old Ga-6 Bus/Marietta St : New Macland Rd"
    }, {
        "id": "cctv_46394",
        "url": "http://navigator-c2c-.dot.ga.gov/snapshots/COBB-CAM-449.jpg",
        "name": "SR 6 Spur/Westside Rd : Austell-Powder Springs Rd"
    }, {
        "id": "cctv_9067",
        "stream": "/georgiavss1/alph-cam-004.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : North Point Pkwy"
    }, {
        "id": "cctv_12966",
        "stream": "/georgiavss4/gdot-cam-823.stream/playlist.m3u8",
        "name": "GA 400 : S OF GLENRIDGE CONN"
    }, {
        "id": "cctv_10466",
        "url": "/georgiasnapshots/CLAY-CAM-064.jpg",
        "name": "SR 85 : SR 331 / Forest Pkwy"
    }, {
        "id": "cctv_15182",
        "url": "/georgiasnapshots/MAR-CAM-113.jpg",
        "name": "Windy Hill Rd : Village Pkwy"
    }, {
        "id": "cctv_46416",
        "stream": "/georgiavss1/atl-cam-269.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : I-285 SB Ramp"
    }, {
        "id": "cctv_15311",
        "stream": "/georgiavss1/atl-cam-940.stream/playlist.m3u8",
        "name": "SR 9 (Peachtree St) : Peachtree Cir"
    }, {
        "id": "cctv_9060",
        "stream": "/georgiavss1/atl-cam-048.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : River Green Dr"
    }, {
        "id": "cctv_10383",
        "url": "/georgiasnapshots/GWIN-CAM-209.jpg",
        "name": "DACULA RD : SR 8 / WINDER HWY"
    }, {
        "id": "cctv_5166",
        "stream": "/georgiavss3/gdot-cam-438.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF CHASTAIN RD"
    }, {
        "id": "cctv_10420",
        "url": "/georgiasnapshots/GCDOT-IVDS-376-PH8.jpg",
        "name": "SR20-Grayson Hwy : Webb Gin House"
    }, {
        "id": "cctv_5318",
        "stream": "/georgiavss4/gdot-cam-791.stream/playlist.m3u8",
        "name": "US 78 : HUGH HOWELL E ENT RAMP"
    }, {
        "id": "cctv_32598",
        "url": "/georgiasnapshots/COBB-CAM-009.jpg",
        "name": "Barrett Pkwy : Old 41"
    }, {
        "id": "cctv_10278",
        "url": "/georgiasnapshots/GWIN-CAM-104.jpg",
        "name": "SR 10 : Fountain Dr"
    }, {
        "id": "cctv_10297",
        "url": "/georgiasnapshots/GWIN-CAM-123.jpg",
        "name": "SR 13 / US 23 : S BERKELEY LAKE RD"
    }, {
        "id": "cctv_5072",
        "stream": "/georgiavss3/gdot-cam-335.stream/playlist.m3u8",
        "name": "I-20 : MLK JR DR"
    }, {
        "id": "cctv_6297",
        "stream": "/georgiavss1/atl-cam-013.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : E/W Paces Ferry Rd"
    }, {
        "id": "cctv_32579",
        "url": "/georgiasnapshots/DUN-CAM-103.jpg",
        "name": "Ashford Dunwoody Rd : Meadow Lane"
    }, {
        "id": "cctv_5031",
        "stream": "/georgiavss2/gdot-cam-264.stream/playlist.m3u8",
        "name": "I-285 : COLUMBIA DR"
    }, {
        "id": "cctv_5147",
        "stream": "/georgiavss3/gdot-cam-420.stream/playlist.m3u8",
        "name": "I-75 : CANTON RD-SR5 WB EXIT"
    }, {
        "id": "cctv_10286",
        "url": "/georgiasnapshots/GWIN-CAM-112.jpg",
        "name": "SATELLITE BLVD : SR 120"
    }, {
        "id": "cctv_46401",
        "stream": "/georgiavss1/atl-cam-090.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Whitehall St"
    }, {
        "id": "cctv_10431",
        "url": "/georgiasnapshots/CLAY-CAM-009.jpg",
        "name": "SR 139 : Flat Shoals Rd"
    }, {
        "id": "cctv_9143",
        "stream": "/georgiavss1/cham-cam-011.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : N Shallowford Rd"
    }, {
        "id": "cctv_10369",
        "url": "/georgiasnapshots/GWIN-CAM-195.jpg",
        "name": "SR 324 (Gravel Springs Rd) : Mall of Georgia Blvd"
    }, {
        "id": "cctv_15405",
        "stream": "/georgiavss2/gdot-cam-310.stream/playlist.m3u8",
        "name": "I-20 : East of Lee Road Exit"
    }, {
        "id": "cctv_5197",
        "stream": "/georgiavss3/gdot-cam-506.stream/playlist.m3u8",
        "name": "I-575 : CHASTAIN RD"
    }, {
        "id": "cctv_10438",
        "url": "/georgiasnapshots/CLAY-CAM-022.jpg",
        "name": "SR 3 / Old Dixie Rd : Morrow Rd"
    }, {
        "id": "cctv_5132",
        "stream": "/georgiavss3/gdot-cam-407.stream/playlist.m3u8",
        "name": "I-75 : SOUTH 120 LOOP"
    }, {
        "id": "cctv_10360",
        "url": "/georgiasnapshots/GWIN-CAM-186.jpg",
        "name": "WEST PARK PLACE BLVD : ROCKBRIDGE RD (S)"
    }, {
        "id": "cctv_13575",
        "url": "/georgiasnapshots/DEK-CAM-302.jpg",
        "name": "SR 155 / Clairmont Rd : Southern Ln"
    }, {
        "id": "cctv_16256",
        "url": "/georgiasnapshots/ATL-CAM-987.jpg",
        "name": "Edgewood Ave : Piedmont Ave"
    }, {
        "id": "cctv_6260",
        "url": "/georgiasnapshots/ROSWELL-CAM-126.jpg",
        "name": "SR 140 : Old Alabama Rd"
    }, {
        "id": "cctv_15599",
        "stream": "/georgiavss4/gdot-cam-626.stream/playlist.m3u8",
        "name": "I-285 : I-75 EXP RAMPS ON/OFF"
    }, {
        "id": "cctv_13298",
        "url": "/georgiasnapshots/GWIN-CAM-280.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Patterson Rd"
    }, {
        "id": "cctv_10166",
        "stream": "/georgiavss2/gdot-cam-142.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : ARMOUR DR / MI 1.8"
    }, {
        "id": "cctv_8827",
        "stream": "/georgiavss1/atl-cam-034.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Mathieson Dr"
    }, {
        "id": "cctv_10338",
        "url": "/georgiasnapshots/GWIN-CAM-164.jpg",
        "name": "SR 124 : HIGHPOINT RD"
    }, {
        "id": "cctv_13756",
        "url": "/georgiasnapshots/SMYR-CAM-005.jpg",
        "name": "SR 280/S Cobb Dr : Wisteria Ln/McCauley Rd"
    }, {
        "id": "cctv_10272",
        "url": "/georgiasnapshots/GWIN-CAM-098.jpg",
        "name": "SR 120 : LAWRENCEVILLE MARKET"
    }, {
        "id": "cctv_10145",
        "url": "/georgiasnapshots/COBB-CAM-346.jpg",
        "name": "SR 3/Cobb Pkwy : White Circle/Progressive Way"
    }, {
        "id": "cctv_5033",
        "stream": "/georgiavss2/gdot-cam-266.stream/playlist.m3u8",
        "name": "I-285 : E OF PANTHERSVILLE RD"
    }, {
        "id": "cctv_5061",
        "stream": "/georgiavss3/gdot-cam-325.stream/playlist.m3u8",
        "name": "I-20 : 285 SB EXIT"
    }, {
        "id": "cctv_5007",
        "stream": "/georgiavss2/gdot-cam-024.stream/playlist.m3u8",
        "name": "I-75 : NORTHSIDE DR"
    }, {
        "id": "cctv_9173",
        "url": "/georgiasnapshots/COBB-CAM-072.jpg%20",
        "name": "Floyd Rd : White Blvd"
    }, {
        "id": "cctv_9076",
        "url": "/georgiasnapshots/ALPH-CAM-011.jpg",
        "name": "Windward Pkwy : Deerfield / Westside Pkwy"
    }, {
        "id": "cctv_16303",
        "url": "/georgiasnapshots/COBB-CAM-099.jpg",
        "name": "Terrell Mill Rd : I-75 Express Lanes"
    }, {
        "id": "cctv_13602",
        "stream": "/georgiavss1/atl-cam-276.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : W Lake Ave"
    }, {
        "id": "cctv_5200",
        "stream": "/georgiavss3/gdot-cam-509.stream/playlist.m3u8",
        "name": "I-575 : BELLS FERRY RD"
    }, {
        "id": "cctv_4925",
        "stream": "/georgiavss2/gdot-cam-107.stream/playlist.m3u8",
        "name": "I-85 : N OF BEAVER RUIN"
    }, {
        "id": "cctv_5585",
        "stream": "/georgiavss4/gdot-cam-648.stream/playlist.m3u8",
        "name": "I-285 : AT RAMP FROM RIVERDALE RD"
    }, {
        "id": "cctv_15298",
        "stream": "/georgiavss1/atl-cam-927.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Centennial Olympic Park Dr"
    }, {
        "id": "cctv_16325",
        "url": "/georgiasnapshots/COBB-CAM-350.jpg",
        "name": "Chastain Rd : Busbee Dr"
    }, {
        "id": "cctv_10474",
        "url": "/georgiasnapshots/CLAY-CAM-116.jpg",
        "name": "STAGECOACH RD : REX RD"
    }, {
        "id": "cctv_9155",
        "stream": "/georgiavss1/dek-cam-006.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Clairmont Ave"
    }, {
        "id": "cctv_13267",
        "url": "/georgiasnapshots/GWIN-CAM-282.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Shannon Way / Huff Dr"
    }, {
        "id": "cctv_15417",
        "stream": "/georgiavss2/gdot-cam-312.stream/playlist.m3u8",
        "name": "I-20 : West of CMS-55"
    }, {
        "id": "cctv_13262",
        "stream": "/georgiavss4/gdot-cam-732.stream/playlist.m3u8",
        "name": "I-75 : I-675 INTERNAL RAMPS"
    }, {
        "id": "cctv_10455",
        "url": "/georgiasnapshots/CLAY-CAM-049.jpg",
        "name": "SR 54 / Jonesboro Rd : Mt Zion Rd"
    }, {
        "id": "cctv_16364",
        "url": "/georgiasnapshots/FORS-CAM-017.jpg",
        "name": "SR 400 NB : Bald Ridge Marina"
    }, {
        "id": "cctv_13242",
        "stream": "/georgiavss4/gdot-cam-731.stream/playlist.m3u8",
        "name": "I-75 : AT I-675 SPLIT"
    }, {
        "id": "cctv_6308",
        "stream": "/georgiavss1/cher-cam-010.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Trickum Rd"
    }, {
        "id": "cctv_13133",
        "url": "/georgiasnapshots/ROSWELL-CAM-106.jpg",
        "name": "SR 140 : Steeple Chase Dr East"
    }, {
        "id": "cctv_12971",
        "stream": "/georgiavss4/gdot-cam-810.stream/playlist.m3u8",
        "name": "GA 400 : LENOX MALL PED BRIDGE"
    }, {
        "id": "cctv_10491",
        "url": "/georgiasnapshots/CLAY-CAM-163.jpg",
        "name": "SR 138 : FIELDER RD"
    }, {
        "id": "cctv_15482",
        "stream": "/georgiavss3/gdot-cam-564.stream/playlist.m3u8",
        "name": "I-575 : 1 MI S OF SIXES RD"
    }, {
        "id": "cctv_5170",
        "stream": "/georgiavss3/gdot-cam-441.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD ENT"
    }, {
        "id": "cctv_15346",
        "url": "/georgiasnapshots/CHER-CAM-035.jpg",
        "name": "SR 92 : Woodstock Rd"
    }, {
        "id": "cctv_15596",
        "stream": "/georgiavss3/gdot-cam-455.stream/playlist.m3u8",
        "name": "I-75 : S OF CHAT RIVER"
    }, {
        "id": "cctv_6258",
        "url": "/georgiasnapshots/ROSWELL-CAM-134.jpg",
        "name": "SR 140 : Dogwood Rd"
    }, {
        "id": "cctv_16089",
        "url": "/georgiasnapshots/ATL-CAM-971.jpg",
        "name": "SR 8 (North Ave) : Peachtree St"
    }, {
        "id": "cctv_7355",
        "url": "/georgiasnapshots/COBB-CAM-065.jpg",
        "name": "EW Connector : Austell Rd"
    }, {
        "id": "cctv_10525",
        "url": "/georgiasnapshots/CLAY-CAM-C609.jpg",
        "name": "SR 3 / Tara Blvd : Near Cardinal Rd"
    }, {
        "id": "cctv_15490",
        "stream": "/georgiavss3/gdot-cam-520.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }, {
        "id": "cctv_10359",
        "url": "/georgiasnapshots/GWIN-CAM-185.jpg",
        "name": "WEST PARK PLACE BLVD : BERMUDA RD"
    }, {
        "id": "cctv_10335",
        "url": "/georgiasnapshots/GWIN-CAM-161.jpg",
        "name": "SR 124 : SR 264 / BETHANY CHURCH RD"
    }, {
        "id": "cctv_10399",
        "url": "/georgiasnapshots/GWIN-CAM-240.jpg",
        "name": "SUWANEE DAM RD : JOHNSON RD"
    }, {
        "id": "cctv_5710",
        "stream": "/georgiavss2/gdot-cam-251.stream/playlist.m3u8",
        "name": "I-285 : N OF MEMORIAL DR"
    }, {
        "id": "cctv_15994",
        "url": "/georgiasnapshots/GDOT-CAM-801.jpg",
        "name": "I-85 : N OF SPOUT SPRINGS"
    }, {
        "id": "cctv_10212",
        "url": "/georgiasnapshots/GWIN-CAM-038.jpg",
        "name": "SR 20 : Russell Rd / Ridge Rd"
    }, {
        "id": "cctv_15964",
        "url": "/georgiasnapshots/GDOT-CAM-159.jpg",
        "name": "I-85 : S OF I-985"
    }, {
        "id": "cctv_5264",
        "stream": "/georgiavss4/gdot-cam-665.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 6"
    }, {
        "id": "cctv_5040",
        "stream": "/georgiavss2/gdot-cam-272.stream/playlist.m3u8",
        "name": "I-285 : E OF I-675"
    }, {
        "id": "cctv_9165",
        "url": "/georgiasnapshots/COBB-CAM-001.jpg",
        "name": "SR 5/Austell Rd : Anderson Mill Rd"
    }, {
        "id": "cctv_5426",
        "stream": "/georgiavss2/gdot-cam-129.stream/playlist.m3u8",
        "name": "I-85 : SR 120"
    }, {
        "id": "cctv_5230",
        "stream": "/georgiavss3/gdot-cam-580.stream/playlist.m3u8",
        "name": "I-285 : PTREE INDUS RAMP METER"
    }, {
        "id": "cctv_6804",
        "stream": "/georgiavss4/gdot-cam-703.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 54"
    }, {
        "id": "cctv_9190",
        "stream": "/georgiavss1/atl-cam-070.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : Ralph McGill"
    }, {
        "id": "cctv_13106",
        "url": "/georgiasnapshots/GWIN-CAM-273.jpg",
        "name": "SR 20 : Hurricane Shoals Road"
    }, {
        "id": "cctv_5307",
        "stream": "/georgiavss4/gdot-cam-781.stream/playlist.m3u8",
        "name": "US 78 : BROCKETT RD"
    }, {
        "id": "cctv_5371",
        "stream": "/georgiavss4/gdot-cam-935.stream/playlist.m3u8",
        "name": "I-285 : CAMP CREEK PKWY EXIT"
    }, {
        "id": "cctv_10245",
        "url": "/georgiasnapshots/GWIN-CAM-071.jpg",
        "name": "SR 20 : SR 120 / PIKE ST"
    }, {
        "id": "cctv_7201",
        "stream": "/georgiavss1/atl-cam-218.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Clifton Rd"
    }, {
        "id": "cctv_6864",
        "url": "/georgiasnapshots/COBB-CAM-218.jpg",
        "name": "SR 92 : Sandy Plains Rd"
    }, {
        "id": "cctv_10398",
        "url": "/georgiasnapshots/GWIN-CAM-239.jpg",
        "name": "SUWANEE DAM RD : WHITEHEAD RD"
    }, {
        "id": "cctv_46326",
        "stream": "/georgiavss2/gdot-cam-145.stream/playlist.m3u8",
        "name": "I-85 : CLAIRMONT RD"
    }, {
        "id": "cctv_10403",
        "url": "/georgiasnapshots/GWIN-CAM-244.jpg",
        "name": "SR 120 : I-85 NB / NEWPOINT PKWY"
    }, {
        "id": "cctv_13271",
        "stream": "/georgiavss1/atl-cam-275.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Hollywood Rd"
    }, {
        "id": "cctv_10423",
        "url": "/georgiasnapshots/GCDOT-IVDS-587-PH4.jpg",
        "name": "SR 13 / US 23 : GLOBAL FORUM BLVD"
    }, {
        "id": "cctv_9294",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-026.jpg",
        "name": "I-20 : LIBERTY RD"
    }, {
        "id": "cctv_5363",
        "stream": "/georgiavss2/gdot-cam-091.stream/playlist.m3u8",
        "name": "I-75 : MOORES MILL RD"
    }, {
        "id": "cctv_7313",
        "url": "/georgiasnapshots/COBB-CAM-053.jpg",
        "name": "SR 3/Cobb Pkwy : Spring Rd"
    }, {
        "id": "cctv_13222",
        "stream": "/georgiavss1/dek-cam-150.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Carter Rd"
    }, {
        "id": "cctv_5111",
        "stream": "/georgiavss3/gdot-cam-370.stream/playlist.m3u8",
        "name": "I-20 : CANDLER RD"
    }, {
        "id": "cctv_12969",
        "stream": "/georgiavss4/gdot-cam-818.stream/playlist.m3u8",
        "name": "GA 400 : N OF WIEUCA RD"
    }, {
        "id": "cctv_13127",
        "url": "/georgiasnapshots/ROSWELL-CAM-424.jpg",
        "name": "SR 120 : Coleman Rd"
    }, {
        "id": "cctv_10417",
        "url": "/georgiasnapshots/GCDOT-IVDS-280.jpg",
        "name": "SR 378 : ARC WAY"
    }, {
        "id": "cctv_5296",
        "stream": "/georgiavss2/gdot-cam-074.stream/playlist.m3u8",
        "name": "I-85 : N OF VIRGINIA AVE"
    }, {
        "id": "cctv_15985",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-077.jpg",
        "name": "I-20 : SIGMAN RD"
    }, {
        "id": "cctv_5303",
        "stream": "/georgiavss4/gdot-cam-778.stream/playlist.m3u8",
        "name": "US 78 : E OF N DRUID HILLS RD"
    }, {
        "id": "cctv_7306",
        "url": "/georgiasnapshots/COBB-CAM-032.jpg",
        "name": "Windy Hill Rd : I-75 NB Ramp"
    }, {
        "id": "cctv_10257",
        "url": "/georgiasnapshots/GWIN-CAM-083.jpg",
        "name": "OLD NORCROSS RD : LAWRENCEVILLE-SUWANEE RD"
    }, {
        "id": "cctv_15245",
        "url": "/georgiasnapshots/CHAM-CAM-150.jpg",
        "name": "SR 155 / Clairmont Rd : New Peachtree Rd"
    }, {
        "id": "cctv_15302",
        "url": "/georgiasnapshots/ATL-CAM-932.jpg",
        "name": "Centennial Olympic Park Dr : CNN Parking Deck"
    }, {
        "id": "cctv_7193",
        "stream": "/georgiavss1/atl-cam-204.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Durant Pl"
    }, {
        "id": "cctv_15523",
        "stream": "/georgiavss4/gdot-cam-693.stream/playlist.m3u8",
        "name": "BIG SHANTY RD : W OF I-75 EXP LANE RAMPS"
    }, {
        "id": "cctv_10303",
        "url": "/georgiasnapshots/GWIN-CAM-129.jpg",
        "name": "SUGARLOAF PKWY : PEACHTREE INDUSTRIAL BLVD"
    }, {
        "id": "cctv_4922",
        "stream": "/georgiavss2/gdot-cam-104.stream/playlist.m3u8",
        "name": "I-85 : INDIAN TRAIL"
    }, {
        "id": "cctv_10485",
        "url": "/georgiasnapshots/CLAY-CAM-141.jpg",
        "name": "SR 54 / Jonesboro Rd : Citizens Pkwy"
    }, {
        "id": "cctv_15382",
        "url": "/georgiasnapshots/ATL-CAM-955.jpg",
        "name": "Luckie St : Baker St"
    }, {
        "id": "cctv_13674",
        "stream": "/georgiavss1/atl-cam-217.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Lullwater Rd"
    }, {
        "id": "cctv_5189",
        "stream": "/georgiavss2/gdot-cam-005.stream/playlist.m3u8",
        "name": "75/85 : UNIVERSITY AVE"
    }, {
        "id": "cctv_13333",
        "stream": "/georgiavss4/gdot-cam-764.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }, {
        "id": "cctv_13153",
        "url": "/georgiasnapshots/ROSWELL-CAM-408.jpg",
        "name": "Old Roswell : Commerce Pkwy"
    }, {
        "id": "cctv_5187",
        "stream": "/georgiavss2/gdot-cam-048.stream/playlist.m3u8",
        "name": "SR 166 : I-285"
    }, {
        "id": "cctv_5391",
        "stream": "/georgiavss4/gdot-cam-954.stream/playlist.m3u8",
        "name": "I-285 : S OF BOLTON RD"
    }, {
        "id": "cctv_46295",
        "url": "/georgiasnapshots/GWIN-CAM-231.jpg",
        "name": "US 78 : BRAND RD - OLD LOGANVILLE RD"
    }, {
        "id": "cctv_7224",
        "stream": "/georgiavss1/atl-cam-018.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Tower Place"
    }, {
        "id": "cctv_10532",
        "url": "/georgiasnapshots/CLAY-CAM-027.jpg",
        "name": "SR 3 TB : MT ZION RD"
    }, {
        "id": "cctv_6265",
        "url": "/georgiasnapshots/ROSWELL-CAM-110.jpg",
        "name": "SR 140 : Champions Green Pkwy"
    }, {
        "id": "cctv_13103",
        "url": "/georgiasnapshots/GWIN-CAM-275.jpg",
        "name": "SR 20 : Tech Center Pkwy"
    }, {
        "id": "cctv_5024",
        "stream": "/georgiavss2/gdot-cam-258.stream/playlist.m3u8",
        "name": "I-285 : N OF GLENWOOD RD"
    }, {
        "id": "cctv_15307",
        "stream": "/georgiavss1/atl-cam-936.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Andrew Young Intl Blvd (North)"
    }, {
        "id": "cctv_13119",
        "url": "/georgiasnapshots/COBB-CAM-169.jpg",
        "name": "SR 120 / Roswell Rd : Heritage Glen"
    }, {
        "id": "cctv_5403",
        "stream": "/georgiavss4/gdot-cam-965.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO ATLANTA RD"
    }, {
        "id": "cctv_46316",
        "url": "/georgiasnapshots/GC-CAM-266.jpg",
        "name": "OLD PEACHTREE RD : I-85 NB RAMP"
    }, {
        "id": "cctv_15181",
        "url": "/georgiasnapshots/MAR-CAM-112.jpg",
        "name": "SR 3/Cobb Pkwy : Terrell Mill Rd"
    }, {
        "id": "cctv_10228",
        "url": "/georgiasnapshots/GWIN-CAM-054.jpg",
        "name": "SR 124 : STRATFORD DR"
    }, {
        "id": "cctv_13146",
        "url": "/georgiasnapshots/ROSWELL-CAM-206.jpg",
        "name": "SR 92 : Grace Hill Dr"
    }, {
        "id": "cctv_10505",
        "url": "/georgiasnapshots/CLAY-CAM-214.jpg",
        "name": "SR 54 : CONLEY RD"
    }, {
        "id": "cctv_13655",
        "url": "/georgiasnapshots/COBB-CAM-124.jpg",
        "name": "Cumberland Blvd : Interstate North Pkwy"
    }, {
        "id": "cctv_5062",
        "stream": "/georgiavss3/gdot-cam-326.stream/playlist.m3u8",
        "name": "I-20 : 285 NB EXIT"
    }, {
        "id": "cctv_6853",
        "url": "/georgiasnapshots/ROSWELL-CAM-104.jpg",
        "name": "SR 140 : Holcomb Center"
    }, {
        "id": "cctv_10379",
        "url": "/georgiasnapshots/GWIN-CAM-205.jpg",
        "name": "DACULA RD : LIAM DR / HEBRON SCHOOL"
    }, {
        "id": "cctv_46426",
        "url": "/georgiasnapshots/FULT-CAM-008.jpg",
        "name": "SR 166/ E Woodberry Ave : Stanton Rd"
    }, {
        "id": "cctv_13566",
        "stream": "/georgiavss1/dek-cam-308.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : HF Shepherd Dr / Rainbow Way"
    }, {
        "id": "cctv_5126",
        "stream": "/georgiavss3/gdot-cam-401.stream/playlist.m3u8",
        "name": "I-75 : I-285 WB EXIT"
    }, {
        "id": "cctv_13364",
        "stream": "/georgiavss4/gdot-cam-737.stream/playlist.m3u8",
        "name": "I-75 : 1 MI N OF HUDSON BR RD"
    }, {
        "id": "cctv_10316",
        "url": "/georgiasnapshots/GWIN-CAM-142.jpg",
        "name": "SUGARLOAF PKWY : GWINNETT FAIRGROUNDS"
    }, {
        "id": "cctv_5151",
        "stream": "/georgiavss3/gdot-cam-424.stream/playlist.m3u8",
        "name": "I-75 : I-575"
    }, {
        "id": "cctv_10277",
        "url": "/georgiasnapshots/GWIN-CAM-103.jpg",
        "name": "SR 10 : Ross Rd"
    }, {
        "id": "cctv_5244",
        "stream": "/georgiavss2/gdot-cam-060.stream/playlist.m3u8",
        "name": "SR 166 : US 19"
    }, {
        "id": "cctv_32530",
        "stream": "/georgiavss4/gdot-cam-971.stream/playlist.m3u8",
        "name": "I-285 : South of Paces Ferry Exit"
    }, {
        "id": "cctv_6314",
        "stream": "/georgiavss1/cojc-cam-230.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Parsons Rd"
    }, {
        "id": "cctv_15270",
        "url": "/georgiasnapshots/ATL-CAM-909.jpg",
        "name": "SR 8 (North Ave) : Piedmont Ave"
    }, {
        "id": "cctv_15177",
        "url": "/georgiasnapshots/MAR-CAM-108.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120/S Marietta Pkwy"
    }, {
        "id": "cctv_4986",
        "stream": "/georgiavss2/gdot-cam-220.stream/playlist.m3u8",
        "name": "I-285 : E OF ASHFD-DNWDY"
    }, {
        "id": "cctv_10492",
        "url": "/georgiasnapshots/CLAY-CAM-174.jpg",
        "name": "SR 54 : KENYON RD"
    }, {
        "id": "cctv_32668",
        "url": "/georgiasnapshots/DUN-CAM-153.jpg",
        "name": "Chamblee Dunwoody Rd : Ash-Cntr Pky/Womack Rd"
    }, {
        "id": "cctv_15171",
        "url": "/georgiasnapshots/MAR-CAM-102.jpg",
        "name": "SR 3/Cobb Pkwy : Canton Conn looking NW"
    }, {
        "id": "cctv_15436",
        "stream": "/georgiavss3/gdot-cam-563.stream/playlist.m3u8",
        "name": "I-575 : RIDGEWALK PKY EXIT"
    }, {
        "id": "cctv_5026",
        "stream": "/georgiavss2/gdot-cam-026.stream/playlist.m3u8",
        "name": "I-75 : NEAR PEACHTREE BATTLE"
    }, {
        "id": "cctv_10264",
        "url": "/georgiasnapshots/GWIN-CAM-090.jpg",
        "name": "OLD NORCROSS RD : BOGGS RD"
    }, {
        "id": "cctv_46274",
        "url": "/georgiasnapshots/GWIN-CAM-211.jpg",
        "name": "PLEASANT HILL RD : SUMMIT RIDGE PKWY"
    }, {
        "id": "cctv_5071",
        "stream": "/georgiavss3/gdot-cam-334.stream/playlist.m3u8",
        "name": "I-20 : W OF MLK JR DR"
    }, {
        "id": "cctv_13213",
        "stream": "/georgiavss1/dek-cam-225.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Hawk#10"
    }, {
        "id": "cctv_46429",
        "url": "/georgiasnapshots/FULT-CAM-011.jpg",
        "name": "SR 14/ US 29/ N. Main : Harold Sheets Conn"
    }, {
        "id": "cctv_5273",
        "stream": "/georgiavss2/gdot-cam-070.stream/playlist.m3u8",
        "name": "I-75 : S OF 285 (SOUTH SIDE)"
    }, {
        "id": "cctv_13198",
        "url": "/georgiasnapshots/DOUG-CAM-080.jpg",
        "name": "SR 6 / Thornton Rd : Riverside Pkwy"
    }, {
        "id": "cctv_32967",
        "url": "/georgiasnapshots/COJC-CAM-050.jpg",
        "name": "Haynes Bridge Road : Kroger"
    }, {
        "id": "cctv_46453",
        "url": "/georgiasnapshots/FULT-CAM-031.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Derrick Rd"
    }, {
        "id": "cctv_15960",
        "stream": "/georgiavss2/gdot-cam-160.stream/playlist.m3u8",
        "name": "I-85 : I-985 ENTRANCE"
    }, {
        "id": "cctv_5336",
        "stream": "/georgiavss4/gdot-cam-832.stream/playlist.m3u8",
        "name": "GA 400 : NORTHRIDGE RD"
    }, {
        "id": "cctv_7326",
        "url": "/georgiasnapshots/COBB-CAM-092.jpg",
        "name": "Terrell Mill Rd : Lower Roswell Rd"
    }, {
        "id": "cctv_46443",
        "url": "/georgiasnapshots/FULT-CAM-020.jpg",
        "name": "GA 279/ Old National Hwy : Woodward Rd"
    }, {
        "id": "cctv_4941",
        "stream": "/georgiavss2/gdot-cam-018.stream/playlist.m3u8",
        "name": "75/85 : S OF 10TH ST"
    }, {
        "id": "cctv_10196",
        "url": "/georgiasnapshots/GWIN-CAM-018.jpg",
        "name": "SR 10 : Joe Hewatt Rd"
    }, {
        "id": "cctv_12970",
        "stream": "/georgiavss4/gdot-cam-815.stream/playlist.m3u8",
        "name": "GA 400 : S OF LENOX RD/SR 141 CONN"
    }, {
        "id": "cctv_10324",
        "url": "/georgiasnapshots/GWIN-CAM-150.jpg",
        "name": "PLEASANT HILL RD : CORLEY PL"
    }, {
        "id": "cctv_5068",
        "stream": "/georgiavss3/gdot-cam-331.stream/playlist.m3u8",
        "name": "I-20 : HOLMES DRIVE"
    }, {
        "id": "cctv_13307",
        "stream": "/georgiavss1/dek-cam-037.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Young Rd / Hidden Creek Dr"
    }, {
        "id": "cctv_13357",
        "url": "/georgiasnapshots/ROCK-CAM-120.jpg",
        "name": "SR 138 / Walnut Grove Rd : SR 20 / Sigman Rd"
    }, {
        "id": "cctv_13197",
        "url": "/georgiasnapshots/COBB-CAM-261.jpg",
        "name": "SR 6 : Brownsville Rd"
    }, {
        "id": "cctv_16095",
        "stream": "/georgiavss1/atl-cam-422.stream/playlist.m3u8",
        "name": "SR 154 / Memorial Dr : Hill St"
    }, {
        "id": "cctv_4954",
        "stream": "/georgiavss2/gdot-cam-191.stream/playlist.m3u8",
        "name": "I-85 : I-285 EXIT"
    }, {
        "id": "cctv_15473",
        "stream": "/georgiavss3/gdot-cam-498.stream/playlist.m3u8",
        "name": "SR 3/ROSWELL RD : E OF I-75 EXP ON/OFF"
    }, {
        "id": "cctv_7336",
        "url": "/georgiasnapshots/COBB-CAM-213.jpg",
        "name": "Sandy Plains Rd : Shallowford Rd"
    }, {
        "id": "cctv_10440",
        "url": "/georgiasnapshots/CLAY-CAM-024.jpg",
        "name": "SR 3 / Tara Blvd : Battle Creek Rd"
    }, {
        "id": "cctv_5348",
        "stream": "/georgiavss4/gdot-cam-845.stream/playlist.m3u8",
        "name": "GA 400 : N OF WEBB BR RD"
    }, {
        "id": "cctv_13650",
        "url": "/georgiasnapshots/COBB-CAM-035.jpg",
        "name": "Windy Hill Rd : I-75 SB Ramp"
    }, {
        "id": "cctv_5429",
        "stream": "/georgiavss2/gdot-cam-132.stream/playlist.m3u8",
        "name": "I-85 : N OF SUGARLOAF PKWY"
    }, {
        "id": "cctv_46460",
        "url": "/georgiasnapshots/GDOT-CAM-601.jpg",
        "name": "75/85 : N OF 5th ST"
    }, {
        "id": "cctv_15275",
        "stream": "/georgiavss1/atl-cam-913.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Williams St"
    }, {
        "id": "cctv_5207",
        "stream": "/georgiavss3/gdot-cam-515.stream/playlist.m3u8",
        "name": "I-575 : HWY 92"
    }, {
        "id": "cctv_9170",
        "url": "/georgiasnapshots/COBB-CAM-066.jpg",
        "name": "EW Connector : Cooper Lake Rd"
    }, {
        "id": "cctv_5323",
        "stream": "/georgiavss4/gdot-cam-796.stream/playlist.m3u8",
        "name": "US 78 : W PARK PL BLVD"
    }, {
        "id": "cctv_10250",
        "url": "/georgiasnapshots/GWIN-CAM-076.jpg",
        "name": "SR 378 : SATELLITE BLVD"
    }, {
        "id": "cctv_10175",
        "stream": "/georgiavss1/fay-cam-104.stream/playlist.m3u8",
        "name": "SR 85 : Fun Spot America Park"
    }, {
        "id": "cctv_9038",
        "url": "/georgiasnapshots/ROSWELL-CAM-324.jpg",
        "name": "SR 9 : Hembree Rd"
    }, {
        "id": "cctv_9057",
        "stream": "/georgiavss1/atl-cam-044.stream/playlist.m3u8",
        "name": "W Paces Ferry Rd : I-75 SB Ramp"
    }, {
        "id": "cctv_5015",
        "stream": "/georgiavss2/gdot-cam-247.stream/playlist.m3u8",
        "name": "I-285 : S OF STN MT FWY / US 78"
    }, {
        "id": "cctv_16083",
        "stream": "/georgiavss1/doug-cam-092.stream/playlist.m3u8",
        "name": "SR 6 : Westfork Dr"
    }, {
        "id": "cctv_15529",
        "stream": "/georgiavss3/gdot-cam-491.stream/playlist.m3u8",
        "name": "I-75 : SR 5/CANTON RD EXIT"
    }, {
        "id": "cctv_16204",
        "url": "/georgiasnapshots/ATL-CAM-980.jpg",
        "name": "Marietta St : Fairlie St"
    }, {
        "id": "cctv_10283",
        "url": "/georgiasnapshots/GWIN-CAM-109.jpg",
        "name": "SATELLITE BLVD : OFFICE PARK D/W #1"
    }, {
        "id": "cctv_10304",
        "url": "/georgiasnapshots/GWIN-CAM-130.jpg",
        "name": "SUGARLOAF PKWY : OLD PEACHTREE RD"
    }, {
        "id": "cctv_10223",
        "url": "/georgiasnapshots/GWIN-CAM-049.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Fork Creek Pkwy / Gloster Rd"
    }, {
        "id": "cctv_13740",
        "url": "/georgiasnapshots/COBB-CAM-327.jpg",
        "name": "Atlanta Rd : West Atlanta St"
    }, {
        "id": "cctv_5106",
        "stream": "/georgiavss3/gdot-cam-366.stream/playlist.m3u8",
        "name": "I-20 : FLAT SHOALS"
    }, {
        "id": "cctv_46506",
        "stream": "/georgiavss1/atl-cam-092.stream/playlist.m3u8",
        "name": "SR 3/Northside Dr : I-75 NB Ramp"
    }, {
        "id": "cctv_4974",
        "stream": "/georgiavss2/gdot-cam-021.stream/playlist.m3u8",
        "name": "I-75 : BROOKWOOD INTRCHGE"
    }, {
        "id": "cctv_7203",
        "stream": "/georgiavss1/cojc-cam-099.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Johns Creek Pkwy S"
    }, {
        "id": "cctv_5943",
        "stream": "/georgiavss4/gdot-cam-725.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BR RAMP METER"
    }, {
        "id": "cctv_13582",
        "stream": "/georgiavss1/dek-cam-227.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Jesse Norman Way"
    }, {
        "id": "cctv_16317",
        "url": "/georgiasnapshots/COBB-CAM-304.jpg",
        "name": "Barrett Lakes Blvd : Big Shanty Rd"
    }, {
        "id": "cctv_13252",
        "stream": "/georgiavss1/dek-cam-036.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : S Hairston Rd"
    }, {
        "id": "cctv_12941",
        "url": "/georgiasnapshots/DOUG-CAM-002.jpg",
        "name": "Chapel Hill Rd : Stewart Mill Rd"
    }, {
        "id": "cctv_7344",
        "url": "/georgiasnapshots/COBB-CAM-302.jpg",
        "name": "Johnson Ferry Rd : Paper Mill Rd"
    }, {
        "id": "cctv_4994",
        "stream": "/georgiavss2/gdot-cam-228.stream/playlist.m3u8",
        "name": "I-285 : PEACHTREE INDUS"
    }, {
        "id": "cctv_15295",
        "url": "/georgiasnapshots/ATL-CAM-925.jpg",
        "name": "Marietta St : Andrew Young Intl Blvd"
    }, {
        "id": "cctv_5265",
        "stream": "/georgiavss4/gdot-cam-666.stream/playlist.m3u8",
        "name": "I-285 : CD LANES - NO TRAFFIC"
    }, {
        "id": "cctv_13087",
        "url": "/georgiasnapshots/COBB-CAM-121.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd South"
    }, {
        "id": "cctv_5311",
        "stream": "/georgiavss4/gdot-cam-785.stream/playlist.m3u8",
        "name": "US 78 : E OF MTN INDUST BLVD"
    }, {
        "id": "cctv_4962",
        "stream": "/georgiavss2/gdot-cam-199.stream/playlist.m3u8",
        "name": "I-85 : 1/2 MI S OF CAMP CRK"
    }, {
        "id": "cctv_5083",
        "stream": "/georgiavss3/gdot-cam-345.stream/playlist.m3u8",
        "name": "I-20 : MCDANIEL ST"
    }, {
        "id": "cctv_16061",
        "url": "/georgiasnapshots/COBB-CAM-310.jpg",
        "name": "Barrett Pkwy : Bells Ferry Rd"
    }, {
        "id": "cctv_13767",
        "url": "/georgiasnapshots/ATL-CAM-603.jpg",
        "name": "Monroe Dr : Armour Dr"
    }, {
        "id": "cctv_5056",
        "stream": "/georgiavss2/gdot-cam-300.stream/playlist.m3u8",
        "name": "I-20 : WINDSOR ST RAMP METER"
    }, {
        "id": "cctv_5356",
        "stream": "/georgiavss4/gdot-cam-852.stream/playlist.m3u8",
        "name": "GA 400 : S OF MCFARLAND RD"
    }, {
        "id": "cctv_13750",
        "url": "/georgiasnapshots/DEK-CAM-617.jpg",
        "name": "SR 42 / Briarcliff Rd : SR 236 / LaVista Rd"
    }, {
        "id": "cctv_10518",
        "url": "/georgiasnapshots/CLAY-CAM-C602.jpg",
        "name": "SR 331 Forest Parkway : West St (camera)"
    }, {
        "id": "cctv_5088",
        "stream": "/georgiavss2/gdot-cam-035.stream/playlist.m3u8",
        "name": "I-85 : MARTA OVERPASS"
    }, {
        "id": "cctv_12940",
        "url": "/georgiasnapshots/DOUG-CAM-001.jpg",
        "name": "Chapel Hill Rd : Douglas Blvd"
    }, {
        "id": "cctv_16067",
        "url": "/georgiasnapshots/COBB-CAM-214.jpg",
        "name": "Sandy Plains Rd : Post Oak Tritt Rd"
    }, {
        "id": "cctv_10289",
        "url": "/georgiasnapshots/GWIN-CAM-115.jpg",
        "name": "SATELLITE BLVD : S of WILDWOOD RD"
    }, {
        "id": "cctv_5143",
        "stream": "/georgiavss3/gdot-cam-417.stream/playlist.m3u8",
        "name": "I-75 : N OF ALLGOOD RD"
    }, {
        "id": "cctv_46282",
        "url": "/georgiasnapshots/GWIN-CAM-216.jpg",
        "name": "PLEASANT HILL RD : PEACHTREE HILL S/C"
    }, {
        "id": "cctv_15203",
        "url": "/georgiasnapshots/MAR-CAM-405.jpg",
        "name": "SR 120/Whitlock Ave : Lindley Ave/Kirkpatrick Dr"
    }, {
        "id": "cctv_5219",
        "stream": "/georgiavss2/gdot-cam-056.stream/playlist.m3u8",
        "name": "SR 166 : W OF US 29/MAIN ST"
    }, {
        "id": "cctv_5233",
        "stream": "/georgiavss3/gdot-cam-590.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : S of Scientific Dr"
    }, {
        "id": "cctv_10259",
        "url": "/georgiasnapshots/GWIN-CAM-085.jpg",
        "name": "OLD NORCROSS RD : RIVERSIDE PKWY"
    }, {
        "id": "cctv_16126",
        "url": "/georgiasnapshots/ATL-CAM-977.jpg",
        "name": "Peachtree Center Ave : Andrew Young International Blvd"
    }, {
        "id": "cctv_5002",
        "stream": "/georgiavss2/gdot-cam-235.stream/playlist.m3u8",
        "name": "I-285 : CHAMBLEE-TCKR"
    }, {
        "id": "cctv_9186",
        "url": "/georgiasnapshots/HNRY-CAM-001.jpg",
        "name": "I-75 : SR 155"
    }, {
        "id": "cctv_32533",
        "url": "/georgiasnapshots/CLAY-CAM-211.jpg",
        "name": "SR 331 / Forest Pkwy : Lake Dr"
    }, {
        "id": "cctv_13235",
        "stream": "/georgiavss4/gdot-cam-763.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF SR 155"
    }, {
        "id": "cctv_46304",
        "url": "/georgiasnapshots/GWIN-CAM-254.jpg",
        "name": "SR 316 : HURRICANE TRL"
    }, {
        "id": "cctv_46480",
        "url": "/georgiasnapshots/CHER-CAM-103.jpg",
        "name": "SR 140 : NSide Cherokee Blvd"
    }, {
        "id": "cctv_12981",
        "url": "/georgiasnapshots/GDOT-CAM-149.jpg",
        "name": "SR 316 : E OF SR 20"
    }, {
        "id": "cctv_13671",
        "stream": "/georgiavss1/dek-cam-231.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : McElroy Rd"
    }, {
        "id": "cctv_15331",
        "url": "/georgiasnapshots/ATL-CAM-944.jpg",
        "name": "Martin Luther King Jr Dr : Piedmont Ave / Capitol Ave"
    }, {
        "id": "cctv_5257",
        "stream": "/georgiavss4/gdot-cam-659.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 4"
    }, {
        "id": "cctv_13732",
        "url": "/georgiasnapshots/COBB-CAM-133.jpg",
        "name": "Windy Ridge Pkwy : Heritage Ct"
    }, {
        "id": "cctv_6318",
        "url": "/georgiasnapshots/COJC-CAM-210.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Bobby Jones Dr"
    }, {
        "id": "cctv_15315",
        "url": "/georgiasnapshots/ATL-CAM-942.jpg",
        "name": "Martin Luther King Jr Dr : Central Ave"
    }, {
        "id": "cctv_9177",
        "url": "/georgiasnapshots/COBB-CAM-230.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Austell-Powder Springs Rd"
    }, {
        "id": "cctv_13230",
        "stream": "/georgiavss1/atl-cam-089.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Bellemeade Ave"
    }, {
        "id": "cctv_46454",
        "url": "/georgiasnapshots/FULT-CAM-032.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : GA 92/ Campbellton/ Fairburn Rd"
    }, {
        "id": "cctv_5384",
        "stream": "/georgiavss4/gdot-cam-947.stream/playlist.m3u8",
        "name": "I-285 : MLK JR DR"
    }, {
        "id": "cctv_16233",
        "url": "/georgiasnapshots/COJC-CAM-550.jpg",
        "name": "Old Alabama Rd : Jones Bridge Rd"
    }, {
        "id": "cctv_46313",
        "url": "/georgiasnapshots/GC-CAM-263.jpg",
        "name": "OLD PEACHTREE RD : GALLERIA AT SUGARLOAF"
    }, {
        "id": "cctv_10512",
        "url": "/georgiasnapshots/CLAY-CAM-260.jpg",
        "name": "SR 138 : SPIVEY RD"
    }, {
        "id": "cctv_5054",
        "stream": "/georgiavss2/gdot-cam-003.stream/playlist.m3u8",
        "name": "75/85 : LANGFORD PKWY"
    }, {
        "id": "cctv_10313",
        "url": "/georgiasnapshots/GWIN-CAM-139.jpg",
        "name": "SUGARLOAF PKWY : LAWRENCEVILLE-SUWANEE RD"
    }, {
        "id": "cctv_15990",
        "stream": "/georgiavss2/gdot-cam-176.stream/playlist.m3u8",
        "name": "I-85 : AT HAMILTON MILL"
    }, {
        "id": "cctv_5353",
        "stream": "/georgiavss2/gdot-cam-085.stream/playlist.m3u8",
        "name": "I-85 : N OF PLEASANTDALE RD"
    }, {
        "id": "cctv_15266",
        "stream": "/georgiavss1/dek-cam-309.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : S Rainbow Dr"
    }, {
        "id": "cctv_16243",
        "url": "/georgiasnapshots/COJC-CAM-640.jpg",
        "name": "Jones Bridge Rd : Addison Way"
    }, {
        "id": "cctv_10348",
        "url": "/georgiasnapshots/GWIN-CAM-174.jpg",
        "name": "SR 20 : SIMONTON RD / DAVIS RD"
    }, {
        "id": "cctv_9026",
        "url": "/georgiasnapshots/ROSWELL-CAM-302.jpg",
        "name": "SR 9 : Warm Springs Cir"
    }, {
        "id": "cctv_13112",
        "url": "/georgiasnapshots/GWIN-CAM-288.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Greenwood Dr / Inland Way"
    }, {
        "id": "cctv_10364",
        "url": "/georgiasnapshots/GWIN-CAM-190.jpg",
        "name": "ANNISTOWN RD : ZOAR CHURCH RD / JOHNSON RD"
    }, {
        "id": "cctv_12913",
        "url": "/georgiasnapshots/COBB-CAM-224.jpg",
        "name": "Sandy Plains Rd : Wesley Chapel Rd"
    }, {
        "id": "cctv_6307",
        "stream": "/georgiavss1/cher-cam-016.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Canton Rd / SR 5 Conn"
    }, {
        "id": "cctv_9120",
        "url": "/georgiasnapshots/COBB-CAM-005.jpg",
        "name": "SR 5/Austell Rd : Milford Ch Rd"
    }, {
        "id": "cctv_5389",
        "stream": "/georgiavss4/gdot-cam-952.stream/playlist.m3u8",
        "name": "I-285 : S OF HOLLOWELL PKWY"
    }, {
        "id": "cctv_6831",
        "url": "/georgiasnapshots/ATL-CAM-552.jpg",
        "name": "SR 42 (Moreland Ave) : SR 260 / Glenwood Ave"
    }, {
        "id": "cctv_10218",
        "url": "/georgiasnapshots/GWIN-CAM-044.jpg",
        "name": "SR 20 : Buford Mill Dr / Mill Creek Crossing"
    }, {
        "id": "cctv_5718",
        "stream": "/georgiavss2/gdot-cam-121.stream/playlist.m3u8",
        "name": "I-85 : 1/2 MI N OF PLSNTDLE"
    }, {
        "id": "cctv_9169",
        "url": "/georgiasnapshots/COBB-CAM-064.jpg",
        "name": "EW Connector : Asquith Ave"
    }, {
        "id": "cctv_5239",
        "stream": "/georgiavss3/gdot-cam-596.stream/playlist.m3u8",
        "name": "SR 141 : S OF JONES MILL RD"
    }, {
        "id": "cctv_5422",
        "stream": "/georgiavss2/gdot-cam-125.stream/playlist.m3u8",
        "name": "I-85 : SR 316 EXIT"
    }, {
        "id": "cctv_32580",
        "url": "/georgiasnapshots/DUN-CAM-104.jpg",
        "name": "Ashford Dunwoody Rd : Perimeter Center West"
    }, {
        "id": "cctv_10387",
        "url": "/georgiasnapshots/GWIN-CAM-221.jpg",
        "name": "INDIAN TRAIL LILBURN RD : TECH DR - HILLCREST RD"
    }, {
        "id": "cctv_10452",
        "url": "/georgiasnapshots/CLAY-CAM-045.jpg",
        "name": "SR 54 : Harper Dr / Huie Rd"
    }, {
        "id": "cctv_5315",
        "stream": "/georgiavss4/gdot-cam-789.stream/playlist.m3u8",
        "name": "US 78 : E OF STN MTN BYPASS"
    }, {
        "id": "cctv_16258",
        "url": "/georgiasnapshots/ATL-CAM-988.jpg",
        "name": "Edgewood Ave : Courtland St"
    }, {
        "id": "cctv_5089",
        "stream": "/georgiavss3/gdot-cam-350.stream/playlist.m3u8",
        "name": "I-20 : CAPITOL AVE"
    }, {
        "id": "cctv_7348",
        "url": "/georgiasnapshots/COBB-CAM-322.jpg",
        "name": "SR 3/Cobb Pkwy : Jiles/Pine Mountain Rd"
    }, {
        "id": "cctv_10169",
        "stream": "/georgiavss1/cher-cam-030.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Robin Rd"
    }, {
        "id": "cctv_5000",
        "stream": "/georgiavss2/gdot-cam-233.stream/playlist.m3u8",
        "name": "I-285 : MORELAND INTRCHGE"
    }, {
        "id": "cctv_16251",
        "url": "/georgiasnapshots/COJC-CAM-605.jpg",
        "name": "Jones Bridge Rd : Promenade Shopping Center"
    }, {
        "id": "cctv_7208",
        "stream": "/georgiavss1/atl-cam-004.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Pharr Rd"
    }, {
        "id": "cctv_10367",
        "url": "/georgiasnapshots/GWIN-CAM-193.jpg",
        "name": "SR 10 : SR 84 (Grayson Parkway)"
    }, {
        "id": "cctv_5332",
        "stream": "/georgiavss4/gdot-cam-829.stream/playlist.m3u8",
        "name": "GA 400 : SPALDING DR"
    }, {
        "id": "cctv_4929",
        "stream": "/georgiavss2/gdot-cam-110.stream/playlist.m3u8",
        "name": "I-85 : PLEASANT HILL"
    }, {
        "id": "cctv_5194",
        "stream": "/georgiavss3/gdot-cam-503.stream/playlist.m3u8",
        "name": "I-575 : BARRETT PKWY ENT RAMP"
    }, {
        "id": "cctv_15329",
        "url": "/georgiasnapshots/ATL-CAM-946.jpg",
        "name": "Ted Turner Dr : John Portman Blvd"
    }, {
        "id": "cctv_10331",
        "url": "/georgiasnapshots/GWIN-CAM-157.jpg",
        "name": "SR 124 : NORRIS LAKE RD / SMOKE CREEK PKWY"
    }, {
        "id": "cctv_15557",
        "stream": "/georgiavss1/cham-cam-250.stream/playlist.m3u8",
        "name": "Shallowford Rd : Chamblee-Tucker Rd"
    }, {
        "id": "cctv_5375",
        "stream": "/georgiavss4/gdot-cam-939.stream/playlist.m3u8",
        "name": "I-285 : LANGFORD PKWY"
    }, {
        "id": "cctv_15383",
        "url": "/georgiasnapshots/ATL-CAM-956.jpg",
        "name": "Piedmont Ave : Baker St"
    }, {
        "id": "cctv_5037",
        "stream": "/georgiavss2/gdot-cam-027.stream/playlist.m3u8",
        "name": "I-75 : N OF MOORES MILL RD"
    }, {
        "id": "cctv_5156",
        "stream": "/georgiavss3/gdot-cam-429.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY ENT"
    }, {
        "id": "cctv_5409",
        "stream": "/georgiavss4/gdot-cam-970.stream/playlist.m3u8",
        "name": "I-285 : N OF WILKINSON PKWY"
    }, {
        "id": "cctv_9073",
        "url": "/georgiasnapshots/ALPH-CAM-009.jpg",
        "name": "Windward Pkwy : Windward Concourse"
    }, {
        "id": "cctv_13314",
        "stream": "/georgiavss1/dek-cam-158.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : N Hairston Rd"
    }, {
        "id": "cctv_5139",
        "stream": "/georgiavss3/gdot-cam-413.stream/playlist.m3u8",
        "name": "I-75 : N 120 LOOP"
    }, {
        "id": "cctv_5341",
        "stream": "/georgiavss4/gdot-cam-837.stream/playlist.m3u8",
        "name": "GA 400 : HOLCOMB BR RD"
    }, {
        "id": "cctv_5396",
        "stream": "/georgiavss4/gdot-cam-959.stream/playlist.m3u8",
        "name": "I-285 : 1/2 MI S OF S COBB DR"
    }, {
        "id": "cctv_32594",
        "url": "/georgiasnapshots/COBB-CAM-002.jpg",
        "name": "Austell Rd : Callaway Rd"
    }, {
        "id": "cctv_13306",
        "stream": "/georgiavss1/dek-cam-035.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Bethune Middle School"
    }, {
        "id": "cctv_6859",
        "stream": "/georgiavss1/cher-cam-020.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Parkway 575"
    }, {
        "id": "cctv_7221",
        "stream": "/georgiavss1/atl-cam-008.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Lindbergh Dr NE"
    }, {
        "id": "cctv_5374",
        "stream": "/georgiavss4/gdot-cam-938.stream/playlist.m3u8",
        "name": "I-285 : GREENBRIAR PKWY"
    }, {
        "id": "cctv_32946",
        "url": "/georgiasnapshots/GDOT-SVT2-I-75-237",
        "name": "I-75 : Forest Parkway"
    }, {
        "id": "cctv_10484",
        "url": "/georgiasnapshots/CLAY-CAM-139.jpg",
        "name": "SR 85 : Atlanta South Pkwy"
    }, {
        "id": "cctv_13348",
        "stream": "/georgiavss1/brok-cam-154.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Century Blvd / Clairmont Way"
    }, {
        "id": "cctv_5163",
        "stream": "/georgiavss3/gdot-cam-435.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO CHASTAIN RD"
    }, {
        "id": "cctv_10473",
        "url": "/georgiasnapshots/CLAY-CAM-113.jpg",
        "name": "SR 138 : SR 314"
    }, {
        "id": "cctv_13280",
        "stream": "/georgiavss4/gdot-cam-757.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81 ENTR"
    }, {
        "id": "cctv_13276",
        "stream": "/georgiavss4/gdot-cam-742.stream/playlist.m3u8",
        "name": "I-75 : S OF HUDSON BR"
    }, {
        "id": "cctv_8800",
        "stream": "/georgiavss3/gdot-cam-383.stream/playlist.m3u8",
        "name": "I-20 : NEAR PANOLA RD"
    }, {
        "id": "cctv_5411",
        "stream": "/georgiavss2/gdot-cam-098.stream/playlist.m3u8",
        "name": "75/85 : AT FAIR DR"
    }, {
        "id": "cctv_5178",
        "stream": "/georgiavss3/gdot-cam-449.stream/playlist.m3u8",
        "name": "I-75 : N OF WOODSTOCK RD"
    }, {
        "id": "cctv_7297",
        "url": "/georgiasnapshots/COBB-CAM-012.jpg",
        "name": "Barrett Pkwy : Barrett Lakes Blvd"
    }, {
        "id": "cctv_15578",
        "stream": "/georgiavss4/gdot-cam-628.stream/playlist.m3u8",
        "name": "I-285 : E OF I-75/EXP RAMPS"
    }, {
        "id": "cctv_32576",
        "url": "/georgiasnapshots/DUN-CAM-100.jpg",
        "name": "Ashford Dunwoody Rd : Mt Vernon Rd"
    }, {
        "id": "cctv_10293",
        "url": "/georgiasnapshots/GWIN-CAM-119.jpg",
        "name": "SR 13 / US 23 : JONES MILL RD"
    }, {
        "id": "cctv_46398",
        "url": "/georgiasnapshots/DUN-CAM-156.jpg",
        "name": "Mt. Vernon : Vermack/Manhasset"
    }, {
        "id": "cctv_5101",
        "stream": "/georgiavss3/gdot-cam-361.stream/playlist.m3u8",
        "name": "I-20 : E OF GLENWOOD AVE"
    }, {
        "id": "cctv_5711",
        "stream": "/georgiavss2/gdot-cam-252.stream/playlist.m3u8",
        "name": "I-285 : MEMORIAL DR"
    }, {
        "id": "cctv_16265",
        "url": "/georgiasnapshots/COJC-CAM-745.jpg",
        "name": "McGinnis Ferry Rd : Rogers Bridge Rd/Settles Walk Ln"
    }, {
        "id": "cctv_15625",
        "url": "/georgiasnapshots/COBB-CAM-265.jpg",
        "name": "SR 6/CH James Pkwy : Garrett Rd"
    }, {
        "id": "cctv_32929",
        "url": "/georgiasnapshots/GDOT-CAM-773A.jpg",
        "name": "I-75 : EXPRESS LN ENTR/EXIT"
    }, {
        "id": "cctv_15504",
        "stream": "/georgiavss3/gdot-cam-493.stream/playlist.m3u8",
        "name": "I-75 : I-575 ENT RAMP"
    }, {
        "id": "cctv_5098",
        "stream": "/georgiavss3/gdot-cam-359.stream/playlist.m3u8",
        "name": "I-20 : MAYNARD TERRACE"
    }, {
        "id": "cctv_16307",
        "url": "/georgiasnapshots/COBB-CAM-114.jpg",
        "name": "SR 360/Macland Rd : West Sandtown Rd"
    }, {
        "id": "cctv_10261",
        "url": "/georgiasnapshots/GWIN-CAM-087.jpg",
        "name": "OLD NORCROSS RD : MCELVANEY RD"
    }, {
        "id": "cctv_10298",
        "url": "/georgiasnapshots/GWIN-CAM-124.jpg",
        "name": "SR 13 / US 23 : N BERKELEY LAKE RD"
    }, {
        "id": "cctv_10459",
        "url": "/georgiasnapshots/CLAY-CAM-056.jpg",
        "name": "SR 85 : Allen Dr / Adams Dr"
    }, {
        "id": "cctv_7341",
        "url": "/georgiasnapshots/COBB-CAM-260.jpg",
        "name": "SR 6 : Richard D. Sailors Pkwy"
    }, {
        "id": "cctv_6823",
        "stream": "/georgiavss1/cher-cam-011.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Neese Rd"
    }, {
        "id": "cctv_5065",
        "stream": "/georgiavss3/gdot-cam-329.stream/playlist.m3u8",
        "name": "I-20 : LINKWOOD RD"
    }, {
        "id": "cctv_15595",
        "stream": "/georgiavss4/gdot-cam-623.stream/playlist.m3u8",
        "name": "I-285 : E OF STADIUM PED BRDG"
    }, {
        "id": "cctv_10434",
        "url": "/georgiasnapshots/CLAY-CAM-017.jpg",
        "name": "SR 3 OD : FRONTAGE RD"
    }, {
        "id": "cctv_12918",
        "url": "/georgiasnapshots/COBB-CAM-048.jpg",
        "name": "Powers Ferry Rd : Delk Rd"
    }, {
        "id": "cctv_5962",
        "stream": "/georgiavss4/gdot-cam-618.stream/playlist.m3u8",
        "name": "I-675 : S OF I-285"
    }, {
        "id": "cctv_5168",
        "stream": "/georgiavss2/gdot-cam-044.stream/playlist.m3u8",
        "name": "I-85 : N OF SHALLOWFORD RD"
    }, {
        "id": "cctv_10253",
        "url": "/georgiasnapshots/GWIN-CAM-079.jpg",
        "name": "SR 378 : LIGHT CIRCLE NW / E of US 23 / SR 13 / BUFORD HWY"
    }, {
        "id": "cctv_10499",
        "url": "/georgiasnapshots/CLAY-CAM-193.jpg",
        "name": "SR 85 : Webb Rd / Warren Dr"
    }, {
        "id": "cctv_15592",
        "stream": "/georgiavss4/gdot-cam-625.stream/playlist.m3u8",
        "name": "I-285 : ON/OFF EXP RAMPS FOR I-75"
    }, {
        "id": "cctv_10378",
        "url": "/georgiasnapshots/GWIN-CAM-204.jpg",
        "name": "DACULA RD : HURRICANE SHOALS RD"
    }, {
        "id": "cctv_5210",
        "stream": "/georgiavss2/gdot-cam-053.stream/playlist.m3u8",
        "name": "SR 166 : DELOWE DR"
    }, {
        "id": "cctv_10276",
        "url": "/georgiasnapshots/GWIN-CAM-102.jpg",
        "name": "SR 10 : Lake Lucerne Rd"
    }, {
        "id": "cctv_15263",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-071.jpg",
        "name": "I-20 : Panola Rd"
    }, {
        "id": "cctv_15288",
        "url": "/georgiasnapshots/ATL-CAM-923.jpg",
        "name": "North Ave : West Peachtree St"
    }, {
        "id": "cctv_13246",
        "stream": "/georgiavss4/gdot-cam-746.stream/playlist.m3u8",
        "name": "I-75 : AT JODECO RD"
    }, {
        "id": "cctv_5394",
        "stream": "/georgiavss4/gdot-cam-957.stream/playlist.m3u8",
        "name": "I-285 : S OF CHATTAHOOCHEE RIVER"
    }, {
        "id": "cctv_15340",
        "stream": "/georgiavss1/doug-cam-093.stream/playlist.m3u8",
        "name": "SR 6 : SR 8 / Bankhead Hwy"
    }, {
        "id": "cctv_9142",
        "stream": "/georgiavss1/cham-cam-010.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : N Peachtree Rd"
    }, {
        "id": "cctv_15185",
        "url": "/georgiasnapshots/MAR-CAM-202.jpg",
        "name": "SR 120A/N Marietta Pkwy : Fairground St"
    }, {
        "id": "cctv_16368",
        "url": "/georgiasnapshots/BROK-CAM-075.jpg",
        "name": "Ashford Dunwoody Rd : Nancy Creek Dr"
    }, {
        "id": "cctv_15186",
        "url": "/georgiasnapshots/MAR-CAM-203.jpg",
        "name": "SR 120A / N Marietta Pkwy : Cherokee St"
    }, {
        "id": "cctv_46448",
        "url": "/georgiasnapshots/FULT-CAM-026.jpg",
        "name": "SR 14/ US 29/ W. Broad St : GA 92/ Cambellton St"
    }, {
        "id": "cctv_5268",
        "stream": "/georgiavss4/gdot-cam-669.stream/playlist.m3u8",
        "name": "I-285 : E OF AIRPORT LOOP RD"
    }, {
        "id": "cctv_15357",
        "url": "/georgiasnapshots/ATL-CAM-805.jpg",
        "name": "SR 3 / Crown Rd : USPS Driveway"
    }, {
        "id": "cctv_10465",
        "url": "/georgiasnapshots/CLAY-CAM-063.jpg",
        "name": "SR 85 : SR 138"
    }, {
        "id": "cctv_15223",
        "url": "/georgiasnapshots/HNRY-CAM-919.jpg",
        "name": "SR 20 : Willow Lane / Old Ind Blvd"
    }, {
        "id": "cctv_13376",
        "stream": "/georgiavss1/atl-cam-273.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Kings Grant Dr / Yates Dr"
    }, {
        "id": "cctv_10489",
        "url": "/georgiasnapshots/CLAY-CAM-158.jpg",
        "name": "SR 138 : ATLANTA BEACH / RAND RD"
    }, {
        "id": "cctv_7325",
        "url": "/georgiasnapshots/COBB-CAM-091.jpg",
        "name": "Terrell Mill Rd : Old Paper Mill Rd"
    }, {
        "id": "cctv_5956",
        "stream": "/georgiavss4/gdot-cam-612.stream/playlist.m3u8",
        "name": "I-675 : ANVIL BLOCK RD"
    }, {
        "id": "cctv_13739",
        "url": "/georgiasnapshots/COBB-CAM-255.jpg",
        "name": "Dallas Hwy : John Ward Rd"
    }, {
        "id": "cctv_15433",
        "stream": "/georgiavss2/gdot-cam-305.stream/playlist.m3u8",
        "name": "I-20 : 0.75 MI EAST OF MIDWAY RD OVERPASS"
    }, {
        "id": "cctv_7358",
        "url": "/georgiasnapshots/COBB-CAM-445.jpg",
        "name": "EW Connector : Camp Highland Rd"
    }, {
        "id": "cctv_13142",
        "url": "/georgiasnapshots/ROSWELL-CAM-122.jpg",
        "name": "SR 140 : Holcomb Woods Pkwy"
    }, {
        "id": "cctv_13300",
        "stream": "/georgiavss4/gdot-cam-726.stream/playlist.m3u8",
        "name": "I-75 : N OF FIELDER RD"
    }, {
        "id": "cctv_5250",
        "stream": "/georgiavss4/gdot-cam-652.stream/playlist.m3u8",
        "name": "I-285 : 5TH RUNWAY TUNNEL ENTRANCE"
    }, {
        "id": "cctv_10490",
        "url": "/georgiasnapshots/CLAY-CAM-160.jpg",
        "name": "MT ZION RD : MT ZION CIR"
    }, {
        "id": "cctv_15169",
        "url": "/georgiasnapshots/MAR-CAM-100.jpg",
        "name": "SR 3/Cobb Pkwy : Bells Ferry Rd"
    }, {
        "id": "cctv_13226",
        "stream": "/georgiavss1/fors-cam-002.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : SR 400 SB Ramps"
    }, {
        "id": "cctv_16221",
        "url": "/georgiasnapshots/COJC-CAM-425.jpg",
        "name": "State Bridge Rd : Abberley Ln/Cameron Bridge Way"
    }, {
        "id": "cctv_15312",
        "url": "/georgiasnapshots/GDOT-CAM-SR212-0.8.jpg",
        "name": "SR 212 : Brown Bridge Road"
    }, {
        "id": "cctv_10239",
        "url": "/georgiasnapshots/GWIN-CAM-065.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of TAB ROBERTS RD"
    }, {
        "id": "cctv_10393",
        "url": "/georgiasnapshots/GWIN-CAM-234.jpg",
        "name": "SUWANEE DAM RD : DELAY LN - SUWANEE LIBRARY"
    }, {
        "id": "cctv_13088",
        "url": "/georgiasnapshots/COBB-CAM-122.jpg",
        "name": "Cumberland Blvd : Riverwood Pkwy"
    }, {
        "id": "cctv_10206",
        "url": "/georgiasnapshots/GWIN-CAM-032.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : S OLD PEACHTREE RD"
    }, {
        "id": "cctv_8813",
        "stream": "/georgiavss1/atl-cam-021.stream/playlist.m3u8",
        "name": "Sidney Marcus : Adina Dr"
    }, {
        "id": "cctv_15406",
        "stream": "/georgiavss3/gdot-cam-319.stream/playlist.m3u8",
        "name": "I-20 : Six Flags Pkwy"
    }, {
        "id": "cctv_7302",
        "url": "/georgiasnapshots/COBB-CAM-021.jpg",
        "name": "SR 280/South Cobb Dr : Fairground St"
    }, {
        "id": "cctv_7309",
        "url": "/georgiasnapshots/COBB-CAM-046.jpg",
        "name": "Powers Ferry Rd : Windy Ridge Pkwy"
    }, {
        "id": "cctv_9174",
        "url": "/georgiasnapshots/COBB-CAM-074.jpg",
        "name": "Mableton Pkwy : Factory Shoals Rd"
    }, {
        "id": "cctv_13560",
        "url": "/georgiasnapshots/CLAY-CAM-161.jpg",
        "name": "SR 138 / Lake Spivey Rd : I-75 NB Ramp"
    }, {
        "id": "cctv_32611",
        "url": "/georgiasnapshots/COBB-CAM-242.jpg",
        "name": "Powder Springs Rd : Pair Rd"
    }, {
        "id": "cctv_46298",
        "url": "/georgiasnapshots/GWIN-CAM-232.jpg",
        "name": "US 78 : LOGAN DR"
    }, {
        "id": "cctv_13649",
        "url": "/georgiasnapshots/COBB-CAM-034.jpg",
        "name": "Windy Hill Rd : Circle 75 Pkwy"
    }, {
        "id": "cctv_13611",
        "url": "/georgiasnapshots/ATL-CAM-607.jpg",
        "name": "SR 42 (Moreland Ave) : Custer Ave"
    }, {
        "id": "cctv_15973",
        "stream": "/georgiavss2/gdot-cam-173.stream/playlist.m3u8",
        "name": "I-85 : N OF GRAVEL SPRINGS RD"
    }, {
        "id": "cctv_15364",
        "url": "/georgiasnapshots/CLAY-CAM-096.jpg",
        "name": "Upper Riverdale Rd : Valley Hill Rd"
    }, {
        "id": "cctv_10340",
        "url": "/georgiasnapshots/GWIN-CAM-166.jpg",
        "name": "SR 20 : COOPER RD / OZORA RD"
    }, {
        "id": "cctv_13210",
        "url": "/georgiasnapshots/ALPH-CAM-034.jpg",
        "name": "Westside Pkwy : Avalon Way"
    }, {
        "id": "cctv_5076",
        "stream": "/georgiavss3/gdot-cam-339.stream/playlist.m3u8",
        "name": "I-20 : LANGHORN ST"
    }, {
        "id": "cctv_12908",
        "url": "/georgiasnapshots/COBB-CAM-142.jpg",
        "name": "Piedmont Rd : Morgan Rd"
    }, {
        "id": "cctv_15452",
        "url": "/georgiasnapshots/ATL-CAM-961.jpg",
        "name": "Memorial Dr / Whitehall St : Peachtree St / Forsyth St"
    }, {
        "id": "cctv_13241",
        "stream": "/georgiavss4/gdot-cam-747.stream/playlist.m3u8",
        "name": "I-75 : S OF JODECO RD"
    }, {
        "id": "cctv_5010",
        "stream": "/georgiavss2/gdot-cam-242.stream/playlist.m3u8",
        "name": "I-285 : N OF LAWRENCEVILLE HWY"
    }, {
        "id": "cctv_13606",
        "stream": "/georgiavss1/alph-cam-024.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Siemens Driveway"
    }, {
        "id": "cctv_4975",
        "stream": "/georgiavss2/gdot-cam-210.stream/playlist.m3u8",
        "name": "I-285 : MT VERNON HWY"
    }, {
        "id": "cctv_8815",
        "stream": "/georgiavss1/atl-cam-017.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Manor Apartments"
    }, {
        "id": "cctv_13341",
        "stream": "/georgiavss4/gdot-cam-752.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }, {
        "id": "cctv_15250",
        "stream": "/georgiavss1/atl-cam-905.stream/playlist.m3u8",
        "name": "SR 9 (Peachtree St) : Buford Conn / I-85 NB Ramp"
    }, {
        "id": "cctv_9029",
        "url": "/georgiasnapshots/ROSWELL-CAM-308.jpg",
        "name": "SR 9 : Oak St"
    }, {
        "id": "cctv_32563",
        "url": "/georgiasnapshots/FORS-CAM-030.jpg",
        "name": "SR 400 NB : McFarland Pkwy"
    }, {
        "id": "cctv_15481",
        "stream": "/georgiavss3/gdot-cam-539.stream/playlist.m3u8",
        "name": "I-575 : EXIT TO BARRETT PKY"
    }, {
        "id": "cctv_4999",
        "stream": "/georgiavss2/gdot-cam-232.stream/playlist.m3u8",
        "name": "I-285 : W OF I-85 (DEKALB)"
    }, {
        "id": "cctv_15303",
        "url": "/georgiasnapshots/ATL-CAM-933.jpg",
        "name": "SR 14 (Peters St) : Walker St"
    }, {
        "id": "cctv_13093",
        "stream": "/georgiavss1/doug-cam-038.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Stewart Pkwy"
    }, {
        "id": "cctv_32620",
        "url": "/georgiasnapshots/DUN-CAM-132.jpg",
        "name": "Hammond Dr : Perimeter Ctr Pkwy"
    }, {
        "id": "cctv_10242",
        "url": "/georgiasnapshots/GWIN-CAM-068.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : OLD PEACHTREE RD"
    }, {
        "id": "cctv_13277",
        "stream": "/georgiavss4/gdot-cam-748.stream/playlist.m3u8",
        "name": "I-75 : AT JONESBORO RD EXIT"
    }, {
        "id": "cctv_46400",
        "url": "/georgiasnapshots/DUN-CAM-135.jpg",
        "name": "Perimeter Center Pkwy : Springwood Connector/Marriott"
    }, {
        "id": "cctv_4957",
        "stream": "/georgiavss2/gdot-cam-194.stream/playlist.m3u8",
        "name": "I-85 : OLD NATIONAL HWY"
    }, {
        "id": "cctv_9193",
        "stream": "/georgiavss1/atl-cam-073.stream/playlist.m3u8",
        "name": "North Ave : N Highland Ave"
    }, {
        "id": "cctv_10214",
        "url": "/georgiasnapshots/GWIN-CAM-040.jpg",
        "name": "SR 20 : Laurel Dr / BrandsMart USA"
    }, {
        "id": "cctv_5306",
        "stream": "/georgiavss4/gdot-cam-780.stream/playlist.m3u8",
        "name": "US 78 : E OF I-285"
    }, {
        "id": "cctv_7305",
        "url": "/georgiasnapshots/COBB-CAM-031.jpg",
        "name": "Windy Hill Rd : Hospital Dr"
    }, {
        "id": "cctv_16234",
        "url": "/georgiasnapshots/COJC-CAM-555.jpg",
        "name": "Old Alabama Rd : Autrey Mill MS"
    }, {
        "id": "cctv_15585",
        "stream": "/georgiavss4/gdot-cam-621.stream/playlist.m3u8",
        "name": "I-285 : MT WILKINSON PKY"
    }, {
        "id": "cctv_13688",
        "stream": "/georgiavss1/dek-cam-151.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Columbia Dr"
    }, {
        "id": "cctv_7317",
        "url": "/georgiasnapshots/COBB-CAM-057.jpg",
        "name": "SR 3/Cobb Pkwy : Riverwood Pkwy"
    }, {
        "id": "cctv_12945",
        "url": "/georgiasnapshots/DOUG-CAM-020.jpg",
        "name": "Douglas Blvd : Brightstar Rd"
    }, {
        "id": "cctv_5116",
        "stream": "/georgiavss3/gdot-cam-375.stream/playlist.m3u8",
        "name": "I-20 : I-285 (DEKALB)"
    }, {
        "id": "cctv_13149",
        "url": "/georgiasnapshots/ROSWELL-CAM-400.jpg",
        "name": "Mansell Rd : Aldi/Kroger"
    }, {
        "id": "cctv_10523",
        "url": "/georgiasnapshots/CLAY-CAM-C607.jpg",
        "name": "SR 3 / Tara Blvd : South of Winding Way Ln"
    }, {
        "id": "cctv_5326",
        "stream": "/georgiavss2/gdot-cam-081.stream/playlist.m3u8",
        "name": "I-75 : CENTRAL / PORSCHE AVE"
    }, {
        "id": "cctv_46422",
        "url": "/georgiasnapshots/DOUG-CAM-097.jpg",
        "name": "SR 92/ FAIRBURN RD : I-20 Eastbound"
    }, {
        "id": "cctv_5402",
        "stream": "/georgiavss4/gdot-cam-964.stream/playlist.m3u8",
        "name": "I-285 : S ATLANTA RD"
    }, {
        "id": "cctv_10406",
        "url": "/georgiasnapshots/GWIN-CAM-247.jpg",
        "name": "SR 10 : Parker Ct / Davis Rd"
    }, {
        "id": "cctv_46425",
        "url": "/georgiasnapshots/FULT-CAM-007.jpg",
        "name": "SR 166 : Stanton Rd"
    }, {
        "id": "cctv_13158",
        "url": "/georgiasnapshots/ROSWELL-CAM-418.jpg",
        "name": "Old Alabama Rd : Holcomb Woods Pkwy"
    }, {
        "id": "cctv_32559",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-026.jpg",
        "name": "SR 20 : Kelly Mill Rd"
    }, {
        "id": "cctv_15387",
        "url": "/georgiasnapshots/ATL-CAM-959.jpg",
        "name": "Peachtree St : Ellis St"
    }, {
        "id": "cctv_15587",
        "stream": "/georgiavss4/gdot-cam-630.stream/playlist.m3u8",
        "name": "I-285 : W OF CHATT RIV"
    }, {
        "id": "cctv_13586",
        "stream": "/georgiavss1/cham-cam-009.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Chamblee Tucker Rd"
    }, {
        "id": "cctv_13759",
        "url": "/georgiasnapshots/SMYR-CAM-008.jpg",
        "name": "Windy Hill Rd : Atlanta Rd"
    }, {
        "id": "cctv_16313",
        "url": "/georgiasnapshots/COBB-CAM-139.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd/Stillhouse Rd"
    }, {
        "id": "cctv_9035",
        "url": "/georgiasnapshots/ROSWELL-CAM-318.jpg",
        "name": "SR 9 : Mansell Rd"
    }, {
        "id": "cctv_16225",
        "url": "/georgiasnapshots/COJC-CAM-510.jpg",
        "name": "Old Alabama Rd : Nesbit Ferry Rd"
    }, {
        "id": "cctv_15509",
        "stream": "/georgiavss3/gdot-cam-478.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : WEST OF I-75"
    }, {
        "id": "cctv_16217",
        "stream": "/georgiavss1/cojc-cam-250.stream/playlist.m3u8",
        "name": "SR 141 : Skyway Dr"
    }, {
        "id": "cctv_13770",
        "url": "/georgiasnapshots/DEK-CAM-328.jpg",
        "name": "SR 155 / Clairmont Rd : N Druid Hills Rd"
    }, {
        "id": "cctv_12974",
        "stream": "/georgiavss4/gdot-cam-813.stream/playlist.m3u8",
        "name": "GA 400 : SOUTH END OF TUNNEL"
    }, {
        "id": "cctv_9032",
        "url": "/georgiasnapshots/ROSWELL-CAM-314.jpg",
        "name": "SR 9 : Woodstock St"
    }, {
        "id": "cctv_15956",
        "stream": "/georgiavss2/gdot-cam-164.stream/playlist.m3u8",
        "name": "I-85 : 1 MI S OF SR 20"
    }, {
        "id": "cctv_5017",
        "stream": "/georgiavss2/gdot-cam-249.stream/playlist.m3u8",
        "name": "I-285 : S OF CHURCH ST"
    }, {
        "id": "cctv_13762",
        "url": "/georgiasnapshots/SMYR-CAM-011.jpg",
        "name": "Spring Rd : Sports Ave"
    }, {
        "id": "cctv_10320",
        "url": "/georgiasnapshots/GWIN-CAM-146.jpg",
        "name": "PLEASANT HILL RD : RONALD REAGAN PKWY"
    }, {
        "id": "cctv_10171",
        "url": "/georgiasnapshots/HNRY-CAM-916.jpg",
        "name": "I-75 : Jodeco Rd"
    }, {
        "id": "cctv_10230",
        "url": "/georgiasnapshots/GWIN-CAM-056.jpg",
        "name": "SR 124 : SUGARLOAF PKWY"
    }, {
        "id": "cctv_13556",
        "url": "/georgiasnapshots/HNRY-CAM-107.jpg",
        "name": "SR 138 : SR 42 / N Henry Blvd"
    }, {
        "id": "cctv_6819",
        "stream": "/georgiavss1/cojc-cam-135.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Wilson Rd"
    }, {
        "id": "cctv_15211",
        "url": "/georgiasnapshots/MAR-CAM-600.jpg",
        "name": "Delk Rd : Bentley Rd/Woodsmill Dr"
    }, {
        "id": "cctv_15461",
        "stream": "/georgiavss1/alph-cam-033.stream/playlist.m3u8",
        "name": "Westside Pkwy : Hawk"
    }, {
        "id": "cctv_12917",
        "url": "/georgiasnapshots/COBB-CAM-257.jpg",
        "name": "Dallas Hwy : West Sandtown Rd"
    }, {
        "id": "cctv_5175",
        "stream": "/georgiavss3/gdot-cam-446.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }, {
        "id": "cctv_15193",
        "url": "/georgiasnapshots/MAR-CAM-304.jpg",
        "name": "SR 120/S Marietta Pkwy : Franklin Gtwy"
    }, {
        "id": "cctv_10227",
        "url": "/georgiasnapshots/GWIN-CAM-053.jpg",
        "name": "SR 124 : S of MT ZION CHURCH RD"
    }, {
        "id": "cctv_15341",
        "url": "/georgiasnapshots/ATL-CAM-953.jpg",
        "name": "SR 13 / Buford Spring Conn : Armour Dr"
    }, {
        "id": "cctv_15284",
        "stream": "/georgiavss1/atl-cam-919.stream/playlist.m3u8",
        "name": "Mitchell St : Mangum St"
    }, {
        "id": "cctv_10189",
        "url": "/georgiasnapshots/GWIN-CAM-011.jpg",
        "name": "SR 140 : N Norcross-Tucker Rd / Brook Hollow Pkwy"
    }, {
        "id": "cctv_5278",
        "stream": "/georgiavss4/gdot-cam-707.stream/playlist.m3u8",
        "name": "I-75 : S OF MT ZION BLVD"
    }, {
        "id": "cctv_13209",
        "stream": "/georgiavss1/atl-cam-083.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Mitchell St"
    }, {
        "id": "cctv_13320",
        "stream": "/georgiavss4/gdot-cam-738.stream/playlist.m3u8",
        "name": "I-75 : S OF FLIPPEN RD"
    }, {
        "id": "cctv_13256",
        "stream": "/georgiavss1/fors-cam-003.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Northside Forsyth Dr / Marketplace Blvd"
    }, {
        "id": "cctv_10373",
        "url": "/georgiasnapshots/GWIN-CAM-199.jpg",
        "name": "SR 324 : W of SR 124"
    }, {
        "id": "cctv_5043",
        "stream": "/georgiavss2/gdot-cam-275.stream/playlist.m3u8",
        "name": "I-285 : NEAR FOREST PARK RD"
    }, {
        "id": "cctv_7296",
        "url": "/georgiasnapshots/COBB-CAM-011.jpg",
        "name": "Barrett Pkwy : CMS (Old 41 Hwy)"
    }, {
        "id": "cctv_15477",
        "stream": "/georgiavss3/gdot-cam-488.stream/playlist.m3u8",
        "name": "I-75 : S OF ALLGOOD RD"
    }, {
        "id": "cctv_15989",
        "stream": "/georgiavss2/gdot-cam-167.stream/playlist.m3u8",
        "name": "I-85 : BEFORE SR 20"
    }, {
        "id": "cctv_7332",
        "url": "/georgiasnapshots/COBB-CAM-141.jpg",
        "name": "Canton Rd : Piedmont Rd"
    }, {
        "id": "cctv_13050",
        "url": "/georgiasnapshots/COBB-CAM-219.jpg",
        "name": "Sandy Plains Rd : Holly Springs Rd"
    }, {
        "id": "cctv_46464",
        "url": "/georgiasnapshots/TMC-CAM-002.jpg",
        "name": "Walker Ave : United Ave"
    }, {
        "id": "cctv_10191",
        "url": "/georgiasnapshots/GWIN-CAM-013.jpg",
        "name": "SR 140 : SR 141 (PIB) NB Ramp"
    }, {
        "id": "cctv_15575",
        "stream": "/georgiavss3/gdot-cam-476.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : E OF I-75 EXP LANE RAMP"
    }, {
        "id": "cctv_5201",
        "stream": "/georgiavss2/gdot-cam-051.stream/playlist.m3u8",
        "name": "SR 166 : DODSON DR"
    }, {
        "id": "cctv_13338",
        "stream": "/georgiavss4/gdot-cam-729.stream/playlist.m3u8",
        "name": "I-75 : AT I-675"
    }, {
        "id": "cctv_13592",
        "stream": "/georgiavss1/cham-cam-001.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Plaza Fiesta"
    }, {
        "id": "cctv_12960",
        "stream": "/georgiavss4/gdot-cam-816.stream/playlist.m3u8",
        "name": "GA 400 : LENOX RD/SR 141 CONN"
    }, {
        "id": "cctv_10202",
        "url": "/georgiasnapshots/GWIN-CAM-028.jpg",
        "name": "STEVE REYNOLDS BLVD : SATELLITE BLVD"
    }, {
        "id": "cctv_5122",
        "stream": "/georgiavss2/gdot-cam-039.stream/playlist.m3u8",
        "name": "I-85 : S OF N DRUID HILLS RD"
    }, {
        "id": "cctv_7322",
        "url": "/georgiasnapshots/COBB-CAM-062.jpg",
        "name": "EW Connector : CMS (Highland Ridge)"
    }, {
        "id": "cctv_13053",
        "url": "/georgiasnapshots/COBB-CAM-076.jpg",
        "name": "Mableton Pkwy : Old Alabama Rd"
    }, {
        "id": "cctv_15249",
        "stream": "/georgiavss3/gdot-cam-534.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }, {
        "id": "cctv_10481",
        "url": "/georgiasnapshots/CLAY-CAM-131.jpg",
        "name": "SR 3 TB : TARA RD"
    }],
    "Other Areas": [{
        "id": "cctv_32637",
        "url": "/georgiasnapshots/HALL-CAM-018.jpg",
        "name": "I-985 : SR 60"
    }, {
        "id": "cctv_5974",
        "url": "/georgiasnapshots/BIBB-CAM-512.jpg",
        "name": "PIO NONO AVE : SOUTH PLAZA"
    }, {
        "id": "cctv_16355",
        "url": "/georgiasnapshots/FORS-CAM-010.jpg",
        "name": "SR 306/Keith Bridge Rd : SR 400 SB"
    }, {
        "id": "cctv_13122",
        "url": "/georgiasnapshots/FAY-CAM-017.jpg",
        "name": "SR 54 : Huddleston Rd"
    }, {
        "id": "cctv_16333",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-149.2.jpg",
        "name": "I-75 : SR 49"
    }, {
        "id": "cctv_46547",
        "url": "/georgiasnapshots/GLY-CAM-004.jpg",
        "name": "SR 520 : SR 25/ SR 303"
    }, {
        "id": "cctv_32643",
        "url": "/georgiasnapshots/HALL-CAM-024.jpg",
        "name": "SR 365 : White Sulpher Rd"
    }, {
        "id": "cctv_16115",
        "url": "/georgiasnapshots/GDOT-CAM-SR71-0.70.jpg",
        "name": "SR 71 : WESTBROOK RD"
    }, {
        "id": "cctv_6003",
        "stream": "/georgiavss5/bibb-cam-012.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1.5"
    }, {
        "id": "cctv_32854",
        "url": "/georgiasnapshots/AUG-CAM-166.jpg",
        "name": "River Watch Pkwy. : Alexander Dr."
    }, {
        "id": "cctv_16349",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-290.05.jpg",
        "name": "I-75 : EXT 290"
    }, {
        "id": "cctv_32552",
        "url": "/georgiasnapshots/BARR-CAM-011.jpg",
        "name": "SR 316 : SR 53"
    }, {
        "id": "cctv_9126",
        "url": "/georgiasnapshots/COLU-CAM-005.jpg",
        "name": "10th Street : 10th Avenue"
    }, {
        "id": "cctv_16316",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-23.95.jpg",
        "name": "I-20 : EXT 24"
    }, {
        "id": "cctv_10176",
        "stream": "/georgiavss1/fay-cam-109.stream/playlist.m3u8",
        "name": "SR 85 : SR 92 / Ramah Rd"
    }, {
        "id": "cctv_32553",
        "url": "/georgiasnapshots/DWSN-CAM-001.jpg",
        "name": "SR 400 : Carlislie Rd/Whitmire Dr"
    }, {
        "id": "cctv_32891",
        "url": "/georgiasnapshots/AUG-CAM-107.jpg",
        "name": "Hwy 25 : Lumpkin Rd."
    }, {
        "id": "cctv_16130",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.35.jpg",
        "name": "I-75 : GLADE RD (EXIT 278)"
    }, {
        "id": "cctv_32897",
        "url": "/georgiasnapshots/AUG-CAM-204.jpg",
        "name": "Walton Way : Druid Park Ave."
    }, {
        "id": "cctv_16116",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-0.70.jpg",
        "name": "SR 52 : TIBBS RD"
    }, {
        "id": "cctv_46362",
        "url": "/georgiasnapshots/MITC-CAM-002.jpg",
        "name": "SR 65 : SR93/CHURCH"
    }, {
        "id": "cctv_15415",
        "url": "/georgiasnapshots/COW-CAM-005.jpg",
        "name": "SR 34 : SR 154"
    }, {
        "id": "cctv_46484",
        "url": "/georgiasnapshots/PICK-CAM-004.jpg",
        "name": "SR 515 : Philadelphia Rd"
    }, {
        "id": "cctv_16375",
        "url": "http://navigator-c2c.dot.ga.gov/sapshots/FORS-CAM-23.jpg",
        "name": "SR 9 : Walmart/ E Main St."
    }, {
        "id": "cctv_32837",
        "url": "/georgiasnapshots/AUG-CAM-033.jpg",
        "name": "Broad St. : 9th St./James Brown Blvd."
    }, {
        "id": "cctv_32628",
        "url": "/georgiasnapshots/HALL-CAM-009",
        "name": "I-985 NB : SR 53"
    }, {
        "id": "cctv_16006",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-8.71.jpg",
        "name": "520 : I-75 / Hunt Rd"
    }, {
        "id": "cctv_16179",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-1.15.jpg",
        "name": "SR 113 : NORTHSIDE DR"
    }, {
        "id": "cctv_5970",
        "url": "/georgiasnapshots/BIBB-CAM-508.jpg",
        "name": "PIO NONO AVE : HARRIS ST"
    }, {
        "id": "cctv_9312",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-348.jpg",
        "name": "I-75 : SR 151 / ALABAMA HWY"
    }, {
        "id": "cctv_6855",
        "stream": "/georgiavss1/fay-cam-115.stream/playlist.m3u8",
        "name": "SR 85 : SR 54 WB / Lanier Ave"
    }, {
        "id": "cctv_15898",
        "url": "/georgiasnapshots/SAV-CAM-036.jpg",
        "name": "SR 26/1st ST : CAMPBELL AVE"
    }, {
        "id": "cctv_15379",
        "url": "/georgiasnapshots/FLYD-CAM-009.jpg",
        "name": "SR 101 / 2nd Ave : Broad Street"
    }, {
        "id": "cctv_32880",
        "url": "/georgiasnapshots/AUG-CAM-067.jpg",
        "name": "Gordon Hwy : Milledgeville Rd. (East)"
    }, {
        "id": "cctv_32656",
        "url": "/georgiasnapshots/JACKS-CAM-002.jpg",
        "name": "SR 11 : I-85 NB"
    }, {
        "id": "cctv_5968",
        "url": "/georgiasnapshots/BIBB-CAM-506.jpg",
        "name": "PIO NONO AVE : BEECH AVE"
    }, {
        "id": "cctv_13598",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-015.jpg",
        "name": "I-20 : W of CMS-916"
    }, {
        "id": "cctv_5992",
        "url": "/georgiasnapshots/BIBB-CAM-530.jpg",
        "name": "RIVERSIDE DR : NORTHSIDE DR"
    }, {
        "id": "cctv_15445",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-003.jpg",
        "name": "SR 3/US 19/41 BYPASS : SR 16 E/NEWNAN RD"
    }, {
        "id": "cctv_46338",
        "url": "/georgiasnapshots/COFF-CAM-003.jpg",
        "name": "SR 31 : SR 32 WE/ WARD ST"
    }, {
        "id": "cctv_46353",
        "url": "/georgiasnapshots/LEE-CAM-002.jpg",
        "name": "SR 3 : DAWSON RD/ ROBERT E LEE RD"
    }, {
        "id": "cctv_46342",
        "url": "/georgiasnapshots/COLQ-CAM-001.jpg",
        "name": "SR 35 : SR 37/ SR133 SPENCE FIELD RD"
    }, {
        "id": "cctv_13594",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-182.jpg",
        "name": "I-75 : N of Rumble Rd / BIBB-CMS-001"
    }, {
        "id": "cctv_32871",
        "url": "/georgiasnapshots/AUG-CAM-271.jpg",
        "name": "Wrightsboro Rd. : North Leg/Jackson Rd."
    }, {
        "id": "cctv_6010",
        "stream": "/georgiavss5/bibb-cam-019.stream/playlist.m3u8",
        "name": "I-475 : US 80 ENT RAMP"
    }, {
        "id": "cctv_15741",
        "url": "/georgiasnapshots/SAV-CAM-019.jpg",
        "name": "SR 26/VICTORY DR : ABERCORN ST"
    }, {
        "id": "cctv_9012",
        "url": "/georgiasnapshots/COLU-CAM-001.jpg",
        "name": "SR 1 / Veterans Parkway : Victory Dr"
    }, {
        "id": "cctv_46252",
        "url": "/georgiasnapshots/GLY-CAM-001.jpg",
        "name": "SR 32/SR 99 (Grants Ferry Road) : SR 27/US 341"
    }, {
        "id": "cctv_32568",
        "url": "/georgiasnapshots/FORS-CAM-035.jpg",
        "name": "SR 400 : Settingdown Rd"
    }, {
        "id": "cctv_16148",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-4.1.jpg",
        "name": "SR 8 : HEAD AVE"
    }, {
        "id": "cctv_46559",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-152.00.jpg",
        "name": "I-16 : SR 17"
    }, {
        "id": "cctv_46483",
        "url": "/georgiasnapshots/PICK-CAM-003.jpg",
        "name": "SR 515 : Camp Rd"
    }, {
        "id": "cctv_46527",
        "url": "/georgiasnapshots/CHAT-CAM-008.jpg",
        "name": "SR 26 : Chatham Pkwy"
    }, {
        "id": "cctv_15732",
        "url": "/georgiasnapshots/SAV-CAM-014.jpg",
        "name": "SR 25/US 17 : GAMBLE RD"
    }, {
        "id": "cctv_15163",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-342.jpg",
        "name": "I-75 : CATOOSA CO WEIGH STATION"
    }, {
        "id": "cctv_32931",
        "url": "/georgiasnapshots/COW-CAM-016.jpg",
        "name": "SR 154 : Hammock Rd"
    }, {
        "id": "cctv_16304",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.35.jpg",
        "name": "I-75 : SR 3"
    }, {
        "id": "cctv_46532",
        "url": "/georgiasnapshots/CHAT-CAM-013.jpg",
        "name": "SR 26 : Bourne Ave/ Continental Blvd"
    }, {
        "id": "cctv_15457",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-18.7.jpg",
        "name": "SR 247 : SR 247C/Robins AFB"
    }, {
        "id": "cctv_32923",
        "url": "/georgiasnapshots/COW-CAM-015.jpg",
        "name": "SR 14/US 29 : SR 154/Arbor Springs Pky"
    }, {
        "id": "cctv_13553",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.9.jpg",
        "name": "SR 2 : Battlefield Centre"
    }, {
        "id": "cctv_32571",
        "url": "/georgiasnapshots/FRKN-CAM-001.jpg",
        "name": "SR 17 : I-85 NB Ramp"
    }, {
        "id": "cctv_12983",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-041.jpg",
        "name": "I-85 : US 27/29"
    }, {
        "id": "cctv_16102",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-9.55.jpg",
        "name": "SR 515 : MADDOX DR"
    }, {
        "id": "cctv_9133",
        "url": "/georgiasnapshots/COLU-CAM-012.jpg",
        "name": "Spur 22/Macon Rd : University Ave/Elm Dr"
    }, {
        "id": "cctv_9297",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-019.jpg",
        "name": "I-20 : GA 113 / EXIT 19"
    }, {
        "id": "cctv_46327",
        "url": "/georgiasnapshots/ATKI-CAM-001.jpg",
        "name": "SR 31 : SR 520/ South Ga. Parkway"
    }, {
        "id": "cctv_46331",
        "url": "/georgiasnapshots/BENH-CAM-002.jpg",
        "name": "SR 11 : ROANOKE DR"
    }, {
        "id": "cctv_46565",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-155.00.jpg",
        "name": "I-16 : Pooler Pkwy"
    }, {
        "id": "cctv_16171",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.6.jpg",
        "name": "SR 20/HERNDON LN : MARIETTA HWY"
    }, {
        "id": "cctv_13323",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-160.jpg",
        "name": "I-85 : SR 51 / Old Federal Road"
    }, {
        "id": "cctv_13205",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-001.jpg",
        "name": "I-85 : Harris Co Welcome Center"
    }, {
        "id": "cctv_15376",
        "url": "/georgiasnapshots/FLYD-CAM-006.jpg",
        "name": "SR 1 : E Eighth Street"
    }, {
        "id": "cctv_5981",
        "url": "/georgiasnapshots/BIBB-CAM-519.jpg",
        "name": "EISENHOWER PKWY : BLOOMFIELD DR"
    }, {
        "id": "cctv_10178",
        "stream": "/georgiavss1/fay-cam-205.stream/playlist.m3u8",
        "name": "SR 314 : Beckette Ln / Pavilion Pkwy"
    }, {
        "id": "cctv_16096",
        "url": "/georgiasnapshots/GDOT-CAM-SR53-8.75.jpg",
        "name": "SR 53 : SR 3"
    }, {
        "id": "cctv_6017",
        "stream": "/georgiavss5/bibb-cam-026.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 7"
    }, {
        "id": "cctv_32641",
        "url": "/georgiasnapshots/HALL-CAM-022.jpg",
        "name": "SR 365 : Howard Rd"
    }, {
        "id": "cctv_32843",
        "url": "/georgiasnapshots/AUG-CAM-041.jpg",
        "name": "Broad St. : Milledge"
    }, {
        "id": "cctv_13179",
        "url": "/georgiasnapshots/GDOT-CAM-US341-17.9.jpg",
        "name": "341/SR 27 : US 301"
    }, {
        "id": "cctv_6048",
        "url": "/georgiasnapshots/AMS-CAM-902.jpg",
        "name": "SR 20 : E MAIN ST"
    }, {
        "id": "cctv_9188",
        "url": "/georgiasnapshots/BIBB-CAM-113.jpg",
        "name": "I-75 : Montpelier Ave"
    }, {
        "id": "cctv_15806",
        "url": "/georgiasnapshots/SAV-CAM-023.jpg",
        "name": "SR 26/VICTORY DR : TRUMAN PKWY"
    }, {
        "id": "cctv_16345",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.30.jpg",
        "name": "I-75 : EXT 296"
    }, {
        "id": "cctv_46389",
        "url": "/georgiasnapshots/BIBB-CAM-541.jpg",
        "name": "Industrial Hwy Conn : Sardis Church Rd"
    }, {
        "id": "cctv_46450",
        "url": "/georgiasnapshots/FULT-CAM-028.jpg",
        "name": "SR 14/ US 29/ Main St : Toombs St/ Fayetteville Rd"
    }, {
        "id": "cctv_7352",
        "url": "/georgiasnapshots/COBB-CAM-335.jpg",
        "name": "SR 3/Cobb Pkwy : SR 92/Lake Acworth Dr"
    }, {
        "id": "cctv_46471",
        "url": "/georgiasnapshots/BART-CAM-003.jpg",
        "name": "SR 3 : Mockingbird Dr"
    }, {
        "id": "cctv_16139",
        "url": "/georgiasnapshots/GDOT-CAM-SR113.13.35.jpg",
        "name": "SR 113 : CHURCH ST"
    }, {
        "id": "cctv_9310",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-341.jpg",
        "name": "I-75 : SR 201/TUNNEL HILL RD"
    }, {
        "id": "cctv_15904",
        "url": "/georgiasnapshots/SAV-CAM-039.jpg",
        "name": "SR 25/US 17 : BERWICK BLVD"
    }, {
        "id": "cctv_46488",
        "url": "/georgiasnapshots/POLK-CAM-002.jpg",
        "name": "SR 1 : SR 114"
    }, {
        "id": "cctv_32911",
        "url": "/georgiasnapshots/STEPH-CAM-001.jpg",
        "name": "SR 17 ALT : SR 17 Bypass"
    }, {
        "id": "cctv_32838",
        "url": "/georgiasnapshots/AUG-CAM-005.jpg",
        "name": "13th St. : Telfair"
    }, {
        "id": "cctv_6038",
        "url": "/georgiasnapshots/BIBB-CAM-042.jpg",
        "name": "ZEBULON RD : I-475 SB RAMP"
    }, {
        "id": "cctv_8793",
        "url": "/georgiasnapshots/COBB-CAM-338.jpg",
        "name": "SR 3/Cobb Pkwy : Acworth Due West Rd"
    }, {
        "id": "cctv_32938",
        "url": "/georgiasnapshots/HABE-CAM-001.jpg",
        "name": "SR 15/365 : Demorest Mt Airy Rd"
    }, {
        "id": "cctv_5965",
        "url": "/georgiasnapshots/BIBB-CAM-503.jpg",
        "name": "MLK JR DR : POPLAR ST"
    }, {
        "id": "cctv_15624",
        "url": "/georgiasnapshots/SAV-CAM-009.jpg",
        "name": "SR 25/US 17 : CHATHAM PKWY"
    }, {
        "id": "cctv_13202",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-001.jpg",
        "name": "I-95 : WELCOME CENTER - FL / GA LINE"
    }, {
        "id": "cctv_6242",
        "stream": "/georgiavss1/ams-cam-111.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Oak St / AMS Main Gate"
    }, {
        "id": "cctv_16350",
        "url": "/georgiasnapshots/GDOT-CAM-SR1000-2.96.jpg",
        "name": "SR 1000 : SR 3 CONNECTOR"
    }, {
        "id": "cctv_32901",
        "url": "/georgiasnapshots/AUG-CAM-208.jpg",
        "name": "Walton Way : Johns Rd."
    }, {
        "id": "cctv_13116",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-137.jpg",
        "name": "I-85 : SR 11 / US 129"
    }, {
        "id": "cctv_9286",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-338.jpg",
        "name": "I-75 : 2 MI N OF US 41/76 - CMS 912"
    }, {
        "id": "cctv_13100",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-177.jpg",
        "name": "I-85 : LAKE HARTWELL/SC LINE"
    }, {
        "id": "cctv_16175",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.25.jpg",
        "name": "SR 113 : I-20 EB (EXIT 19)"
    }, {
        "id": "cctv_46366",
        "url": "/georgiasnapshots/THOM-CAM-003.jpg",
        "name": "SR 38BU : HANSELL ST"
    }, {
        "id": "cctv_15242",
        "stream": "/georgiavss3/gdot-cam-537.stream/playlist.m3u8",
        "name": "I-75 : SR 92"
    }, {
        "id": "cctv_46470",
        "url": "/georgiasnapshots/BART-CAM-004.jpg",
        "name": "SR 3 : MLK"
    }, {
        "id": "cctv_16134",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-310.30.jpg",
        "name": "I-75 : UNION GROVE RD"
    }, {
        "id": "cctv_13667",
        "url": "/georgiasnapshots/ROCK-CAM-116.jpg",
        "name": "SR 138 / Walnut Grove Rd : Old Covington Rd"
    }, {
        "id": "cctv_46248",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/EFF-CAM-001.jpg",
        "name": "SR 119 : SR 21 (Springfield Bypass)"
    }, {
        "id": "cctv_16140",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.25.jpg",
        "name": "SR 2 : FANT DR"
    }, {
        "id": "cctv_32847",
        "url": "/georgiasnapshots/AUG-CAM-220.jpg",
        "name": "Washington Rd. : Old Berckmans Rd."
    }, {
        "id": "cctv_32659",
        "url": "/georgiasnapshots/JACKS-CAM-005.jpg",
        "name": "SR 53 : I-85 NB"
    }, {
        "id": "cctv_16149",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-15.5.jpg",
        "name": "SR 8 : CASHTOWN RD"
    }, {
        "id": "cctv_46490",
        "url": "/georgiasnapshots/CARR-CAM-102.jpg",
        "name": "SR 8 : Carroll"
    }, {
        "id": "cctv_15168",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-170.2.jpg",
        "name": "I-85 : FRANKLIN CO WEIGH STATION / CMS 918"
    }, {
        "id": "cctv_16107",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-4.15.jpg",
        "name": "SR 515 : SR 5"
    }, {
        "id": "cctv_13187",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-116.jpg",
        "name": "I-16 : US 301/US 25"
    }, {
        "id": "cctv_46526",
        "url": "/georgiasnapshots/CHAT-CAM-007.jpg",
        "name": "SR 26 : Pine Barren Rd"
    }, {
        "id": "cctv_46539",
        "url": "/georgiasnapshots/BULL-CAM-005.jpg",
        "name": "SR 67 : SR 67/ SR 73 BP"
    }, {
        "id": "cctv_32860",
        "url": "/georgiasnapshots/AUG-CAM-229.jpg",
        "name": "Washington Rd. : Pleasant Home Rd."
    }, {
        "id": "cctv_32564",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-031.jpg",
        "name": "SR 400 NB : Pilgrim Mill Rd"
    }, {
        "id": "cctv_13689",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-330.jpg",
        "name": "I-75 : 2 MI N OF SR 3"
    }, {
        "id": "cctv_15998",
        "url": "/georgiasnapshots/GDOT-CAM-SR37-07.2.jpg",
        "name": "State Route 37 : I-75 NB Ramp"
    }, {
        "id": "cctv_15543",
        "url": "/georgiasnapshots/SAV-CAM-007.jpg",
        "name": "SR 21 : SR 307 / Dean Forest Rd"
    }, {
        "id": "cctv_16159",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-16.25.jpg",
        "name": "SR 20 : CLINE SMITH RD"
    }, {
        "id": "cctv_13360",
        "url": "/georgiasnapshots/ROCK-CAM-110.jpg",
        "name": "SR 138 / McDonough Rd : Chick-Fil-A"
    }, {
        "id": "cctv_46494",
        "url": "/georgiasnapshots/CARR-CAM-301.jpg",
        "name": "SR 100 : Bevis St"
    }, {
        "id": "cctv_13567",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-205.2.jpg",
        "name": "I-75 : SR 16"
    }, {
        "id": "cctv_6839",
        "url": "/georgiasnapshots/BIBB-CAM-101.jpg",
        "name": "I-75 : 1 MI S OF SARDIS CHURCH RD"
    }, {
        "id": "cctv_16110",
        "url": "/georgiasnapshots/GDOT-CAM-SR58-12.16.jpg",
        "name": "SR 58 : SR 136/WHITE OAK GAP"
    }, {
        "id": "cctv_46556",
        "url": "/georgiasnapshots/TOOM-CAM-001.jpg",
        "name": "SR 30 EB : Jackson St"
    }, {
        "id": "cctv_15814",
        "url": "/georgiasnapshots/SAV-CAM-031.jpg",
        "name": "JOHNNY MERCER BLVD : PUBLIX ACCESS DRIVEWAY"
    }, {
        "id": "cctv_15458",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-15.jpg",
        "name": "SR 3/US 19 : W Thompson St"
    }, {
        "id": "cctv_10498",
        "url": "/georgiasnapshots/CLAY-CAM-192.jpg",
        "name": "SR 3 / Tara Blvd : S Main St / Irongate Blvd"
    }, {
        "id": "cctv_32883",
        "url": "/georgiasnapshots/AUG-CAM-096.jpg",
        "name": "Hwy 1 : Meadowbrook Dr./B. Chapel"
    }, {
        "id": "cctv_13326",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-088.jpg",
        "name": "I-20 : ALMON RD"
    }, {
        "id": "cctv_46487",
        "url": "/georgiasnapshots/POLK-CAM-001.jpg",
        "name": "SR 1bus : Queen St"
    }, {
        "id": "cctv_16363",
        "url": "/georgiasnapshots/COW-CAM-024.jpg",
        "name": "Poplar Rd : I-85 NB ENT"
    }, {
        "id": "cctv_46359",
        "url": "/georgiasnapshots/LOWN-CAM-001.jpg",
        "name": "SR7/US41 : SR410/1-75-SB RAMP"
    }, {
        "id": "cctv_32884",
        "url": "/georgiasnapshots/AUG-CAM-099.jpg",
        "name": "Hwy 1 : Richmond Hill Rd. West"
    }, {
        "id": "cctv_16308",
        "url": "/georgiasnapshots/GDOT-CAM-SR166-13.jpg",
        "name": "SR 166 : MAPLE ST"
    }, {
        "id": "cctv_46376",
        "url": "/georgiasnapshots/THOM-CAM-008.jpg",
        "name": "SR 3 : N THOMASVILLE"
    }, {
        "id": "cctv_32875",
        "url": "/georgiasnapshots/AUG-CAM-059.jpg",
        "name": "Gordon Hwy : Barton Chapel Rd."
    }, {
        "id": "cctv_5997",
        "url": "/georgiasnapshots/BIBB-CAM-535.jpg",
        "name": "RIVERSIDE DR : HALL RD"
    }, {
        "id": "cctv_6846",
        "url": "/georgiasnapshots/BIBB-CAM-104.jpg",
        "name": "I-75 : SARDIS CHURCH Rd"
    }, {
        "id": "cctv_13261",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-140.jpg",
        "name": "I-85 : SR 82 / Dry Pond Rd"
    }, {
        "id": "cctv_16329",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-335.7.jpg",
        "name": "I-75 : EXT 336"
    }, {
        "id": "cctv_32833",
        "url": "/georgiasnapshots/AUG-CAM-198.jpg",
        "name": "Walton Way : 11th St."
    }, {
        "id": "cctv_16322",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.5.jpg",
        "name": "I-75 : EXT 353"
    }, {
        "id": "cctv_15217",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-188.jpg",
        "name": "I-75 : North of SR 42 access ramp"
    }, {
        "id": "cctv_16002",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-04.6.jpg",
        "name": "SR 7 : SR 30"
    }, {
        "id": "cctv_15371",
        "url": "/georgiasnapshots/FLYD-CAM-001.jpg",
        "name": "SR 1/US 27 : SR 20/Turner McCall Blvd"
    }, {
        "id": "cctv_46523",
        "url": "/georgiasnapshots/GDOT-CAM-SR22-218.3.jpg",
        "name": "SR22/US80 : 2nd Avenue"
    }, {
        "id": "cctv_13073",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-126.jpg",
        "name": "I-20 : LAKE OCONEE"
    }, {
        "id": "cctv_10140",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-018.jpg",
        "name": "I-75 : SR 2"
    }, {
        "id": "cctv_32645",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-212.jpg",
        "name": "I-75 : BILL GARDNER PKY ENT RAMP"
    }, {
        "id": "cctv_32653",
        "url": "/georgiasnapshots/HART-CAM-004.jpg",
        "name": "SR 8(Franklin St) : Carter St"
    }, {
        "id": "cctv_16341",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-317.15.jpg",
        "name": "I-75 : EXT 317"
    }, {
        "id": "cctv_6013",
        "stream": "/georgiavss5/bibb-cam-022.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 4.5"
    }, {
        "id": "cctv_32548",
        "url": "/georgiasnapshots/BARR-CAM-007.jpg",
        "name": "SR 316 : Patrick Mill Rd"
    }, {
        "id": "cctv_6842",
        "url": "/georgiasnapshots/BIBB-CAM-107.jpg",
        "name": "I-75 : AT HARTLEY BR"
    }, {
        "id": "cctv_16119",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-10.75.jpg",
        "name": "SR 20/SR 61 : PEOPLES VALLEY RD"
    }, {
        "id": "cctv_9332",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.jpg",
        "name": "I-75 : SR 146 / CLOUD SPR RD"
    }, {
        "id": "cctv_16144",
        "url": "/georgiasnapshots/GDOT-CAM-SR100-1.75.jpg",
        "name": "SR 100 : I-20 EB (EXIT 5)"
    }, {
        "id": "cctv_32859",
        "url": "/georgiasnapshots/AUG-CAM-224.jpg",
        "name": "Washington Rd. : Fury's Ferry Rd/Kings Chapel"
    }, {
        "id": "cctv_32866",
        "url": "/georgiasnapshots/AUG-CAM-259.jpg",
        "name": "Wrightsboro Rd. : Bobby Jones Exp.(NB ramp)"
    }, {
        "id": "cctv_46235",
        "url": "/georgiasnapshots/BULL-CAM-002.jp",
        "name": "SR 67 BypaVeterans Memorial Pkw : SR 73 (S Main St)"
    }, {
        "id": "cctv_46307",
        "url": "/georgiasnapshots/GWIN-CAM-258.jpg",
        "name": "SR 316 : WILLIAMS FARM DR"
    }, {
        "id": "cctv_32908",
        "url": "/georgiasnapshots/UNI-CAM-003.jpg",
        "name": "SR 2 : SR 11"
    }, {
        "id": "cctv_46561",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-127.00.jpg",
        "name": "I-16 : SR 67"
    }, {
        "id": "cctv_32907",
        "url": "/georgiasnapshots/AUG-CAM-201.jpg",
        "name": "Walton Way : Bransford Rd."
    }, {
        "id": "cctv_32852",
        "url": "/georgiasnapshots/AUG-CAM-750.jpg",
        "name": "Skinner Mill Rd. : Skinner Mill Circle"
    }, {
        "id": "cctv_46257",
        "url": "/georgiasnapshots/LIB-CAM-002.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 196 (Leroy Coffer Highway)"
    }, {
        "id": "cctv_6040",
        "stream": "/georgiavss1/ams-cam-113.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Speedway Blvd"
    }, {
        "id": "cctv_13275",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-290.jpg",
        "name": "I-75 : SR 20 / Canton Highway"
    }, {
        "id": "cctv_15907",
        "url": "/georgiasnapshots/COLU-CAM-014.jpg",
        "name": "I-185 : AIRPORT THRUWAY"
    }, {
        "id": "cctv_13585",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-160.jpg",
        "name": "I-75 : Rocky Creek Rd"
    }, {
        "id": "cctv_15761",
        "url": "/georgiasnapshots/SAV-CAM-021.jpg",
        "name": "SR 26/VICTORY DR : WATERS AVE"
    }, {
        "id": "cctv_32661",
        "url": "/georgiasnapshots/LUMPKN-CAM-001.jpg",
        "name": "SR 9 : Wal-Mart/ E Main"
    }, {
        "id": "cctv_32963",
        "url": "/georgiasnapshots/OCNE-CAM-003.jpg",
        "name": "SR 316 : Oconee Connector"
    }, {
        "id": "cctv_16099",
        "url": "http://navigator-c2c.dot.ga.gov/PICK-CAM-001.jpg",
        "name": "SR 515 : SR 53"
    }, {
        "id": "cctv_32898",
        "url": "/georgiasnapshots/AUG-CAM-200.jpg",
        "name": "Walton Way : Baker Ave."
    }, {
        "id": "cctv_46337",
        "url": "/georgiasnapshots/COFF-CAM-002.jpg",
        "name": "SR 31 : SR 158/ BAKER HWY"
    }, {
        "id": "cctv_13066",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-129.jpg",
        "name": "I-85 : SR 53 / WINDER HWY"
    }, {
        "id": "cctv_13659",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-336.jpg",
        "name": "I-75 : US 41/76 - Rocky Face"
    }, {
        "id": "cctv_46552",
        "url": "/georgiasnapshots/LIB-CAM-005.jpg",
        "name": "SR 38 : SR 196/ Veterans Pkwy"
    }, {
        "id": "cctv_5976",
        "url": "/georgiasnapshots/BIBB-CAM-514.jpg",
        "name": "MERCER UNIV : OGLESBY PL"
    }, {
        "id": "cctv_32561",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-028.jpg",
        "name": "SR 306 : SR 400 NB"
    }, {
        "id": "cctv_16009",
        "url": "/georgiasnapshots/GDOT-CAM-SR31-6.77.jpg",
        "name": "SR 31 : SR 158/ Baker Street"
    }, {
        "id": "cctv_46339",
        "url": "/georgiasnapshots/COFF-CAM-004.jpg",
        "name": "SR 31 : SR 135"
    }, {
        "id": "cctv_6854",
        "stream": "/georgiavss1/fay-cam-107.stream/playlist.m3u8",
        "name": "SR 85 : Pavilion Pkwy / Pine Trail Rd"
    }, {
        "id": "cctv_16194",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-144.jpg",
        "name": "I-75 : Russell Pky"
    }, {
        "id": "cctv_46232",
        "url": "/georgiasnapshots/BRY-CAM-001.jpg",
        "name": "SR 144 : SR 25"
    }, {
        "id": "cctv_16005",
        "url": "/georgiasnapshots/GDOT-CAM-SR38-5.01.jpg",
        "name": "SR 38/3RD ST : SR 91/WILEY AVE"
    }, {
        "id": "cctv_5973",
        "url": "/georgiasnapshots/BIBB-CAM-511.jpg",
        "name": "PIO NONO AVE : NEWBERG AVE"
    }, {
        "id": "cctv_46508",
        "url": "/georgiasnapshots/SAV-CAM-042.jpg",
        "name": "MLK Blvd. : Jones St."
    }, {
        "id": "cctv_15414",
        "url": "/georgiasnapshots/COW-CAM-007.jpg",
        "name": "SR 34 : SR 54"
    }, {
        "id": "cctv_46332",
        "url": "/georgiasnapshots/BENH-CAM-004.jpg",
        "name": "SR 11 : SR 107"
    }, {
        "id": "cctv_15899",
        "url": "/georgiasnapshots/SAV-CAM-037.jpg",
        "name": "SR 26/US 80 : JONES AVE"
    }, {
        "id": "cctv_13359",
        "url": "/georgiasnapshots/ROCK-CAM-113.jpg",
        "name": "SR 138 / McDonough Rd : I-20 EB Ramp"
    }, {
        "id": "cctv_32829",
        "url": "/georgiasnapshots/AUG-CAM-194.jpg",
        "name": "Walton Way : 5th St."
    }, {
        "id": "cctv_6033",
        "stream": "/georgiavss5/bibb-cam-037.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF ESTES RD"
    }, {
        "id": "cctv_46381",
        "url": "/georgiasnapshots/WILC-CAM-001.jpg",
        "name": "SR30 : SR112/ASHLEY ST"
    }, {
        "id": "cctv_46474",
        "url": "/georgiasnapshots/BART-CAM-102.jpg",
        "name": "SR 113 : Henderson Dr"
    }, {
        "id": "cctv_46247",
        "url": "/georgiasnapshots/CHAT-CAM-004.jpg",
        "name": "SR 21 (Augusta Road) : Rice Mill Rd/Market Blvd"
    }, {
        "id": "cctv_16195",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-144.2.jpg",
        "name": "I-75 : Russell Pky"
    }, {
        "id": "cctv_16182",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.11.jpg",
        "name": "SR 1 : SR 166 EB"
    }, {
        "id": "cctv_32962",
        "url": "/georgiasnapshots/OCNE-CAM-002.jpg",
        "name": "SR 10 : SR 316 EB Ramp"
    }, {
        "id": "cctv_16085",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-2.9.jpg",
        "name": "SR 247C / Watson Blvd : Carl Vinson Pkwy"
    }, {
        "id": "cctv_32937",
        "url": "/georgiasnapshots/GWIN-CAM-326.jpg",
        "name": "SR 211 : Grand Hickory Dr"
    }, {
        "id": "cctv_32569",
        "url": "/georgiasnapshots/FORS-CAM-036.jpg",
        "name": "SR 400 : Hubbard Town/Cross Rd"
    }, {
        "id": "cctv_15807",
        "url": "/georgiasnapshots/SAV-CAM-024.jpg",
        "name": "SR 26/VICTORY DR : WALLIN ST"
    }, {
        "id": "cctv_6037",
        "url": "/georgiasnapshots/BIBB-CAM-041.jpg",
        "name": "ZEBULON RD : I-475 NB RAMP"
    }, {
        "id": "cctv_32664",
        "url": "/georgiasnapshots/OCNE-CAM-003",
        "name": "SR 53 : Mars Hill Rd"
    }, {
        "id": "cctv_13568",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-205.jpg",
        "name": "I-75 : SR 16"
    }, {
        "id": "cctv_9127",
        "url": "/georgiasnapshots/COLU-CAM-006.jpg",
        "name": "Spur 22/Wynnton Rd : Buena Vista Rd"
    }, {
        "id": "cctv_32842",
        "url": "/georgiasnapshots/AUG-CAM-039.jpg",
        "name": "Broad St. : Eve"
    }, {
        "id": "cctv_16189",
        "url": "/georgiasnapshots/GDOT-CAM-SR11-18.8.jpg",
        "name": "SR 11/ US 41 : SR 96"
    }, {
        "id": "cctv_46293",
        "url": "/georgiasnapshots/TAT-CAM-002.jpg",
        "name": "SR 23/57 : SR 144 (W BERNARD ST)"
    }, {
        "id": "cctv_15325",
        "url": "/georgiasnapshots/GDOT-CAM-SR219-9.1.jpg",
        "name": "SR 219 : Pegasus Pkwy"
    }, {
        "id": "cctv_5988",
        "url": "/georgiasnapshots/BIBB-CAM-526.jpg",
        "name": "VINEVILLE AVE : HOLT AVE"
    }, {
        "id": "cctv_6049",
        "url": "/georgiasnapshots/AMS-CAM-903.jpg",
        "name": "SR 20 : S HAMPTON RD"
    }, {
        "id": "cctv_16136",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-12.35.jpg",
        "name": "SR 3 : GRASSDALE RD"
    }, {
        "id": "cctv_32924",
        "url": "/georgiasnapshots/COW-CAM-019.jpg",
        "name": "SR 154 : I-85 SB ENT"
    }, {
        "id": "cctv_32855",
        "url": "/georgiasnapshots/AUG-CAM-169.jpg",
        "name": "River Watch Pkwy. : I-20 EB ramp"
    }, {
        "id": "cctv_32890",
        "url": "/georgiasnapshots/AUG-CAM-113.jpg",
        "name": "Hwy 25 : Tubman Home Rd."
    }, {
        "id": "cctv_32906",
        "url": "/georgiasnapshots/AUG-CAM-209.jpg",
        "name": "Walton Way : Lake Forest Dr."
    }, {
        "id": "cctv_13554",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.9.jpg",
        "name": "SR 20 : Hickory Flat Highway"
    }, {
        "id": "cctv_46243",
        "url": "/georgiasnapshots/CHAR-CAM-001.jpg",
        "name": "SR 4 (2nd St) : SR 40 (Main St)"
    }, {
        "id": "cctv_32896",
        "url": "/georgiasnapshots/AUG-CAM-188.jpg",
        "name": "Telfair St. : 12th St."
    }, {
        "id": "cctv_13546",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-109.jpg",
        "name": "I-20 : Madison Salt Barn"
    }, {
        "id": "cctv_32868",
        "url": "/georgiasnapshots/AUG-CAM-257.jpg",
        "name": "Wrightsboro Rd. : Augusta West Pkwy./B Chapel"
    }, {
        "id": "cctv_46363",
        "url": "/georgiasnapshots/MITC-CAM-003.jpg",
        "name": "SR 37 : HARNEY ST"
    }, {
        "id": "cctv_32554",
        "url": "/georgiasnapshots/DWSN-CAM-002.jpg",
        "name": "SR 400 : Dawson Forest"
    }, {
        "id": "cctv_9283",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-047.jpg",
        "name": "I-85 : SR 34 / Bullsboro Dr"
    }, {
        "id": "cctv_46325",
        "url": "/georgiasnapshots/HABE-CAM-004.jpg",
        "name": "SR 105 : VFW Rd/Wal-mart"
    }, {
        "id": "cctv_32652",
        "url": "/georgiasnapshots/HART-CAM-003.jpg",
        "name": "SR 8/Howell St : SR 77"
    }, {
        "id": "cctv_16172",
        "url": "/georgiasnapshots/GDOT-CAM-I-575-20.jpg",
        "name": "I-575 : SR 5 BU (EXIT 20)"
    }, {
        "id": "cctv_15906",
        "url": "/georgiasnapshots/SAV-CAM-040.jpg",
        "name": "SR 25/US 17 : SR 307(SOUTH)"
    }, {
        "id": "cctv_46469",
        "url": "/georgiasnapshots/BART-CAM-101.jpg",
        "name": "SR 113 : Euharlee Rd"
    }, {
        "id": "cctv_15623",
        "url": "/georgiasnapshots/SAV-CAM-008.jpg",
        "name": "SR 25/US 17 : FALL AVE"
    }, {
        "id": "cctv_46393",
        "url": "/georgiasnapshots/WALT-CAM-005",
        "name": "SR 81 : SR 138"
    }, {
        "id": "cctv_6009",
        "stream": "/georgiavss5/bibb-cam-018.stream/playlist.m3u8",
        "name": "I-475 : 1/2 MI S OF US 80"
    }, {
        "id": "cctv_15426",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-006.jpg",
        "name": "SR 16 : SR 92/HAMMOND DR"
    }, {
        "id": "cctv_6027",
        "stream": "/georgiavss5/bibb-cam-032.stream/playlist.m3u8",
        "name": "I-475 : EXIT TO ZEBULON RD"
    }, {
        "id": "cctv_46236",
        "url": "/georgiasnapshots/BULL-CAM-003.jpg",
        "name": "SR 73 Jones Lane Hwy : SR 46"
    }, {
        "id": "cctv_15735",
        "url": "/georgiasnapshots/SAV-CAM-016.jpg",
        "name": "SR 26/US 80 : STILES AVE"
    }, {
        "id": "cctv_32849",
        "url": "/georgiasnapshots/AUG-CAM-221.jpg",
        "name": "Washington Rd. : Bertram Rd."
    }, {
        "id": "cctv_6004",
        "stream": "/georgiavss5/bibb-cam-013.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1.5"
    }, {
        "id": "cctv_46388",
        "url": "/georgiasnapshots/BIBB-CAM-540.jpg",
        "name": "SR 11/Houston Rd : Sardis Church Rd"
    }, {
        "id": "cctv_13175",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-007.jpg",
        "name": "I-16 : W OF Marion Rd"
    }, {
        "id": "cctv_9189",
        "url": "/georgiasnapshots/COLU-CAM-013.jpg",
        "name": "US 80/SR 22 : BRADLEY PARK DR"
    }, {
        "id": "cctv_32543",
        "url": "/georgiasnapshots/BARR-CAM-002.jpg",
        "name": "SR 11/SR 53/SR 211 : Candler St"
    }, {
        "id": "cctv_9311",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-320.jpg",
        "name": "I-75 : SR 136"
    }, {
        "id": "cctv_32549",
        "url": "/georgiasnapshots/BARR-CAM-008.jpg",
        "name": "SR 316 : Carl-Bethlehem Rd"
    }, {
        "id": "cctv_32903",
        "url": "/georgiasnapshots/AUG-CAM-211.jpg",
        "name": "Walton Way : Monte Sano Ave."
    }, {
        "id": "cctv_15377",
        "url": "/georgiasnapshots/FLYD-CAM-007.jpg",
        "name": "SR 1 Loop/Veterans Mem Hwy : Riverside Pkwy"
    }, {
        "id": "cctv_16330",
        "url": "/georgiasnapshots/COW-CAM-021.jpg",
        "name": "Collinsworth Rd : I-85 SB ENT"
    }, {
        "id": "cctv_16371",
        "url": "/georgiasnapshots/FORS-CAM-019.jpg",
        "name": "SR 9 (20) : Pirkle Ferry Rd"
    }, {
        "id": "cctv_6050",
        "url": "/georgiasnapshots/AMS-CAM-904.jpg",
        "name": "SR 20 : HAMPTON LOC GRV RD"
    }, {
        "id": "cctv_5980",
        "url": "/georgiasnapshots/BIBB-CAM-518.jpg",
        "name": "EISENHOWER PKWY : MACON TECH"
    }, {
        "id": "cctv_32640",
        "url": "/georgiasnapshots/HALL-CAM-021.jpg",
        "name": "SR 60 : SR 136/Price Rd"
    }, {
        "id": "cctv_15224",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-023.jpg",
        "name": "I-75 : Lowndes Co Weigh Station"
    }, {
        "id": "cctv_7360",
        "url": "/georgiasnapshots/COW-CAM-001.jpg",
        "name": "SR 34 / Bullsboro Dr : Newnan Crossing Bypass"
    }, {
        "id": "cctv_13185",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-090.jpg",
        "name": "I-95 : SR 144"
    }, {
        "id": "cctv_12982",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-035.jpg",
        "name": "I-85 : US 29"
    }, {
        "id": "cctv_32636",
        "url": "/georgiasnapshots/HALL-CAM-017.jpg",
        "name": "SR 53 : Sardis Rd"
    }, {
        "id": "cctv_32870",
        "url": "/georgiasnapshots/AUG-CAM-272.jpg",
        "name": "Wrightsboro Rd. : Pine Needle Rd."
    }, {
        "id": "cctv_16366",
        "url": "/georgiasnapshots/FORS-CAM-015.jpg",
        "name": "SR 400 : Carlislie Rd/Whitemore Dr"
    }, {
        "id": "cctv_9301",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-005.jpg",
        "name": "I-20 : SR 100"
    }, {
        "id": "cctv_13095",
        "url": "/georgiasnapshots/FAY-CAM-016.jpg",
        "name": "SR 54 : MacDuff Pkwy"
    }, {
        "id": "cctv_16344",
        "url": "/georgiasnapshots/GDOT-CAM-SR156-13.07.jpg",
        "name": "SR 156 : WARRIOR PATH/CURTIS PKWY"
    }, {
        "id": "cctv_32566",
        "url": "/georgiasnapshots/FORS-CAM-033.jpg",
        "name": "SR 400 : SR 369"
    }, {
        "id": "cctv_9162",
        "url": "/georgiasnapshots/COLU-CAM-303.jpg",
        "name": "I-185 : NEAR CMS 8"
    }, {
        "id": "cctv_15214",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-188.jpg",
        "name": "I-20 : West of Chamblin Rd"
    }, {
        "id": "cctv_13595",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-175.jpg",
        "name": "I-75 : Pate Rd"
    }, {
        "id": "cctv_32642",
        "url": "/georgiasnapshots/HALL-CAM-023.jpg",
        "name": "SR 365 : Ramsey Rd"
    }, {
        "id": "cctv_13331",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-199.jpg",
        "name": "I-20 : Washington Rd"
    }, {
        "id": "cctv_9130",
        "url": "/georgiasnapshots/COLU-CAM-009.jpg",
        "name": "Spur 22/Macon Rd : Rigdon Rd"
    }, {
        "id": "cctv_13097",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-148.jpg",
        "name": "I-20 : SR 22"
    }, {
        "id": "cctv_6848",
        "stream": "/georgiavss5/bibb-cam-108.stream/playlist.m3u8",
        "name": "I-75 : AT HARTLEY BR RD"
    }, {
        "id": "cctv_46540",
        "url": "/georgiasnapshots/BULL-CAM-006jpg",
        "name": "SR 67/ SR 73 BP : Lanier Dr"
    }, {
        "id": "cctv_46345",
        "url": "/georgiasnapshots/CRIS-CAM-002.jpg",
        "name": "SR 300 : OLD HATLEY RD"
    }, {
        "id": "cctv_32537",
        "url": "/georgiasnapshots/BANK-CAM-001.jpg",
        "name": "SR 15 : I-85 NB"
    }, {
        "id": "cctv_32574",
        "url": "/georgiasnapshots/FAY-CAM-211.jpg",
        "name": "SR 74 : Wisdom Rd"
    }, {
        "id": "cctv_16305",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.55.jpg",
        "name": "I-75 : EXT 345"
    }, {
        "id": "cctv_9296",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-009.jpg",
        "name": "I-20 : Waco Road"
    }, {
        "id": "cctv_46531",
        "url": "/georgiasnapshots/CHAT-CAM-012.jpg",
        "name": "SR 204 : Gateway Blvd"
    }, {
        "id": "cctv_16114",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-7.15.jpg",
        "name": "SR 52 : SR 286"
    }, {
        "id": "cctv_46528",
        "url": "/georgiasnapshots/CHAT-CAM-009.jpg",
        "name": "SR 21 : Gulfstream Rd/Crossgate Rd"
    }, {
        "id": "cctv_32920",
        "url": "/georgiasnapshots/STEPH-CAM-004.jpg",
        "name": "SR 17 ALT : SR 365"
    }, {
        "id": "cctv_16141",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.95.jpg",
        "name": "SR 2 : LAKE VIEW HIGH"
    }, {
        "id": "cctv_32658",
        "url": "/georgiasnapshots/JACKS-CAM-004.jpg",
        "name": "SR 11 Bus / US 129 Bus : SR 15 Alt"
    }, {
        "id": "cctv_16338",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.40.jpg",
        "name": "I-75 : EXT 328"
    }, {
        "id": "cctv_16001",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-11.59.jpg",
        "name": "SR 1/CUTHBERT BYPASS : SR 50/BROAD ST"
    }, {
        "id": "cctv_15218",
        "url": "Http://navigator-c2c.dot.ga.gov/snapshots/GDOT-CAM-I-95-109.5.jpg",
        "name": "I-95 : SR 21"
    }, {
        "id": "cctv_13296",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-101.jpg",
        "name": "I-75 : US 280"
    }, {
        "id": "cctv_32861",
        "url": "/georgiasnapshots/AUG-CAM-168.jpg",
        "name": "River Watch Pkwy. : Fury's Ferry Rd."
    }, {
        "id": "cctv_16340",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.55.jpg",
        "name": "I-75 : EXT 318"
    }, {
        "id": "cctv_46256",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/GORD-CAM-002.jpg",
        "name": "SR 53 : SR 3"
    }, {
        "id": "cctv_16199",
        "url": "/georgiasnapshots/COW-CAM-008.jpg",
        "name": "SR 14/US 29 : SR 16"
    }, {
        "id": "cctv_32651",
        "url": "/georgiasnapshots/HART-CAM-002.jpg",
        "name": "SR 8 : Carolina St."
    }, {
        "id": "cctv_9307",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.jpg",
        "name": "I-75 : CASSVILLE/WHITE RD"
    }, {
        "id": "cctv_15810",
        "url": "/georgiasnapshots/SAV-CAM-027.jpg",
        "name": "SR 26/US 80 : JOHNNY MERCER BLVD (WEST)"
    }, {
        "id": "cctv_46491",
        "url": "/georgiasnapshots/CARR-CAM-001.jpg",
        "name": "SR 1 : Roop St"
    }, {
        "id": "cctv_46237",
        "url": "/georgiasnapshots/BULL-CAM-004.jpg",
        "name": "SR 26 Northside Drive : SR 67 Bypass Veterans Memorial Parkway"
    }, {
        "id": "cctv_16151",
        "url": "/georgiasnapshots/GDOT-CAM-SR6-24.4.jpg",
        "name": "SR 6 : SR 113"
    }, {
        "id": "cctv_32565",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-032.jpg",
        "name": "SR 400 SB : Pilgrim Mill Rd"
    }, {
        "id": "cctv_13362",
        "url": "/georgiasnapshots/ROCK-CAM-123.jpg",
        "name": "SR 138 / Walnut Grove Rd : Lakewood Dr / Boar Tusk Rd"
    }, {
        "id": "cctv_32919",
        "url": "/georgiasnapshots/STEPH-CAM-003.jpg",
        "name": "SR 17 ALT : Collins Rd"
    }, {
        "id": "cctv_46495",
        "url": "/georgiasnapshots/CARR-CAM-401.jpg",
        "name": "SR 3N : SR 201 Tunnel Hill"
    }, {
        "id": "cctv_13181",
        "url": "/georgiasnapshots/GDOT-CAM-US341-4.6.jpg",
        "name": "341 /SR 27 : US 280 / THIRD AVE"
    }, {
        "id": "cctv_15450",
        "url": "/georgiasnapshots/GDOT-CAM-SR18-6.6.jpg",
        "name": "SR 18/Main St : SR 42-83/Lee St"
    }, {
        "id": "cctv_16129",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.30.jpg",
        "name": "I-75 : GLADE RD (EXIT 278)"
    }, {
        "id": "cctv_16362",
        "url": "/georgiasnapshots/COW-CAM-023.jpg",
        "name": "Poplar Rd : I-85 SB ENT"
    }, {
        "id": "cctv_6016",
        "stream": "/georgiavss5/bibb-cam-025.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 6"
    }, {
        "id": "cctv_32589",
        "url": "/georgiasnapshots/WALT-CAM-002",
        "name": "SR 10 BUS : SR 138"
    }, {
        "id": "cctv_32660",
        "url": "/georgiasnapshots/JACKS-CAM-006.jpg",
        "name": "SR 53 : I-85 SB"
    }, {
        "id": "cctv_32887",
        "url": "/georgiasnapshots/AUG-CAM-091.jpg",
        "name": "Hwy 1 : Bobby Jones Exp. (WB ramp)"
    }, {
        "id": "cctv_16334",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-135.jpg",
        "name": "I-75 : US 41/SR 7/127/224"
    }, {
        "id": "cctv_15975",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-319.20.jpg",
        "name": "I-75 : RESACA REST AREA"
    }, {
        "id": "cctv_15467",
        "url": "/georgiasnapshots/COW-CAM-006.jpg",
        "name": "SR 34 : Fischer Rd"
    }, {
        "id": "cctv_5984",
        "url": "/georgiasnapshots/BIBB-CAM-522.jpg",
        "name": "EISENHOWER PKWY : W OF I-475"
    }, {
        "id": "cctv_13096",
        "url": "/georgiasnapshots/SPAL-CAM-001.jpg",
        "name": "SR 3 : SR 92 / McIntosh Rd"
    }, {
        "id": "cctv_5983",
        "url": "/georgiasnapshots/BIBB-CAM-521.jpg",
        "name": "EISENHOWER PKWY : E OF I-475"
    }, {
        "id": "cctv_32540",
        "url": "/georgiasnapshots/FAY-CAM-214.jpg",
        "name": "SR 54 : Peachtree Pky"
    }, {
        "id": "cctv_46334",
        "url": "/georgiasnapshots/BERR-CAM-001.jpg",
        "name": "SR 11 : DENNIS AVE"
    }, {
        "id": "cctv_12894",
        "url": "/georgiasnapshots/GDOT-CAM-US19-0.02.jpg",
        "name": "SR 11 : at Neels Gap"
    }, {
        "id": "cctv_7363",
        "url": "/georgiasnapshots/COW-CAM-002.jpg",
        "name": "SR 34 Bypass : SR 14 / Jackson St"
    }, {
        "id": "cctv_13201",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-110.jpg",
        "name": "I-95 : WELCOME CENTER - SC / GA LINE"
    }, {
        "id": "cctv_13186",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-062.jpg",
        "name": "I-16 : MINTER TWEED RD (CMS 909)"
    }, {
        "id": "cctv_16176",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.45.jpg",
        "name": "SR 113 : I-20 WB (EXIT 19)"
    }, {
        "id": "cctv_6000",
        "stream": "/georgiavss5/bibb-cam-009.stream/playlist.m3u8",
        "name": "I-475 : N OF HARTLEY BR RD"
    }, {
        "id": "cctv_5964",
        "url": "/georgiasnapshots/BIBB-CAM-502.jpg",
        "name": "FIRST ST : POPLAR ST"
    }, {
        "id": "cctv_46306",
        "url": "/georgiasnapshots/GWIN-CAM-257.jpg",
        "name": "SR 316 : HARBINS RD"
    }, {
        "id": "cctv_16188",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-21.2.jpg",
        "name": "SR 247 : N Davis Dr"
    }, {
        "id": "cctv_9287",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.jpg",
        "name": "I-75 : 1/2 MI N OF SR 3"
    }, {
        "id": "cctv_15729",
        "url": "/georgiasnapshots/SAV-CAM-011.jpg",
        "name": "CHATHAM PARKWAY : CHATHAM CENTER"
    }, {
        "id": "cctv_13579",
        "url": "/georgiasnapshots/COLU-CAM-300.jpg",
        "name": "Victory Dr : Border Dr"
    }, {
        "id": "cctv_13101",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-114.jpg",
        "name": "I-20 : SR 24 / EATONTON RD"
    }, {
        "id": "cctv_15448",
        "url": "/georgiasnapshots/HNRY-CAM-006.jpg",
        "name": "SR 81 : Keys Ferry Rd"
    }, {
        "id": "cctv_46350",
        "url": "/georgiasnapshots/DECA-CAM-003.jpg",
        "name": "SR 1 Bu : BROUGHTON ST"
    }, {
        "id": "cctv_16328",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-350.jpg",
        "name": "I-75 : EXT 350"
    }, {
        "id": "cctv_32834",
        "url": "/georgiasnapshots/AUG-CAM-199.jpg",
        "name": "Walton Way : 12th St."
    }, {
        "id": "cctv_32846",
        "url": "/georgiasnapshots/AUG-CAM-219.jpg",
        "name": "Washington Rd : Azalea Dr"
    }, {
        "id": "cctv_13178",
        "url": "/georgiasnapshots/GDOT-CAM-US341-16.5.jpg",
        "name": "341/SR 27 : US 84"
    }, {
        "id": "cctv_15547",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.jpg",
        "name": "I-75 : SR 3"
    }, {
        "id": "cctv_32867",
        "url": "/georgiasnapshots/AUG-CAM-260.jpg",
        "name": "Wrightsboro Rd. : Bobby Jones Exp.(SB ramp)"
    }, {
        "id": "cctv_32853",
        "url": "/georgiasnapshots/AUG-CAM-170.jpg",
        "name": "River Watch Pkwy. : River Shoals Pkwy."
    }, {
        "id": "cctv_32912",
        "url": "https://navigator-c2c.dot.ga.gov/snapshots/STEPH-CAM-002.jpg",
        "name": "SR 17 ALT : Towne Plaza/Alliance Dr"
    }, {
        "id": "cctv_15237",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-143.jpg",
        "name": "I-16 : West of Bryan Co Weigh Station EB"
    }, {
        "id": "cctv_15264",
        "url": "/georgiasnapshots/ROCK-CAM-108.jpg",
        "name": "SR 138 / McDonough Rd : Flat Shoals Rd"
    }, {
        "id": "cctv_16106",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-8.10.jpg",
        "name": "SR 515 : SR 60"
    }, {
        "id": "cctv_32900",
        "url": "/georgiasnapshots/AUG-CAM-210.jpg",
        "name": "Walton Way : Milledge Rd."
    }, {
        "id": "cctv_32550",
        "url": "/georgiasnapshots/BARR-CAM-009.jpg",
        "name": "SR 316 : SR 81"
    }, {
        "id": "cctv_32562",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-029.jpg",
        "name": "SR 306 : SR 400 SB"
    }, {
        "id": "cctv_46251",
        "url": "/georgiasnapshots/EVA-CAM-001.jpg",
        "name": "SR 73 (North Duval Street) : SR 30 (West Main Street)"
    }, {
        "id": "cctv_13128",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-018.jpg",
        "name": "I-985 : N OF ELACHEE DR (CMS 9853)"
    }, {
        "id": "cctv_13195",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-051.jpg",
        "name": "I-16 : US 441"
    }, {
        "id": "cctv_13555",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-13.jpg",
        "name": "SR 20 : I-575"
    }, {
        "id": "cctv_16145",
        "url": "/georgiasnapshots/GDOT-CAM-SR100-1.9.jpg",
        "name": "SR 100 : 1-20 WB (EXIT 5)"
    }, {
        "id": "cctv_10173",
        "stream": "/georgiavss1/fay-cam-011.stream/playlist.m3u8",
        "name": "SR 54/Lanier Ave : Jeff Davis Dr"
    }, {
        "id": "cctv_16190",
        "url": "/georgiasnapshots/GDOT-CAM-SR11-21.2.jpg",
        "name": "SR 11/ US 41 : Russell Pky"
    }, {
        "id": "cctv_9184",
        "url": "/georgiasnapshots/COLU-CAM-305.jpg",
        "name": "I-185 : MILE 1.9"
    }, {
        "id": "cctv_46390",
        "url": "/georgiasnapshots/BIBB-CAM-542.jpg",
        "name": "US 41/SR 49 : Industrial Hwy Conn."
    }, {
        "id": "cctv_5181",
        "stream": "/georgiavss3/gdot-cam-451.stream/playlist.m3u8",
        "name": "I-75 : S OF PRIEST RD"
    }, {
        "id": "cctv_6841",
        "url": "/georgiasnapshots/BIBB-CAM-105.jpg",
        "name": "I-75 : 1/2 MI N OF SARDIS CHURCH RD"
    }, {
        "id": "cctv_16118",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-18.15.jpg",
        "name": "SR 3/DALTON BYPASS : SR 71"
    }, {
        "id": "cctv_15739",
        "url": "/georgiasnapshots/SAV-CAM-018.jpg",
        "name": "SR 26/VICTORY DR : WHITAKER ST"
    }, {
        "id": "cctv_46551",
        "url": "/georgiasnapshots/GLY-CAM-008.jpg",
        "name": "SR 25 Spur : Altama Ave"
    }, {
        "id": "cctv_13065",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-149.jpg",
        "name": "I-85 : SR 15 / US 441"
    }, {
        "id": "cctv_13074",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-130.jpg",
        "name": "I-20 : SR 44 / LAKE OCONEE PKWY"
    }, {
        "id": "cctv_13599",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-040.jpg",
        "name": "I-75 : S of Rountree Br Rd / CMS-922"
    }, {
        "id": "cctv_32882",
        "url": "/georgiasnapshots/AUG-CAM-090.jpg",
        "name": "Hwy 1 : Bobby Jones Exp. (EB ramp)"
    }, {
        "id": "cctv_46524",
        "url": "/georgiasnapshots/CHAT-CAM-005.jpg",
        "name": "SR 26 : Pooler Pkwy SB"
    }, {
        "id": "cctv_16101",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-7.9.jpg",
        "name": "SR 515 : HIGHLAND PKWY/ELLER RD"
    }, {
        "id": "cctv_15813",
        "url": "/georgiasnapshots/SAV-CAM-030.jpg",
        "name": "JOHNNY MERCER BLVD : BRYAN WOODS RD"
    }, {
        "id": "cctv_10148",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-024.jpg",
        "name": "I-75 : SR 140"
    }, {
        "id": "cctv_9305",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-288.jpg",
        "name": "I-75 : SR 113 / MAIN ST"
    }, {
        "id": "cctv_46341",
        "url": "/georgiasnapshots/COFF-CAM-005.jpg",
        "name": "SR 31 : BRYAN ST"
    }, {
        "id": "cctv_13329",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-172.jpg",
        "name": "I-20 : Washington Rd"
    }, {
        "id": "cctv_6845",
        "url": "/georgiasnapshots/BIBB-CAM-102.jpg",
        "name": "I-75 : 3/4 MI S OF SARDIS CHURCH RD"
    }, {
        "id": "cctv_46555",
        "url": "/georgiasnapshots/LIB-CAM-007.jpg",
        "name": "SR 119 : SR 196/ Veterans Pkwy"
    }, {
        "id": "cctv_13325",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-084.jpg",
        "name": "I-20 : SR 162 / Salem Road"
    }, {
        "id": "cctv_46486",
        "url": "/georgiasnapshots/DADE-CAM-002.jpg",
        "name": "I-59 SB exit 11 (Ramp) : SR 136"
    }, {
        "id": "cctv_46358",
        "url": "/georgiasnapshots/LEE-CAM-004.jpg",
        "name": "SR 3/US 19 : LEDO RD"
    }, {
        "id": "cctv_46535",
        "url": "/georgiasnapshots/CHAT-CAM-016.jpg",
        "name": "SR 204 : Pine Grove Dr"
    }, {
        "id": "cctv_9292",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-001.jpg",
        "name": "I-20 : GA Welcome Center"
    }, {
        "id": "cctv_32874",
        "url": "/georgiasnapshots/AUG-CAM-060.jpg",
        "name": "Gordon Hwy : Bobby Jones Exp (EB ramp)"
    }, {
        "id": "cctv_5996",
        "url": "/georgiasnapshots/BIBB-CAM-534.jpg",
        "name": "RIVERSIDE DR : S OF SUE DR"
    }, {
        "id": "cctv_46380",
        "url": "/georgiasnapshots/TURN-CAM-001.jpg",
        "name": "SR7/US41 : SR112"
    }, {
        "id": "cctv_46224",
        "url": "/georgiasnapshots/WHITE-CAM-002.jpg",
        "name": "SR 11 BUS : SR 115"
    }, {
        "id": "cctv_46351",
        "url": "/georgiasnapshots/DOUG-CAM-094.jpg",
        "name": "SR 3 : HOLLY DR"
    }, {
        "id": "cctv_46367",
        "url": "/georgiasnapshots/THOM-CAM-004.jpg",
        "name": "SR 38BU : MADISON ST"
    }, {
        "id": "cctv_13570",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-021.jpg",
        "name": "I-85 : EXIT TO I-185 SB / CMS 914"
    }, {
        "id": "cctv_32873",
        "url": "/georgiasnapshots/AUG-CAM-061.jpg",
        "name": "Gordon Hwy : Bobby Jones Exp (WB ramp)"
    }, {
        "id": "cctv_15372",
        "url": "/georgiasnapshots/FLYD-CAM-002.jpg",
        "name": "SR 101 : Riverbend Drive"
    }, {
        "id": "cctv_13208",
        "url": "/georgiasnapshots/GDOT-CAM-I-185-007.jpg",
        "name": "I-185 : SR 85/MANCHESTER EXPY"
    }, {
        "id": "cctv_15730",
        "url": "/georgiasnapshots/SAV-CAM-012.jpg",
        "name": "CHATHAM PARKWAY : I-16 EB"
    }, {
        "id": "cctv_46229",
        "url": "/georgiasnapshots/BRAN-CAM-001.jpg",
        "name": "SR 520 : SR 23"
    }, {
        "id": "cctv_32889",
        "url": "/georgiasnapshots/AUG-CAM-243.jpg",
        "name": "Windsor Spring Rd. : Bobby Jones Exp.(EB ramp)"
    }, {
        "id": "cctv_16100",
        "url": "/georgiasnapshots/PICK-CAM-002.jpg",
        "name": "SR 515 : CAMP RD EXT"
    }, {
        "id": "cctv_13184",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-094.jpg",
        "name": "I-95 : SR 204"
    }, {
        "id": "cctv_16191",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-14.6.jpg",
        "name": "SR 7 : Hampton Court"
    }, {
        "id": "cctv_6849",
        "url": "/georgiasnapshots/BIBB-CAM-110.jpg",
        "name": "I-75 : MERGE FROM I-475"
    }, {
        "id": "cctv_13075",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-200.jpg",
        "name": "I-20 : GA VISITOR CTR / SC LINE"
    }, {
        "id": "cctv_15225",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-024.jpg",
        "name": "I-75 : Lowndes Co Weigh Station"
    }, {
        "id": "cctv_16320",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.4.jpg",
        "name": "I-75 : EXT 353"
    }, {
        "id": "cctv_15165",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-170.jpg",
        "name": "I-85 : FRANKLIN CO WEIGH STATION"
    }, {
        "id": "cctv_13167",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-022.jpg",
        "name": "I-985 : US 129 / ATHENS HWY"
    }, {
        "id": "cctv_46473",
        "url": "/georgiasnapshots/BART-CAM-202.jpg",
        "name": "SR 61 : Tellus Dr"
    }, {
        "id": "cctv_6041",
        "stream": "/georgiavss1/ams-cam-112.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : SR 81 / Upper Woolsey Rd"
    }, {
        "id": "cctv_9131",
        "url": "/georgiasnapshots/COLU-CAM-010.jpg",
        "name": "Spur 22/Macon Rd : I-185"
    }, {
        "id": "cctv_32925",
        "url": "/georgiasnapshots/COW-CAM-020.jpg",
        "name": "SR 154 : I-85 NB ENT"
    }, {
        "id": "cctv_15345",
        "url": "/georgiasnapshots/CHER-CAM-042.jpg",
        "name": "SR 92 : I-75 SB Entrance Ramp"
    }, {
        "id": "cctv_13204",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-189.jpg",
        "name": "I-20 : COLUMBIA CO WEIGH STN"
    }, {
        "id": "cctv_15215",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-187.jpg",
        "name": "I-20 : West of Baker Place Rd"
    }, {
        "id": "cctv_16326",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-349.8.jpg",
        "name": "I-75 : EXT 350"
    }, {
        "id": "cctv_9295",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-011.jpg",
        "name": "I-20 : GA 1 / US 27"
    }, {
        "id": "cctv_46534",
        "url": "/georgiasnapshots/CHAT-CAM-015.jpg",
        "name": "SR 21 : O'Leary Rd"
    }, {
        "id": "cctv_46259",
        "url": "/georgiasnapshots/LIB-CAM-004.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 119 (Airport/Talmadge Road)"
    }, {
        "id": "cctv_46344",
        "url": "/georgiasnapshots/CRIS-CAM-001.jpg",
        "name": "SR 30 : PECAN ST"
    }, {
        "id": "cctv_15997",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-015.jpg",
        "name": "SR 1 : Douglas Dr"
    }, {
        "id": "cctv_32830",
        "url": "/georgiasnapshots/AUG-CAM-195.jpg",
        "name": "Walton Way : 7th St."
    }, {
        "id": "cctv_6865",
        "url": "/georgiasnapshots/BIBB-CAM-539.jpg",
        "name": "MLK Jr Blvd : Oak St"
    }, {
        "id": "cctv_5986",
        "url": "/georgiasnapshots/BIBB-CAM-524.jpg",
        "name": "EMERY HWY : FT HILL RD"
    }, {
        "id": "cctv_13328",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-098.jpg",
        "name": "I-20 : SR 11"
    }, {
        "id": "cctv_15260",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-053.jpg",
        "name": "I-95 : South of Ardick Rd"
    }, {
        "id": "cctv_32905",
        "url": "/georgiasnapshots/AUG-CAM-088.jpg",
        "name": "Highland Ave. : Henry St."
    }, {
        "id": "cctv_6012",
        "stream": "/georgiavss5/bibb-cam-021.stream/playlist.m3u8",
        "name": "I-475 : COLUMBUS RD"
    }, {
        "id": "cctv_46333",
        "url": "/georgiasnapshots/OCNE-CAM-005.jpg",
        "name": "SR 15 : Barnett Shoals Rd"
    }, {
        "id": "cctv_46233",
        "url": "/georgiasnapshots/BRY-CAM-002.jpg",
        "name": "SR 30 : SR 119"
    }, {
        "id": "cctv_32869",
        "url": "/georgiasnapshots/AUG-CAM-265.jpg",
        "name": "Wrightsboro Rd. : Highland Ave."
    }, {
        "id": "cctv_16198",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-149.jpg",
        "name": "I-75 : SR 49"
    }, {
        "id": "cctv_5991",
        "url": "/georgiasnapshots/BIBB-CAM-529.jpg",
        "name": "RIVERSIDE DR : WIMBISH RD"
    }, {
        "id": "cctv_6031",
        "stream": "/georgiavss5/bibb-cam-035.stream/playlist.m3u8",
        "name": "I-475 : N OF COLARPARCHEE RD"
    }, {
        "id": "cctv_46542",
        "url": "/georgiasnapshots/CAMD-CAM-002.jpg",
        "name": "SR 40 : Gross Rd/Haddock Rd"
    }, {
        "id": "cctv_46250",
        "url": "/georgiasnapshots/EFF-CAM-002.jpg",
        "name": "SR 26/ US 80 : SR 30"
    }, {
        "id": "cctv_16150",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-12.3.jpg",
        "name": "SR 8 : SR 1"
    }, {
        "id": "cctv_46383",
        "url": "/georgiasnapshots/WORT-CAM-002.jpg",
        "name": "SR520 : SR33/MAIN"
    }, {
        "id": "cctv_46269",
        "url": "/georgiasnapshots/WAR-CAM-002.jpg",
        "name": "SR 520 (Francis Street) : SR 38 (Victory Drive) / George Street"
    }, {
        "id": "cctv_46550",
        "url": "/georgiasnapshots/GLY-CAM-007.jpg",
        "name": "SR 25 Spur : Canal Rd"
    }, {
        "id": "cctv_32544",
        "url": "/georgiasnapshots/BARR-CAM-004.jpg",
        "name": "SR 211 : I-85 NB"
    }, {
        "id": "cctv_46357",
        "url": "/georgiasnapshots/LEE-CAM-003.jpg",
        "name": "SR 520 : OAKLAND PKWY/N DOUBLEGATE"
    }, {
        "id": "cctv_16336",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.45.jpg",
        "name": "I-75 : EXT 333"
    }, {
        "id": "cctv_15378",
        "url": "/georgiasnapshots/FLYD-CAM-008.jpg",
        "name": "SR 1/US 27/MARTHA BERRY HWY : SR 1 Loop"
    }, {
        "id": "cctv_16120",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-305.65.jpg",
        "name": "I-75  : SR 140 (EXIT 306)"
    }, {
        "id": "cctv_15425",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-005.jpg",
        "name": "SR 16 : SPALDING DR"
    }, {
        "id": "cctv_13174",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-003.jpg",
        "name": "I-95 : SR 40"
    }, {
        "id": "cctv_46346",
        "url": "/georgiasnapshots/DECA-CAM-001.jpg",
        "name": "SR 1 Bu/ SCOTT ST : SR 30 Bu/ SHOTWELL ST"
    }, {
        "id": "cctv_32541",
        "url": "/georgiasnapshots/FAY-CAM-215.jpg",
        "name": "SR 74 : TDK Blvd/Crosstown Dr"
    }, {
        "id": "cctv_46510",
        "url": "/georgiasnapshots/SAV-CAM-044.jpg",
        "name": "Liberty St. : Price St."
    }, {
        "id": "cctv_46254",
        "url": "/georgiasnapshots/GLY-CAM-003.jpg",
        "name": "SR 25 (Glynn Avenue) : SR 25 Spur (Torras Causeway)"
    }, {
        "id": "cctv_15815",
        "url": "/georgiasnapshots/SAV-CAM-032.jpg",
        "name": "JOHNNY MERCER BLVD : WILMINGTON VILLAGE WAY"
    }, {
        "id": "cctv_32895",
        "url": "/georgiasnapshots/AUG-CAM-185.jpg",
        "name": "Telfair St. : 9th St. (James Brown Blvd.)"
    }, {
        "id": "cctv_5963",
        "url": "/georgiasnapshots/BIBB-CAM-501.jpg",
        "name": "RIVERSIDE DR : SPRING ST"
    }, {
        "id": "cctv_32877",
        "url": "/georgiasnapshots/AUG-CAM-062.jpg",
        "name": "Gordon Hwy : Olive Rd./Old Savannah Rd."
    }, {
        "id": "cctv_15570",
        "url": "/georgiasnapshots/HNRY-CAM-009.jpg",
        "name": "SR 81 : OLD JACKSON RD"
    }, {
        "id": "cctv_6032",
        "stream": "/georgiavss5/bibb-cam-036.stream/playlist.m3u8",
        "name": "I-475 : 2 MI S OF ESTES RD"
    }, {
        "id": "cctv_16342",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.25.jpg",
        "name": "I-75 : EXT 312"
    }, {
        "id": "cctv_15812",
        "url": "/georgiasnapshots/SAV-CAM-029.jpg",
        "name": "SR 26/US 80 : BRYAN WOODS RD"
    }, {
        "id": "cctv_13578",
        "url": "/georgiasnapshots/COLU-CAM-301.jpg",
        "name": "I-185 : Victory Dr"
    }, {
        "id": "cctv_46530",
        "url": "/georgiasnapshots/CHAT-CAM-011.jpg",
        "name": "SR 25 : Canebrake Rd"
    }, {
        "id": "cctv_9128",
        "url": "/georgiasnapshots/COLU-CAM-007.jpg",
        "name": "Spur 22/Wynnton Rd : Forest/Henry Ave"
    }, {
        "id": "cctv_15910",
        "url": "/georgiasnapshots/COLU-CAM-017.jpg",
        "name": "SR 85/2ND AVE : SR 22 CONN/MANCHESTER EXP"
    }, {
        "id": "cctv_16177",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-8.65.jpg",
        "name": "SR 61 : I-20 EB"
    }, {
        "id": "cctv_10174",
        "stream": "/georgiavss1/fay-cam-010.stream/playlist.m3u8",
        "name": "SR 54/Stonewall Ave : Jeff Davis Dr"
    }, {
        "id": "cctv_5972",
        "url": "/georgiasnapshots/BIBB-CAM-510.jpg",
        "name": "PIO NONO AVE : HIGHTOWER RD"
    }, {
        "id": "cctv_32964",
        "url": "/georgiasnapshots/OCNE-CAM-004.jpg",
        "name": "SR 316 : SR 10"
    }, {
        "id": "cctv_46364",
        "url": "/georgiasnapshots/MITC-CAM-004.jpg",
        "name": "SR 112 : SCOTT ST"
    }, {
        "id": "cctv_16082",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-2.2.jpg",
        "name": "SR 247C : Houston Lake Rd"
    }, {
        "id": "cctv_32639",
        "url": "/georgiasnapshots/HALL-CAM-020.jpg",
        "name": "SR 60 : SR 283"
    }, {
        "id": "cctv_9309",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-317.jpg",
        "name": "I-75 : SR 225 / CHATSWORTH RD"
    }, {
        "id": "cctv_16113",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-14.70.jpg",
        "name": "SR 3 : SR 52"
    }, {
        "id": "cctv_15528",
        "url": "/georgiasnapshots/SAV-CAM-001.jpg",
        "name": "SR 25/US 17 : WALMART DR"
    }, {
        "id": "cctv_16008",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-10.11.jpg",
        "name": "SR 520/5TH ST : SR 7/ MAIN ST"
    }, {
        "id": "cctv_32625",
        "url": "/georgiasnapshots/HALL-CAM-008.jpg",
        "name": "SR 13/ Atlanta Hwy : SR 332/ Popular Springs Rd"
    }, {
        "id": "cctv_32555",
        "url": "/georgiasnapshots/DWSN-CAM-003.jpg",
        "name": "SR 400 : SR 53"
    }, {
        "id": "cctv_16086",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-4.7.jpg",
        "name": "SR 247C / Watson Blvd : Houston Rd"
    }, {
        "id": "cctv_6026",
        "stream": "/georgiavss5/bibb-cam-031.stream/playlist.m3u8",
        "name": "I-475 : ZEBULON RD"
    }, {
        "id": "cctv_32655",
        "url": "/georgiasnapshots/JACKS-CAM-001.jpg",
        "name": "SR 11 : Old Pendergrass"
    }, {
        "id": "cctv_16162",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-16.jpg",
        "name": "SR 20 : UNION HILL RD/HARMONY DR"
    }, {
        "id": "cctv_13070",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-082.jpg",
        "name": "I-20 : SR 20/SR 138 "
    }, {
        "id": "cctv_15905",
        "url": "/georgiasnapshots/SAV-CAM-040.jpg",
        "name": "SR 25/US 17 : COTTONVALE RD"
    }, {
        "id": "cctv_15893",
        "url": "/georgiasnapshots/SAV-CAM-033.jpg",
        "name": "JOHNNY MERCER BLVD : PENN WALLER RD"
    }, {
        "id": "cctv_9314",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-326.jpg",
        "name": "I-75 : CARBONDALE RD"
    }, {
        "id": "cctv_32862",
        "url": "/georgiasnapshots/AUG-CAM-172.jpg",
        "name": "River Watch Pkwy. : Stevens Creek Rd."
    }, {
        "id": "cctv_32910",
        "url": "/georgiasnapshots/UNI-CAM-001.jpg",
        "name": "SR 2 / US 76 : Industrial Blvd"
    }, {
        "id": "cctv_32670",
        "url": "/georgiasnapshots/RABN-CAM-001.jpg",
        "name": "SR 15 : SR 2/Rickman St"
    }, {
        "id": "cctv_5989",
        "url": "/georgiasnapshots/BIBB-CAM-527.jpg",
        "name": "VINEVILLE AVE : ROGER AVE"
    }, {
        "id": "cctv_13569",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-189.jpg",
        "name": "I-75 : GDOT-CMS-915"
    }, {
        "id": "cctv_32886",
        "url": "/georgiasnapshots/AUG-CAM-095.jpg",
        "name": "Hwy 1 : Lumpkin Rd."
    }, {
        "id": "cctv_6835",
        "stream": "/georgiavss1/fay-cam-110.stream/playlist.m3u8",
        "name": "SR 85 : Banks Rd"
    }, {
        "id": "cctv_6019",
        "stream": "/georgiavss5/bibb-cam-028.stream/playlist.m3u8",
        "name": "I-475 : REST AREA EXIT"
    }, {
        "id": "cctv_6850",
        "stream": "/georgiavss5/bibb-cam-112.stream/playlist.m3u8",
        "name": "I-475 : AT I-75 S Split"
    }, {
        "id": "cctv_16168",
        "url": "/georgiasnapshots/GDOT-CAM-SR140-12.8.jpg",
        "name": "SR 140 : SR 5 CONN."
    }, {
        "id": "cctv_6005",
        "stream": "/georgiavss5/bibb-cam-014.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 2"
    }, {
        "id": "cctv_16169",
        "url": "/georgiasnapshots/GDOT-CAM-SR140-13.75.jpg",
        "name": "SR 140 : SR 5 BU"
    }, {
        "id": "cctv_32936",
        "url": "/georgiasnapshots/WHITE-CAM-004.jpg",
        "name": "SR 11 Bus : SR 75"
    }, {
        "id": "cctv_13347",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-190.jpg",
        "name": "I-75 : Monroe Weigh Station"
    }, {
        "id": "cctv_32841",
        "url": "/georgiasnapshots/AUG-CAM-007.jpg",
        "name": "Broad St. : 15th"
    }, {
        "id": "cctv_13064",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-166.jpg",
        "name": "I-85 : SR 106"
    }, {
        "id": "cctv_46477",
        "url": "/georgiasnapshots/CHER-CAM-201.jpg",
        "name": "SR 5bus : Riverstone Blvd"
    }, {
        "id": "cctv_46335",
        "url": "/georgiasnapshots/COFF-CAM-001.jpg",
        "name": "SR 31 : CHESTER AVE/ MCNEIL"
    }, {
        "id": "cctv_16105",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-5.90.jpg",
        "name": "SR 52 : SR 61"
    }, {
        "id": "cctv_5982",
        "url": "/georgiasnapshots/BIBB-CAM-520.jpg",
        "name": "EISENHOWER PKWY : LOG CABIN  DR"
    }, {
        "id": "cctv_5994",
        "url": "/georgiasnapshots/BIBB-CAM-532.jpg",
        "name": "RIVERSIDE DR : ARKWRIGHT RD"
    }, {
        "id": "cctv_13071",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-090.jpg",
        "name": "I-20 : SR 12 / TURNER LAKE RD"
    }, {
        "id": "cctv_15373",
        "url": "/georgiasnapshots/FLYD-CAM-003.jpg",
        "name": "SR 20 : Elm Street"
    }, {
        "id": "cctv_16306",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.45.jpg",
        "name": "I-75 : EXT 345"
    }, {
        "id": "cctv_32538",
        "url": "/georgiasnapshots/BANK-CAM-003.jpg",
        "name": "SR 15 : I-85 SB"
    }, {
        "id": "cctv_46538",
        "url": "/georgiasnapshots/BRY-CAM-003.jpg",
        "name": "SR 25 : I-95 NB Ramp"
    }, {
        "id": "cctv_13168",
        "url": "/georgiasnapshots/PAUL-CAM-024.jpg",
        "name": "SR 6 : SR 61 / Nathan Dean Blvd"
    }, {
        "id": "cctv_32573",
        "url": "/georgiasnapshots/FRKN-CAM-003.jpg",
        "name": "SR 51 : I-85 NB Interchange"
    }, {
        "id": "cctv_13324",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-126.jpg",
        "name": "I-85 : SR 211"
    }, {
        "id": "cctv_10149",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-025.jpg",
        "name": "SR 515 : BILL HASTY BLVD"
    }, {
        "id": "cctv_15447",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-007.jpg",
        "name": "SR 16 : SR 155/HILL ST"
    }, {
        "id": "cctv_15541",
        "url": "/georgiasnapshots/SAV-CAM-004.jpg",
        "name": "SR 25/US 17 : Quacco Rd"
    }, {
        "id": "cctv_46368",
        "url": "/georgiasnapshots/THOM-CAM-005.jpg",
        "name": "SR 3 : E JACKSON ST"
    }, {
        "id": "cctv_32835",
        "url": "/georgiasnapshots/AUG-CAM-029.jpg",
        "name": "Broad St. : 5th St."
    }, {
        "id": "cctv_13207",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-024.jpg",
        "name": "I-20 : SR 61/101"
    }, {
        "id": "cctv_9185",
        "url": "/georgiasnapshots/COLU-CAM-304.jpg",
        "name": "I-185 : AT MILE 1.2"
    }, {
        "id": "cctv_32585",
        "url": "/georgiasnapshots/HALL-CAM-005.jpg",
        "name": "Spout Springs Rd : Thompson Mill Rd"
    }, {
        "id": "cctv_16146",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-13.65.jpg",
        "name": "SR 8 : GEORGIA AVE"
    }, {
        "id": "cctv_46554",
        "url": "/georgiasnapshots/LIB-CAM-006.jpg",
        "name": "SR 196 : SR 119/ Airport Rd"
    }, {
        "id": "cctv_6015",
        "stream": "/georgiavss5/bibb-cam-024.stream/playlist.m3u8",
        "name": "I-475 : SR 74"
    }, {
        "id": "cctv_9306",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-293.jpg",
        "name": "I-75 : US 411"
    }, {
        "id": "cctv_16343",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.30.jpg",
        "name": "I-75 : EXT 312"
    }, {
        "id": "cctv_32864",
        "url": "/georgiasnapshots/AUG-CAM-239.jpg",
        "name": "Marks Church/Robert C Daniel : Wheeler Rd."
    }, {
        "id": "cctv_6035",
        "stream": "/georgiavss5/bibb-cam-039.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF US 41/DIXIE HWY"
    }, {
        "id": "cctv_15236",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-144.jpg",
        "name": "I-16 : East of Bryan Co Weigh Station WB"
    }, {
        "id": "cctv_46225",
        "url": "/georgiasnapshots/WHITE-CAM-003.jpg",
        "name": "SR 11 BUS : SR 115"
    }, {
        "id": "cctv_32850",
        "url": "/georgiasnapshots/AUG-CAM-222.jpg",
        "name": "Washington Rd. : Boy Scout Rd./Center West"
    }, {
        "id": "cctv_15731",
        "url": "/georgiasnapshots/SAV-CAM-013.jpg",
        "name": "CHATHAM PARKWAY : I-16 WB"
    }, {
        "id": "cctv_15267",
        "url": "/georgiasnapshots/PAUL-CAM-029.jpg",
        "name": "SR 6 : SR 120 (Buchanan Highway)"
    }, {
        "id": "cctv_32545",
        "url": "/georgiasnapshots/BARR-CAM-003.jpg",
        "name": "SR 211 : Horton Street"
    }, {
        "id": "cctv_46468",
        "url": "/georgiasnapshots/BART-CAM-002.jpg",
        "name": "SR 3 : Gentilly Blvd"
    }, {
        "id": "cctv_32536",
        "url": "/georgiasnapshots/BANK-CAM-001.jpg",
        "name": "SR 15 : Walmart/Dallas Dr."
    }, {
        "id": "cctv_46278",
        "url": "/georgiasnapshots/GLY-CAM-002.jpg",
        "name": "SR 303 (Community Road) : SR 27 (New Jesup Highway)"
    }, {
        "id": "cctv_13180",
        "url": "/georgiasnapshots/WAR-CAM-003.jpg",
        "name": "82/SR 520 : US 1 - MEMORIAL DR"
    }, {
        "id": "cctv_32848",
        "url": "/georgiasnapshots/AUG-CAM-218.jpg",
        "name": "Washington Rd. : Alexander Dr./Berckmans Rd"
    }, {
        "id": "cctv_32638",
        "url": "/georgiasnapshots/HALL-CAM-019.jpg",
        "name": "I-985 SB : SR 60"
    }, {
        "id": "cctv_32663",
        "url": "/georgiasnapshots/LUMPKN-CAM-003",
        "name": "SR 60 : SR 400"
    }, {
        "id": "cctv_32965",
        "url": "/georgiasnapshots/WHITE-CAM-001.jpg",
        "name": "SR 11 : Thurmond Pkwy"
    }, {
        "id": "cctv_16361",
        "url": "/georgiasnapshots/FAY-CAM-216.jpg",
        "name": "SR 85 : SR 74 / Padget Rd"
    }, {
        "id": "cctv_15909",
        "url": "/georgiasnapshots/COLU-CAM-016.jpg",
        "name": "SR 1/VETERANS PKY : SR 22 SPUR/13TH ST"
    }, {
        "id": "cctv_46255",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/LIB-CAM-001.jpg",
        "name": "SR 38 (West Oglethorpe Highway) : General Screven Way"
    }, {
        "id": "cctv_16173",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-20.9.jpg",
        "name": "SR 1 : I-20 EB (EXIT 11)"
    }, {
        "id": "cctv_6840",
        "url": "/georgiasnapshots/BIBB-CAM-103.jpg",
        "name": "I-75 : AT SARDIS CHURCH"
    }, {
        "id": "cctv_46370",
        "url": "/georgiasnapshots/THOM-CAM-007.jpg",
        "name": "SR 3 : COUNTY LINE RD"
    }, {
        "id": "cctv_16125",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-287.60.jpg",
        "name": "I-75 : SR 113 (EXIT 288)"
    }, {
        "id": "cctv_6757",
        "stream": "/georgiavss1/fay-cam-117.stream/playlist.m3u8",
        "name": "SR 85 : Grady Ave / Bradley Dr"
    }, {
        "id": "cctv_12952",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-022.2.jpg",
        "name": "I-85 : TROUP CO WEIGH STATION"
    }, {
        "id": "cctv_6036",
        "stream": "/georgiavss5/bibb-cam-040.stream/playlist.m3u8",
        "name": "I-475 : US 41"
    }, {
        "id": "cctv_32878",
        "url": "/georgiasnapshots/AUG-CAM-075.jpg",
        "name": "Gordon Hwy : Tubman Home Rd."
    }, {
        "id": "cctv_32635",
        "url": "/georgiasnapshots/HALL-CAM-016.JPG",
        "name": "SR 53/Mundy Mill Rd : McEver Rd"
    }, {
        "id": "cctv_5967",
        "url": "/georgiasnapshots/BIBB-CAM-505.jpg",
        "name": "PIO NONO AVE : ROFF AVE"
    }, {
        "id": "cctv_46548",
        "url": "/georgiasnapshots/GLY-CAM-005.jpg",
        "name": "SR 25/ SR 520 : I-95 NB Ramp"
    }, {
        "id": "cctv_46492",
        "url": "/georgiasnapshots/CARR-CAM-002.jpg",
        "name": "SR 1 : Tojan Dr"
    }, {
        "id": "cctv_15808",
        "url": "/georgiasnapshots/SAV-CAM-025.jpg",
        "name": "SR 26/VICTORY DR : SKIDAWAY RD"
    }, {
        "id": "cctv_13183",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-036.jpg",
        "name": "I-95 : US 341 / SR 27"
    }, {
        "id": "cctv_46309",
        "url": "/georgiasnapshots/GWIN-CAM-259.jpg",
        "name": "SR 316 : E OF DROWNING CREEK"
    }, {
        "id": "cctv_15996",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-5.00.jpg",
        "name": "I-75 : SR 376/LAKES BLVD"
    }, {
        "id": "cctv_32570",
        "url": "/georgiasnapshots/FORS-CAM-037.jpg",
        "name": "SR 400 : Jot-Em-Down Rd"
    }, {
        "id": "cctv_9288",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.jpg",
        "name": "I-75 : SR 52"
    }, {
        "id": "cctv_13189",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-138.jpg",
        "name": "I-20 : SR 77"
    }, {
        "id": "cctv_32525",
        "url": "/georgiasnapshots/COW-CAM-011.jpg",
        "name": "SR 34 : LAKESIDE WAY/INTERSTATE WAY"
    }, {
        "id": "cctv_46352",
        "url": "/georgiasnapshots/DOUG-CAM-094.jpg",
        "name": "SR 3/ US 19 : SR32/ 4TH ST"
    }, {
        "id": "cctv_32657",
        "url": "/georgiasnapshots/JACKS-CAM-003.jpg",
        "name": "SR 11 : I-85 SB"
    }, {
        "id": "cctv_32845",
        "url": "/georgiasnapshots/AUG-CAM-223.jpg",
        "name": "Washington Rd. : Eisenhower Dr."
    }, {
        "id": "cctv_32893",
        "url": "/georgiasnapshots/AUG-CAM-183.jpg",
        "name": "Telfair St. : 7th St."
    }, {
        "id": "cctv_16131",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-283.35.jpg",
        "name": "I-75 : OLD ALLATOONA RD"
    }, {
        "id": "cctv_13591",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-181.jpg",
        "name": "I-75 : S of Rumble Rd"
    }, {
        "id": "cctv_46329",
        "url": "/georgiasnapshots/BENH-CAM-003.jpg",
        "name": "SR 11 : SULTANA DR"
    }, {
        "id": "cctv_16339",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.45.jpg",
        "name": "I-75 : EXT 318"
    }, {
        "id": "cctv_32856",
        "url": "/georgiasnapshots/AUG-CAM-167.jpg",
        "name": "River Watch Pkwy. : I-20 WB ramp/Claussen Rd."
    }, {
        "id": "cctv_46543",
        "url": "/georgiasnapshots/EFF-CAM-003.jpg",
        "name": "SR 21 : Brentwood Dr"
    }, {
        "id": "cctv_15166",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-109.jpg",
        "name": "I-95 : SR 21"
    }, {
        "id": "cctv_16154",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-17.35.jpg",
        "name": "SR 20 : I-75 SB (EXIT 290)"
    }, {
        "id": "cctv_15344",
        "url": "/georgiasnapshots/CHER-CAM-037.jpg",
        "name": "SR 92 : Old Alabama Rd"
    }, {
        "id": "cctv_46496",
        "url": "/georgiasnapshots/CARR-CAM-501.jpg",
        "name": "SR 61 : SR 52alt"
    }, {
        "id": "cctv_46228",
        "url": "/georgiasnapshots/GORD-CAM-001.jpg",
        "name": "SR 53 : Curtis Pkwy"
    }, {
        "id": "cctv_32551",
        "url": "/georgiasnapshots/BARR-CAM-010.jpg",
        "name": "SR 316 : SR 11"
    }, {
        "id": "cctv_13278",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-006.jpg",
        "name": "I-16 : Ocmulgee E Blvd"
    }, {
        "id": "cctv_32650",
        "url": "/georgiasnapshots/HART-CAM-001.jpg",
        "name": "SR 8 : Athens St."
    }, {
        "id": "cctv_15900",
        "url": "/georgiasnapshots/SAV-CAM-038.jpg",
        "name": "SR 26/BUTLER AVE : 14TH ST"
    }, {
        "id": "cctv_7362",
        "url": "/georgiasnapshots/COW-CAM-003.jpg",
        "name": "SR 34 Bypass : SR 16 / Temple Rd"
    }, {
        "id": "cctv_6001",
        "stream": "/georgiavss5/bibb-cam-010.stream/playlist.m3u8",
        "name": "I-475 : N OF HARTLEY BR RD"
    }, {
        "id": "cctv_46261",
        "url": "/georgiasnapshots/TAT-CAM-001.jpg",
        "name": "SR 30 : SR 23/57 (South Main Street)"
    }, {
        "id": "cctv_32921",
        "url": "/georgiasnapshots/STEPH-CAM-005.jpg",
        "name": "SR 17 ALT : Sage St"
    }, {
        "id": "cctv_15896",
        "url": "/georgiasnapshots/SAV-CAM-034.jpg",
        "name": "SR 26/ US 80 : QUARTERMAN DR"
    }, {
        "id": "cctv_46323",
        "url": "/georgiasnapshots/HABE-CAM-002.jpg",
        "name": "SR 105 : SR 385"
    }, {
        "id": "cctv_46246",
        "url": "/georgiasnapshots/CHAT-CAM-003.jpg",
        "name": "SR 30 (Piedmont Avenue) : SR 21 (Augusta Road)"
    }, {
        "id": "cctv_16183",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-6.65.jpg",
        "name": "SR 8 : SR 101"
    }, {
        "id": "cctv_16142",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-3.20.jpg",
        "name": "SR 2 : SUPER WAL-MART"
    }, {
        "id": "cctv_9014",
        "url": "/georgiasnapshots/COLU-CAM-003.jpg",
        "name": "SR 1 / Veterans Parkway : Whitesville Rd"
    }, {
        "id": "cctv_16109",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-5.95.jpg",
        "name": "SR 515 : MCKINNEY RD"
    }, {
        "id": "cctv_15768",
        "url": "/georgiasnapshots/SAV-CAM-022.jpg",
        "name": "SR 26/VICTORY DR : DIXIE AVE"
    }, {
        "id": "cctv_32558",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-025.jpg",
        "name": "SR 369 : SR 9"
    }, {
        "id": "cctv_9318",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-283.jpg",
        "name": "I-75 : ALLATOONA RD"
    }, {
        "id": "cctv_16185",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-0.9.jpg",
        "name": "SR 8 : SR 274"
    }, {
        "id": "cctv_5985",
        "url": "/georgiasnapshots/BIBB-CAM-523.jpg",
        "name": "GRAY HWY : SHURLING DR"
    }, {
        "id": "cctv_16192",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-12.3.jpg",
        "name": "SR 7 : SR 127 / Marshallville Rd"
    }, {
        "id": "cctv_16200",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-172.jpg",
        "name": "I-75 : Bass Road"
    }, {
        "id": "cctv_16170",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.95.jpg",
        "name": "SR 20 : MARIETTA HWY"
    }, {
        "id": "cctv_15727",
        "url": "/georgiasnapshots/SAV-CAM-010.jpg",
        "name": "CHATHAM PARKWAY : POLICE MEMORIAL DRIVE"
    }, {
        "id": "cctv_15424",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-002.jpg",
        "name": "SR 3/US 19-41 : BOWLING LN/GRIFFIN CROSSROADS"
    }, {
        "id": "cctv_15908",
        "url": "/georgiasnapshots/COLU-CAM-015.jpg",
        "name": "SR 1/VETERANS PKY : SR 85/MANCHESTER EXP"
    }, {
        "id": "cctv_6002",
        "stream": "/georgiavss5/bibb-cam-011.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1"
    }, {
        "id": "cctv_6843",
        "url": "/georgiasnapshots/BIBB-CAM-109.jpg",
        "name": "I-75 : MILE 156"
    }, {
        "id": "cctv_16121",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-305.70.jpg",
        "name": "I-75 : SR 140 (EXIT 306)"
    }, {
        "id": "cctv_46541",
        "url": "/georgiasnapshots/BULL-CAM-007.jpg",
        "name": "SR 67 : Chandler Rd"
    }, {
        "id": "cctv_32542",
        "url": "/georgiasnapshots/BARR-CAM-001.jpg",
        "name": "SR 8 : SR 11/ SR 81/SR 53"
    }, {
        "id": "cctv_5990",
        "url": "/georgiasnapshots/BIBB-CAM-528.jpg",
        "name": "RIVERSIDE DR : RIVERSIDE PLAZA"
    }, {
        "id": "cctv_16178",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-8.8.jpg",
        "name": "SR 61 : I-20 WB"
    }, {
        "id": "cctv_46238",
        "url": "/georgiasnapshots/CAMD-CAM-001.jpg",
        "name": "SR 40 (E King Ave) : SR 25 (Lee St)"
    }, {
        "id": "cctv_32584",
        "url": "/georgiasnapshots/HALL-CAM-004.jpg",
        "name": "SR 347 : SR 211"
    }, {
        "id": "cctv_46467",
        "url": "/georgiasnapshots/BART-CAM-001.jpg",
        "name": "SR 3 : S Bridge Dr"
    }, {
        "id": "cctv_32560",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-027.jpg",
        "name": "SR 306 : SR 369"
    }, {
        "id": "cctv_15733",
        "url": "/georgiasnapshots/SAV-CAM-015.jpg",
        "name": "SR 26/US 80 : MILLS B. LANE BLVD"
    }, {
        "id": "cctv_6030",
        "stream": "/georgiavss5/bibb-cam-034.stream/playlist.m3u8",
        "name": "I-475 : S OF COLAPARCCHEE RD"
    }, {
        "id": "cctv_16332",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-172.2.jpg",
        "name": "I-75 : BASS RD"
    }, {
        "id": "cctv_5969",
        "url": "/georgiasnapshots/BIBB-CAM-507.jpg",
        "name": "PIO NONO AVE : MERCER UNIV"
    }, {
        "id": "cctv_32904",
        "url": "/georgiasnapshots/AUG-CAM-207.jpg",
        "name": "Walton Way : Highland Ave."
    }, {
        "id": "cctv_32872",
        "url": "/georgiasnapshots/AUG-CAM-070.jpg",
        "name": "Gordon Hwy : North Leg"
    }, {
        "id": "cctv_16143",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-9.5.jpg",
        "name": "SR 2/SR 3 : TENNESSEE ST"
    }, {
        "id": "cctv_46268",
        "url": "/georgiasnapshots/WAR-CAM-001.jpg",
        "name": "SR 38 (Plant Avenue Extension) : Ossie Davis Hwy"
    }, {
        "id": "cctv_46485",
        "url": "/georgiasnapshots/DADE-CAM-001.jpg",
        "name": "SR 136 : Pace Dr"
    }, {
        "id": "cctv_16004",
        "url": "/georgiasnapshots/GDOT-CAM-SR30-009.jpg",
        "name": "SR30 : I-75 N Ramp"
    }, {
        "id": "cctv_32547",
        "url": "/georgiasnapshots/BARR-CAM-006.jpg",
        "name": "SR 316 : Kilcrease Rd"
    }, {
        "id": "cctv_6844",
        "stream": "/georgiavss5/bibb-cam-111.stream/playlist.m3u8",
        "name": "I-75 : AT I-475"
    }, {
        "id": "cctv_16108",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-4.90.jpg",
        "name": "SR 515 : WINDY RIDGE RD"
    }, {
        "id": "cctv_46382",
        "url": "/georgiasnapshots/WORT-CAM-001.jpg",
        "name": "SR520 : MONROE ST"
    }, {
        "id": "cctv_10177",
        "stream": "/georgiavss1/fay-cam-202.stream/playlist.m3u8",
        "name": "SR 314 : Banks Rd / White Rd"
    }, {
        "id": "cctv_16337",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.55.jpg",
        "name": "I-75 : EXT 333"
    }, {
        "id": "cctv_32881",
        "url": "/georgiasnapshots/AUG-CAM-077.jpg",
        "name": "Gordon Hwy : Wheeless Rd./Highland Ave."
    }, {
        "id": "cctv_46349",
        "url": "/georgiasnapshots/DECA-CAM-002.jpg",
        "name": "SR 3 Bu : SR 97/ WEST ST"
    }, {
        "id": "cctv_32634",
        "url": "/georgiasnapshots/HALL-CAM-015.JPG",
        "name": "SR 53 : Mathis Dr"
    }, {
        "id": "cctv_32876",
        "url": "/georgiasnapshots/AUG-CAM-069.jpg",
        "name": "Gordon Hwy : Molly Pond Rd./D. Barnard"
    }, {
        "id": "cctv_32888",
        "url": "/georgiasnapshots/AUG-CAM-114.jpg",
        "name": "Hwy 25 : Windsor Spring Rd."
    }, {
        "id": "cctv_5987",
        "stream": "/georgiavss5/bibb-cam-525.stream/playlist.m3u8",
        "name": "HARDEMAN AVE : AT I-75 SB RAMP"
    }, {
        "id": "cctv_46533",
        "url": "/georgiasnapshots/CHAT-CAM-014.jpg",
        "name": "SR 26 : I-95 SB Ramp"
    }, {
        "id": "cctv_16346",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.40.jpg",
        "name": "I-75 : EXT 296"
    }, {
        "id": "cctv_5978",
        "url": "/georgiasnapshots/BIBB-CAM-516.jpg",
        "name": "MERCER UNIV : BLOOMFIELD DR"
    }, {
        "id": "cctv_13166",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-020.jpg",
        "name": "I-985 : SR 60/Queen City Pkwy"
    }, {
        "id": "cctv_32539",
        "url": "/georgiasnapshots/FAY-CAM-213.jpg",
        "name": "SR 54 : Carriage Lane"
    }, {
        "id": "cctv_46536",
        "url": "/georgiasnapshots/CHAT-CAM-017.jpg",
        "name": "SR 21 : Old Augusta Rd"
    }, {
        "id": "cctv_46472",
        "url": "/georgiasnapshots/BART-CAM-201.jpg",
        "name": "SR 61 : SR113/293"
    }, {
        "id": "cctv_6011",
        "stream": "/georgiavss5/bibb-cam-020.stream/playlist.m3u8",
        "name": "I-475 : US 80/EISENHOWER PKWY"
    }, {
        "id": "cctv_32831",
        "url": "/georgiasnapshots/AUG-CAM-196.jpg",
        "name": "Walton Way : 8th St."
    }, {
        "id": "cctv_12984",
        "url": "/georgiasnapshots/COW-CAM-004.jpg",
        "name": "SR 14 : WELDON RD"
    }, {
        "id": "cctv_15226",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-055.jpg",
        "name": "I-95 : McIntosh Co Weigh Station"
    }, {
        "id": "cctv_16103",
        "url": "/georgiasnapshots/GDOT-CAM-SR282-11.90.jpg",
        "name": "SR 282 : MADDOX DR"
    }, {
        "id": "cctv_16097",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.10.jpg",
        "name": "SR 1 : WASHINGTON ST"
    }, {
        "id": "cctv_6029",
        "stream": "/georgiavss5/bibb-cam-033.stream/playlist.m3u8",
        "name": "I-475 : 1 MI N OF ZEBULON RD"
    }, {
        "id": "cctv_32644",
        "url": "/georgiasnapshots/HALL-CAM-025.jpg",
        "name": "SR 365 : SR 52"
    }, {
        "id": "cctv_16117",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-20.60.jpg",
        "name": "SR 3/DALTON BYPASS : I-75 NB EXIT 336"
    }, {
        "id": "cctv_46258",
        "url": "/georgiasnapshots/LIB-CAM-003.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 25 (Ocean Highway)"
    }, {
        "id": "cctv_32588",
        "url": "/georgiasnapshots/WALT-CAM-001.jpg",
        "name": "SR 10 BUS : SR 11"
    }, {
        "id": "cctv_32572",
        "url": "/georgiasnapshots/FRKN-CAM-002.jpg",
        "name": "SR 106 : I-85 NB Interchange"
    }, {
        "id": "cctv_15164",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-344.jpg",
        "name": "I-75 : S OF US 41/76 - CMS 913"
    }, {
        "id": "cctv_13327",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-093.jpg",
        "name": "I-20 : SR 142 / John Williams Hwy"
    }, {
        "id": "cctv_13076",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-196.jpg",
        "name": "I-20 : I-520 E / SR 232 W"
    }, {
        "id": "cctv_16160",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-5.60.jpg",
        "name": "SR 113 : DOUTHIT FERRY RD"
    }, {
        "id": "cctv_15216",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-191.jpg",
        "name": "I-75 : North of Monroe Co W/S"
    }, {
        "id": "cctv_16376",
        "url": "http://navigator-c2c.dot.ga.gov/sapshots/FORS-CAM-24.jpg",
        "name": "SR 15 : Barnett Shoals Rd"
    }, {
        "id": "cctv_9315",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.jpg",
        "name": "I-75 : US 41/76"
    }, {
        "id": "cctv_6838",
        "url": "/georgiasnapshots/BIBB-CAM-100.jpg",
        "name": "I-75 : N OF CRAWFORD CO LINE"
    }, {
        "id": "cctv_16197",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-146.2.jpg",
        "name": "I-75 : SR 247C"
    }, {
        "id": "cctv_15397",
        "url": "/georgiasnapshots/SAV-CAM-005.jpg",
        "name": "SR 204 : King George Blvd"
    }, {
        "id": "cctv_13597",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-027.jpg",
        "name": "I-75 : S of CMS-919"
    }, {
        "id": "cctv_46564",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-132.00.jpg",
        "name": "I-16 : Ash Branch Church Rd"
    }, {
        "id": "cctv_15380",
        "url": "/georgiasnapshots/FLYD-CAM-010.jpg",
        "name": "SR 1/Turner McCall Blvd : Broad Street"
    }, {
        "id": "cctv_15976",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-307.72.jpg",
        "name": "I-75 : REST AREA #34"
    }, {
        "id": "cctv_32836",
        "url": "/georgiasnapshots/AUG-CAM-031.jpg",
        "name": "Broad St. : 7th St."
    }, {
        "id": "cctv_46330",
        "url": "/georgiasnapshots/BENH-CAM-001.jpg",
        "name": "SR 11 : CENTRAL AVE"
    }, {
        "id": "cctv_46549",
        "url": "/georgiasnapshots/GLY-CAM-006.jpg",
        "name": "SR 27 : Crispen Blvd"
    }, {
        "id": "cctv_6018",
        "stream": "/georgiavss5/bibb-cam-027.stream/playlist.m3u8",
        "name": "I-475 : TUCKER RD"
    }, {
        "id": "cctv_32863",
        "url": "/georgiasnapshots/AUG-CAM-217.jpg",
        "name": "Wheeler Rd. : Walon Way Ext."
    }, {
        "id": "cctv_16087",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-13.5.jpg",
        "name": "SR 247 : SR 96 W RAMP"
    }, {
        "id": "cctv_32662",
        "url": "/georgiasnapshots/LUMPKN-CAM-002.jpg",
        "name": "SR 60 : Chestatee St"
    }, {
        "id": "cctv_13330",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-194.jpg",
        "name": "I-20 : Dyess Parkway"
    }, {
        "id": "cctv_5999",
        "url": "/georgiasnapshots/BIBB-CAM-537.jpg",
        "name": "RIVERSIDE DR : SHERATON DR"
    }, {
        "id": "cctv_16133",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-310.20.jpg",
        "name": "I-75 : UNION GROVE RD"
    }, {
        "id": "cctv_5975",
        "url": "/georgiasnapshots/BIBB-CAM-513.jpg",
        "name": "MERCER UNIV : COLUMBUS RD"
    }, {
        "id": "cctv_16138",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-8.40.jpg",
        "name": "SR 3 : SR 113/MAIN ST"
    }, {
        "id": "cctv_32840",
        "url": "/georgiasnapshots/AUG-CAM-013.jpg",
        "name": "Greene St. : 15th"
    }, {
        "id": "cctv_16090",
        "url": "/georgiasnapshots/GDOT-CAM-SR53-9.5.jpg",
        "name": "SR 53 : CURTIS PKWY SE"
    }, {
        "id": "cctv_16167",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-23.9.jpg",
        "name": "SR 20 : SR 372"
    }, {
        "id": "cctv_46245",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/CHAT-CAM-002.jpg",
        "name": "SR 30 (Bonnybridge Road) : SR 21 "
    }, {
        "id": "cctv_13063",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-173.jpg",
        "name": "I-85 : SR 17 / JONES ST"
    }, {
        "id": "cctv_9129",
        "url": "/georgiasnapshots/COLU-CAM-008.jpg",
        "name": "Spur 22/Wynnton Rd : 13th St/Hilton Ave"
    }, {
        "id": "cctv_13203",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-136.jpg",
        "name": "I-75 : SR 7 / US 341"
    }, {
        "id": "cctv_46529",
        "url": "/georgiasnapshots/CHAT-CAM-010.jpg",
        "name": "SR 21 : Sonny Dixon/ Jimmy Deloach Pkwy"
    }, {
        "id": "cctv_46379",
        "url": "/georgiasnapshots/TIFT-CAM-001.jpg",
        "name": "SR 35 : SR 520"
    }, {
        "id": "cctv_32654",
        "url": "/georgiasnapshots/HART-CAM-005.jpg",
        "name": "SR 8/Franklin St : Carolina St"
    }, {
        "id": "cctv_46512",
        "url": "/georgiasnapshots/SAV-CAM-045.jpg",
        "name": "Liberty : Whitaker"
    }, {
        "id": "cctv_16180",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-11.85.jpg",
        "name": "SR 1 : SR 16"
    }, {
        "id": "cctv_16187",
        "url": "/georgiasnapshots/GDOT-CAM-SR96-3.6.jpg",
        "name": "SR 96 : Houston Lake Rd"
    }, {
        "id": "cctv_46365",
        "url": "/georgiasnapshots/TERR-CAM-001.jpg",
        "name": "SR 520/US 82 : SR32/LEE ST"
    }, {
        "id": "cctv_8795",
        "url": "/georgiasnapshots/COBB-CAM-344.jpg",
        "name": "SR 3/Cobb Pkwy : Dallas Acworth"
    }, {
        "id": "cctv_13552",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.1.jpg",
        "name": "SR 1 : SR 166"
    }, {
        "id": "cctv_9308",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-315.jpg",
        "name": "I-75 : N of SR 156 / Red Bud Rd"
    }, {
        "id": "cctv_32894",
        "url": "/georgiasnapshots/AUG-CAM-184.jpg",
        "name": "Telfair St. : 8th St."
    }, {
        "id": "cctv_16007",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-8.96.jpg",
        "name": "SR 520/7TH ST : SR 35/VIRGINIA AVE"
    }, {
        "id": "cctv_32922",
        "url": "/georgiasnapshots/STEPH-CAM-006.jpg",
        "name": "SR 365 : SR 63"
    }, {
        "id": "cctv_15516",
        "url": "/georgiasnapshots/SAV-CAM-003.jpg",
        "name": "SR 25/US 17 : LITTLE NECK RD"
    }, {
        "id": "cctv_32892",
        "url": "/georgiasnapshots/AUG-CAM-182.jpg",
        "name": "Telfair St. : 5th St."
    }, {
        "id": "cctv_10504",
        "url": "/georgiasnapshots/CLAY-CAM-212.jpg",
        "name": "SR 3 / Tara Blvd : Lovejoy Rd"
    }, {
        "id": "cctv_6034",
        "stream": "/georgiavss5/bibb-cam-038.stream/playlist.m3u8",
        "name": "I-475 : ESTES RD"
    }, {
        "id": "cctv_16299",
        "url": "/georgiasnapshots/COW-CAM-018.jpg",
        "name": "SR 16 : SR 74/85"
    }, {
        "id": "cctv_46244",
        "url": "/georgiasnapshots/CHAT-CAM-001.jpg",
        "name": "SR 26 (Northside Dr) : SR 17 (Cherry St)"
    }, {
        "id": "cctv_46371",
        "url": "/georgiasnapshots/THOM-CAM-001.jpg",
        "name": "SR 38 Bu : MADISON ST"
    }, {
        "id": "cctv_5998",
        "url": "/georgiasnapshots/BIBB-CAM-536.jpg",
        "name": "I-75 : RIVERSIDE DR"
    }, {
        "id": "cctv_46557",
        "url": "/georgiasnapshots/TOOM-CAM-002.jpg",
        "name": "SR 15/ SR 30 WB : McIntosh St"
    }, {
        "id": "cctv_9132",
        "url": "/georgiasnapshots/COLU-CAM-011.jpg",
        "name": "Spur 22/Macon Rd : Forrest Rd"
    }, {
        "id": "cctv_32858",
        "url": "/georgiasnapshots/AUG-CAM-226.jpg",
        "name": "Washington Rd. : I-20 WB Ramp"
    }, {
        "id": "cctv_32851",
        "url": "/georgiasnapshots/AUG-CAM-225.jpg",
        "name": "Washington Rd. : I-20 (EB ramp)"
    }, {
        "id": "cctv_6847",
        "url": "/georgiasnapshots/BIBB-CAM-106.jpg",
        "name": "I-75 : 1 MI N OF SARDIS CHURCH RD"
    }, {
        "id": "cctv_32556",
        "url": "/georgiasnapshots/ELBE-CAM-001.jpg",
        "name": "SR 17 : SR 77/Oliver St"
    }, {
        "id": "cctv_13173",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-038.jpg",
        "name": "I-95 : US 17 / SR 25 SPUR"
    }, {
        "id": "cctv_32546",
        "url": "/georgiasnapshots/BARR-CAM-005.jpg",
        "name": "SR 211 : I-85 SB"
    }, {
        "id": "cctv_6807",
        "url": "/georgiasnapshots/BIBB-CAM-538.jpg",
        "name": "I-16 : AT MLK JR DR"
    }, {
        "id": "cctv_32865",
        "url": "/georgiasnapshots/AUG-CAM-268.jpg",
        "name": "Wrightsboro Rd. : Marks Church Rd."
    }, {
        "id": "cctv_15375",
        "url": "/georgiasnapshots/FLYD-CAM-005.jpg",
        "name": "SR 1 : Riverside Pkwy"
    }, {
        "id": "cctv_6007",
        "stream": "/georgiavss5/bibb-cam-016.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF US 80"
    }, {
        "id": "cctv_16164",
        "url": "/georgiasnapshots/GDOT-CAM-SR-20-13.25.jpg",
        "name": "SR 20 : NORTHSIDE CHEROKEE BLVD"
    }, {
        "id": "cctv_32567",
        "url": "/georgiasnapshots/FORS-CAM-034.jpg",
        "name": "SR 400 : Martin Rd"
    }, {
        "id": "cctv_32885",
        "url": "/georgiasnapshots/AUG-CAM-101.jpg",
        "name": "Hwy 1 : Wheeless Rd."
    }, {
        "id": "cctv_46260",
        "url": "/georgiasnapshots/PIE-CAM-001.jpg",
        "name": "SR 38 (Lindsay Thomas Highway) : SR 32 (Main Street)"
    }, {
        "id": "cctv_9330",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.jpg",
        "name": "I-75 : SR 53"
    }, {
        "id": "cctv_15737",
        "url": "/georgiasnapshots/SAV-CAM-017.jpg",
        "name": "SR 26/VICTORY DR : MLK BLVD"
    }, {
        "id": "cctv_15809",
        "url": "/georgiasnapshots/SAV-CAM-026.jpg",
        "name": "SR 26/VICTORY DR : RIVER DR"
    }, {
        "id": "cctv_16112",
        "url": "/georgiasnapshots/GDOT-CAM-SR1BU-1.05.jpg",
        "name": "SR 1 BU : SR 193/VILLANOW ST"
    }, {
        "id": "cctv_32909",
        "url": "/georgiasnapshots/UNI-CAM-002.jpg",
        "name": "SR 2 / US 76 : Ingles/CVS Drive"
    }, {
        "id": "cctv_16174",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-20.7.jpg",
        "name": "SR 1 : I-20 WB (EXIT 11)"
    }, {
        "id": "cctv_32899",
        "url": "/georgiasnapshots/AUG-CAM-206.jpg",
        "name": "Walton Way : Heard Ave."
    }, {
        "id": "cctv_46493",
        "url": "/georgiasnapshots/CARR-CAM-201.jpg",
        "name": "SR 1 : Prmy Sch Rd"
    }, {
        "id": "cctv_15231",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-112.jpg",
        "name": "I-95 : Milepost 112"
    }, {
        "id": "cctv_15462",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-14.9.jpg",
        "name": "SR 3/US 19 : E Lee St"
    }, {
        "id": "cctv_16104",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-10.15.jpg",
        "name": "SR 515 : 1ST ST/YUKON RD"
    }, {
        "id": "cctv_16000",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-013.jpg",
        "name": "SR 1 : SR 38"
    }, {
        "id": "cctv_46369",
        "url": "/georgiasnapshots/THOM-CAM-006.jpg",
        "name": "SR 3/ SBR : SR 38 Bu. SMITH ST"
    }, {
        "id": "cctv_6039",
        "stream": "/georgiavss1/ams-cam-114.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Woolsey Rd"
    }, {
        "id": "cctv_32939",
        "url": "/georgiasnapshots/COW-CAM-012.jpg",
        "name": "SR 34 : Shenandoah Blvd"
    }, {
        "id": "cctv_46560",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-137.00.jpg",
        "name": "I-16 : SR 119"
    }, {
        "id": "cctv_15724",
        "stream": "/georgiavss3/gdot-cam-535.stream/playlist.m3u8",
        "name": "I-75 : S OF PRIEST RD"
    }, {
        "id": "cctv_13102",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-195.jpg",
        "name": "I-20 : WHEELER RD"
    }, {
        "id": "cctv_32902",
        "url": "/georgiasnapshots/AUG-CAM-205.jpg",
        "name": "Walton Way : Fleming Ave."
    }, {
        "id": "cctv_6047",
        "stream": "/georgiavss2/ams-cam-901.stream/playlist.m3u8",
        "name": "SR 20 : SR 3 OVERPASS"
    }, {
        "id": "cctv_15742",
        "url": "/georgiasnapshots/SAV-CAM-020.jpg",
        "name": "SR 26/VICTORY DR : HABERSHAM ST"
    }, {
        "id": "cctv_15374",
        "url": "/georgiasnapshots/FLYD-CAM-004.jpg",
        "name": "SR 20 : Redmond Circle"
    }, {
        "id": "cctv_15572",
        "url": "/georgiasnapshots/HNRY-CAM-101.jpg",
        "name": "SR 81 : NEW HOPE RD"
    }, {
        "id": "cctv_16331",
        "url": "/georgiasnapshots/COW-CAM-022.jpg",
        "name": "Collinsworth Rd : I-85 NB ENT"
    }, {
        "id": "cctv_13072",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-105.jpg",
        "name": "I-20 : NEWBORN RD"
    }, {
        "id": "cctv_46343",
        "url": "/georgiasnapshots/COOK-CAM-001.jpg",
        "name": "SR 7 : SR 37/SR 76"
    }, {
        "id": "cctv_46537",
        "url": "/georgiasnapshots/APPL-CAM-001.jpg",
        "name": "SR 4 : SR 15"
    }, {
        "id": "cctv_6025",
        "stream": "/georgiavss5/bibb-cam-030.stream/playlist.m3u8",
        "name": "I-475 : PEAKE RD"
    }, {
        "id": "cctv_15615",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-351.jpg",
        "name": "I-75 : RINGGOLD GEORGIA VISITOR INFORMATION CENTER"
    }, {
        "id": "cctv_46497",
        "url": "/georgiasnapshots/CARR-CAM-402.jpg",
        "name": "SR 2 : SR 3N"
    }, {
        "id": "cctv_5971",
        "url": "/georgiasnapshots/BIBB-CAM-509.jpg",
        "name": "EISENHOWER PKWY : W OF PIO NONO AVE"
    }, {
        "id": "cctv_12951",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-022.1.jpg",
        "name": "I-85 : TROUP CO WEIGH STATION"
    }, {
        "id": "cctv_9319",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-285.jpg",
        "name": "I-75 : RED TOP MTN RD"
    }, {
        "id": "cctv_46234",
        "url": "/georgiasnapshots/BULL-CAM-001.jpg",
        "name": "SR 26 (Northside Dr) : SR 73 Bypass (Veterans Memorial Pkwy)"
    }, {
        "id": "cctv_46360",
        "url": "/georgiasnapshots/MITC-CAM-001.jpg",
        "name": "SR3/US19 : SR37/E BROAD ST"
    }, {
        "id": "cctv_32629",
        "url": "/georgiasnapshots/HALL-CAM-010",
        "name": "I-985 SB : SR 53"
    }, {
        "id": "cctv_13176",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-024.jpg",
        "name": "I-985 : S OF HOWARD RD"
    }, {
        "id": "cctv_5183",
        "stream": "/georgiavss3/gdot-cam-453.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 92"
    }, {
        "id": "cctv_9013",
        "url": "/georgiasnapshots/COLU-CAM-002.jpg",
        "name": "SR 1 / Veterans Parkway : Talbotton Rd"
    }, {
        "id": "cctv_5977",
        "url": "/georgiasnapshots/BIBB-CAM-515.jpg",
        "name": "MERCER UNIV : EDNA PL"
    }, {
        "id": "cctv_13123",
        "url": "/georgiasnapshots/FAY-CAM-018.jpg",
        "name": "SR 54 : SR 74"
    }, {
        "id": "cctv_5993",
        "url": "/georgiasnapshots/BIBB-CAM-531.jpg",
        "name": "I-75 : ARKWRIGHT/SABBATH CRK"
    }, {
        "id": "cctv_16184",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-1.25.jpg",
        "name": "SR 8 : SR 113"
    }, {
        "id": "cctv_6014",
        "stream": "/georgiavss5/bibb-cam-023.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 5"
    }, {
        "id": "cctv_32646",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-212.2.jpg",
        "name": "I-75 : BILL GARDNER PKY ENT RAMP"
    }, {
        "id": "cctv_15811",
        "url": "/georgiasnapshots/SAV-CAM-028.jpg",
        "name": "SR 26/US 80 : DEBBIE ST/WHITEMARSH ISLAND DR"
    }, {
        "id": "cctv_15897",
        "url": "/georgiasnapshots/SAV-CAM-035.jpg",
        "name": "SR 26/US 80 : JOHNNY MERCER BLVD (EAST)"
    }, {
        "id": "cctv_46324",
        "url": "/georgiasnapshots/HABE-CAM-003.jpg",
        "name": "SR 105 : SR 15"
    }, {
        "id": "cctv_16111",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-30.55.jpg",
        "name": "SR 1 : MCFARLAND AVE"
    }, {
        "id": "cctv_16098",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-2.10.jpg",
        "name": "SR 5/SR 515 : SR 108"
    }, {
        "id": "cctv_15446",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-004.jpg",
        "name": "SR 3/US 19/41 BYPASS : SR 16 E/NEWNAN RD"
    }, {
        "id": "cctv_13182",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-099.jpg",
        "name": "I-95 : I-16 EB"
    }, {
        "id": "cctv_13679",
        "url": "/georgiasnapshots/COBB-CAM-339.jpg",
        "name": "SR 3/Cobb Pkwy : 3rd Army Rd / Blackacre Trl"
    }, {
        "id": "cctv_13192",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-016.jpg",
        "name": "I-20 : CARROLL CO WEIGH STATION"
    }, {
        "id": "cctv_46525",
        "url": "/georgiasnapshots/CHAT-CAM-006.jpg",
        "name": "SR 26 : Pooler Pkwy NB"
    }, {
        "id": "cctv_16186",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-5.35.jpg",
        "name": "SR 8 : VAN WERT RD"
    }, {
        "id": "cctv_32839",
        "url": "/georgiasnapshots/AUG-CAM-001.jpg",
        "name": "13th St. : Broad"
    }, {
        "id": "cctv_16311",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.65.jpg",
        "name": "SR 113 : BILLINGS RD"
    }, {
        "id": "cctv_32932",
        "url": "/georgiasnapshots/COW-CAM-017.jpg",
        "name": "SR 154 : Raymond Hill Rd"
    }, {
        "id": "cctv_46489",
        "url": "/georgiasnapshots/CARR-CAM-101.jpg",
        "name": "SR 8 : Community Sq"
    }, {
        "id": "cctv_13188",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-090.jpg",
        "name": "I-16 : US 1/SR 4"
    }, {
        "id": "cctv_13098",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-165.jpg",
        "name": "I-20 : SR 80 / WASHINGTON HWY"
    }, {
        "id": "cctv_32832",
        "url": "/georgiasnapshots/AUG-CAM-197.jpg",
        "name": "Walton Way : 9th St./James Brown Blvd."
    }, {
        "id": "cctv_32879",
        "url": "/georgiasnapshots/AUG-CAM-065.jpg",
        "name": "Gordon Hwy : Hwy 1/ Deans Bridge Rd."
    }, {
        "id": "cctv_16153",
        "url": "/georgiasnapshots/GDOT-CAM-SR6-23.45.jpg",
        "name": "SR 6 : SR 101"
    }, {
        "id": "cctv_5966",
        "url": "/georgiasnapshots/BIBB-CAM-504.jpg",
        "name": "EISENHOWER PKWY : I-75 SB RAMPS"
    }, {
        "id": "cctv_46509",
        "url": "/georgiasnapshots/SAV-CAM-0423.jpg",
        "name": "Oglethorpe Ave. : Drayton St."
    }, {
        "id": "cctv_16137",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-10.55.jpg",
        "name": "SR 3 : FELTON RD"
    }, {
        "id": "cctv_16352",
        "url": "/georgiasnapshots/FAY-CAM-212.jpg",
        "name": "SR 54 : VETERANS PKY/LESTER RD"
    }, {
        "id": "cctv_6856",
        "stream": "/georgiavss1/fay-cam-114.stream/playlist.m3u8",
        "name": "SR 85 : SR 92 / Forrest Ave"
    }, {
        "id": "cctv_15540",
        "url": "/georgiasnapshots/SAV-CAM-002.jpg",
        "name": "SR 25/US 17 : SR 204 EB"
    }, {
        "id": "cctv_16193",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-7.7.jpg",
        "name": "SR 7 : SR 49/SR 96"
    }, {
        "id": "cctv_16196",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-146.jpg",
        "name": "I-75 : SR 247C"
    }, {
        "id": "cctv_13577",
        "url": "/georgiasnapshots/COLU-CAM-302.jpg",
        "name": "I-185 : Victory Dr"
    }, {
        "id": "cctv_32844",
        "url": "/georgiasnapshots/AUG-CAM-232.jpg",
        "name": "Washington Rd. : Woodbine Rd./East Vineland"
    }, {
        "id": "cctv_15326",
        "stream": "/georgiavss5/bibb-cam-043.stream/playlist.m3u8",
        "name": "I-475 : I-75N"
    }, {
        "id": "cctv_32857",
        "url": "/georgiasnapshots/AUG-CAM-760.jpg",
        "name": "Washington Rd. : I-20 WB Ramp"
    }, {
        "id": "cctv_16003",
        "url": "/georgiasnapshots/GDOT-CAM-SR30-008.jpg",
        "name": "SR 30 : I-75 S Ramp"
    }, {
        "id": "cctv_13668",
        "url": "/georgiasnapshots/ROCK-CAM-103.jpg",
        "name": "SR 20 / McDonough Hwy : Miller Chapel Rd / Jimson Way"
    }]
};
