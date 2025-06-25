set -x
# uploading MSTN-CD034-9908BetaCD1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD034-9908BetaCD1.iso" 9908BETACD1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD034-9908BetaCD1.png" 9908BETACD1.png
node dx.js "9908BETACD1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-9908-betacd1 "Microsoft TechNet 9908BETACD1 Disc (July 1999)" 1999-07-14 "Microsoft" "TechNet" desc.txt 9908BETACD1.iso 9908BETACD1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt 9908BETACD1.iso 9908BETACD1.png
# uploading MSTN-CD177-ARMEFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.png" ARMEFPP_EN.png
node dx.js "ARMEFPP_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (March 2005)" 2005-03-25 "Microsoft" "TechNet" desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
# uploading MSTN-CD070-BetaCD10310.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD070-BetaCD10310.iso" BETACD10310.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD070-BetaCD10310.png" BETACD10310.png
node dx.js "BETACD10310.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-betacd10310 "Microsoft TechNet BETACD10310 Disc (September 2003)" 2003-09-09 "Microsoft" "TechNet" desc.txt BETACD10310.iso BETACD10310.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETACD10310.iso BETACD10310.png
# uploading MSTN-CD080-BetaCD10312.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD080-BetaCD10312.iso" BETACD10312.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD080-BetaCD10312.png" BETACD10312.png
node dx.js "BETACD10312.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-betacd10312 "Microsoft TechNet BETACD10312 Disc (November 2003)" 2003-11-06 "Microsoft" "TechNet" desc.txt BETACD10312.iso BETACD10312.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETACD10312.iso BETACD10312.png
# uploading MSTN-CD099-BetaCD10403.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD099-BetaCD10403.iso" BETACD10403.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD099-BetaCD10403.png" BETACD10403.png
node dx.js "BETACD10403.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-betacd10403 "Microsoft TechNet BETACD10403 Disc (February 2004)" 2004-02-11 "Microsoft" "TechNet" desc.txt BETACD10403.iso BETACD10403.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETACD10403.iso BETACD10403.png
# uploading MSTN-CD114-BetaCD10405.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD114-BetaCD10405.iso" BETACD10405.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD114-BetaCD10405.png" BETACD10405.png
node dx.js "BETACD10405.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-betacd10405 "Microsoft TechNet BETACD10405 Disc (April 2004)" 2004-04-11 "Microsoft" "TechNet" desc.txt BETACD10405.iso BETACD10405.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETACD10405.iso BETACD10405.png
# uploading MSTN-CD046-betaCD19911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD046-betaCD19911.iso" BETACD19911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD046-betaCD19911.png" BETACD19911.png
node dx.js "BETACD19911.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-betacd19911 "Microsoft TechNet BETACD19911 Disc (October 1999)" 1999-10-12 "Microsoft" "TechNet" desc.txt BETACD19911.iso BETACD19911.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETACD19911.iso BETACD19911.png
# uploading MSTN-CD194-BETA_EN_0223.05.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD194-BETA_EN_0223.05.iso" BETA_EN_0223.05.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD194-BETA_EN_0223.05.png" BETA_EN_0223.05.png
node dx.js "BETA_EN_0223.05.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.05 "Microsoft TechNet BETA_EN_0223.05 Disc (November 2005)" 2005-11-09 "Microsoft" "TechNet" desc.txt BETA_EN_0223.05.iso BETA_EN_0223.05.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.05.iso BETA_EN_0223.05.png
# uploading MSTN-CD202-BETA_EN_0223.06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD202-BETA_EN_0223.06.iso" BETA_EN_0223.06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD202-BETA_EN_0223.06.png" BETA_EN_0223.06.png
node dx.js "BETA_EN_0223.06.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.06 "Microsoft TechNet BETA_EN_0223.06 Disc (December 2005)" 2005-12-11 "Microsoft" "TechNet" desc.txt BETA_EN_0223.06.iso BETA_EN_0223.06.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.06.iso BETA_EN_0223.06.png
# uploading MSTN-CD217-BETA_EN_0223.07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD217-BETA_EN_0223.07.iso" BETA_EN_0223.07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD217-BETA_EN_0223.07.png" BETA_EN_0223.07.png
node dx.js "BETA_EN_0223.07.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.07 "Microsoft TechNet BETA_EN_0223.07 Disc (January 2006)" 2006-01-09 "Microsoft" "TechNet" desc.txt BETA_EN_0223.07.iso BETA_EN_0223.07.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.07.iso BETA_EN_0223.07.png
# uploading MSTN-CD231-BETA_EN_0223.08.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD231-BETA_EN_0223.08.iso" BETA_EN_0223.08.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD231-BETA_EN_0223.08.png" BETA_EN_0223.08.png
node dx.js "BETA_EN_0223.08.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.08 "Microsoft TechNet BETA_EN_0223.08 Disc (March 2006)" 2006-03-06 "Microsoft" "TechNet" desc.txt BETA_EN_0223.08.iso BETA_EN_0223.08.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.08.iso BETA_EN_0223.08.png
# uploading MSTN-CD240-BETA_EN_0223.09.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD240-BETA_EN_0223.09.iso" BETA_EN_0223.09.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD240-BETA_EN_0223.09.png" BETA_EN_0223.09.png
node dx.js "BETA_EN_0223.09.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.09 "Microsoft TechNet BETA_EN_0223.09 Disc (April 2006)" 2006-04-06 "Microsoft" "TechNet" desc.txt BETA_EN_0223.09.iso BETA_EN_0223.09.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.09.iso BETA_EN_0223.09.png
# uploading MSTN-CD248-BETA_EN_0223.10.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD248-BETA_EN_0223.10.iso" BETA_EN_0223.10.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD248-BETA_EN_0223.10.png" BETA_EN_0223.10.png
node dx.js "BETA_EN_0223.10.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.10 "Microsoft TechNet BETA_EN_0223.10 Disc (May 2006)" 2006-05-08 "Microsoft" "TechNet" desc.txt BETA_EN_0223.10.iso BETA_EN_0223.10.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.10.iso BETA_EN_0223.10.png
# uploading MSTN-CD255-BETA_EN_0223.11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD255-BETA_EN_0223.11.iso" BETA_EN_0223.11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD255-BETA_EN_0223.11.png" BETA_EN_0223.11.png
node dx.js "BETA_EN_0223.11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.11 "Microsoft TechNet BETA_EN_0223.11 Disc (June 2006)" 2006-06-05 "Microsoft" "TechNet" desc.txt BETA_EN_0223.11.iso BETA_EN_0223.11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.11.iso BETA_EN_0223.11.png
# uploading MSTN-CD259-BETA_EN_0223.12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD259-BETA_EN_0223.12.iso" BETA_EN_0223.12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD259-BETA_EN_0223.12.png" BETA_EN_0223.12.png
node dx.js "BETA_EN_0223.12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.12 "Microsoft TechNet BETA_EN_0223.12 Disc (June 2006)" 2006-06-28 "Microsoft" "TechNet" desc.txt BETA_EN_0223.12.iso BETA_EN_0223.12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.12.iso BETA_EN_0223.12.png
# uploading MSTN-CD274-BETA_EN_0223.13.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD274-BETA_EN_0223.13.iso" BETA_EN_0223.13.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD274-BETA_EN_0223.13.png" BETA_EN_0223.13.png
node dx.js "BETA_EN_0223.13.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-beta_en_0223.13 "Microsoft TechNet BETA_EN_0223.13 Disc (August 2006)" 2006-08-01 "Microsoft" "TechNet" desc.txt BETA_EN_0223.13.iso BETA_EN_0223.13.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BETA_EN_0223.13.iso BETA_EN_0223.13.png
# uploading MSTN-CD009-BORK2ND_ED.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD009-BORK2ND_ED.iso" BORK2ND_ED.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD009-BORK2ND_ED.png" BORK2ND_ED.png
node dx.js "BORK2ND_ED.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-bork2nd_ed "Microsoft TechNet BORK2ND_ED Disc (February 1998)" 1998-02-24 "Microsoft" "TechNet" desc.txt BORK2ND_ED.iso BORK2ND_ED.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BORK2ND_ED.iso BORK2ND_ED.png
# uploading MSTN-CD024-Bork4.5Intla.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD024-Bork4.5Intla.iso" BORK4.5INTLA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD024-Bork4.5Intla.png" BORK4.5INTLA.png
node dx.js "BORK4.5INTLA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-bork4.5intla "Microsoft TechNet BORK4.5INTLA Disc (May 1999)" 1999-05-19 "Microsoft" "TechNet" desc.txt BORK4.5INTLA.iso BORK4.5INTLA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BORK4.5INTLA.iso BORK4.5INTLA.png
# uploading MSTN-CD178-BR0ECD2FRE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD178-BR0ECD2FRE_EN.iso" BR0ECD2FRE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD178-BR0ECD2FRE_EN.png" BR0ECD2FRE_EN.png
node dx.js "BR0ECD2FRE_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-br0ecd2fre_en "Microsoft TechNet BR0ECD2FRE_EN Disc (August 2005)" 2005-08-26 "Microsoft" "TechNet" desc.txt BR0ECD2FRE_EN.iso BR0ECD2FRE_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BR0ECD2FRE_EN.iso BR0ECD2FRE_EN.png
# uploading MSTN-CD216-BRMECD2XFRE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD216-BRMECD2XFRE_EN.iso" BRMECD2XFRE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD216-BRMECD2XFRE_EN.png" BRMECD2XFRE_EN.png
node dx.js "BRMECD2XFRE_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-brmecd2xfre_en "Microsoft TechNet BRMECD2XFRE_EN Disc (November 2005)" 2005-11-23 "Microsoft" "TechNet" desc.txt BRMECD2XFRE_EN.iso BRMECD2XFRE_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BRMECD2XFRE_EN.iso BRMECD2XFRE_EN.png
# uploading MSTN-CD203-BRMEFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD203-BRMEFPP_EN.iso" BRMEFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD203-BRMEFPP_EN.png" BRMEFPP_EN.png
node dx.js "BRMEFPP_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-brmefpp_en "Microsoft TechNet BRMEFPP_EN Disc (November 2005)" 2005-11-30 "Microsoft" "TechNet" desc.txt BRMEFPP_EN.iso BRMEFPP_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BRMEFPP_EN.iso BRMEFPP_EN.png
# uploading MSTN-CD215-BRMEXFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD215-BRMEXFPP_EN.iso" BRMEXFPP_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD215-BRMEXFPP_EN.png" BRMEXFPP_EN.png
node dx.js "BRMEXFPP_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-brmexfpp_en "Microsoft TechNet BRMEXFPP_EN Disc (November 2005)" 2005-11-30 "Microsoft" "TechNet" desc.txt BRMEXFPP_EN.iso BRMEXFPP_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BRMEXFPP_EN.iso BRMEXFPP_EN.png
# uploading MSTN-CD066-BTS2002EVAL_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD066-BTS2002EVAL_EN.iso" BTS2002EVAL_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD066-BTS2002EVAL_EN.png" BTS2002EVAL_EN.png
node dx.js "BTS2002EVAL_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-bts2002eval_en "Microsoft TechNet BTS2002EVAL_EN Disc (December 2001)" 2001-12-04 "Microsoft" "TechNet" desc.txt BTS2002EVAL_EN.iso BTS2002EVAL_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BTS2002EVAL_EN.iso BTS2002EVAL_EN.png
# uploading MSTN-CD108-BTS2004Eval_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD108-BTS2004Eval_EN.iso" BTS2004EVAL_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD108-BTS2004Eval_EN.png" BTS2004EVAL_EN.png
node dx.js "BTS2004EVAL_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-bts2004eval_en "Microsoft TechNet BTS2004EVAL_EN Disc (January 2004)" 2004-01-29 "Microsoft" "TechNet" desc.txt BTS2004EVAL_EN.iso BTS2004EVAL_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BTS2004EVAL_EN.iso BTS2004EVAL_EN.png
# uploading MSTN-CD176-BTS2004_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD176-BTS2004_EN.iso" BTS2004_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD176-BTS2004_EN.png" BTS2004_EN.png
node dx.js "BTS2004_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-bts2004_en "Microsoft TechNet BTS2004_EN Disc (October 2005)" 2005-10-09 "Microsoft" "TechNet" desc.txt BTS2004_EN.iso BTS2004_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt BTS2004_EN.iso BTS2004_EN.png
# uploading MSTN-1996-02-CSD9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-CSD9602.iso" CSD9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-CSD9602.png" CSD9602.png
node dx.js "CSD9602.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-csd9602 "Microsoft TechNet CSD9602 Disc (January 1996)" 1996-01-17 "Microsoft" "TechNet" desc.txt CSD9602.iso CSD9602.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt CSD9602.iso CSD9602.png
# uploading MSTN-1996-04-CSD9604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-04-CSD9604.iso" CSD9604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-04-CSD9604.jpg" CSD9604.jpg
node dx.js "CSD9604.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-csd9604 "Microsoft TechNet CSD9604 Disc (March 1996)" 1996-03-17 "Microsoft" "TechNet" desc.txt CSD9604.iso CSD9604.jpg
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt CSD9604.iso CSD9604.jpg
# uploading MSTN-CD336-DL_C0294.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD336-DL_C0294.01.iso" DL_C0294.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD336-DL_C0294.01.png" DL_C0294.01.png
node dx.js "DL_C0294.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dl_c0294.01 "Microsoft TechNet DL_C0294.01 Disc (May 2007)" 2007-05-28 "Microsoft" "TechNet" desc.txt DL_C0294.01.iso DL_C0294.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DL_C0294.01.iso DL_C0294.01.png
# uploading MSTN-CD049-DOM35ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD049-DOM35ENUC1.iso" DOM35ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD049-DOM35ENUC1.png" DOM35ENUC1.png
node dx.js "DOM35ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom35enuc1 "Microsoft TechNet DOM35ENUC1 Disc (October 2002)" 2002-10-15 "Microsoft" "TechNet" desc.txt DOM35ENUC1.iso DOM35ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM35ENUC1.iso DOM35ENUC1.png
# uploading MSTN-CD050-DOM35ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD050-DOM35ENUC2.iso" DOM35ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD050-DOM35ENUC2.png" DOM35ENUC2.png
node dx.js "DOM35ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom35enuc2 "Microsoft TechNet DOM35ENUC2 Disc (October 2002)" 2002-10-15 "Microsoft" "TechNet" desc.txt DOM35ENUC2.iso DOM35ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM35ENUC2.iso DOM35ENUC2.png
# uploading MSTN-CD055-DOM46ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD055-DOM46ENUC1.iso" DOM46ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD055-DOM46ENUC1.png" DOM46ENUC1.png
node dx.js "DOM46ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom46enuc1 "Microsoft TechNet DOM46ENUC1 Disc (September 2003)" 2003-09-10 "Microsoft" "TechNet" desc.txt DOM46ENUC1.iso DOM46ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM46ENUC1.iso DOM46ENUC1.png
# uploading MSTN-CD056-DOM46ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD056-DOM46ENUC2.iso" DOM46ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD056-DOM46ENUC2.png" DOM46ENUC2.png
node dx.js "DOM46ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom46enuc2 "Microsoft TechNet DOM46ENUC2 Disc (September 2003)" 2003-09-10 "Microsoft" "TechNet" desc.txt DOM46ENUC2.iso DOM46ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM46ENUC2.iso DOM46ENUC2.png
# uploading MSTN-CD071-DOM47ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD071-DOM47ENUC1.iso" DOM47ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD071-DOM47ENUC1.png" DOM47ENUC1.png
node dx.js "DOM47ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom47enuc1 "Microsoft TechNet DOM47ENUC1 Disc (October 2003)" 2003-10-13 "Microsoft" "TechNet" desc.txt DOM47ENUC1.iso DOM47ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM47ENUC1.iso DOM47ENUC1.png
# uploading MSTN-CD072-DOM47ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD072-DOM47ENUC2.iso" DOM47ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD072-DOM47ENUC2.png" DOM47ENUC2.png
node dx.js "DOM47ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom47enuc2 "Microsoft TechNet DOM47ENUC2 Disc (October 2003)" 2003-10-13 "Microsoft" "TechNet" desc.txt DOM47ENUC2.iso DOM47ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM47ENUC2.iso DOM47ENUC2.png
# uploading MSTN-CD084-DOM48ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD084-DOM48ENUC1.iso" DOM48ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD084-DOM48ENUC1.png" DOM48ENUC1.png
node dx.js "DOM48ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom48enuc1 "Microsoft TechNet DOM48ENUC1 Disc (November 2003)" 2003-11-11 "Microsoft" "TechNet" desc.txt DOM48ENUC1.iso DOM48ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM48ENUC1.iso DOM48ENUC1.png
# uploading MSTN-CD083-DOM48ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD083-DOM48ENUC2.iso" DOM48ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD083-DOM48ENUC2.png" DOM48ENUC2.png
node dx.js "DOM48ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom48enuc2 "Microsoft TechNet DOM48ENUC2 Disc (November 2003)" 2003-11-11 "Microsoft" "TechNet" desc.txt DOM48ENUC2.iso DOM48ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM48ENUC2.iso DOM48ENUC2.png
# uploading MSTN-CD091-DOM49ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD091-DOM49ENUC1.iso" DOM49ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD091-DOM49ENUC1.png" DOM49ENUC1.png
node dx.js "DOM49ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom49enuc1 "Microsoft TechNet DOM49ENUC1 Disc (December 2003)" 2003-12-15 "Microsoft" "TechNet" desc.txt DOM49ENUC1.iso DOM49ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM49ENUC1.iso DOM49ENUC1.png
# uploading MSTN-CD090-DOM49ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD090-DOM49ENUC2.iso" DOM49ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD090-DOM49ENUC2.png" DOM49ENUC2.png
node dx.js "DOM49ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom49enuc2 "Microsoft TechNet DOM49ENUC2 Disc (December 2003)" 2003-12-15 "Microsoft" "TechNet" desc.txt DOM49ENUC2.iso DOM49ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM49ENUC2.iso DOM49ENUC2.png
# uploading MSTN-CD093-DOM50ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD093-DOM50ENUC1.iso" DOM50ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD093-DOM50ENUC1.png" DOM50ENUC1.png
node dx.js "DOM50ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom50enuc1 "Microsoft TechNet DOM50ENUC1 Disc (January 2004)" 2004-01-15 "Microsoft" "TechNet" desc.txt DOM50ENUC1.iso DOM50ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM50ENUC1.iso DOM50ENUC1.png
# uploading MSTN-CD094-DOM50ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD094-DOM50ENUC2.iso" DOM50ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD094-DOM50ENUC2.png" DOM50ENUC2.png
node dx.js "DOM50ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom50enuc2 "Microsoft TechNet DOM50ENUC2 Disc (January 2004)" 2004-01-15 "Microsoft" "TechNet" desc.txt DOM50ENUC2.iso DOM50ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM50ENUC2.iso DOM50ENUC2.png
# uploading MSTN-CD103-DOM51ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD103-DOM51ENUC1.iso" DOM51ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD103-DOM51ENUC1.png" DOM51ENUC1.png
node dx.js "DOM51ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom51enuc1 "Microsoft TechNet DOM51ENUC1 Disc (February 2004)" 2004-02-12 "Microsoft" "TechNet" desc.txt DOM51ENUC1.iso DOM51ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM51ENUC1.iso DOM51ENUC1.png
# uploading MSTN-CD102-DOM51ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD102-DOM51ENUC2.iso" DOM51ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD102-DOM51ENUC2.png" DOM51ENUC2.png
node dx.js "DOM51ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom51enuc2 "Microsoft TechNet DOM51ENUC2 Disc (February 2004)" 2004-02-12 "Microsoft" "TechNet" desc.txt DOM51ENUC2.iso DOM51ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM51ENUC2.iso DOM51ENUC2.png
# uploading MSTN-CD110-DOM52ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD110-DOM52ENUC1.iso" DOM52ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD110-DOM52ENUC1.png" DOM52ENUC1.png
node dx.js "DOM52ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom52enuc1 "Microsoft TechNet DOM52ENUC1 Disc (March 2004)" 2004-03-11 "Microsoft" "TechNet" desc.txt DOM52ENUC1.iso DOM52ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM52ENUC1.iso DOM52ENUC1.png
# uploading MSTN-CD109-DOM52ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD109-DOM52ENUC2.iso" DOM52ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD109-DOM52ENUC2.png" DOM52ENUC2.png
node dx.js "DOM52ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom52enuc2 "Microsoft TechNet DOM52ENUC2 Disc (March 2004)" 2004-03-11 "Microsoft" "TechNet" desc.txt DOM52ENUC2.iso DOM52ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM52ENUC2.iso DOM52ENUC2.png
# uploading MSTN-CD118-DOM53ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD118-DOM53ENUC1.iso" DOM53ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD118-DOM53ENUC1.png" DOM53ENUC1.png
node dx.js "DOM53ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom53enuc1 "Microsoft TechNet DOM53ENUC1 Disc (April 2004)" 2004-04-13 "Microsoft" "TechNet" desc.txt DOM53ENUC1.iso DOM53ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM53ENUC1.iso DOM53ENUC1.png
# uploading MSTN-CD117-DOM53ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD117-DOM53ENUC2.iso" DOM53ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD117-DOM53ENUC2.png" DOM53ENUC2.png
node dx.js "DOM53ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom53enuc2 "Microsoft TechNet DOM53ENUC2 Disc (April 2004)" 2004-04-13 "Microsoft" "TechNet" desc.txt DOM53ENUC2.iso DOM53ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM53ENUC2.iso DOM53ENUC2.png
# uploading MSTN-CD123-DOM54ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD123-DOM54ENUC1.iso" DOM54ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD123-DOM54ENUC1.png" DOM54ENUC1.png
node dx.js "DOM54ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom54enuc1 "Microsoft TechNet DOM54ENUC1 Disc (May 2004)" 2004-05-12 "Microsoft" "TechNet" desc.txt DOM54ENUC1.iso DOM54ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM54ENUC1.iso DOM54ENUC1.png
# uploading MSTN-CD122-DOM54ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD122-DOM54ENUC2.iso" DOM54ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD122-DOM54ENUC2.png" DOM54ENUC2.png
node dx.js "DOM54ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom54enuc2 "Microsoft TechNet DOM54ENUC2 Disc (May 2004)" 2004-05-12 "Microsoft" "TechNet" desc.txt DOM54ENUC2.iso DOM54ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM54ENUC2.iso DOM54ENUC2.png
# uploading MSTN-CD131-Dom55ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD131-Dom55ENUC1.iso" DOM55ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD131-Dom55ENUC1.png" DOM55ENUC1.png
node dx.js "DOM55ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom55enuc1 "Microsoft TechNet DOM55ENUC1 Disc (June 2004)" 2004-06-14 "Microsoft" "TechNet" desc.txt DOM55ENUC1.iso DOM55ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM55ENUC1.iso DOM55ENUC1.png
# uploading MSTN-CD129-Dom55ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD129-Dom55ENUC2.iso" DOM55ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD129-Dom55ENUC2.png" DOM55ENUC2.png
node dx.js "DOM55ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom55enuc2 "Microsoft TechNet DOM55ENUC2 Disc (June 2004)" 2004-06-14 "Microsoft" "TechNet" desc.txt DOM55ENUC2.iso DOM55ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM55ENUC2.iso DOM55ENUC2.png
# uploading MSTN-CD136-DOM56ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD136-DOM56ENUC1.iso" DOM56ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD136-DOM56ENUC1.png" DOM56ENUC1.png
node dx.js "DOM56ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom56enuc1 "Microsoft TechNet DOM56ENUC1 Disc (July 2004)" 2004-07-13 "Microsoft" "TechNet" desc.txt DOM56ENUC1.iso DOM56ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM56ENUC1.iso DOM56ENUC1.png
# uploading MSTN-CD135-DOM56ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD135-DOM56ENUC2.iso" DOM56ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD135-DOM56ENUC2.png" DOM56ENUC2.png
node dx.js "DOM56ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom56enuc2 "Microsoft TechNet DOM56ENUC2 Disc (July 2004)" 2004-07-13 "Microsoft" "TechNet" desc.txt DOM56ENUC2.iso DOM56ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM56ENUC2.iso DOM56ENUC2.png
# uploading MSTN-CD146-DOM68ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD146-DOM68ENUC1.iso" DOM68ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD146-DOM68ENUC1.png" DOM68ENUC1.png
node dx.js "DOM68ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom68enuc1 "Microsoft TechNet DOM68ENUC1 Disc (July 2005)" 2005-07-12 "Microsoft" "TechNet" desc.txt DOM68ENUC1.iso DOM68ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM68ENUC1.iso DOM68ENUC1.png
# uploading MSTN-CD147-DOM68ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD147-DOM68ENUC2.iso" DOM68ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD147-DOM68ENUC2.png" DOM68ENUC2.png
node dx.js "DOM68ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom68enuc2 "Microsoft TechNet DOM68ENUC2 Disc (July 2005)" 2005-07-12 "Microsoft" "TechNet" desc.txt DOM68ENUC2.iso DOM68ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM68ENUC2.iso DOM68ENUC2.png
# uploading MSTN-CD154-DOM69ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD154-DOM69ENUC1.iso" DOM69ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD154-DOM69ENUC1.png" DOM69ENUC1.png
node dx.js "DOM69ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom69enuc1 "Microsoft TechNet DOM69ENUC1 Disc (August 2005)" 2005-08-11 "Microsoft" "TechNet" desc.txt DOM69ENUC1.iso DOM69ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM69ENUC1.iso DOM69ENUC1.png
# uploading MSTN-CD155-DOM69ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD155-DOM69ENUC2.iso" DOM69ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD155-DOM69ENUC2.png" DOM69ENUC2.png
node dx.js "DOM69ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom69enuc2 "Microsoft TechNet DOM69ENUC2 Disc (August 2005)" 2005-08-11 "Microsoft" "TechNet" desc.txt DOM69ENUC2.iso DOM69ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM69ENUC2.iso DOM69ENUC2.png
# uploading MSTN-CD163-DOM70ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD163-DOM70ENUC1.iso" DOM70ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD163-DOM70ENUC1.png" DOM70ENUC1.png
node dx.js "DOM70ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom70enuc1 "Microsoft TechNet DOM70ENUC1 Disc (September 2005)" 2005-09-14 "Microsoft" "TechNet" desc.txt DOM70ENUC1.iso DOM70ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM70ENUC1.iso DOM70ENUC1.png
# uploading MSTN-CD164-DOM70ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD164-DOM70ENUC2.iso" DOM70ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD164-DOM70ENUC2.png" DOM70ENUC2.png
node dx.js "DOM70ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom70enuc2 "Microsoft TechNet DOM70ENUC2 Disc (September 2005)" 2005-09-14 "Microsoft" "TechNet" desc.txt DOM70ENUC2.iso DOM70ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM70ENUC2.iso DOM70ENUC2.png
# uploading MSTN-CD171-DOM71ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD171-DOM71ENUC1.iso" DOM71ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD171-DOM71ENUC1.png" DOM71ENUC1.png
node dx.js "DOM71ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom71enuc1 "Microsoft TechNet DOM71ENUC1 Disc (October 2005)" 2005-10-11 "Microsoft" "TechNet" desc.txt DOM71ENUC1.iso DOM71ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM71ENUC1.iso DOM71ENUC1.png
# uploading MSTN-CD172-DOM71ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD172-DOM71ENUC2.iso" DOM71ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD172-DOM71ENUC2.png" DOM71ENUC2.png
node dx.js "DOM71ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom71enuc2 "Microsoft TechNet DOM71ENUC2 Disc (October 2005)" 2005-10-11 "Microsoft" "TechNet" desc.txt DOM71ENUC2.iso DOM71ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM71ENUC2.iso DOM71ENUC2.png
# uploading MSTN-CD179-DOM72ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD179-DOM72ENUC1.iso" DOM72ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD179-DOM72ENUC1.png" DOM72ENUC1.png
node dx.js "DOM72ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom72enuc1 "Microsoft TechNet DOM72ENUC1 Disc (November 2005)" 2005-11-13 "Microsoft" "TechNet" desc.txt DOM72ENUC1.iso DOM72ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM72ENUC1.iso DOM72ENUC1.png
# uploading MSTN-CD180-DOM72ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD180-DOM72ENUC2.iso" DOM72ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD180-DOM72ENUC2.png" DOM72ENUC2.png
node dx.js "DOM72ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom72enuc2 "Microsoft TechNet DOM72ENUC2 Disc (November 2005)" 2005-11-13 "Microsoft" "TechNet" desc.txt DOM72ENUC2.iso DOM72ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM72ENUC2.iso DOM72ENUC2.png
# uploading MSTN-CD195-DOM73ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD195-DOM73ENUC1.iso" DOM73ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD195-DOM73ENUC1.png" DOM73ENUC1.png
node dx.js "DOM73ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom73enuc1 "Microsoft TechNet DOM73ENUC1 Disc (December 2005)" 2005-12-12 "Microsoft" "TechNet" desc.txt DOM73ENUC1.iso DOM73ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM73ENUC1.iso DOM73ENUC1.png
# uploading MSTN-CD196-DOM73ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD196-DOM73ENUC2.iso" DOM73ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD196-DOM73ENUC2.png" DOM73ENUC2.png
node dx.js "DOM73ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom73enuc2 "Microsoft TechNet DOM73ENUC2 Disc (December 2005)" 2005-12-12 "Microsoft" "TechNet" desc.txt DOM73ENUC2.iso DOM73ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM73ENUC2.iso DOM73ENUC2.png
# uploading MSTN-CD207-DOM74ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD207-DOM74ENUC1.iso" DOM74ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD207-DOM74ENUC1.png" DOM74ENUC1.png
node dx.js "DOM74ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom74enuc1 "Microsoft TechNet DOM74ENUC1 Disc (January 2006)" 2006-01-11 "Microsoft" "TechNet" desc.txt DOM74ENUC1.iso DOM74ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM74ENUC1.iso DOM74ENUC1.png
# uploading MSTN-CD208-DOM74ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD208-DOM74ENUC2.iso" DOM74ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD208-DOM74ENUC2.png" DOM74ENUC2.png
node dx.js "DOM74ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom74enuc2 "Microsoft TechNet DOM74ENUC2 Disc (January 2006)" 2006-01-11 "Microsoft" "TechNet" desc.txt DOM74ENUC2.iso DOM74ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM74ENUC2.iso DOM74ENUC2.png
# uploading MSTN-CD218-DOM75ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD218-DOM75ENUC1.iso" DOM75ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD218-DOM75ENUC1.png" DOM75ENUC1.png
node dx.js "DOM75ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom75enuc1 "Microsoft TechNet DOM75ENUC1 Disc (February 2006)" 2006-02-13 "Microsoft" "TechNet" desc.txt DOM75ENUC1.iso DOM75ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM75ENUC1.iso DOM75ENUC1.png
# uploading MSTN-CD219-DOM75ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD219-DOM75ENUC2.iso" DOM75ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD219-DOM75ENUC2.png" DOM75ENUC2.png
node dx.js "DOM75ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom75enuc2 "Microsoft TechNet DOM75ENUC2 Disc (February 2006)" 2006-02-13 "Microsoft" "TechNet" desc.txt DOM75ENUC2.iso DOM75ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM75ENUC2.iso DOM75ENUC2.png
# uploading MSTN-CD224-DOM76ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD224-DOM76ENUC1.iso" DOM76ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD224-DOM76ENUC1.png" DOM76ENUC1.png
node dx.js "DOM76ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom76enuc1 "Microsoft TechNet DOM76ENUC1 Disc (March 2006)" 2006-03-12 "Microsoft" "TechNet" desc.txt DOM76ENUC1.iso DOM76ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM76ENUC1.iso DOM76ENUC1.png
# uploading MSTN-CD225-DOM76ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD225-DOM76ENUC2.iso" DOM76ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD225-DOM76ENUC2.png" DOM76ENUC2.png
node dx.js "DOM76ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom76enuc2 "Microsoft TechNet DOM76ENUC2 Disc (March 2006)" 2006-03-12 "Microsoft" "TechNet" desc.txt DOM76ENUC2.iso DOM76ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM76ENUC2.iso DOM76ENUC2.png
# uploading MSTN-CD232-DOM77ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD232-DOM77ENUC1.iso" DOM77ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD232-DOM77ENUC1.png" DOM77ENUC1.png
node dx.js "DOM77ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom77enuc1 "Microsoft TechNet DOM77ENUC1 Disc (April 2006)" 2006-04-11 "Microsoft" "TechNet" desc.txt DOM77ENUC1.iso DOM77ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM77ENUC1.iso DOM77ENUC1.png
# uploading MSTN-CD233-DOM77ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD233-DOM77ENUC2.iso" DOM77ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD233-DOM77ENUC2.png" DOM77ENUC2.png
node dx.js "DOM77ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom77enuc2 "Microsoft TechNet DOM77ENUC2 Disc (April 2006)" 2006-04-11 "Microsoft" "TechNet" desc.txt DOM77ENUC2.iso DOM77ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM77ENUC2.iso DOM77ENUC2.png
# uploading MSTN-CD241-DOM78ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD241-DOM78ENUC1.iso" DOM78ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD241-DOM78ENUC1.png" DOM78ENUC1.png
node dx.js "DOM78ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom78enuc1 "Microsoft TechNet DOM78ENUC1 Disc (May 2006)" 2006-05-14 "Microsoft" "TechNet" desc.txt DOM78ENUC1.iso DOM78ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM78ENUC1.iso DOM78ENUC1.png
# uploading MSTN-CD242-DOM78ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD242-DOM78ENUC2.iso" DOM78ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD242-DOM78ENUC2.png" DOM78ENUC2.png
node dx.js "DOM78ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom78enuc2 "Microsoft TechNet DOM78ENUC2 Disc (May 2006)" 2006-05-14 "Microsoft" "TechNet" desc.txt DOM78ENUC2.iso DOM78ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM78ENUC2.iso DOM78ENUC2.png
# uploading MSTN-CD249-DOM79ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD249-DOM79ENUC1.iso" DOM79ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD249-DOM79ENUC1.png" DOM79ENUC1.png
node dx.js "DOM79ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom79enuc1 "Microsoft TechNet DOM79ENUC1 Disc (June 2006)" 2006-06-12 "Microsoft" "TechNet" desc.txt DOM79ENUC1.iso DOM79ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM79ENUC1.iso DOM79ENUC1.png
# uploading MSTN-CD250-DOM79ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD250-DOM79ENUC2.iso" DOM79ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD250-DOM79ENUC2.png" DOM79ENUC2.png
node dx.js "DOM79ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom79enuc2 "Microsoft TechNet DOM79ENUC2 Disc (June 2006)" 2006-06-12 "Microsoft" "TechNet" desc.txt DOM79ENUC2.iso DOM79ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM79ENUC2.iso DOM79ENUC2.png
# uploading MSTN-CD256-DOM80ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD256-DOM80ENUC1.iso" DOM80ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD256-DOM80ENUC1.png" DOM80ENUC1.png
node dx.js "DOM80ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom80enuc1 "Microsoft TechNet DOM80ENUC1 Disc (July 2006)" 2006-07-12 "Microsoft" "TechNet" desc.txt DOM80ENUC1.iso DOM80ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM80ENUC1.iso DOM80ENUC1.png
# uploading MSTN-CD257-DOM80ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD257-DOM80ENUC2.iso" DOM80ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD257-DOM80ENUC2.png" DOM80ENUC2.png
node dx.js "DOM80ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom80enuc2 "Microsoft TechNet DOM80ENUC2 Disc (July 2006)" 2006-07-12 "Microsoft" "TechNet" desc.txt DOM80ENUC2.iso DOM80ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM80ENUC2.iso DOM80ENUC2.png
# uploading MSTN-CD268-DOM81ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD268-DOM81ENUC1.iso" DOM81ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD268-DOM81ENUC1.png" DOM81ENUC1.png
node dx.js "DOM81ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom81enuc1 "Microsoft TechNet DOM81ENUC1 Disc (August 2006)" 2006-08-09 "Microsoft" "TechNet" desc.txt DOM81ENUC1.iso DOM81ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM81ENUC1.iso DOM81ENUC1.png
# uploading MSTN-CD269-DOM81ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD269-DOM81ENUC2.iso" DOM81ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD269-DOM81ENUC2.png" DOM81ENUC2.png
node dx.js "DOM81ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom81enuc2 "Microsoft TechNet DOM81ENUC2 Disc (August 2006)" 2006-08-09 "Microsoft" "TechNet" desc.txt DOM81ENUC2.iso DOM81ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM81ENUC2.iso DOM81ENUC2.png
# uploading MSTN-CD275-DOM82ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD275-DOM82ENUC1.iso" DOM82ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD275-DOM82ENUC1.png" DOM82ENUC1.png
node dx.js "DOM82ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom82enuc1 "Microsoft TechNet DOM82ENUC1 Disc (September 2006)" 2006-09-08 "Microsoft" "TechNet" desc.txt DOM82ENUC1.iso DOM82ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM82ENUC1.iso DOM82ENUC1.png
# uploading MSTN-CD277-DOM82ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD277-DOM82ENUC2.iso" DOM82ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD277-DOM82ENUC2.png" DOM82ENUC2.png
node dx.js "DOM82ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom82enuc2 "Microsoft TechNet DOM82ENUC2 Disc (September 2006)" 2006-09-08 "Microsoft" "TechNet" desc.txt DOM82ENUC2.iso DOM82ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM82ENUC2.iso DOM82ENUC2.png
# uploading MSTN-CD285-DOM83ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD285-DOM83ENUC1.iso" DOM83ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD285-DOM83ENUC1.png" DOM83ENUC1.png
node dx.js "DOM83ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom83enuc1 "Microsoft TechNet DOM83ENUC1 Disc (October 2006)" 2006-10-10 "Microsoft" "TechNet" desc.txt DOM83ENUC1.iso DOM83ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM83ENUC1.iso DOM83ENUC1.png
# uploading MSTN-CD286-DOM83ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD286-DOM83ENUC2.iso" DOM83ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD286-DOM83ENUC2.png" DOM83ENUC2.png
node dx.js "DOM83ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom83enuc2 "Microsoft TechNet DOM83ENUC2 Disc (October 2006)" 2006-10-10 "Microsoft" "TechNet" desc.txt DOM83ENUC2.iso DOM83ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM83ENUC2.iso DOM83ENUC2.png
# uploading MSTN-CD291-DOM84ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD291-DOM84ENUC1.iso" DOM84ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD291-DOM84ENUC1.png" DOM84ENUC1.png
node dx.js "DOM84ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom84enuc1 "Microsoft TechNet DOM84ENUC1 Disc (November 2006)" 2006-11-08 "Microsoft" "TechNet" desc.txt DOM84ENUC1.iso DOM84ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM84ENUC1.iso DOM84ENUC1.png
# uploading MSTN-CD292-DOM84ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD292-DOM84ENUC2.iso" DOM84ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD292-DOM84ENUC2.png" DOM84ENUC2.png
node dx.js "DOM84ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom84enuc2 "Microsoft TechNet DOM84ENUC2 Disc (November 2006)" 2006-11-08 "Microsoft" "TechNet" desc.txt DOM84ENUC2.iso DOM84ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM84ENUC2.iso DOM84ENUC2.png
# uploading MSTN-CD297-DOM85ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD297-DOM85ENUC1.iso" DOM85ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD297-DOM85ENUC1.png" DOM85ENUC1.png
node dx.js "DOM85ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom85enuc1 "Microsoft TechNet DOM85ENUC1 Disc (December 2006)" 2006-12-06 "Microsoft" "TechNet" desc.txt DOM85ENUC1.iso DOM85ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM85ENUC1.iso DOM85ENUC1.png
# uploading MSTN-CD298-DOM85ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD298-DOM85ENUC2.iso" DOM85ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD298-DOM85ENUC2.png" DOM85ENUC2.png
node dx.js "DOM85ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom85enuc2 "Microsoft TechNet DOM85ENUC2 Disc (December 2006)" 2006-12-06 "Microsoft" "TechNet" desc.txt DOM85ENUC2.iso DOM85ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM85ENUC2.iso DOM85ENUC2.png
# uploading MSTN-CD313-DOM87ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD313-DOM87ENUC1.iso" DOM87ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD313-DOM87ENUC1.png" DOM87ENUC1.png
node dx.js "DOM87ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom87enuc1 "Microsoft TechNet DOM87ENUC1 Disc (February 2007)" 2007-02-11 "Microsoft" "TechNet" desc.txt DOM87ENUC1.iso DOM87ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM87ENUC1.iso DOM87ENUC1.png
# uploading MSTN-CD314-DOM87ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD314-DOM87ENUC2.iso" DOM87ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD314-DOM87ENUC2.png" DOM87ENUC2.png
node dx.js "DOM87ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom87enuc2 "Microsoft TechNet DOM87ENUC2 Disc (February 2007)" 2007-02-11 "Microsoft" "TechNet" desc.txt DOM87ENUC2.iso DOM87ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM87ENUC2.iso DOM87ENUC2.png
# uploading MSTN-CD323-DOM89ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD323-DOM89ENUC1.iso" DOM89ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD323-DOM89ENUC1.png" DOM89ENUC1.png
node dx.js "DOM89ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom89enuc1 "Microsoft TechNet DOM89ENUC1 Disc (April 2007)" 2007-04-09 "Microsoft" "TechNet" desc.txt DOM89ENUC1.iso DOM89ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM89ENUC1.iso DOM89ENUC1.png
# uploading MSTN-CD324-DOM89ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD324-DOM89ENUC2.iso" DOM89ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD324-DOM89ENUC2.png" DOM89ENUC2.png
node dx.js "DOM89ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom89enuc2 "Microsoft TechNet DOM89ENUC2 Disc (April 2007)" 2007-04-09 "Microsoft" "TechNet" desc.txt DOM89ENUC2.iso DOM89ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM89ENUC2.iso DOM89ENUC2.png
# uploading MSTN-CD333-DOM91ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD333-DOM91ENUC1.iso" DOM91ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD333-DOM91ENUC1.png" DOM91ENUC1.png
node dx.js "DOM91ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom91enuc1 "Microsoft TechNet DOM91ENUC1 Disc (June 2007)" 2007-06-06 "Microsoft" "TechNet" desc.txt DOM91ENUC1.iso DOM91ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM91ENUC1.iso DOM91ENUC1.png
# uploading MSTN-CD334-DOM91ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD334-DOM91ENUC2.iso" DOM91ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD334-DOM91ENUC2.png" DOM91ENUC2.png
node dx.js "DOM91ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom91enuc2 "Microsoft TechNet DOM91ENUC2 Disc (June 2007)" 2007-06-06 "Microsoft" "TechNet" desc.txt DOM91ENUC2.iso DOM91ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM91ENUC2.iso DOM91ENUC2.png
# uploading MSTN-CD340-DOM92ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD340-DOM92ENUC1.iso" DOM92ENUC1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD340-DOM92ENUC1.png" DOM92ENUC1.png
node dx.js "DOM92ENUC1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom92enuc1 "Microsoft TechNet DOM92ENUC1 Disc (July 2007)" 2007-07-10 "Microsoft" "TechNet" desc.txt DOM92ENUC1.iso DOM92ENUC1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM92ENUC1.iso DOM92ENUC1.png
# uploading MSTN-CD341-DOM92ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD341-DOM92ENUC2.iso" DOM92ENUC2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD341-DOM92ENUC2.png" DOM92ENUC2.png
node dx.js "DOM92ENUC2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-dom92enuc2 "Microsoft TechNet DOM92ENUC2 Disc (July 2007)" 2007-07-10 "Microsoft" "TechNet" desc.txt DOM92ENUC2.iso DOM92ENUC2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt DOM92ENUC2.iso DOM92ENUC2.png
# uploading MSTN-CD330-EN_C0011.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD330-EN_C0011.01.iso" EN_C0011.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD330-EN_C0011.01.png" EN_C0011.01.png
node dx.js "EN_C0011.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0011.01 "Microsoft TechNet EN_C0011.01 Disc (April 2007)" 2007-04-30 "Microsoft" "TechNet" desc.txt EN_C0011.01.iso EN_C0011.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0011.01.iso EN_C0011.01.png
# uploading MSTN-CD166-EN_C0358.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD166-EN_C0358.iso" EN_C0358.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD166-EN_C0358.png" EN_C0358.png
node dx.js "EN_C0358.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0358 "Microsoft TechNet EN_C0358 Disc (September 2005)" 2005-09-13 "Microsoft" "TechNet" desc.txt EN_C0358.iso EN_C0358.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0358.iso EN_C0358.png
# uploading MSTN-CD182-EN_C0358.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD182-EN_C0358.01.iso" EN_C0358.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD182-EN_C0358.01.png" EN_C0358.01.png
node dx.js "EN_C0358.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0358.01 "Microsoft TechNet EN_C0358.01 Disc (November 2005)" 2005-11-11 "Microsoft" "TechNet" desc.txt EN_C0358.01.iso EN_C0358.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0358.01.iso EN_C0358.01.png
# uploading MSTN-CD174-EN_C0363.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD174-EN_C0363.iso" EN_C0363.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD174-EN_C0363.png" EN_C0363.png
node dx.js "EN_C0363.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0363 "Microsoft TechNet EN_C0363 Disc (October 2005)" 2005-10-09 "Microsoft" "TechNet" desc.txt EN_C0363.iso EN_C0363.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0363.iso EN_C0363.png
# uploading MSTN-CD175-EN_C0365.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD175-EN_C0365.iso" EN_C0365.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD175-EN_C0365.png" EN_C0365.png
node dx.js "EN_C0365.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0365 "Microsoft TechNet EN_C0365 Disc (October 2005)" 2005-10-09 "Microsoft" "TechNet" desc.txt EN_C0365.iso EN_C0365.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0365.iso EN_C0365.png
# uploading MSTN-CD211-EN_C0365.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD211-EN_C0365.01.iso" EN_C0365.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD211-EN_C0365.01.png" EN_C0365.01.png
node dx.js "EN_C0365.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0365.01 "Microsoft TechNet EN_C0365.01 Disc (January 2006)" 2006-01-11 "Microsoft" "TechNet" desc.txt EN_C0365.01.iso EN_C0365.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0365.01.iso EN_C0365.01.png
# uploading MSTN-CD222-EN_C0365.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD222-EN_C0365.02.iso" EN_C0365.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD222-EN_C0365.02.png" EN_C0365.02.png
node dx.js "EN_C0365.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0365.02 "Microsoft TechNet EN_C0365.02 Disc (February 2006)" 2006-02-07 "Microsoft" "TechNet" desc.txt EN_C0365.02.iso EN_C0365.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0365.02.iso EN_C0365.02.png
# uploading MSTN-CD184-EN_C0388.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD184-EN_C0388.iso" EN_C0388.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD184-EN_C0388.png" EN_C0388.png
node dx.js "EN_C0388.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0388 "Microsoft TechNet EN_C0388 Disc (November 2005)" 2005-11-11 "Microsoft" "TechNet" desc.txt EN_C0388.iso EN_C0388.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0388.iso EN_C0388.png
# uploading MSTN-CD185-EN_C0389.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD185-EN_C0389.iso" EN_C0389.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD185-EN_C0389.png" EN_C0389.png
node dx.js "EN_C0389.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0389 "Microsoft TechNet EN_C0389 Disc (November 2005)" 2005-11-11 "Microsoft" "TechNet" desc.txt EN_C0389.iso EN_C0389.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0389.iso EN_C0389.png
# uploading MSTN-CD200-EN_C0389.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD200-EN_C0389.01.iso" EN_C0389.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD200-EN_C0389.01.png" EN_C0389.01.png
node dx.js "EN_C0389.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0389.01 "Microsoft TechNet EN_C0389.01 Disc (December 2005)" 2005-12-09 "Microsoft" "TechNet" desc.txt EN_C0389.01.iso EN_C0389.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0389.01.iso EN_C0389.01.png
# uploading MSTN-CD198-EN_C0408.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD198-EN_C0408.iso" EN_C0408.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD198-EN_C0408.png" EN_C0408.png
node dx.js "EN_C0408.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0408 "Microsoft TechNet EN_C0408 Disc (December 2005)" 2005-12-08 "Microsoft" "TechNet" desc.txt EN_C0408.iso EN_C0408.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0408.iso EN_C0408.png
# uploading MSTN-CD210-EN_C0422.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD210-EN_C0422.01.iso" EN_C0422.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD210-EN_C0422.01.png" EN_C0422.01.png
node dx.js "EN_C0422.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.01 "Microsoft TechNet EN_C0422.01 Disc (January 2006)" 2006-01-10 "Microsoft" "TechNet" desc.txt EN_C0422.01.iso EN_C0422.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.01.iso EN_C0422.01.png
# uploading MSTN-CD252-EN_C0422.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD252-EN_C0422.02.iso" EN_C0422.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD252-EN_C0422.02.png" EN_C0422.02.png
node dx.js "EN_C0422.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.02 "Microsoft TechNet EN_C0422.02 Disc (June 2006)" 2006-06-07 "Microsoft" "TechNet" desc.txt EN_C0422.02.iso EN_C0422.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.02.iso EN_C0422.02.png
# uploading MSTN-CD260-EN_C0422.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD260-EN_C0422.03.iso" EN_C0422.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD260-EN_C0422.03.png" EN_C0422.03.png
node dx.js "EN_C0422.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.03 "Microsoft TechNet EN_C0422.03 Disc (June 2006)" 2006-06-29 "Microsoft" "TechNet" desc.txt EN_C0422.03.iso EN_C0422.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.03.iso EN_C0422.03.png
# uploading MSTN-CD271-EN_C0422.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD271-EN_C0422.04.iso" EN_C0422.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD271-EN_C0422.04.png" EN_C0422.04.png
node dx.js "EN_C0422.04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.04 "Microsoft TechNet EN_C0422.04 Disc (July 2006)" 2006-07-28 "Microsoft" "TechNet" desc.txt EN_C0422.04.iso EN_C0422.04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.04.iso EN_C0422.04.png
# uploading MSTN-CD279-EN_C0422.05.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD279-EN_C0422.05.iso" EN_C0422.05.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD279-EN_C0422.05.png" EN_C0422.05.png
node dx.js "EN_C0422.05.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.05 "Microsoft TechNet EN_C0422.05 Disc (September 2006)" 2006-09-06 "Microsoft" "TechNet" desc.txt EN_C0422.05.iso EN_C0422.05.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.05.iso EN_C0422.05.png
# uploading MSTN-CD288-EN_C0422.06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD288-EN_C0422.06.iso" EN_C0422.06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD288-EN_C0422.06.png" EN_C0422.06.png
node dx.js "EN_C0422.06.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0422.06 "Microsoft TechNet EN_C0422.06 Disc (October 2006)" 2006-10-04 "Microsoft" "TechNet" desc.txt EN_C0422.06.iso EN_C0422.06.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0422.06.iso EN_C0422.06.png
# uploading MSTN-CD221-EN_C0454.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD221-EN_C0454.iso" EN_C0454.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD221-EN_C0454.png" EN_C0454.png
node dx.js "EN_C0454.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0454 "Microsoft TechNet EN_C0454 Disc (February 2006)" 2006-02-07 "Microsoft" "TechNet" desc.txt EN_C0454.iso EN_C0454.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0454.iso EN_C0454.png
# uploading MSTN-CD227-EN_C0454.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD227-EN_C0454.01.iso" EN_C0454.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD227-EN_C0454.01.png" EN_C0454.01.png
node dx.js "EN_C0454.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0454.01 "Microsoft TechNet EN_C0454.01 Disc (March 2006)" 2006-03-08 "Microsoft" "TechNet" desc.txt EN_C0454.01.iso EN_C0454.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0454.01.iso EN_C0454.01.png
# uploading MSTN-CD235-EN_C0454.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD235-EN_C0454.02.iso" EN_C0454.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD235-EN_C0454.02.png" EN_C0454.02.png
node dx.js "EN_C0454.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0454.02 "Microsoft TechNet EN_C0454.02 Disc (April 2006)" 2006-04-10 "Microsoft" "TechNet" desc.txt EN_C0454.02.iso EN_C0454.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0454.02.iso EN_C0454.02.png
# uploading MSTN-CD329-EN_C0490.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD329-EN_C0490.01.iso" EN_C0490.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD329-EN_C0490.01.png" EN_C0490.01.png
node dx.js "EN_C0490.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0490.01 "Microsoft TechNet EN_C0490.01 Disc (May 2007)" 2007-05-01 "Microsoft" "TechNet" desc.txt EN_C0490.01.iso EN_C0490.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0490.01.iso EN_C0490.01.png
# uploading MSTN-CD228-EN_C0630.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD228-EN_C0630.iso" EN_C0630.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD228-EN_C0630.png" EN_C0630.png
node dx.js "EN_C0630.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0630 "Microsoft TechNet EN_C0630 Disc (March 2006)" 2006-03-08 "Microsoft" "TechNet" desc.txt EN_C0630.iso EN_C0630.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0630.iso EN_C0630.png
# uploading MSTN-CD245-EN_C0630.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD245-EN_C0630.01.iso" EN_C0630.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD245-EN_C0630.01.png" EN_C0630.01.png
node dx.js "EN_C0630.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0630.01 "Microsoft TechNet EN_C0630.01 Disc (May 2006)" 2006-05-09 "Microsoft" "TechNet" desc.txt EN_C0630.01.iso EN_C0630.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0630.01.iso EN_C0630.01.png
# uploading MSTN-CD337-EN_C0630.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD337-EN_C0630.03.iso" EN_C0630.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD337-EN_C0630.03.png" EN_C0630.03.png
node dx.js "EN_C0630.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0630.03 "Microsoft TechNet EN_C0630.03 Disc (May 2007)" 2007-05-24 "Microsoft" "TechNet" desc.txt EN_C0630.03.iso EN_C0630.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0630.03.iso EN_C0630.03.png
# uploading MSTN-CD326-EN_C0648.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD326-EN_C0648.iso" EN_C0648.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD326-EN_C0648.png" EN_C0648.png
node dx.js "EN_C0648.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0648 "Microsoft TechNet EN_C0648 Disc (March 2007)" 2007-03-29 "Microsoft" "TechNet" desc.txt EN_C0648.iso EN_C0648.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0648.iso EN_C0648.png
# uploading MSTN-CD327-EN_C0750.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD327-EN_C0750.01.iso" EN_C0750.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD327-EN_C0750.01.png" EN_C0750.01.png
node dx.js "EN_C0750.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-en_c0750.01 "Microsoft TechNet EN_C0750.01 Disc (March 2007)" 2007-03-29 "Microsoft" "TechNet" desc.txt EN_C0750.01.iso EN_C0750.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EN_C0750.01.iso EN_C0750.01.png
# uploading MSTN-CD290-EVAL_EN_0006.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD290-EVAL_EN_0006.02.iso" EVAL_EN_0006.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD290-EVAL_EN_0006.02.png" EVAL_EN_0006.02.png
node dx.js "EVAL_EN_0006.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-eval_en_0006.02 "Microsoft TechNet EVAL_EN_0006.02 Disc (October 2006)" 2006-10-01 "Microsoft" "TechNet" desc.txt EVAL_EN_0006.02.iso EVAL_EN_0006.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EVAL_EN_0006.02.iso EVAL_EN_0006.02.png
# uploading MSTN-CD239-EVAL_EN_0644.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD239-EVAL_EN_0644.iso" EVAL_EN_0644.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD239-EVAL_EN_0644.png" EVAL_EN_0644.png
node dx.js "EVAL_EN_0644.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-eval_en_0644 "Microsoft TechNet EVAL_EN_0644 Disc (April 2006)" 2006-04-06 "Microsoft" "TechNet" desc.txt EVAL_EN_0644.iso EVAL_EN_0644.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EVAL_EN_0644.iso EVAL_EN_0644.png
# uploading MSTN-CD047-EXC2000.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD047-EXC2000.iso" EXC2000.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD047-EXC2000.png" EXC2000.png
node dx.js "EXC2000.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-exc2000 "Microsoft TechNet EXC2000 Disc (September 1999)" 1999-09-15 "Microsoft" "TechNet" desc.txt EXC2000.iso EXC2000.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EXC2000.iso EXC2000.png
# uploading MSTN-CD048-EXPTB3EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD048-EXPTB3EN.iso" EXPTB3EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD048-EXPTB3EN.png" EXPTB3EN.png
node dx.js "EXPTB3EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-exptb3en "Microsoft TechNet EXPTB3EN Disc (September 1999)" 1999-09-17 "Microsoft" "TechNet" desc.txt EXPTB3EN.iso EXPTB3EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt EXPTB3EN.iso EXPTB3EN.png
# uploading MSTN-CD092-ISA2KEVLE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD092-ISA2KEVLE_EN.iso" ISA2KEVLE_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD092-ISA2KEVLE_EN.png" ISA2KEVLE_EN.png
node dx.js "ISA2KEVLE_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-isa2kevle_en "Microsoft TechNet ISA2KEVLE_EN Disc (November 2003)" 2003-11-25 "Microsoft" "TechNet" desc.txt ISA2KEVLE_EN.iso ISA2KEVLE_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt ISA2KEVLE_EN.iso ISA2KEVLE_EN.png
# uploading MSTN-CD062-MSPROJECT11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD062-MSPROJECT11.iso" MSPROJECT11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD062-MSPROJECT11.png" MSPROJECT11.png
node dx.js "MSPROJECT11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-msproject11 "Microsoft TechNet MSPROJECT11 Disc (August 2003)" 2003-08-15 "Microsoft" "TechNet" desc.txt MSPROJECT11.iso MSPROJECT11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt MSPROJECT11.iso MSPROJECT11.png
# uploading MSTN-CD119-MSSENT04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD119-MSSENT04.iso" MSSENT04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD119-MSSENT04.png" MSSENT04.png
node dx.js "MSSENT04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-mssent04 "Microsoft TechNet MSSENT04 Disc (April 2004)" 2004-04-23 "Microsoft" "TechNet" desc.txt MSSENT04.iso MSSENT04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt MSSENT04.iso MSSENT04.png
# uploading MSTN-CD128-MSSENT04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD128-MSSENT04.iso" MSSENT04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD128-MSSENT04.png" MSSENT04.png
node dx.js "MSSENT04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-mssent04-1 "Microsoft TechNet MSSENT04 Disc (June 2004)" 2004-06-03 "Microsoft" "TechNet" desc.txt MSSENT04.iso MSSENT04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt MSSENT04.iso MSSENT04.png
# uploading MSTN-CD120-MSSSTD04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD120-MSSSTD04.iso" MSSSTD04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD120-MSSSTD04.png" MSSSTD04.png
node dx.js "MSSSTD04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-mssstd04 "Microsoft TechNet MSSSTD04 Disc (April 2004)" 2004-04-23 "Microsoft" "TechNet" desc.txt MSSSTD04.iso MSSSTD04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt MSSSTD04.iso MSSSTD04.png
# uploading MSTN-CD127-MSSSTD04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD127-MSSSTD04.iso" MSSSTD04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD127-MSSSTD04.png" MSSSTD04.png
node dx.js "MSSSTD04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-mssstd04-1 "Microsoft TechNet MSSSTD04 Disc (June 2004)" 2004-06-03 "Microsoft" "TechNet" desc.txt MSSSTD04.iso MSSSTD04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt MSSSTD04.iso MSSSTD04.png
# uploading MSTN-CD054-NRCFRE3_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD054-NRCFRE3_EN.iso" NRCFRE3_EN.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD054-NRCFRE3_EN.png" NRCFRE3_EN.png
node dx.js "NRCFRE3_EN.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-nrcfre3_en "Microsoft TechNet NRCFRE3_EN Disc (June 2003)" 2003-06-23 "Microsoft" "TechNet" desc.txt NRCFRE3_EN.iso NRCFRE3_EN.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt NRCFRE3_EN.iso NRCFRE3_EN.png
# uploading MSTN-CD019-ntoptpak_us.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD019-ntoptpak_us.iso" NTOPTPAK_US.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD019-ntoptpak_us.png" NTOPTPAK_US.png
node dx.js "NTOPTPAK_US.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ntoptpak_us "Microsoft TechNet NTOPTPAK_US Disc (July 1998)" 1998-07-28 "Microsoft" "TechNet" desc.txt NTOPTPAK_US.iso NTOPTPAK_US.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt NTOPTPAK_US.iso NTOPTPAK_US.png
# uploading MSTN-CD053-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD053-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD053-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11 "Microsoft TechNet OFFICE11 Disc (June 2003)" 2003-06-23 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD281-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD281-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD281-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-1 "Microsoft TechNet OFFICE11 Disc (August 2006)" 2006-08-28 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD150-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD150-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD150-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-2 "Microsoft TechNet OFFICE11 Disc (July 2005)" 2005-07-07 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD201-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD201-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD201-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-3 "Microsoft TechNet OFFICE11 Disc (December 2005)" 2005-12-07 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD149-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD149-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD149-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-4 "Microsoft TechNet OFFICE11 Disc (July 2005)" 2005-07-07 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD158-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD158-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD158-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-5 "Microsoft TechNet OFFICE11 Disc (August 2005)" 2005-08-02 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD343-OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD343-OFFICE11.iso" OFFICE11.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD343-OFFICE11.png" OFFICE11.png
node dx.js "OFFICE11.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office11-6 "Microsoft TechNet OFFICE11 Disc (June 2007)" 2007-06-26 "Microsoft" "TechNet" desc.txt OFFICE11.iso OFFICE11.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE11.iso OFFICE11.png
# uploading MSTN-CD308-OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD308-OFFICE12.iso" OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD308-OFFICE12.png" OFFICE12.png
node dx.js "OFFICE12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office12 "Microsoft TechNet OFFICE12 Disc (October 2006)" 2006-10-27 "Microsoft" "TechNet" desc.txt OFFICE12.iso OFFICE12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE12.iso OFFICE12.png
# uploading MSTN-CD309-Office12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD309-Office12.iso" OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD309-Office12.png" OFFICE12.png
node dx.js "OFFICE12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office12-1 "Microsoft TechNet OFFICE12 Disc (December 2006)" 2006-12-11 "Microsoft" "TechNet" desc.txt OFFICE12.iso OFFICE12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE12.iso OFFICE12.png
# uploading MSTN-CD311-Office12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD311-Office12.iso" OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD311-Office12.png" OFFICE12.png
node dx.js "OFFICE12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office12-2 "Microsoft TechNet OFFICE12 Disc (November 2006)" 2006-11-27 "Microsoft" "TechNet" desc.txt OFFICE12.iso OFFICE12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE12.iso OFFICE12.png
# uploading MSTN-CD331-OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD331-OFFICE12.iso" OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD331-OFFICE12.png" OFFICE12.png
node dx.js "OFFICE12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office12-3 "Microsoft TechNet OFFICE12 Disc (April 2007)" 2007-04-30 "Microsoft" "TechNet" desc.txt OFFICE12.iso OFFICE12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE12.iso OFFICE12.png
# uploading MSTN-CD310-Office12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD310-Office12.iso" OFFICE12.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD310-Office12.png" OFFICE12.png
node dx.js "OFFICE12.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-office12-4 "Microsoft TechNet OFFICE12 Disc (December 2006)" 2006-12-11 "Microsoft" "TechNet" desc.txt OFFICE12.iso OFFICE12.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt OFFICE12.iso OFFICE12.png
# uploading MSTN-CD035-PD002CD1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD035-PD002CD1.iso" PD002CD1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD035-PD002CD1.png" PD002CD1.png
node dx.js "PD002CD1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-pd002cd1 "Microsoft TechNet PD002CD1 Disc (June 1999)" 1999-06-11 "Microsoft" "TechNet" desc.txt PD002CD1.iso PD002CD1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt PD002CD1.iso PD002CD1.png
# uploading MSTN-CD036-PD002CD2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD036-PD002CD2.iso" PD002CD2.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD036-PD002CD2.png" PD002CD2.png
node dx.js "PD002CD2.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-pd002cd2 "Microsoft TechNet PD002CD2 Disc (June 1999)" 1999-06-09 "Microsoft" "TechNet" desc.txt PD002CD2.iso PD002CD2.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt PD002CD2.iso PD002CD2.png
# uploading MSTN-CD037-PD002CD3.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD037-PD002CD3.iso" PD002CD3.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD037-PD002CD3.png" PD002CD3.png
node dx.js "PD002CD3.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-pd002cd3 "Microsoft TechNet PD002CD3 Disc (June 1999)" 1999-06-09 "Microsoft" "TechNet" desc.txt PD002CD3.iso PD002CD3.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt PD002CD3.iso PD002CD3.png
# uploading MSTN-CD052-PREMTECH.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD052-PREMTECH.iso" PREMTECH.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD052-PREMTECH.png" PREMTECH.png
node dx.js "PREMTECH.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-premtech "Microsoft TechNet PREMTECH Disc (June 2003)" 2003-06-23 "Microsoft" "TechNet" desc.txt PREMTECH.iso PREMTECH.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt PREMTECH.iso PREMTECH.png
# uploading MSTN-CD098-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD098-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD098-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003 "Microsoft TechNet SB0CD003 Disc (December 2003)" 2003-12-17 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD100-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD100-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD100-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-1 "Microsoft TechNet SB0CD003 Disc (February 2004)" 2004-02-05 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD105-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD105-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD105-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-2 "Microsoft TechNet SB0CD003 Disc (March 2004)" 2004-03-03 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD116-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD116-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD116-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-3 "Microsoft TechNet SB0CD003 Disc (April 2004)" 2004-04-11 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD121-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD121-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD121-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-4 "Microsoft TechNet SB0CD003 Disc (May 2004)" 2004-05-09 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD126-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD126-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD126-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-5 "Microsoft TechNet SB0CD003 Disc (June 2004)" 2004-06-03 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD133-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD133-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD133-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-6 "Microsoft TechNet SB0CD003 Disc (July 2004)" 2004-07-05 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD143-SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD143-SB0CD003.iso" SB0CD003.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD143-SB0CD003.png" SB0CD003.png
node dx.js "SB0CD003.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd003-7 "Microsoft TechNet SB0CD003 Disc (August 2004)" 2004-08-04 "Microsoft" "TechNet" desc.txt SB0CD003.iso SB0CD003.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD003.iso SB0CD003.png
# uploading MSTN-CD151-SB0CD005.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD151-SB0CD005.03.iso" SB0CD005.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD151-SB0CD005.03.png" SB0CD005.03.png
node dx.js "SB0CD005.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd005.03 "Microsoft TechNet SB0CD005.03 Disc (July 2005)" 2005-07-07 "Microsoft" "TechNet" desc.txt SB0CD005.03.iso SB0CD005.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD005.03.iso SB0CD005.03.png
# uploading MSTN-CD160-SB0CD005.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD160-SB0CD005.04.iso" SB0CD005.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD160-SB0CD005.04.png" SB0CD005.04.png
node dx.js "SB0CD005.04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd005.04 "Microsoft TechNet SB0CD005.04 Disc (August 2005)" 2005-08-07 "Microsoft" "TechNet" desc.txt SB0CD005.04.iso SB0CD005.04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD005.04.iso SB0CD005.04.png
# uploading MSTN-CD187-SB0CD006.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD187-SB0CD006.iso" SB0CD006.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD187-SB0CD006.png" SB0CD006.png
node dx.js "SB0CD006.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd006 "Microsoft TechNet SB0CD006 Disc (November 2005)" 2005-11-03 "Microsoft" "TechNet" desc.txt SB0CD006.iso SB0CD006.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD006.iso SB0CD006.png
# uploading MSTN-CD205-SB0CD006.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD205-SB0CD006.01.iso" SB0CD006.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD205-SB0CD006.01.png" SB0CD006.01.png
node dx.js "SB0CD006.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd006.01 "Microsoft TechNet SB0CD006.01 Disc (December 2005)" 2005-12-05 "Microsoft" "TechNet" desc.txt SB0CD006.01.iso SB0CD006.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD006.01.iso SB0CD006.01.png
# uploading MSTN-CD213-SB0CD006.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD213-SB0CD006.02.iso" SB0CD006.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD213-SB0CD006.02.png" SB0CD006.02.png
node dx.js "SB0CD006.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd006.02 "Microsoft TechNet SB0CD006.02 Disc (January 2006)" 2006-01-05 "Microsoft" "TechNet" desc.txt SB0CD006.02.iso SB0CD006.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD006.02.iso SB0CD006.02.png
# uploading MSTN-CD223-SB0CD006.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD223-SB0CD006.03.iso" SB0CD006.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD223-SB0CD006.03.png" SB0CD006.03.png
node dx.js "SB0CD006.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd006.03 "Microsoft TechNet SB0CD006.03 Disc (February 2006)" 2006-02-02 "Microsoft" "TechNet" desc.txt SB0CD006.03.iso SB0CD006.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD006.03.iso SB0CD006.03.png
# uploading MSTN-CD230-SB0CD006.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD230-SB0CD006.04.iso" SB0CD006.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD230-SB0CD006.04.png" SB0CD006.04.png
node dx.js "SB0CD006.04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd006.04 "Microsoft TechNet SB0CD006.04 Disc (March 2006)" 2006-03-03 "Microsoft" "TechNet" desc.txt SB0CD006.04.iso SB0CD006.04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD006.04.iso SB0CD006.04.png
# uploading MSTN-CD236-SB0CD007.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD236-SB0CD007.iso" SB0CD007.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD236-SB0CD007.png" SB0CD007.png
node dx.js "SB0CD007.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd007 "Microsoft TechNet SB0CD007 Disc (April 2006)" 2006-04-04 "Microsoft" "TechNet" desc.txt SB0CD007.iso SB0CD007.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD007.iso SB0CD007.png
# uploading MSTN-CD247-SB0CD007.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD247-SB0CD007.01.iso" SB0CD007.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD247-SB0CD007.01.png" SB0CD007.01.png
node dx.js "SB0CD007.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd007.01 "Microsoft TechNet SB0CD007.01 Disc (May 2006)" 2006-05-04 "Microsoft" "TechNet" desc.txt SB0CD007.01.iso SB0CD007.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD007.01.iso SB0CD007.01.png
# uploading MSTN-CD253-SB0CD007.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD253-SB0CD007.02.iso" SB0CD007.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD253-SB0CD007.02.png" SB0CD007.02.png
node dx.js "SB0CD007.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd007.02 "Microsoft TechNet SB0CD007.02 Disc (June 2006)" 2006-06-01 "Microsoft" "TechNet" desc.txt SB0CD007.02.iso SB0CD007.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD007.02.iso SB0CD007.02.png
# uploading MSTN-CD262-SB0CD007.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD262-SB0CD007.03.iso" SB0CD007.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD262-SB0CD007.03.png" SB0CD007.03.png
node dx.js "SB0CD007.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd007.03 "Microsoft TechNet SB0CD007.03 Disc (June 2006)" 2006-06-26 "Microsoft" "TechNet" desc.txt SB0CD007.03.iso SB0CD007.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD007.03.iso SB0CD007.03.png
# uploading MSTN-CD280-SB0CD008.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD280-SB0CD008.iso" SB0CD008.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD280-SB0CD008.png" SB0CD008.png
node dx.js "SB0CD008.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd008 "Microsoft TechNet SB0CD008 Disc (August 2006)" 2006-08-31 "Microsoft" "TechNet" desc.txt SB0CD008.iso SB0CD008.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD008.iso SB0CD008.png
# uploading MSTN-CD289-SB0CD008.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD289-SB0CD008.01.iso" SB0CD008.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD289-SB0CD008.01.png" SB0CD008.01.png
node dx.js "SB0CD008.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd008.01 "Microsoft TechNet SB0CD008.01 Disc (September 2006)" 2006-09-25 "Microsoft" "TechNet" desc.txt SB0CD008.01.iso SB0CD008.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD008.01.iso SB0CD008.01.png
# uploading MSTN-CD296-SB0CD008.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD296-SB0CD008.02.iso" SB0CD008.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD296-SB0CD008.02.png" SB0CD008.02.png
node dx.js "SB0CD008.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd008.02 "Microsoft TechNet SB0CD008.02 Disc (November 2006)" 2006-11-13 "Microsoft" "TechNet" desc.txt SB0CD008.02.iso SB0CD008.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD008.02.iso SB0CD008.02.png
# uploading MSTN-CD332-SB0CD010.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD332-SB0CD010.01.iso" SB0CD010.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD332-SB0CD010.01.png" SB0CD010.01.png
node dx.js "SB0CD010.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd010.01 "Microsoft TechNet SB0CD010.01 Disc (April 2007)" 2007-04-30 "Microsoft" "TechNet" desc.txt SB0CD010.01.iso SB0CD010.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD010.01.iso SB0CD010.01.png
# uploading MSTN-CD344-SB0CD011.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD344-SB0CD011.01.iso" SB0CD011.01.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD344-SB0CD011.01.png" SB0CD011.01.png
node dx.js "SB0CD011.01.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb0cd011.01 "Microsoft TechNet SB0CD011.01 Disc (June 2007)" 2007-06-26 "Microsoft" "TechNet" desc.txt SB0CD011.01.iso SB0CD011.01.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB0CD011.01.iso SB0CD011.01.png
# uploading MSTN-CD302-SB4CD038.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD302-SB4CD038.iso" SB4CD038.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD302-SB4CD038.png" SB4CD038.png
node dx.js "SB4CD038.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sb4cd038 "Microsoft TechNet SB4CD038 Disc (December 2006)" 2006-12-11 "Microsoft" "TechNet" desc.txt SB4CD038.iso SB4CD038.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SB4CD038.iso SB4CD038.png
# uploading MSTN-CD339-SBS0CD011.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD339-SBS0CD011.iso" SBS0CD011.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD339-SBS0CD011.png" SBS0CD011.png
node dx.js "SBS0CD011.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sbs0cd011 "Microsoft TechNet SBS0CD011 Disc (May 2007)" 2007-05-22 "Microsoft" "TechNet" desc.txt SBS0CD011.iso SBS0CD011.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SBS0CD011.iso SBS0CD011.png
# uploading MSTN-CD199-SCCP.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD199-SCCP.iso" SCCP.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD199-SCCP.png" SCCP.png
node dx.js "SCCP.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sccp "Microsoft TechNet SCCP Disc (December 2005)" 2005-12-15 "Microsoft" "TechNet" desc.txt SCCP.iso SCCP.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SCCP.iso SCCP.png
# uploading MSTN-1997-06-SOFTLIB.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-06-SOFTLIB.iso" SOFTLIB.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-06-SOFTLIB.jpg" SOFTLIB.jpg
node dx.js "SOFTLIB.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-softlib "Microsoft TechNet SOFTLIB Disc (May 1997)" 1997-05-06 "Microsoft" "TechNet" desc.txt SOFTLIB.iso SOFTLIB.jpg
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SOFTLIB.iso SOFTLIB.jpg
# uploading MSTN-CD101-SQL2000RS_EVAL.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD101-SQL2000RS_EVAL.iso" SQL2000RS_EVAL.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD101-SQL2000RS_EVAL.png" SQL2000RS_EVAL.png
node dx.js "SQL2000RS_EVAL.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sql2000rs_eval "Microsoft TechNet SQL2000RS_EVAL Disc (January 2004)" 2004-01-14 "Microsoft" "TechNet" desc.txt SQL2000RS_EVAL.iso SQL2000RS_EVAL.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQL2000RS_EVAL.iso SQL2000RS_EVAL.png
# uploading MSTN-CD152-SQL2005_CTP_EN_0223.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD152-SQL2005_CTP_EN_0223.02.iso" SQL2005_CTP_EN_0223.02.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD152-SQL2005_CTP_EN_0223.02.png" SQL2005_CTP_EN_0223.02.png
node dx.js "SQL2005_CTP_EN_0223.02.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sql2005_ctp_en_0223.02 "Microsoft TechNet SQL2005_CTP_EN_0223.02 Disc (July 2005)" 2005-07-07 "Microsoft" "TechNet" desc.txt SQL2005_CTP_EN_0223.02.iso SQL2005_CTP_EN_0223.02.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQL2005_CTP_EN_0223.02.iso SQL2005_CTP_EN_0223.02.png
# uploading MSTN-CD161-SQL2005_CTP_EN_0223.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD161-SQL2005_CTP_EN_0223.03.iso" SQL2005_CTP_EN_0223.03.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD161-SQL2005_CTP_EN_0223.03.png" SQL2005_CTP_EN_0223.03.png
node dx.js "SQL2005_CTP_EN_0223.03.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sql2005_ctp_en_0223.03 "Microsoft TechNet SQL2005_CTP_EN_0223.03 Disc (August 2005)" 2005-08-02 "Microsoft" "TechNet" desc.txt SQL2005_CTP_EN_0223.03.iso SQL2005_CTP_EN_0223.03.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQL2005_CTP_EN_0223.03.iso SQL2005_CTP_EN_0223.03.png
# uploading MSTN-CD170-SQL2005_CTP_EN_0223.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD170-SQL2005_CTP_EN_0223.04.iso" SQL2005_CTP_EN_0223.04.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD170-SQL2005_CTP_EN_0223.04.png" SQL2005_CTP_EN_0223.04.png
node dx.js "SQL2005_CTP_EN_0223.04.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sql2005_ctp_en_0223.04 "Microsoft TechNet SQL2005_CTP_EN_0223.04 Disc (September 2005)" 2005-09-07 "Microsoft" "TechNet" desc.txt SQL2005_CTP_EN_0223.04.iso SQL2005_CTP_EN_0223.04.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQL2005_CTP_EN_0223.04.iso SQL2005_CTP_EN_0223.04.png
# uploading MSTN-CD189-SQLSRVRS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD189-SQLSRVRS.iso" SQLSRVRS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD189-SQLSRVRS.png" SQLSRVRS.png
node dx.js "SQLSRVRS.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sqlsrvrs "Microsoft TechNet SQLSRVRS Disc (October 2005)" 2005-10-14 "Microsoft" "TechNet" desc.txt SQLSRVRS.iso SQLSRVRS.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQLSRVRS.iso SQLSRVRS.png
# uploading MSTN-CD190-SQLSRVRS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD190-SQLSRVRS.iso" SQLSRVRS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD190-SQLSRVRS.png" SQLSRVRS.png
node dx.js "SQLSRVRS.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sqlsrvrs-1 "Microsoft TechNet SQLSRVRS Disc (October 2005)" 2005-10-14 "Microsoft" "TechNet" desc.txt SQLSRVRS.iso SQLSRVRS.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQLSRVRS.iso SQLSRVRS.png
# uploading MSTN-CD191-SQLTOOLS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD191-SQLTOOLS.iso" SQLTOOLS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD191-SQLTOOLS.png" SQLTOOLS.png
node dx.js "SQLTOOLS.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sqltools "Microsoft TechNet SQLTOOLS Disc (October 2005)" 2005-10-14 "Microsoft" "TechNet" desc.txt SQLTOOLS.iso SQLTOOLS.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQLTOOLS.iso SQLTOOLS.png
# uploading MSTN-CD192-SQLTOOLS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD192-SQLTOOLS.iso" SQLTOOLS.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD192-SQLTOOLS.png" SQLTOOLS.png
node dx.js "SQLTOOLS.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sqltools-1 "Microsoft TechNet SQLTOOLS Disc (October 2005)" 2005-10-14 "Microsoft" "TechNet" desc.txt SQLTOOLS.iso SQLTOOLS.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQLTOOLS.iso SQLTOOLS.png
# uploading MSTN-CD153-SQLWKGPx86.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD153-SQLWKGPx86.iso" SQLWKGPX86.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD153-SQLWKGPx86.png" SQLWKGPX86.png
node dx.js "SQLWKGPX86.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-sqlwkgpx86 "Microsoft TechNet SQLWKGPX86 Disc (May 2005)" 2005-05-24 "Microsoft" "TechNet" desc.txt SQLWKGPX86.iso SQLWKGPX86.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SQLWKGPX86.iso SQLWKGPX86.png
# uploading MSTN-CD069-SRK41.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD069-SRK41.iso" SRK41.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD069-SRK41.png" SRK41.png
node dx.js "SRK41.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-srk41 "Microsoft TechNet SRK41 Disc (August 2003)" 2003-08-26 "Microsoft" "TechNet" desc.txt SRK41.iso SRK41.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt SRK41.iso SRK41.png
# uploading MSTN-CD165-TECHNET_INDEX_1005.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD165-TECHNET_INDEX_1005.iso" TECHNET_INDEX_1005.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD165-TECHNET_INDEX_1005.png" TECHNET_INDEX_1005.png
node dx.js "TECHNET_INDEX_1005.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-technet_index_1005 "Microsoft TechNet TECHNET_INDEX_1005 Disc (September 2005)" 2005-09-18 "Microsoft" "TechNet" desc.txt TECHNET_INDEX_1005.iso TECHNET_INDEX_1005.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TECHNET_INDEX_1005.iso TECHNET_INDEX_1005.png
# uploading MSTN-CD156-TECHNET_INDEX_2005-08.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD156-TECHNET_INDEX_2005-08.iso" TECHNET_INDEX_2005-08.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD156-TECHNET_INDEX_2005-08.png" TECHNET_INDEX_2005-08.png
node dx.js "TECHNET_INDEX_2005-08.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-technet_index_2005-08 "Microsoft TechNet TECHNET_INDEX_2005-08 Disc (August 2005)" 2005-08-18 "Microsoft" "TechNet" desc.txt TECHNET_INDEX_2005-08.iso TECHNET_INDEX_2005-08.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TECHNET_INDEX_2005-08.iso TECHNET_INDEX_2005-08.png
# uploading MSTN-CD104-tn00403c.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD104-tn00403c.iso" TN00403C.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD104-tn00403c.png" TN00403C.png
node dx.js "TN00403C.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn00403c "Microsoft TechNet TN00403C Disc (February 2004)" 2004-02-05 "Microsoft" "TechNet" desc.txt TN00403C.iso TN00403C.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN00403C.iso TN00403C.png
# uploading MSTN-CD111-tn00404c.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD111-tn00404c.iso" TN00404C.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD111-tn00404c.png" TN00404C.png
node dx.js "TN00404C.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn00404c "Microsoft TechNet TN00404C Disc (March 2004)" 2004-03-09 "Microsoft" "TechNet" desc.txt TN00404C.iso TN00404C.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN00404C.iso TN00404C.png
# uploading MSTN-CD051-tn0211a.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD051-tn0211a.iso" TN0211A.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD051-tn0211a.png" TN0211A.png
node dx.js "TN0211A.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn0211a "Microsoft TechNet TN0211A Disc (October 2002)" 2002-10-11 "Microsoft" "TechNet" desc.txt TN0211A.iso TN0211A.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN0211A.iso TN0211A.png
# uploading MSTN-CD057-tn0310a.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD057-tn0310a.iso" TN0310A.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD057-tn0310a.png" TN0310A.png
node dx.js "TN0310A.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn0310a "Microsoft TechNet TN0310A Disc (September 2003)" 2003-09-04 "Microsoft" "TechNet" desc.txt TN0310A.iso TN0310A.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN0310A.iso TN0310A.png
# uploading MSTN-CD082-tn0312a.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD082-tn0312a.iso" TN0312A.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD082-tn0312a.png" TN0312A.png
node dx.js "TN0312A.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn0312a "Microsoft TechNet TN0312A Disc (November 2003)" 2003-11-10 "Microsoft" "TechNet" desc.txt TN0312A.iso TN0312A.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN0312A.iso TN0312A.png
# uploading MSTN-1997-11-TN9711.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-11-TN9711.iso" TN9711.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-11-TN9711.png" TN9711.png
node dx.js "TN9711.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn9711 "Microsoft TechNet TN9711 Disc (October 1997)" 1997-10-31 "Microsoft" "TechNet" desc.txt TN9711.iso TN9711.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN9711.iso TN9711.png
# uploading MSTN-CD002-TN9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD002-TN9809.iso" TN9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD002-TN9809.png" TN9809.png
node dx.js "TN9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn9809 "Microsoft TechNet TN9809 Disc (August 1998)" 1998-08-31 "Microsoft" "TechNet" desc.txt TN9809.iso TN9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN9809.iso TN9809.png
# uploading MSTN-CD020-TN9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD020-TN9908.iso" TN9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD020-TN9908.png" TN9908.png
node dx.js "TN9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn9908 "Microsoft TechNet TN9908 Disc (July 1999)" 1999-07-31 "Microsoft" "TechNet" desc.txt TN9908.iso TN9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN9908.iso TN9908.png
# uploading MSTN-CD038-TN9911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD038-TN9911.iso" TN9911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD038-TN9911.png" TN9911.png
node dx.js "TN9911.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn9911 "Microsoft TechNet TN9911 Disc (October 1999)" 1999-10-31 "Microsoft" "TechNet" desc.txt TN9911.iso TN9911.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN9911.iso TN9911.png
# uploading MSTN-1997-09-TNA9709.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-09-TNA9709.iso" TNA9709.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-09-TNA9709.png" TNA9709.png
node dx.js "TNA9709.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tna9709 "Microsoft TechNet TNA9709 Disc (August 1997)" 1997-08-14 "Microsoft" "TechNet" desc.txt TNA9709.iso TNA9709.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNA9709.iso TNA9709.png
# uploading MSTN-1997-09-TNB9709.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-09-TNB9709.iso" TNB9709.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-09-TNB9709.png" TNB9709.png
node dx.js "TNB9709.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnb9709 "Microsoft TechNet TNB9709 Disc (August 1997)" 1997-08-14 "Microsoft" "TechNet" desc.txt TNB9709.iso TNB9709.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNB9709.iso TNB9709.png
# uploading MSTN-1997-11-TNB9711.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-11-TNB9711.iso" TNB9711.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-11-TNB9711.png" TNB9711.png
node dx.js "TNB9711.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnb9711 "Microsoft TechNet TNB9711 Disc (October 1997)" 1997-10-18 "Microsoft" "TechNet" desc.txt TNB9711.iso TNB9711.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNB9711.iso TNB9711.png
# uploading MSTN-CD001-TNB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD001-TNB9809.iso" TNB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD001-TNB9809.png" TNB9809.png
node dx.js "TNB9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnb9809 "Microsoft TechNet TNB9809 Disc (August 1998)" 1998-08-14 "Microsoft" "TechNet" desc.txt TNB9809.iso TNB9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNB9809.iso TNB9809.png
# uploading MSTN-CD021-TNB9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD021-TNB9908.iso" TNB9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD021-TNB9908.png" TNB9908.png
node dx.js "TNB9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnb9908 "Microsoft TechNet TNB9908 Disc (July 1999)" 1999-07-14 "Microsoft" "TechNet" desc.txt TNB9908.iso TNB9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNB9908.iso TNB9908.png
# uploading MSTN-1997-01-TNCD1-9701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-01-TNCD1-9701.iso" TNCD1-9701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-01-TNCD1-9701.png" TNCD1-9701.png
node dx.js "TNCD1-9701.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tncd1-9701 "Microsoft TechNet TNCD1-9701 Disc (December 1996)" 1996-12-16 "Microsoft" "TechNet" desc.txt TNCD1-9701.iso TNCD1-9701.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNCD1-9701.iso TNCD1-9701.png
# uploading MSTN-1997-01-TNCD2-9701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-01-TNCD2-9701.iso" TNCD2-9701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-01-TNCD2-9701.png" TNCD2-9701.png
node dx.js "TNCD2-9701.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tncd2-9701 "Microsoft TechNet TNCD2-9701 Disc (December 1996)" 1996-12-16 "Microsoft" "TechNet" desc.txt TNCD2-9701.iso TNCD2-9701.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNCD2-9701.iso TNCD2-9701.png
# uploading MSTN-1996-02-TNET9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-TNET9602.iso" TNET9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-TNET9602.png" TNET9602.png
node dx.js "TNET9602.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnet9602 "Microsoft TechNet TNET9602 Disc (January 1996)" 1996-01-17 "Microsoft" "TechNet" desc.txt TNET9602.iso TNET9602.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNET9602.iso TNET9602.png
# uploading MSTN-1996-04-TNET9604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-04-TNET9604.iso" TNET9604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-04-TNET9604.jpg" TNET9604.jpg
node dx.js "TNET9604.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnet9604 "Microsoft TechNet TNET9604 Disc (March 1996)" 1996-03-18 "Microsoft" "TechNet" desc.txt TNET9604.iso TNET9604.jpg
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNET9604.iso TNET9604.jpg
# uploading MSTN-1996-02-TNI9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-TNI9602.iso" TNI9602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1996-02-TNI9602.png" TNI9602.png
node dx.js "TNI9602.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tni9602 "Microsoft TechNet TNI9602 Disc (January 1996)" 1996-01-17 "Microsoft" "TechNet" desc.txt TNI9602.iso TNI9602.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNI9602.iso TNI9602.png
# uploading MSTN-CD003-TNK9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD003-TNK9809.iso" TNK9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD003-TNK9809.png" TNK9809.png
node dx.js "TNK9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnk9809 "Microsoft TechNet TNK9809 Disc (August 1998)" 1998-08-31 "Microsoft" "TechNet" desc.txt TNK9809.iso TNK9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNK9809.iso TNK9809.png
# uploading MSTN-1998-10-TNK9810.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1998-10-TNK9810.iso" TNK9810.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1998-10-TNK9810.jpg" TNK9810.jpg
node dx.js "TNK9810.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnk9810 "Microsoft TechNet TNK9810 Disc (September 1998)" 1998-09-30 "Microsoft" "TechNet" desc.txt TNK9810.iso TNK9810.jpg
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNK9810.iso TNK9810.jpg
# uploading MSTN-CD022-TNK9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD022-TNK9908.iso" TNK9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD022-TNK9908.png" TNK9908.png
node dx.js "TNK9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnk9908 "Microsoft TechNet TNK9908 Disc (July 1999)" 1999-07-31 "Microsoft" "TechNet" desc.txt TNK9908.iso TNK9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNK9908.iso TNK9908.png
# uploading MSTN-1999-09-TNK9909.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1999-09-TNK9909.iso" TNK9909.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1999-09-TNK9909.png" TNK9909.png
node dx.js "TNK9909.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnk9909 "Microsoft TechNet TNK9909 Disc (August 1999)" 1999-08-31 "Microsoft" "TechNet" desc.txt TNK9909.iso TNK9909.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNK9909.iso TNK9909.png
# uploading MSTN-CD011-TNSA9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD011-TNSA9809.iso" TNSA9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD011-TNSA9809.png" TNSA9809.png
node dx.js "TNSA9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsa9809 "Microsoft TechNet TNSA9809 Disc (July 1998)" 1998-07-30 "Microsoft" "TechNet" desc.txt TNSA9809.iso TNSA9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSA9809.iso TNSA9809.png
# uploading MSTN-CD016-TNSB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD016-TNSB9809.iso" TNSB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD016-TNSB9809.png" TNSB9809.png
node dx.js "TNSB9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsb9809 "Microsoft TechNet TNSB9809 Disc (July 1998)" 1998-07-30 "Microsoft" "TechNet" desc.txt TNSB9809.iso TNSB9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSB9809.iso TNSB9809.png
# uploading MSTN-CD026-TNSB9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD026-TNSB9908.iso" TNSB9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD026-TNSB9908.png" TNSB9908.png
node dx.js "TNSB9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsb9908 "Microsoft TechNet TNSB9908 Disc (July 1999)" 1999-07-08 "Microsoft" "TechNet" desc.txt TNSB9908.iso TNSB9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSB9908.iso TNSB9908.png
# uploading MSTN-1997-10-TNSC9710.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-10-TNSC9710.iso" TNSC9710.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-1997-10-TNSC9710.png" TNSC9710.png
node dx.js "TNSC9710.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsc9710 "Microsoft TechNet TNSC9710 Disc (September 1997)" 1997-09-11 "Microsoft" "TechNet" desc.txt TNSC9710.iso TNSC9710.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSC9710.iso TNSC9710.png
# uploading MSTN-CD017-TNSC9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD017-TNSC9809.iso" TNSC9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD017-TNSC9809.png" TNSC9809.png
node dx.js "TNSC9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsc9809 "Microsoft TechNet TNSC9809 Disc (August 1998)" 1998-08-04 "Microsoft" "TechNet" desc.txt TNSC9809.iso TNSC9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSC9809.iso TNSC9809.png
# uploading MSTN-CD025-TNSC9901.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD025-TNSC9901.iso" TNSC9901.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD025-TNSC9901.png" TNSC9901.png
node dx.js "TNSC9901.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsc9901 "Microsoft TechNet TNSC9901 Disc (November 1998)" 1998-11-30 "Microsoft" "TechNet" desc.txt TNSC9901.iso TNSC9901.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSC9901.iso TNSC9901.png
# uploading MSTN-CD013-TNSE9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD013-TNSE9809.iso" TNSE9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD013-TNSE9809.png" TNSE9809.png
node dx.js "TNSE9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnse9809 "Microsoft TechNet TNSE9809 Disc (August 1998)" 1998-08-10 "Microsoft" "TechNet" desc.txt TNSE9809.iso TNSE9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSE9809.iso TNSE9809.png
# uploading MSTN-CD015-TNSF9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD015-TNSF9809.iso" TNSF9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD015-TNSF9809.png" TNSF9809.png
node dx.js "TNSF9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsf9809 "Microsoft TechNet TNSF9809 Disc (August 1998)" 1998-08-06 "Microsoft" "TechNet" desc.txt TNSF9809.iso TNSF9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSF9809.iso TNSF9809.png
# uploading MSTN-CD014-tnsg9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD014-tnsg9809.iso" TNSG9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD014-tnsg9809.png" TNSG9809.png
node dx.js "TNSG9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnsg9809 "Microsoft TechNet TNSG9809 Disc (August 1998)" 1998-08-16 "Microsoft" "TechNet" desc.txt TNSG9809.iso TNSG9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNSG9809.iso TNSG9809.png
# uploading MSTN-CD004-TNUA9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD004-TNUA9809.iso" TNUA9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD004-TNUA9809.png" TNUA9809.png
node dx.js "TNUA9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnua9809 "Microsoft TechNet TNUA9809 Disc (August 1998)" 1998-08-11 "Microsoft" "TechNet" desc.txt TNUA9809.iso TNUA9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUA9809.iso TNUA9809.png
# uploading MSTN-CD005-TNUB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD005-TNUB9809.iso" TNUB9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD005-TNUB9809.png" TNUB9809.png
node dx.js "TNUB9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnub9809 "Microsoft TechNet TNUB9809 Disc (August 1998)" 1998-08-09 "Microsoft" "TechNet" desc.txt TNUB9809.iso TNUB9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUB9809.iso TNUB9809.png
# uploading MSTN-CD006-TNUC9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD006-TNUC9809.iso" TNUC9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD006-TNUC9809.png" TNUC9809.png
node dx.js "TNUC9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnuc9809 "Microsoft TechNet TNUC9809 Disc (August 1998)" 1998-08-10 "Microsoft" "TechNet" desc.txt TNUC9809.iso TNUC9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUC9809.iso TNUC9809.png
# uploading MSTN-CD023-TNUC9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD023-TNUC9908.iso" TNUC9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD023-TNUC9908.png" TNUC9908.png
node dx.js "TNUC9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnuc9908 "Microsoft TechNet TNUC9908 Disc (July 1999)" 1999-07-08 "Microsoft" "TechNet" desc.txt TNUC9908.iso TNUC9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUC9908.iso TNUC9908.png
# uploading MSTN-CD007-TNUD9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD007-TNUD9809.iso" TNUD9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD007-TNUD9809.png" TNUD9809.png
node dx.js "TNUD9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnud9809 "Microsoft TechNet TNUD9809 Disc (July 1998)" 1998-07-28 "Microsoft" "TechNet" desc.txt TNUD9809.iso TNUD9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUD9809.iso TNUD9809.png
# uploading MSTN-CD018-TNUF9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD018-TNUF9809.iso" TNUF9809.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD018-TNUF9809.png" TNUF9809.png
node dx.js "TNUF9809.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tnuf9809 "Microsoft TechNet TNUF9809 Disc (August 1998)" 1998-08-02 "Microsoft" "TechNet" desc.txt TNUF9809.iso TNUF9809.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TNUF9809.iso TNUF9809.png
# uploading MSTN-CD173-TN_INDEX_0511.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD173-TN_INDEX_0511.iso" TN_INDEX_0511.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD173-TN_INDEX_0511.png" TN_INDEX_0511.png
node dx.js "TN_INDEX_0511.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0511 "Microsoft TechNet TN_INDEX_0511 Disc (October 2005)" 2005-10-18 "Microsoft" "TechNet" desc.txt TN_INDEX_0511.iso TN_INDEX_0511.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0511.iso TN_INDEX_0511.png
# uploading MSTN-CD181-TN_INDEX_0512.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD181-TN_INDEX_0512.iso" TN_INDEX_0512.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD181-TN_INDEX_0512.png" TN_INDEX_0512.png
node dx.js "TN_INDEX_0512.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0512 "Microsoft TechNet TN_INDEX_0512 Disc (November 2005)" 2005-11-16 "Microsoft" "TechNet" desc.txt TN_INDEX_0512.iso TN_INDEX_0512.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0512.iso TN_INDEX_0512.png
# uploading MSTN-CD197-TN_INDEX_0601.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD197-TN_INDEX_0601.iso" TN_INDEX_0601.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD197-TN_INDEX_0601.png" TN_INDEX_0601.png
node dx.js "TN_INDEX_0601.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0601 "Microsoft TechNet TN_INDEX_0601 Disc (December 2005)" 2005-12-19 "Microsoft" "TechNet" desc.txt TN_INDEX_0601.iso TN_INDEX_0601.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0601.iso TN_INDEX_0601.png
# uploading MSTN-CD209-TN_INDEX_0602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD209-TN_INDEX_0602.iso" TN_INDEX_0602.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD209-TN_INDEX_0602.png" TN_INDEX_0602.png
node dx.js "TN_INDEX_0602.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0602 "Microsoft TechNet TN_INDEX_0602 Disc (January 2006)" 2006-01-16 "Microsoft" "TechNet" desc.txt TN_INDEX_0602.iso TN_INDEX_0602.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0602.iso TN_INDEX_0602.png
# uploading MSTN-CD220-TN_INDEX_0603.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD220-TN_INDEX_0603.iso" TN_INDEX_0603.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD220-TN_INDEX_0603.png" TN_INDEX_0603.png
node dx.js "TN_INDEX_0603.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0603 "Microsoft TechNet TN_INDEX_0603 Disc (February 2006)" 2006-02-16 "Microsoft" "TechNet" desc.txt TN_INDEX_0603.iso TN_INDEX_0603.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0603.iso TN_INDEX_0603.png
# uploading MSTN-CD226-TN_INDEX_0604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD226-TN_INDEX_0604.iso" TN_INDEX_0604.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD226-TN_INDEX_0604.png" TN_INDEX_0604.png
node dx.js "TN_INDEX_0604.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0604 "Microsoft TechNet TN_INDEX_0604 Disc (March 2006)" 2006-03-26 "Microsoft" "TechNet" desc.txt TN_INDEX_0604.iso TN_INDEX_0604.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0604.iso TN_INDEX_0604.png
# uploading MSTN-CD234-TN_INDEX_0605.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD234-TN_INDEX_0605.iso" TN_INDEX_0605.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD234-TN_INDEX_0605.png" TN_INDEX_0605.png
node dx.js "TN_INDEX_0605.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0605 "Microsoft TechNet TN_INDEX_0605 Disc (April 2006)" 2006-04-18 "Microsoft" "TechNet" desc.txt TN_INDEX_0605.iso TN_INDEX_0605.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0605.iso TN_INDEX_0605.png
# uploading MSTN-CD243-TN_INDEX_0606.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD243-TN_INDEX_0606.iso" TN_INDEX_0606.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD243-TN_INDEX_0606.png" TN_INDEX_0606.png
node dx.js "TN_INDEX_0606.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0606 "Microsoft TechNet TN_INDEX_0606 Disc (May 2006)" 2006-05-16 "Microsoft" "TechNet" desc.txt TN_INDEX_0606.iso TN_INDEX_0606.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0606.iso TN_INDEX_0606.png
# uploading MSTN-CD251-TN_INDEX_0607.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD251-TN_INDEX_0607.iso" TN_INDEX_0607.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD251-TN_INDEX_0607.png" TN_INDEX_0607.png
node dx.js "TN_INDEX_0607.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0607 "Microsoft TechNet TN_INDEX_0607 Disc (June 2006)" 2006-06-18 "Microsoft" "TechNet" desc.txt TN_INDEX_0607.iso TN_INDEX_0607.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0607.iso TN_INDEX_0607.png
# uploading MSTN-CD258-TN_INDEX_0608.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD258-TN_INDEX_0608.iso" TN_INDEX_0608.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD258-TN_INDEX_0608.png" TN_INDEX_0608.png
node dx.js "TN_INDEX_0608.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0608 "Microsoft TechNet TN_INDEX_0608 Disc (July 2006)" 2006-07-17 "Microsoft" "TechNet" desc.txt TN_INDEX_0608.iso TN_INDEX_0608.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0608.iso TN_INDEX_0608.png
# uploading MSTN-CD270-TN_INDEX_0609.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD270-TN_INDEX_0609.iso" TN_INDEX_0609.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD270-TN_INDEX_0609.png" TN_INDEX_0609.png
node dx.js "TN_INDEX_0609.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0609 "Microsoft TechNet TN_INDEX_0609 Disc (August 2006)" 2006-08-10 "Microsoft" "TechNet" desc.txt TN_INDEX_0609.iso TN_INDEX_0609.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0609.iso TN_INDEX_0609.png
# uploading MSTN-CD278-TN_INDEX_0610.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD278-TN_INDEX_0610.iso" TN_INDEX_0610.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD278-TN_INDEX_0610.png" TN_INDEX_0610.png
node dx.js "TN_INDEX_0610.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0610 "Microsoft TechNet TN_INDEX_0610 Disc (September 2006)" 2006-09-13 "Microsoft" "TechNet" desc.txt TN_INDEX_0610.iso TN_INDEX_0610.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0610.iso TN_INDEX_0610.png
# uploading MSTN-CD287-TN_INDEX_0611.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD287-TN_INDEX_0611.iso" TN_INDEX_0611.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD287-TN_INDEX_0611.png" TN_INDEX_0611.png
node dx.js "TN_INDEX_0611.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0611 "Microsoft TechNet TN_INDEX_0611 Disc (October 2006)" 2006-10-11 "Microsoft" "TechNet" desc.txt TN_INDEX_0611.iso TN_INDEX_0611.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0611.iso TN_INDEX_0611.png
# uploading MSTN-CD293-TN_INDEX_0612.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD293-TN_INDEX_0612.iso" TN_INDEX_0612.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD293-TN_INDEX_0612.png" TN_INDEX_0612.png
node dx.js "TN_INDEX_0612.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0612 "Microsoft TechNet TN_INDEX_0612 Disc (November 2006)" 2006-11-07 "Microsoft" "TechNet" desc.txt TN_INDEX_0612.iso TN_INDEX_0612.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0612.iso TN_INDEX_0612.png
# uploading MSTN-CD299-TN_INDEX_0701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD299-TN_INDEX_0701.iso" TN_INDEX_0701.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD299-TN_INDEX_0701.png" TN_INDEX_0701.png
node dx.js "TN_INDEX_0701.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0701 "Microsoft TechNet TN_INDEX_0701 Disc (December 2006)" 2006-12-17 "Microsoft" "TechNet" desc.txt TN_INDEX_0701.iso TN_INDEX_0701.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0701.iso TN_INDEX_0701.png
# uploading MSTN-CD315-TN_INDEX_0703.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD315-TN_INDEX_0703.iso" TN_INDEX_0703.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD315-TN_INDEX_0703.png" TN_INDEX_0703.png
node dx.js "TN_INDEX_0703.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0703 "Microsoft TechNet TN_INDEX_0703 Disc (February 2007)" 2007-02-13 "Microsoft" "TechNet" desc.txt TN_INDEX_0703.iso TN_INDEX_0703.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0703.iso TN_INDEX_0703.png
# uploading MSTN-CD335-TN_INDEX_0707.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD335-TN_INDEX_0707.iso" TN_INDEX_0707.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD335-TN_INDEX_0707.png" TN_INDEX_0707.png
node dx.js "TN_INDEX_0707.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0707 "Microsoft TechNet TN_INDEX_0707 Disc (June 2007)" 2007-06-11 "Microsoft" "TechNet" desc.txt TN_INDEX_0707.iso TN_INDEX_0707.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0707.iso TN_INDEX_0707.png
# uploading MSTN-CD342-TN_INDEX_0708.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD342-TN_INDEX_0708.iso" TN_INDEX_0708.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD342-TN_INDEX_0708.png" TN_INDEX_0708.png
node dx.js "TN_INDEX_0708.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0708 "Microsoft TechNet TN_INDEX_0708 Disc (July 2007)" 2007-07-11 "Microsoft" "TechNet" desc.txt TN_INDEX_0708.iso TN_INDEX_0708.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0708.iso TN_INDEX_0708.png
# uploading MSTN-CD346-TN_INDEX_0712.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD346-TN_INDEX_0712.iso" TN_INDEX_0712.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD346-TN_INDEX_0712.png" TN_INDEX_0712.png
node dx.js "TN_INDEX_0712.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-tn_index_0712 "Microsoft TechNet TN_INDEX_0712 Disc (November 2007)" 2007-11-05 "Microsoft" "TechNet" desc.txt TN_INDEX_0712.iso TN_INDEX_0712.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TN_INDEX_0712.iso TN_INDEX_0712.png
# uploading MSTN-CD206-TTCD_JAN06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD206-TTCD_JAN06.iso" TTCD_JAN06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD206-TTCD_JAN06.png" TTCD_JAN06.png
node dx.js "TTCD_JAN06.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_jan06 "Microsoft TechNet TTCD_JAN06 Disc (November 2005)" 2005-11-29 "Microsoft" "TechNet" desc.txt TTCD_JAN06.iso TTCD_JAN06.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_JAN06.iso TTCD_JAN06.png
# uploading MSTN-CD312-TTCD_JAN07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD312-TTCD_JAN07.iso" TTCD_JAN07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD312-TTCD_JAN07.png" TTCD_JAN07.png
node dx.js "TTCD_JAN07.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_jan07 "Microsoft TechNet TTCD_JAN07 Disc (December 2006)" 2006-12-12 "Microsoft" "TechNet" desc.txt TTCD_JAN07.iso TTCD_JAN07.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_JAN07.iso TTCD_JAN07.png
# uploading MSTN-CD254-TTCD_JUL06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD254-TTCD_JUL06.iso" TTCD_JUL06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD254-TTCD_JUL06.png" TTCD_JUL06.png
node dx.js "TTCD_JUL06.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_jul06 "Microsoft TechNet TTCD_JUL06 Disc (June 2006)" 2006-06-12 "Microsoft" "TechNet" desc.txt TTCD_JUL06.iso TTCD_JUL06.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_JUL06.iso TTCD_JUL06.png
# uploading MSTN-CD283-TTCD_OCT06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD283-TTCD_OCT06.iso" TTCD_OCT06.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD283-TTCD_OCT06.png" TTCD_OCT06.png
node dx.js "TTCD_OCT06.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_oct06 "Microsoft TechNet TTCD_OCT06 Disc (September 2006)" 2006-09-04 "Microsoft" "TechNet" desc.txt TTCD_OCT06.iso TTCD_OCT06.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_OCT06.iso TTCD_OCT06.png
# uploading MSTN-CD345-TTCD_OCT07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD345-TTCD_OCT07.iso" TTCD_OCT07.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD345-TTCD_OCT07.png" TTCD_OCT07.png
node dx.js "TTCD_OCT07.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_oct07 "Microsoft TechNet TTCD_OCT07 Disc (September 2007)" 2007-09-09 "Microsoft" "TechNet" desc.txt TTCD_OCT07.iso TTCD_OCT07.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_OCT07.iso TTCD_OCT07.png
# uploading MSTN-CD169-TTCD_OCT2005.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD169-TTCD_OCT2005.iso" TTCD_OCT2005.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD169-TTCD_OCT2005.png" TTCD_OCT2005.png
node dx.js "TTCD_OCT2005.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttcd_oct2005 "Microsoft TechNet TTCD_OCT2005 Disc (August 2005)" 2005-08-29 "Microsoft" "TechNet" desc.txt TTCD_OCT2005.iso TTCD_OCT2005.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTCD_OCT2005.iso TTCD_OCT2005.png
# uploading MSTN-CD068-ttt25.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD068-ttt25.iso" TTT25.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD068-ttt25.png" TTT25.png
node dx.js "TTT25.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttt25 "Microsoft TechNet TTT25 Disc (September 2003)" 2003-09-15 "Microsoft" "TechNet" desc.txt TTT25.iso TTT25.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTT25.iso TTT25.png
# uploading MSTN-CD087-ttt26.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD087-ttt26.iso" TTT26.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD087-ttt26.png" TTT26.png
node dx.js "TTT26.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttt26 "Microsoft TechNet TTT26 Disc (December 2003)" 2003-12-09 "Microsoft" "TechNet" desc.txt TTT26.iso TTT26.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTT26.iso TTT26.png
# uploading MSTN-CD107-ttt27.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD107-ttt27.iso" TTT27.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD107-ttt27.png" TTT27.png
node dx.js "TTT27.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttt27 "Microsoft TechNet TTT27 Disc (March 2004)" 2004-03-11 "Microsoft" "TechNet" desc.txt TTT27.iso TTT27.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTT27.iso TTT27.png
# uploading MSTN-CD125-ttt28.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD125-ttt28.iso" TTT28.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD125-ttt28.png" TTT28.png
node dx.js "TTT28.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttt28 "Microsoft TechNet TTT28 Disc (June 2004)" 2004-06-07 "Microsoft" "TechNet" desc.txt TTT28.iso TTT28.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTT28.iso TTT28.png
# uploading MSTN-CD106-ttt28.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD106-ttt28.iso" TTT28.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD106-ttt28.png" TTT28.png
node dx.js "TTT28.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-ttt28-1 "Microsoft TechNet TTT28 Disc (March 2004)" 2004-03-11 "Microsoft" "TechNet" desc.txt TTT28.iso TTT28.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt TTT28.iso TTT28.png
# uploading MSTN-CD041-utility1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD041-utility1.iso" UTILITY1.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD041-utility1.png" UTILITY1.png
node dx.js "UTILITY1.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-utility1 "Microsoft TechNet UTILITY1 Disc (October 1999)" 1999-10-07 "Microsoft" "TechNet" desc.txt UTILITY1.iso UTILITY1.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt UTILITY1.iso UTILITY1.png
# uploading MSTN-CD067-Visio_Std_2002.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD067-Visio_Std_2002.iso" VISIO_STD_2002.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD067-Visio_Std_2002.png" VISIO_STD_2002.png
node dx.js "VISIO_STD_2002.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-visio_std_2002 "Microsoft TechNet VISIO_STD_2002 Disc (January 2002)" 2002-01-15 "Microsoft" "TechNet" desc.txt VISIO_STD_2002.iso VISIO_STD_2002.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt VISIO_STD_2002.iso VISIO_STD_2002.png
# uploading MSTN-CD033-W2KASVA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD033-W2KASVA_USA.iso" W2KASVA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD033-W2KASVA_USA.png" W2KASVA_USA.png
node dx.js "W2KASVA_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2kasva_usa "Microsoft TechNet W2KASVA_USA Disc (June 1999)" 1999-06-27 "Microsoft" "TechNet" desc.txt W2KASVA_USA.iso W2KASVA_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KASVA_USA.iso W2KASVA_USA.png
# uploading MSTN-CD032-W2KASVI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD032-W2KASVI_USA.iso" W2KASVI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD032-W2KASVI_USA.png" W2KASVI_USA.png
node dx.js "W2KASVI_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2kasvi_usa "Microsoft TechNet W2KASVI_USA Disc (June 1999)" 1999-06-27 "Microsoft" "TechNet" desc.txt W2KASVI_USA.iso W2KASVI_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KASVI_USA.iso W2KASVI_USA.png
# uploading MSTN-CD029-W2KPROA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD029-W2KPROA_USA.iso" W2KPROA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD029-W2KPROA_USA.png" W2KPROA_USA.png
node dx.js "W2KPROA_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2kproa_usa "Microsoft TechNet W2KPROA_USA Disc (June 1999)" 1999-06-27 "Microsoft" "TechNet" desc.txt W2KPROA_USA.iso W2KPROA_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KPROA_USA.iso W2KPROA_USA.png
# uploading MSTN-CD028-W2KPROI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD028-W2KPROI_USA.iso" W2KPROI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD028-W2KPROI_USA.png" W2KPROI_USA.png
node dx.js "W2KPROI_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2kproi_usa "Microsoft TechNet W2KPROI_USA Disc (June 1999)" 1999-06-27 "Microsoft" "TechNet" desc.txt W2KPROI_USA.iso W2KPROI_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KPROI_USA.iso W2KPROI_USA.png
# uploading MSTN-CD031-W2KSRVA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD031-W2KSRVA_USA.iso" W2KSRVA_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD031-W2KSRVA_USA.png" W2KSRVA_USA.png
node dx.js "W2KSRVA_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2ksrva_usa "Microsoft TechNet W2KSRVA_USA Disc (June 1999)" 1999-06-27 "Microsoft" "TechNet" desc.txt W2KSRVA_USA.iso W2KSRVA_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KSRVA_USA.iso W2KSRVA_USA.png
# uploading MSTN-CD030-W2KSRVI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD030-W2KSRVI_USA.iso" W2KSRVI_USA.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD030-W2KSRVI_USA.png" W2KSRVI_USA.png
node dx.js "W2KSRVI_USA.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-w2ksrvi_usa "Microsoft TechNet W2KSRVI_USA Disc (June 1999)" 1999-06-28 "Microsoft" "TechNet" desc.txt W2KSRVI_USA.iso W2KSRVI_USA.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt W2KSRVI_USA.iso W2KSRVI_USA.png
# uploading MSTN-CD027-Y2K9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD027-Y2K9908.iso" Y2K9908.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD027-Y2K9908.png" Y2K9908.png
node dx.js "Y2K9908.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-y2k9908 "Microsoft TechNet Y2K9908 Disc (July 1999)" 1999-07-31 "Microsoft" "TechNet" desc.txt Y2K9908.iso Y2K9908.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt Y2K9908.iso Y2K9908.png
# uploading MSTN-CD045-Y2K9911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD045-Y2K9911.iso" Y2K9911.iso
cp "/Users/jeff/Library/CloudStorage/OneDrive-Personal/Software/Discs/Microsoft/TechNet/MSTN-CD045-Y2K9911.png" Y2K9911.png
node dx.js "Y2K9911.iso" --desc > desc.txt
while true; do
    python upload.py ms-technet-y2k9911 "Microsoft TechNet Y2K9911 Disc (October 1999)" 1999-10-31 "Microsoft" "TechNet" desc.txt Y2K9911.iso Y2K9911.png
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm desc.txt Y2K9911.iso Y2K9911.png
