export const supplementList = [
  "magnesium",
  "curcumin",
  "calcium",
  "zinc",
  "ashwagandha",
  "arginine",
  "berberine",
  "biotin",
  "echinacea",
  "fenugreek",
  "glutathione",
  "glutamine",
  "quercetin",
  "resveratrol",
  "saffron",
  "selenium",
  "spirulina",
  "theanine",
  "yohimbine"
];

export const magnesium = {
  "id": "magnesium",
  "effects": [
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "blood-pressure",
              "name": "Blood Pressure"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Medium"
          },
          "notes": "There appears to be a significant reduction in blood pressure assuming one of two conditions is met, either the subject is low in magnesium levels in the body (deficient) or if the subject has elevated blood pressure (140/90 or above), with the latter not requiring a deficiency to precede the blood pressure reducing effects "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "serum-magnesium",
              "name": "Serum Magnesium"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Medium"
          },
          "notes": "Has the capacity to increase serum magnesium stores, but this is somewhat unreliable and may be dependent on the person being deficient in magnesium prior to supplementation "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "asthma",
              "name": "Asthma"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "There appears to be a reduction in asthmatic symptoms associated with magnesium supplementation to a low degree, with the one study using corticosteroids alongside magnesium finding no effect. There may be a role for magnesium in aiding untreated asthma, but already medicated situations are not certain "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "blood-glucose",
              "name": "Blood glucose"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "There appears to be some reduction in blood glucose in diabetics and persons with elevated glucose with magnesium supplementation, which may be secondary to better insulin functioning from the pancreas. The reduction in glucose is not overly impressive and is somewhat unreliable, and increases in glucose have been noted to occur during exercise when magnesium is supplemented in healthy persons "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "hba1c",
              "name": "HbA1c"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "More evidence than not suggest no significant effect on HbA1c levels, but one study suggests a decent decrease with the other two studies trending towards a decrease. There may be a role for magnesium in reducing HbA1c levels to a minor degree "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "insulin",
              "name": "Insulin"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "Decreases in fasting insulin appear to occur over long term supplementation with magnesium in persons at risk for diabetes or already with the disease state; decreases in insulin may not occur in normoglycemic persons "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "insulin-sensitivity",
              "name": "Insulin Sensitivity"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Low"
          },
          "notes": "There appears to be increases in insulin sensitivity as assessed by HOMA-IR, which is thought to be secondary to aiding pancreatic function "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "hdl",
              "name": "High-density lipoprotein (HDL)"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "For the most part, there is no significant direct influence of magnesium on HDL-C levels. Some counter evidence suggests it may occur vicariously through betterment of glycemic control in diabetics, but that is not always seen "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "triglycerides",
              "name": "Triglycerides"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "For the most part, no significant influence of magnesium supplementation on triglycerides "
      },
      {
          "levelOfEvidence": "High",
          "outcome": {
              "id": "weight",
              "name": "Weight"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No evidence to support a role for magnesium in inducing alterations in body weight "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "aerobic-exercise",
              "name": "Aerobic Exercise"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Medium"
          },
          "notes": "The one study to assess aerobic exercise capacity noted a significant improvement during extreme physical stress (triathletes), which is notable and needs replication "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "muscle-oxygenation",
              "name": "Muscle Oxygenation"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Medium"
          },
          "notes": "The one study to measure muscle oxygenation in high intensity exercise noted quite a remarkable increase in oxygenation in healthy athletes; this needs to be replicated "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "bone-mineral-density",
              "name": "Bone Mineral Density"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Low"
          },
          "notes": "An increase in bone mineral density has been noted with magnesium supplementation "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "c-reactive-protein",
              "name": "C-Reactive Protein (CRP)"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "Possible reduction in C-Reactive protein, but these changes are unreliable "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "migraine",
              "name": "Migraine"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "One study has noted a reduction in symptoms of migraines associated with oral magnesium supplementation "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "osteocalcin",
              "name": "Osteocalcin"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Low"
          },
          "notes": "Possible but unreliable increases in osteocalcin "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "pms",
              "name": "PMS"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "A moderate reduction in symptoms of PMS has been noted with magnesium supplementation in most trials, though evidence quality tends to be low and it's difficult to have great confidence in the results. One study found an apparent additive effect of magnesium and vitamin B6. "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "sleep-quality",
              "name": "Sleep Quality"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Low"
          },
          "notes": "An improvement in sleep quality has been noted in persons with poor sleep quality, no studies assess persons with normal sleep function "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "symptoms-of-diabetic-neuropathy",
              "name": "Symptoms of Diabetic Neuropathy"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "A reduction in symptoms associated with diabetic neuropathy has been noted with magnesium supplementation "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "cortisol",
              "name": "Cortisol"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No significant influence on cortisol seen with magnesium supplementation "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "cramps",
              "name": "Cramps"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No evidence to support a reduction in pregnancy related leg cramps "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "ldl",
              "name": "Low-density lipoprotein (LDL)"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No significant influence on LDL cholesterol levels seen with magnesium supplementation "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "testosterone",
              "name": "Testosterone"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No significant influences on testosterone levels noted with magnesium intake "
      },
      {
          "levelOfEvidence": "Medium",
          "outcome": {
              "id": "total-cholesterol",
              "name": "Total cholesterol"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No significant influence on total cholesterol levels seen with magnesium supplementation  "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "anxiety",
              "name": "Anxiety"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "One study noted a reduction in anxiety symptoms related to premenstrual syndrome with supplementation. "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "depression",
              "name": "Depression"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "Reduced depressive symptoms have been found in elderly diabetics "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "fibromyalgia",
              "name": "Fibromyalgia"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "One study found an improvement in the severity of symptoms. "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "strength",
              "name": "Strength"
          },
          "measurement": {
              "effectDirection": "Increase",
              "effectMagnitude": "Low"
          },
          "notes": "One study noted an increase in quadriceps strength (specifically torque) after supplementation in young, untrained participants. "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "symptoms-of-tinnitus",
              "name": "Symptoms of Tinnitus"
          },
          "measurement": {
              "effectDirection": "Decrease",
              "effectMagnitude": "Low"
          },
          "notes": "Decreased symptoms associated with tinnitus have been noted following magnesium supplementation "
      },
      {
          "levelOfEvidence": "Low",
          "outcome": {
              "id": "oxidation-of-ldl",
              "name": "Oxidation of LDL"
          },
          "measurement": {
              "effectDirection": "None",
              "effectMagnitude": "None"
          },
          "notes": "No significant influence on oxidation rates of LDL cholesterol "
      }
  ]
}

