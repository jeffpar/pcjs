set -x
# updating MSTN-CD034-9908BetaCD1.iso
cp "~/TechNet/MSTN-CD034-9908BetaCD1.iso" 9908BETACD1.iso
node dx.js "9908BETACD1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-9908-betacd1 "Microsoft TechNet 9908BETACD1 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt 9908BETACD1.iso
# updating MSTN-CD177-ARMEFPP_EN.iso
cp "~/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
node dx.js "ARMEFPP_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt ARMEFPP_EN.iso
# updating MSTN-CD070-BetaCD10310.iso
cp "~/TechNet/MSTN-CD070-BetaCD10310.iso" BETACD10310.iso
node dx.js "BETACD10310.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-betacd10310 "Microsoft TechNet BETACD10310 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETACD10310.iso
# updating MSTN-CD080-BetaCD10312.iso
cp "~/TechNet/MSTN-CD080-BetaCD10312.iso" BETACD10312.iso
node dx.js "BETACD10312.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-betacd10312 "Microsoft TechNet BETACD10312 Disc (December 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETACD10312.iso
# updating MSTN-CD099-BetaCD10403.iso
cp "~/TechNet/MSTN-CD099-BetaCD10403.iso" BETACD10403.iso
node dx.js "BETACD10403.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-betacd10403 "Microsoft TechNet BETACD10403 Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETACD10403.iso
# updating MSTN-CD114-BetaCD10405.iso
cp "~/TechNet/MSTN-CD114-BetaCD10405.iso" BETACD10405.iso
node dx.js "BETACD10405.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-betacd10405 "Microsoft TechNet BETACD10405 Disc (May 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETACD10405.iso
# updating MSTN-CD046-betaCD19911.iso
cp "~/TechNet/MSTN-CD046-betaCD19911.iso" BETACD19911.iso
node dx.js "BETACD19911.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-betacd19911 "Microsoft TechNet BETACD19911 Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETACD19911.iso
# updating MSTN-CD194-BETA_EN_0223.05.iso
cp "~/TechNet/MSTN-CD194-BETA_EN_0223.05.iso" BETA_EN_0223.05.iso
node dx.js "BETA_EN_0223.05.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.05 "Microsoft TechNet BETA_EN_0223.05 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.05.iso
# updating MSTN-CD202-BETA_EN_0223.06.iso
cp "~/TechNet/MSTN-CD202-BETA_EN_0223.06.iso" BETA_EN_0223.06.iso
node dx.js "BETA_EN_0223.06.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.06 "Microsoft TechNet BETA_EN_0223.06 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.06.iso
# updating MSTN-CD217-BETA_EN_0223.07.iso
cp "~/TechNet/MSTN-CD217-BETA_EN_0223.07.iso" BETA_EN_0223.07.iso
node dx.js "BETA_EN_0223.07.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.07 "Microsoft TechNet BETA_EN_0223.07 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.07.iso
# updating MSTN-CD231-BETA_EN_0223.08.iso
cp "~/TechNet/MSTN-CD231-BETA_EN_0223.08.iso" BETA_EN_0223.08.iso
node dx.js "BETA_EN_0223.08.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.08 "Microsoft TechNet BETA_EN_0223.08 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.08.iso
# updating MSTN-CD240-BETA_EN_0223.09.iso
cp "~/TechNet/MSTN-CD240-BETA_EN_0223.09.iso" BETA_EN_0223.09.iso
node dx.js "BETA_EN_0223.09.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.09 "Microsoft TechNet BETA_EN_0223.09 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.09.iso
# updating MSTN-CD248-BETA_EN_0223.10.iso
cp "~/TechNet/MSTN-CD248-BETA_EN_0223.10.iso" BETA_EN_0223.10.iso
node dx.js "BETA_EN_0223.10.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.10 "Microsoft TechNet BETA_EN_0223.10 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.10.iso
# updating MSTN-CD255-BETA_EN_0223.11.iso
cp "~/TechNet/MSTN-CD255-BETA_EN_0223.11.iso" BETA_EN_0223.11.iso
node dx.js "BETA_EN_0223.11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.11 "Microsoft TechNet BETA_EN_0223.11 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.11.iso
# updating MSTN-CD259-BETA_EN_0223.12.iso
cp "~/TechNet/MSTN-CD259-BETA_EN_0223.12.iso" BETA_EN_0223.12.iso
node dx.js "BETA_EN_0223.12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.12 "Microsoft TechNet BETA_EN_0223.12 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.12.iso
# updating MSTN-CD274-BETA_EN_0223.13.iso
cp "~/TechNet/MSTN-CD274-BETA_EN_0223.13.iso" BETA_EN_0223.13.iso
node dx.js "BETA_EN_0223.13.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-beta_en_0223.13 "Microsoft TechNet BETA_EN_0223.13 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BETA_EN_0223.13.iso
# updating MSTN-CD009-BORK2ND_ED.iso
cp "~/TechNet/MSTN-CD009-BORK2ND_ED.iso" BORK2ND_ED.iso
node dx.js "BORK2ND_ED.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-bork2nd_ed "Microsoft TechNet BORK2ND_ED Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BORK2ND_ED.iso
# updating MSTN-CD024-Bork4.5Intla.iso
cp "~/TechNet/MSTN-CD024-Bork4.5Intla.iso" BORK4.5INTLA.iso
node dx.js "BORK4.5INTLA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-bork4.5intla "Microsoft TechNet BORK4.5INTLA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BORK4.5INTLA.iso
# updating MSTN-CD178-BR0ECD2FRE_EN.iso
cp "~/TechNet/MSTN-CD178-BR0ECD2FRE_EN.iso" BR0ECD2FRE_EN.iso
node dx.js "BR0ECD2FRE_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-br0ecd2fre_en "Microsoft TechNet BR0ECD2FRE_EN Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BR0ECD2FRE_EN.iso
# updating MSTN-CD216-BRMECD2XFRE_EN.iso
cp "~/TechNet/MSTN-CD216-BRMECD2XFRE_EN.iso" BRMECD2XFRE_EN.iso
node dx.js "BRMECD2XFRE_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-brmecd2xfre_en "Microsoft TechNet BRMECD2XFRE_EN Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BRMECD2XFRE_EN.iso
# updating MSTN-CD203-BRMEFPP_EN.iso
cp "~/TechNet/MSTN-CD203-BRMEFPP_EN.iso" BRMEFPP_EN.iso
node dx.js "BRMEFPP_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-brmefpp_en "Microsoft TechNet BRMEFPP_EN Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BRMEFPP_EN.iso
# updating MSTN-CD215-BRMEXFPP_EN.iso
cp "~/TechNet/MSTN-CD215-BRMEXFPP_EN.iso" BRMEXFPP_EN.iso
node dx.js "BRMEXFPP_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-brmexfpp_en "Microsoft TechNet BRMEXFPP_EN Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BRMEXFPP_EN.iso
# updating MSTN-CD066-BTS2002EVAL_EN.iso
cp "~/TechNet/MSTN-CD066-BTS2002EVAL_EN.iso" BTS2002EVAL_EN.iso
node dx.js "BTS2002EVAL_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-bts2002eval_en "Microsoft TechNet BTS2002EVAL_EN Disc (December 2001)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BTS2002EVAL_EN.iso
# updating MSTN-CD108-BTS2004Eval_EN.iso
cp "~/TechNet/MSTN-CD108-BTS2004Eval_EN.iso" BTS2004EVAL_EN.iso
node dx.js "BTS2004EVAL_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-bts2004eval_en "Microsoft TechNet BTS2004EVAL_EN Disc (January 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BTS2004EVAL_EN.iso
# updating MSTN-CD176-BTS2004_EN.iso
cp "~/TechNet/MSTN-CD176-BTS2004_EN.iso" BTS2004_EN.iso
node dx.js "BTS2004_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-bts2004_en "Microsoft TechNet BTS2004_EN Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt BTS2004_EN.iso
# updating MSTN-1996-02-CSD9602.iso
cp "~/TechNet/MSTN-1996-02-CSD9602.iso" CSD9602.iso
node dx.js "CSD9602.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-csd9602 "Microsoft TechNet CSD9602 Disc (February 1996)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt CSD9602.iso
# updating MSTN-1996-04-CSD9604.iso
cp "~/TechNet/MSTN-1996-04-CSD9604.iso" CSD9604.iso
node dx.js "CSD9604.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-csd9604 "Microsoft TechNet CSD9604 Disc (April 1996)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt CSD9604.iso
# updating MSTN-CD336-DL_C0294.01.iso
cp "~/TechNet/MSTN-CD336-DL_C0294.01.iso" DL_C0294.01.iso
node dx.js "DL_C0294.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dl_c0294.01 "Microsoft TechNet DL_C0294.01 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DL_C0294.01.iso
# updating MSTN-CD049-DOM35ENUC1.iso
cp "~/TechNet/MSTN-CD049-DOM35ENUC1.iso" DOM35ENUC1.iso
node dx.js "DOM35ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom35enuc1 "Microsoft TechNet DOM35ENUC1 Disc (November 2002)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM35ENUC1.iso
# updating MSTN-CD050-DOM35ENUC2.iso
cp "~/TechNet/MSTN-CD050-DOM35ENUC2.iso" DOM35ENUC2.iso
node dx.js "DOM35ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom35enuc2 "Microsoft TechNet DOM35ENUC2 Disc (November 2002)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM35ENUC2.iso
# updating MSTN-CD055-DOM46ENUC1.iso
cp "~/TechNet/MSTN-CD055-DOM46ENUC1.iso" DOM46ENUC1.iso
node dx.js "DOM46ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom46enuc1 "Microsoft TechNet DOM46ENUC1 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM46ENUC1.iso
# updating MSTN-CD056-DOM46ENUC2.iso
cp "~/TechNet/MSTN-CD056-DOM46ENUC2.iso" DOM46ENUC2.iso
node dx.js "DOM46ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom46enuc2 "Microsoft TechNet DOM46ENUC2 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM46ENUC2.iso
# updating MSTN-CD071-DOM47ENUC1.iso
cp "~/TechNet/MSTN-CD071-DOM47ENUC1.iso" DOM47ENUC1.iso
node dx.js "DOM47ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom47enuc1 "Microsoft TechNet DOM47ENUC1 Disc (November 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM47ENUC1.iso
# updating MSTN-CD072-DOM47ENUC2.iso
cp "~/TechNet/MSTN-CD072-DOM47ENUC2.iso" DOM47ENUC2.iso
node dx.js "DOM47ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom47enuc2 "Microsoft TechNet DOM47ENUC2 Disc (November 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM47ENUC2.iso
# updating MSTN-CD084-DOM48ENUC1.iso
cp "~/TechNet/MSTN-CD084-DOM48ENUC1.iso" DOM48ENUC1.iso
node dx.js "DOM48ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom48enuc1 "Microsoft TechNet DOM48ENUC1 Disc (December 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM48ENUC1.iso
# updating MSTN-CD083-DOM48ENUC2.iso
cp "~/TechNet/MSTN-CD083-DOM48ENUC2.iso" DOM48ENUC2.iso
node dx.js "DOM48ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom48enuc2 "Microsoft TechNet DOM48ENUC2 Disc (December 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM48ENUC2.iso
# updating MSTN-CD091-DOM49ENUC1.iso
cp "~/TechNet/MSTN-CD091-DOM49ENUC1.iso" DOM49ENUC1.iso
node dx.js "DOM49ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom49enuc1 "Microsoft TechNet DOM49ENUC1 Disc (January 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM49ENUC1.iso
# updating MSTN-CD090-DOM49ENUC2.iso
cp "~/TechNet/MSTN-CD090-DOM49ENUC2.iso" DOM49ENUC2.iso
node dx.js "DOM49ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom49enuc2 "Microsoft TechNet DOM49ENUC2 Disc (January 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM49ENUC2.iso
# updating MSTN-CD093-DOM50ENUC1.iso
cp "~/TechNet/MSTN-CD093-DOM50ENUC1.iso" DOM50ENUC1.iso
node dx.js "DOM50ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom50enuc1 "Microsoft TechNet DOM50ENUC1 Disc (February 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM50ENUC1.iso
# updating MSTN-CD094-DOM50ENUC2.iso
cp "~/TechNet/MSTN-CD094-DOM50ENUC2.iso" DOM50ENUC2.iso
node dx.js "DOM50ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom50enuc2 "Microsoft TechNet DOM50ENUC2 Disc (February 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM50ENUC2.iso
# updating MSTN-CD103-DOM51ENUC1.iso
cp "~/TechNet/MSTN-CD103-DOM51ENUC1.iso" DOM51ENUC1.iso
node dx.js "DOM51ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom51enuc1 "Microsoft TechNet DOM51ENUC1 Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM51ENUC1.iso
# updating MSTN-CD102-DOM51ENUC2.iso
cp "~/TechNet/MSTN-CD102-DOM51ENUC2.iso" DOM51ENUC2.iso
node dx.js "DOM51ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom51enuc2 "Microsoft TechNet DOM51ENUC2 Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM51ENUC2.iso
# updating MSTN-CD110-DOM52ENUC1.iso
cp "~/TechNet/MSTN-CD110-DOM52ENUC1.iso" DOM52ENUC1.iso
node dx.js "DOM52ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom52enuc1 "Microsoft TechNet DOM52ENUC1 Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM52ENUC1.iso
# updating MSTN-CD109-DOM52ENUC2.iso
cp "~/TechNet/MSTN-CD109-DOM52ENUC2.iso" DOM52ENUC2.iso
node dx.js "DOM52ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom52enuc2 "Microsoft TechNet DOM52ENUC2 Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM52ENUC2.iso
# updating MSTN-CD118-DOM53ENUC1.iso
cp "~/TechNet/MSTN-CD118-DOM53ENUC1.iso" DOM53ENUC1.iso
node dx.js "DOM53ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom53enuc1 "Microsoft TechNet DOM53ENUC1 Disc (May 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM53ENUC1.iso
# updating MSTN-CD117-DOM53ENUC2.iso
cp "~/TechNet/MSTN-CD117-DOM53ENUC2.iso" DOM53ENUC2.iso
node dx.js "DOM53ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom53enuc2 "Microsoft TechNet DOM53ENUC2 Disc (May 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM53ENUC2.iso
# updating MSTN-CD123-DOM54ENUC1.iso
cp "~/TechNet/MSTN-CD123-DOM54ENUC1.iso" DOM54ENUC1.iso
node dx.js "DOM54ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom54enuc1 "Microsoft TechNet DOM54ENUC1 Disc (June 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM54ENUC1.iso
# updating MSTN-CD122-DOM54ENUC2.iso
cp "~/TechNet/MSTN-CD122-DOM54ENUC2.iso" DOM54ENUC2.iso
node dx.js "DOM54ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom54enuc2 "Microsoft TechNet DOM54ENUC2 Disc (June 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM54ENUC2.iso
# updating MSTN-CD131-Dom55ENUC1.iso
cp "~/TechNet/MSTN-CD131-Dom55ENUC1.iso" DOM55ENUC1.iso
node dx.js "DOM55ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom55enuc1 "Microsoft TechNet DOM55ENUC1 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM55ENUC1.iso
# updating MSTN-CD129-Dom55ENUC2.iso
cp "~/TechNet/MSTN-CD129-Dom55ENUC2.iso" DOM55ENUC2.iso
node dx.js "DOM55ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom55enuc2 "Microsoft TechNet DOM55ENUC2 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM55ENUC2.iso
# updating MSTN-CD136-DOM56ENUC1.iso
cp "~/TechNet/MSTN-CD136-DOM56ENUC1.iso" DOM56ENUC1.iso
node dx.js "DOM56ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom56enuc1 "Microsoft TechNet DOM56ENUC1 Disc (August 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM56ENUC1.iso
# updating MSTN-CD135-DOM56ENUC2.iso
cp "~/TechNet/MSTN-CD135-DOM56ENUC2.iso" DOM56ENUC2.iso
node dx.js "DOM56ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom56enuc2 "Microsoft TechNet DOM56ENUC2 Disc (August 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM56ENUC2.iso
# updating MSTN-CD146-DOM68ENUC1.iso
cp "~/TechNet/MSTN-CD146-DOM68ENUC1.iso" DOM68ENUC1.iso
node dx.js "DOM68ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom68enuc1 "Microsoft TechNet DOM68ENUC1 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM68ENUC1.iso
# updating MSTN-CD147-DOM68ENUC2.iso
cp "~/TechNet/MSTN-CD147-DOM68ENUC2.iso" DOM68ENUC2.iso
node dx.js "DOM68ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom68enuc2 "Microsoft TechNet DOM68ENUC2 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM68ENUC2.iso
# updating MSTN-CD154-DOM69ENUC1.iso
cp "~/TechNet/MSTN-CD154-DOM69ENUC1.iso" DOM69ENUC1.iso
node dx.js "DOM69ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom69enuc1 "Microsoft TechNet DOM69ENUC1 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM69ENUC1.iso
# updating MSTN-CD155-DOM69ENUC2.iso
cp "~/TechNet/MSTN-CD155-DOM69ENUC2.iso" DOM69ENUC2.iso
node dx.js "DOM69ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom69enuc2 "Microsoft TechNet DOM69ENUC2 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM69ENUC2.iso
# updating MSTN-CD163-DOM70ENUC1.iso
cp "~/TechNet/MSTN-CD163-DOM70ENUC1.iso" DOM70ENUC1.iso
node dx.js "DOM70ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom70enuc1 "Microsoft TechNet DOM70ENUC1 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM70ENUC1.iso
# updating MSTN-CD164-DOM70ENUC2.iso
cp "~/TechNet/MSTN-CD164-DOM70ENUC2.iso" DOM70ENUC2.iso
node dx.js "DOM70ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom70enuc2 "Microsoft TechNet DOM70ENUC2 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM70ENUC2.iso
# updating MSTN-CD171-DOM71ENUC1.iso
cp "~/TechNet/MSTN-CD171-DOM71ENUC1.iso" DOM71ENUC1.iso
node dx.js "DOM71ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom71enuc1 "Microsoft TechNet DOM71ENUC1 Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM71ENUC1.iso
# updating MSTN-CD172-DOM71ENUC2.iso
cp "~/TechNet/MSTN-CD172-DOM71ENUC2.iso" DOM71ENUC2.iso
node dx.js "DOM71ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom71enuc2 "Microsoft TechNet DOM71ENUC2 Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM71ENUC2.iso
# updating MSTN-CD179-DOM72ENUC1.iso
cp "~/TechNet/MSTN-CD179-DOM72ENUC1.iso" DOM72ENUC1.iso
node dx.js "DOM72ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom72enuc1 "Microsoft TechNet DOM72ENUC1 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM72ENUC1.iso
# updating MSTN-CD180-DOM72ENUC2.iso
cp "~/TechNet/MSTN-CD180-DOM72ENUC2.iso" DOM72ENUC2.iso
node dx.js "DOM72ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom72enuc2 "Microsoft TechNet DOM72ENUC2 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM72ENUC2.iso
# updating MSTN-CD195-DOM73ENUC1.iso
cp "~/TechNet/MSTN-CD195-DOM73ENUC1.iso" DOM73ENUC1.iso
node dx.js "DOM73ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom73enuc1 "Microsoft TechNet DOM73ENUC1 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM73ENUC1.iso
# updating MSTN-CD196-DOM73ENUC2.iso
cp "~/TechNet/MSTN-CD196-DOM73ENUC2.iso" DOM73ENUC2.iso
node dx.js "DOM73ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom73enuc2 "Microsoft TechNet DOM73ENUC2 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM73ENUC2.iso
# updating MSTN-CD207-DOM74ENUC1.iso
cp "~/TechNet/MSTN-CD207-DOM74ENUC1.iso" DOM74ENUC1.iso
node dx.js "DOM74ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom74enuc1 "Microsoft TechNet DOM74ENUC1 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM74ENUC1.iso
# updating MSTN-CD208-DOM74ENUC2.iso
cp "~/TechNet/MSTN-CD208-DOM74ENUC2.iso" DOM74ENUC2.iso
node dx.js "DOM74ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom74enuc2 "Microsoft TechNet DOM74ENUC2 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM74ENUC2.iso
# updating MSTN-CD218-DOM75ENUC1.iso
cp "~/TechNet/MSTN-CD218-DOM75ENUC1.iso" DOM75ENUC1.iso
node dx.js "DOM75ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom75enuc1 "Microsoft TechNet DOM75ENUC1 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM75ENUC1.iso
# updating MSTN-CD219-DOM75ENUC2.iso
cp "~/TechNet/MSTN-CD219-DOM75ENUC2.iso" DOM75ENUC2.iso
node dx.js "DOM75ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom75enuc2 "Microsoft TechNet DOM75ENUC2 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM75ENUC2.iso
# updating MSTN-CD224-DOM76ENUC1.iso
cp "~/TechNet/MSTN-CD224-DOM76ENUC1.iso" DOM76ENUC1.iso
node dx.js "DOM76ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom76enuc1 "Microsoft TechNet DOM76ENUC1 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM76ENUC1.iso
# updating MSTN-CD225-DOM76ENUC2.iso
cp "~/TechNet/MSTN-CD225-DOM76ENUC2.iso" DOM76ENUC2.iso
node dx.js "DOM76ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom76enuc2 "Microsoft TechNet DOM76ENUC2 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM76ENUC2.iso
# updating MSTN-CD232-DOM77ENUC1.iso
cp "~/TechNet/MSTN-CD232-DOM77ENUC1.iso" DOM77ENUC1.iso
node dx.js "DOM77ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom77enuc1 "Microsoft TechNet DOM77ENUC1 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM77ENUC1.iso
# updating MSTN-CD233-DOM77ENUC2.iso
cp "~/TechNet/MSTN-CD233-DOM77ENUC2.iso" DOM77ENUC2.iso
node dx.js "DOM77ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom77enuc2 "Microsoft TechNet DOM77ENUC2 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM77ENUC2.iso
# updating MSTN-CD241-DOM78ENUC1.iso
cp "~/TechNet/MSTN-CD241-DOM78ENUC1.iso" DOM78ENUC1.iso
node dx.js "DOM78ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom78enuc1 "Microsoft TechNet DOM78ENUC1 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM78ENUC1.iso
# updating MSTN-CD242-DOM78ENUC2.iso
cp "~/TechNet/MSTN-CD242-DOM78ENUC2.iso" DOM78ENUC2.iso
node dx.js "DOM78ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom78enuc2 "Microsoft TechNet DOM78ENUC2 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM78ENUC2.iso
# updating MSTN-CD249-DOM79ENUC1.iso
cp "~/TechNet/MSTN-CD249-DOM79ENUC1.iso" DOM79ENUC1.iso
node dx.js "DOM79ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom79enuc1 "Microsoft TechNet DOM79ENUC1 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM79ENUC1.iso
# updating MSTN-CD250-DOM79ENUC2.iso
cp "~/TechNet/MSTN-CD250-DOM79ENUC2.iso" DOM79ENUC2.iso
node dx.js "DOM79ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom79enuc2 "Microsoft TechNet DOM79ENUC2 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM79ENUC2.iso
# updating MSTN-CD256-DOM80ENUC1.iso
cp "~/TechNet/MSTN-CD256-DOM80ENUC1.iso" DOM80ENUC1.iso
node dx.js "DOM80ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom80enuc1 "Microsoft TechNet DOM80ENUC1 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM80ENUC1.iso
# updating MSTN-CD257-DOM80ENUC2.iso
cp "~/TechNet/MSTN-CD257-DOM80ENUC2.iso" DOM80ENUC2.iso
node dx.js "DOM80ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom80enuc2 "Microsoft TechNet DOM80ENUC2 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM80ENUC2.iso
# updating MSTN-CD268-DOM81ENUC1.iso
cp "~/TechNet/MSTN-CD268-DOM81ENUC1.iso" DOM81ENUC1.iso
node dx.js "DOM81ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom81enuc1 "Microsoft TechNet DOM81ENUC1 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM81ENUC1.iso
# updating MSTN-CD269-DOM81ENUC2.iso
cp "~/TechNet/MSTN-CD269-DOM81ENUC2.iso" DOM81ENUC2.iso
node dx.js "DOM81ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom81enuc2 "Microsoft TechNet DOM81ENUC2 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM81ENUC2.iso
# updating MSTN-CD275-DOM82ENUC1.iso
cp "~/TechNet/MSTN-CD275-DOM82ENUC1.iso" DOM82ENUC1.iso
node dx.js "DOM82ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom82enuc1 "Microsoft TechNet DOM82ENUC1 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM82ENUC1.iso
# updating MSTN-CD277-DOM82ENUC2.iso
cp "~/TechNet/MSTN-CD277-DOM82ENUC2.iso" DOM82ENUC2.iso
node dx.js "DOM82ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom82enuc2 "Microsoft TechNet DOM82ENUC2 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM82ENUC2.iso
# updating MSTN-CD285-DOM83ENUC1.iso
cp "~/TechNet/MSTN-CD285-DOM83ENUC1.iso" DOM83ENUC1.iso
node dx.js "DOM83ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom83enuc1 "Microsoft TechNet DOM83ENUC1 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM83ENUC1.iso
# updating MSTN-CD286-DOM83ENUC2.iso
cp "~/TechNet/MSTN-CD286-DOM83ENUC2.iso" DOM83ENUC2.iso
node dx.js "DOM83ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom83enuc2 "Microsoft TechNet DOM83ENUC2 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM83ENUC2.iso
# updating MSTN-CD291-DOM84ENUC1.iso
cp "~/TechNet/MSTN-CD291-DOM84ENUC1.iso" DOM84ENUC1.iso
node dx.js "DOM84ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom84enuc1 "Microsoft TechNet DOM84ENUC1 Disc (December 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM84ENUC1.iso
# updating MSTN-CD292-DOM84ENUC2.iso
cp "~/TechNet/MSTN-CD292-DOM84ENUC2.iso" DOM84ENUC2.iso
node dx.js "DOM84ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom84enuc2 "Microsoft TechNet DOM84ENUC2 Disc (December 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM84ENUC2.iso
# updating MSTN-CD297-DOM85ENUC1.iso
cp "~/TechNet/MSTN-CD297-DOM85ENUC1.iso" DOM85ENUC1.iso
node dx.js "DOM85ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom85enuc1 "Microsoft TechNet DOM85ENUC1 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM85ENUC1.iso
# updating MSTN-CD298-DOM85ENUC2.iso
cp "~/TechNet/MSTN-CD298-DOM85ENUC2.iso" DOM85ENUC2.iso
node dx.js "DOM85ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom85enuc2 "Microsoft TechNet DOM85ENUC2 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM85ENUC2.iso
# updating MSTN-CD313-DOM87ENUC1.iso
cp "~/TechNet/MSTN-CD313-DOM87ENUC1.iso" DOM87ENUC1.iso
node dx.js "DOM87ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom87enuc1 "Microsoft TechNet DOM87ENUC1 Disc (March 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM87ENUC1.iso
# updating MSTN-CD314-DOM87ENUC2.iso
cp "~/TechNet/MSTN-CD314-DOM87ENUC2.iso" DOM87ENUC2.iso
node dx.js "DOM87ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom87enuc2 "Microsoft TechNet DOM87ENUC2 Disc (March 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM87ENUC2.iso
# updating MSTN-CD323-DOM89ENUC1.iso
cp "~/TechNet/MSTN-CD323-DOM89ENUC1.iso" DOM89ENUC1.iso
node dx.js "DOM89ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom89enuc1 "Microsoft TechNet DOM89ENUC1 Disc (May 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM89ENUC1.iso
# updating MSTN-CD324-DOM89ENUC2.iso
cp "~/TechNet/MSTN-CD324-DOM89ENUC2.iso" DOM89ENUC2.iso
node dx.js "DOM89ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom89enuc2 "Microsoft TechNet DOM89ENUC2 Disc (May 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM89ENUC2.iso
# updating MSTN-CD333-DOM91ENUC1.iso
cp "~/TechNet/MSTN-CD333-DOM91ENUC1.iso" DOM91ENUC1.iso
node dx.js "DOM91ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom91enuc1 "Microsoft TechNet DOM91ENUC1 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM91ENUC1.iso
# updating MSTN-CD334-DOM91ENUC2.iso
cp "~/TechNet/MSTN-CD334-DOM91ENUC2.iso" DOM91ENUC2.iso
node dx.js "DOM91ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom91enuc2 "Microsoft TechNet DOM91ENUC2 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM91ENUC2.iso
# updating MSTN-CD340-DOM92ENUC1.iso
cp "~/TechNet/MSTN-CD340-DOM92ENUC1.iso" DOM92ENUC1.iso
node dx.js "DOM92ENUC1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom92enuc1 "Microsoft TechNet DOM92ENUC1 Disc (August 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM92ENUC1.iso
# updating MSTN-CD341-DOM92ENUC2.iso
cp "~/TechNet/MSTN-CD341-DOM92ENUC2.iso" DOM92ENUC2.iso
node dx.js "DOM92ENUC2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-dom92enuc2 "Microsoft TechNet DOM92ENUC2 Disc (August 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt DOM92ENUC2.iso
# updating MSTN-CD330-EN_C0011.01.iso
cp "~/TechNet/MSTN-CD330-EN_C0011.01.iso" EN_C0011.01.iso
node dx.js "EN_C0011.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0011.01 "Microsoft TechNet EN_C0011.01 Disc (June 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0011.01.iso
# updating MSTN-CD166-EN_C0358.iso
cp "~/TechNet/MSTN-CD166-EN_C0358.iso" EN_C0358.iso
node dx.js "EN_C0358.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0358 "Microsoft TechNet EN_C0358 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0358.iso
# updating MSTN-CD182-EN_C0358.01.iso
cp "~/TechNet/MSTN-CD182-EN_C0358.01.iso" EN_C0358.01.iso
node dx.js "EN_C0358.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0358.01 "Microsoft TechNet EN_C0358.01 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0358.01.iso
# updating MSTN-CD174-EN_C0363.iso
cp "~/TechNet/MSTN-CD174-EN_C0363.iso" EN_C0363.iso
node dx.js "EN_C0363.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0363 "Microsoft TechNet EN_C0363 Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0363.iso
# updating MSTN-CD175-EN_C0365.iso
cp "~/TechNet/MSTN-CD175-EN_C0365.iso" EN_C0365.iso
node dx.js "EN_C0365.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0365 "Microsoft TechNet EN_C0365 Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0365.iso
# updating MSTN-CD211-EN_C0365.01.iso
cp "~/TechNet/MSTN-CD211-EN_C0365.01.iso" EN_C0365.01.iso
node dx.js "EN_C0365.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0365.01 "Microsoft TechNet EN_C0365.01 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0365.01.iso
# updating MSTN-CD222-EN_C0365.02.iso
cp "~/TechNet/MSTN-CD222-EN_C0365.02.iso" EN_C0365.02.iso
node dx.js "EN_C0365.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0365.02 "Microsoft TechNet EN_C0365.02 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0365.02.iso
# updating MSTN-CD184-EN_C0388.iso
cp "~/TechNet/MSTN-CD184-EN_C0388.iso" EN_C0388.iso
node dx.js "EN_C0388.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0388 "Microsoft TechNet EN_C0388 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0388.iso
# updating MSTN-CD185-EN_C0389.iso
cp "~/TechNet/MSTN-CD185-EN_C0389.iso" EN_C0389.iso
node dx.js "EN_C0389.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0389 "Microsoft TechNet EN_C0389 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0389.iso
# updating MSTN-CD200-EN_C0389.01.iso
cp "~/TechNet/MSTN-CD200-EN_C0389.01.iso" EN_C0389.01.iso
node dx.js "EN_C0389.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0389.01 "Microsoft TechNet EN_C0389.01 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0389.01.iso
# updating MSTN-CD198-EN_C0408.iso
cp "~/TechNet/MSTN-CD198-EN_C0408.iso" EN_C0408.iso
node dx.js "EN_C0408.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0408 "Microsoft TechNet EN_C0408 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0408.iso
# updating MSTN-CD210-EN_C0422.01.iso
cp "~/TechNet/MSTN-CD210-EN_C0422.01.iso" EN_C0422.01.iso
node dx.js "EN_C0422.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.01 "Microsoft TechNet EN_C0422.01 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.01.iso
# updating MSTN-CD252-EN_C0422.02.iso
cp "~/TechNet/MSTN-CD252-EN_C0422.02.iso" EN_C0422.02.iso
node dx.js "EN_C0422.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.02 "Microsoft TechNet EN_C0422.02 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.02.iso
# updating MSTN-CD260-EN_C0422.03.iso
cp "~/TechNet/MSTN-CD260-EN_C0422.03.iso" EN_C0422.03.iso
node dx.js "EN_C0422.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.03 "Microsoft TechNet EN_C0422.03 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.03.iso
# updating MSTN-CD271-EN_C0422.04.iso
cp "~/TechNet/MSTN-CD271-EN_C0422.04.iso" EN_C0422.04.iso
node dx.js "EN_C0422.04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.04 "Microsoft TechNet EN_C0422.04 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.04.iso
# updating MSTN-CD279-EN_C0422.05.iso
cp "~/TechNet/MSTN-CD279-EN_C0422.05.iso" EN_C0422.05.iso
node dx.js "EN_C0422.05.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.05 "Microsoft TechNet EN_C0422.05 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.05.iso
# updating MSTN-CD288-EN_C0422.06.iso
cp "~/TechNet/MSTN-CD288-EN_C0422.06.iso" EN_C0422.06.iso
node dx.js "EN_C0422.06.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0422.06 "Microsoft TechNet EN_C0422.06 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0422.06.iso
# updating MSTN-CD221-EN_C0454.iso
cp "~/TechNet/MSTN-CD221-EN_C0454.iso" EN_C0454.iso
node dx.js "EN_C0454.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0454 "Microsoft TechNet EN_C0454 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0454.iso
# updating MSTN-CD227-EN_C0454.01.iso
cp "~/TechNet/MSTN-CD227-EN_C0454.01.iso" EN_C0454.01.iso
node dx.js "EN_C0454.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0454.01 "Microsoft TechNet EN_C0454.01 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0454.01.iso
# updating MSTN-CD235-EN_C0454.02.iso
cp "~/TechNet/MSTN-CD235-EN_C0454.02.iso" EN_C0454.02.iso
node dx.js "EN_C0454.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0454.02 "Microsoft TechNet EN_C0454.02 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0454.02.iso
# updating MSTN-CD329-EN_C0490.01.iso
cp "~/TechNet/MSTN-CD329-EN_C0490.01.iso" EN_C0490.01.iso
node dx.js "EN_C0490.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0490.01 "Microsoft TechNet EN_C0490.01 Disc (June 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0490.01.iso
# updating MSTN-CD228-EN_C0630.iso
cp "~/TechNet/MSTN-CD228-EN_C0630.iso" EN_C0630.iso
node dx.js "EN_C0630.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0630 "Microsoft TechNet EN_C0630 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0630.iso
# updating MSTN-CD245-EN_C0630.01.iso
cp "~/TechNet/MSTN-CD245-EN_C0630.01.iso" EN_C0630.01.iso
node dx.js "EN_C0630.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0630.01 "Microsoft TechNet EN_C0630.01 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0630.01.iso
# updating MSTN-CD337-EN_C0630.03.iso
cp "~/TechNet/MSTN-CD337-EN_C0630.03.iso" EN_C0630.03.iso
node dx.js "EN_C0630.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0630.03 "Microsoft TechNet EN_C0630.03 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0630.03.iso
# updating MSTN-CD326-EN_C0648.iso
cp "~/TechNet/MSTN-CD326-EN_C0648.iso" EN_C0648.iso
node dx.js "EN_C0648.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0648 "Microsoft TechNet EN_C0648 Disc (May 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0648.iso
# updating MSTN-CD327-EN_C0750.01.iso
cp "~/TechNet/MSTN-CD327-EN_C0750.01.iso" EN_C0750.01.iso
node dx.js "EN_C0750.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-en_c0750.01 "Microsoft TechNet EN_C0750.01 Disc (May 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EN_C0750.01.iso
# updating MSTN-CD290-EVAL_EN_0006.02.iso
cp "~/TechNet/MSTN-CD290-EVAL_EN_0006.02.iso" EVAL_EN_0006.02.iso
node dx.js "EVAL_EN_0006.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-eval_en_0006.02 "Microsoft TechNet EVAL_EN_0006.02 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EVAL_EN_0006.02.iso
# updating MSTN-CD239-EVAL_EN_0644.iso
cp "~/TechNet/MSTN-CD239-EVAL_EN_0644.iso" EVAL_EN_0644.iso
node dx.js "EVAL_EN_0644.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-eval_en_0644 "Microsoft TechNet EVAL_EN_0644 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EVAL_EN_0644.iso
# updating MSTN-CD047-EXC2000.iso
cp "~/TechNet/MSTN-CD047-EXC2000.iso" EXC2000.iso
node dx.js "EXC2000.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-exc2000 "Microsoft TechNet EXC2000 Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EXC2000.iso
# updating MSTN-CD048-EXPTB3EN.iso
cp "~/TechNet/MSTN-CD048-EXPTB3EN.iso" EXPTB3EN.iso
node dx.js "EXPTB3EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-exptb3en "Microsoft TechNet EXPTB3EN Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt EXPTB3EN.iso
# updating MSTN-CD092-ISA2KEVLE_EN.iso
cp "~/TechNet/MSTN-CD092-ISA2KEVLE_EN.iso" ISA2KEVLE_EN.iso
node dx.js "ISA2KEVLE_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-isa2kevle_en "Microsoft TechNet ISA2KEVLE_EN Disc (February 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt ISA2KEVLE_EN.iso
# updating MSTN-CD062-MSPROJECT11.iso
cp "~/TechNet/MSTN-CD062-MSPROJECT11.iso" MSPROJECT11.iso
node dx.js "MSPROJECT11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-msproject11 "Microsoft TechNet MSPROJECT11 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt MSPROJECT11.iso
# updating MSTN-CD119-MSSENT04.iso
cp "~/TechNet/MSTN-CD119-MSSENT04.iso" MSSENT04.iso
node dx.js "MSSENT04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-mssent04 "Microsoft TechNet MSSENT04 Disc (June 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt MSSENT04.iso
# updating MSTN-CD128-MSSENT04.iso
cp "~/TechNet/MSTN-CD128-MSSENT04.iso" MSSENT04.iso
node dx.js "MSSENT04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-mssent04-1 "Microsoft TechNet MSSENT04 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt MSSENT04.iso
# updating MSTN-CD120-MSSSTD04.iso
cp "~/TechNet/MSTN-CD120-MSSSTD04.iso" MSSSTD04.iso
node dx.js "MSSSTD04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-mssstd04 "Microsoft TechNet MSSSTD04 Disc (June 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt MSSSTD04.iso
# updating MSTN-CD127-MSSSTD04.iso
cp "~/TechNet/MSTN-CD127-MSSSTD04.iso" MSSSTD04.iso
node dx.js "MSSSTD04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-mssstd04-1 "Microsoft TechNet MSSSTD04 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt MSSSTD04.iso
# updating MSTN-CD054-NRCFRE3_EN.iso
cp "~/TechNet/MSTN-CD054-NRCFRE3_EN.iso" NRCFRE3_EN.iso
node dx.js "NRCFRE3_EN.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-nrcfre3_en "Microsoft TechNet NRCFRE3_EN Disc (August 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt NRCFRE3_EN.iso
# updating MSTN-CD019-ntoptpak_us.iso
cp "~/TechNet/MSTN-CD019-ntoptpak_us.iso" NTOPTPAK_US.iso
node dx.js "NTOPTPAK_US.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ntoptpak_us "Microsoft TechNet NTOPTPAK_US Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt NTOPTPAK_US.iso
# updating MSTN-CD053-OFFICE11.iso
cp "~/TechNet/MSTN-CD053-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11 "Microsoft TechNet OFFICE11 Disc (August 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD281-OFFICE11.iso
cp "~/TechNet/MSTN-CD281-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-1 "Microsoft TechNet OFFICE11 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD150-OFFICE11.iso
cp "~/TechNet/MSTN-CD150-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-2 "Microsoft TechNet OFFICE11 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD201-OFFICE11.iso
cp "~/TechNet/MSTN-CD201-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-3 "Microsoft TechNet OFFICE11 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD149-OFFICE11.iso
cp "~/TechNet/MSTN-CD149-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-4 "Microsoft TechNet OFFICE11 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD158-OFFICE11.iso
cp "~/TechNet/MSTN-CD158-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-5 "Microsoft TechNet OFFICE11 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD343-OFFICE11.iso
cp "~/TechNet/MSTN-CD343-OFFICE11.iso" OFFICE11.iso
node dx.js "OFFICE11.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office11-6 "Microsoft TechNet OFFICE11 Disc (August 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE11.iso
# updating MSTN-CD308-OFFICE12.iso
cp "~/TechNet/MSTN-CD308-OFFICE12.iso" OFFICE12.iso
node dx.js "OFFICE12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office12 "Microsoft TechNet OFFICE12 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE12.iso
# updating MSTN-CD309-Office12.iso
cp "~/TechNet/MSTN-CD309-Office12.iso" OFFICE12.iso
node dx.js "OFFICE12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office12-1 "Microsoft TechNet OFFICE12 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE12.iso
# updating MSTN-CD311-Office12.iso
cp "~/TechNet/MSTN-CD311-Office12.iso" OFFICE12.iso
node dx.js "OFFICE12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office12-2 "Microsoft TechNet OFFICE12 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE12.iso
# updating MSTN-CD331-OFFICE12.iso
cp "~/TechNet/MSTN-CD331-OFFICE12.iso" OFFICE12.iso
node dx.js "OFFICE12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office12-3 "Microsoft TechNet OFFICE12 Disc (June 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE12.iso
# updating MSTN-CD310-Office12.iso
cp "~/TechNet/MSTN-CD310-Office12.iso" OFFICE12.iso
node dx.js "OFFICE12.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-office12-4 "Microsoft TechNet OFFICE12 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt OFFICE12.iso
# updating MSTN-CD035-PD002CD1.iso
cp "~/TechNet/MSTN-CD035-PD002CD1.iso" PD002CD1.iso
node dx.js "PD002CD1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-pd002cd1 "Microsoft TechNet PD002CD1 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt PD002CD1.iso
# updating MSTN-CD036-PD002CD2.iso
cp "~/TechNet/MSTN-CD036-PD002CD2.iso" PD002CD2.iso
node dx.js "PD002CD2.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-pd002cd2 "Microsoft TechNet PD002CD2 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt PD002CD2.iso
# updating MSTN-CD037-PD002CD3.iso
cp "~/TechNet/MSTN-CD037-PD002CD3.iso" PD002CD3.iso
node dx.js "PD002CD3.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-pd002cd3 "Microsoft TechNet PD002CD3 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt PD002CD3.iso
# updating MSTN-CD052-PREMTECH.iso
cp "~/TechNet/MSTN-CD052-PREMTECH.iso" PREMTECH.iso
node dx.js "PREMTECH.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-premtech "Microsoft TechNet PREMTECH Disc (August 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt PREMTECH.iso
# updating MSTN-CD098-SB0CD003.iso
cp "~/TechNet/MSTN-CD098-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003 "Microsoft TechNet SB0CD003 Disc (February 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD100-SB0CD003.iso
cp "~/TechNet/MSTN-CD100-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-1 "Microsoft TechNet SB0CD003 Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD105-SB0CD003.iso
cp "~/TechNet/MSTN-CD105-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-2 "Microsoft TechNet SB0CD003 Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD116-SB0CD003.iso
cp "~/TechNet/MSTN-CD116-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-3 "Microsoft TechNet SB0CD003 Disc (May 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD121-SB0CD003.iso
cp "~/TechNet/MSTN-CD121-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-4 "Microsoft TechNet SB0CD003 Disc (June 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD126-SB0CD003.iso
cp "~/TechNet/MSTN-CD126-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-5 "Microsoft TechNet SB0CD003 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD133-SB0CD003.iso
cp "~/TechNet/MSTN-CD133-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-6 "Microsoft TechNet SB0CD003 Disc (August 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD143-SB0CD003.iso
cp "~/TechNet/MSTN-CD143-SB0CD003.iso" SB0CD003.iso
node dx.js "SB0CD003.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd003-7 "Microsoft TechNet SB0CD003 Disc (September 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD003.iso
# updating MSTN-CD151-SB0CD005.03.iso
cp "~/TechNet/MSTN-CD151-SB0CD005.03.iso" SB0CD005.03.iso
node dx.js "SB0CD005.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd005.03 "Microsoft TechNet SB0CD005.03 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD005.03.iso
# updating MSTN-CD160-SB0CD005.04.iso
cp "~/TechNet/MSTN-CD160-SB0CD005.04.iso" SB0CD005.04.iso
node dx.js "SB0CD005.04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd005.04 "Microsoft TechNet SB0CD005.04 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD005.04.iso
# updating MSTN-CD187-SB0CD006.iso
cp "~/TechNet/MSTN-CD187-SB0CD006.iso" SB0CD006.iso
node dx.js "SB0CD006.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd006 "Microsoft TechNet SB0CD006 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD006.iso
# updating MSTN-CD205-SB0CD006.01.iso
cp "~/TechNet/MSTN-CD205-SB0CD006.01.iso" SB0CD006.01.iso
node dx.js "SB0CD006.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd006.01 "Microsoft TechNet SB0CD006.01 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD006.01.iso
# updating MSTN-CD213-SB0CD006.02.iso
cp "~/TechNet/MSTN-CD213-SB0CD006.02.iso" SB0CD006.02.iso
node dx.js "SB0CD006.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd006.02 "Microsoft TechNet SB0CD006.02 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD006.02.iso
# updating MSTN-CD223-SB0CD006.03.iso
cp "~/TechNet/MSTN-CD223-SB0CD006.03.iso" SB0CD006.03.iso
node dx.js "SB0CD006.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd006.03 "Microsoft TechNet SB0CD006.03 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD006.03.iso
# updating MSTN-CD230-SB0CD006.04.iso
cp "~/TechNet/MSTN-CD230-SB0CD006.04.iso" SB0CD006.04.iso
node dx.js "SB0CD006.04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd006.04 "Microsoft TechNet SB0CD006.04 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD006.04.iso
# updating MSTN-CD236-SB0CD007.iso
cp "~/TechNet/MSTN-CD236-SB0CD007.iso" SB0CD007.iso
node dx.js "SB0CD007.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd007 "Microsoft TechNet SB0CD007 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD007.iso
# updating MSTN-CD247-SB0CD007.01.iso
cp "~/TechNet/MSTN-CD247-SB0CD007.01.iso" SB0CD007.01.iso
node dx.js "SB0CD007.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd007.01 "Microsoft TechNet SB0CD007.01 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD007.01.iso
# updating MSTN-CD253-SB0CD007.02.iso
cp "~/TechNet/MSTN-CD253-SB0CD007.02.iso" SB0CD007.02.iso
node dx.js "SB0CD007.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd007.02 "Microsoft TechNet SB0CD007.02 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD007.02.iso
# updating MSTN-CD262-SB0CD007.03.iso
cp "~/TechNet/MSTN-CD262-SB0CD007.03.iso" SB0CD007.03.iso
node dx.js "SB0CD007.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd007.03 "Microsoft TechNet SB0CD007.03 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD007.03.iso
# updating MSTN-CD280-SB0CD008.iso
cp "~/TechNet/MSTN-CD280-SB0CD008.iso" SB0CD008.iso
node dx.js "SB0CD008.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd008 "Microsoft TechNet SB0CD008 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD008.iso
# updating MSTN-CD289-SB0CD008.01.iso
cp "~/TechNet/MSTN-CD289-SB0CD008.01.iso" SB0CD008.01.iso
node dx.js "SB0CD008.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd008.01 "Microsoft TechNet SB0CD008.01 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD008.01.iso
# updating MSTN-CD296-SB0CD008.02.iso
cp "~/TechNet/MSTN-CD296-SB0CD008.02.iso" SB0CD008.02.iso
node dx.js "SB0CD008.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd008.02 "Microsoft TechNet SB0CD008.02 Disc (December 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD008.02.iso
# updating MSTN-CD332-SB0CD010.01.iso
cp "~/TechNet/MSTN-CD332-SB0CD010.01.iso" SB0CD010.01.iso
node dx.js "SB0CD010.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd010.01 "Microsoft TechNet SB0CD010.01 Disc (June 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD010.01.iso
# updating MSTN-CD344-SB0CD011.01.iso
cp "~/TechNet/MSTN-CD344-SB0CD011.01.iso" SB0CD011.01.iso
node dx.js "SB0CD011.01.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb0cd011.01 "Microsoft TechNet SB0CD011.01 Disc (August 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB0CD011.01.iso
# updating MSTN-CD302-SB4CD038.iso
cp "~/TechNet/MSTN-CD302-SB4CD038.iso" SB4CD038.iso
node dx.js "SB4CD038.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sb4cd038 "Microsoft TechNet SB4CD038 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SB4CD038.iso
# updating MSTN-CD339-SBS0CD011.iso
cp "~/TechNet/MSTN-CD339-SBS0CD011.iso" SBS0CD011.iso
node dx.js "SBS0CD011.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sbs0cd011 "Microsoft TechNet SBS0CD011 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SBS0CD011.iso
# updating MSTN-CD199-SCCP.iso
cp "~/TechNet/MSTN-CD199-SCCP.iso" SCCP.iso
node dx.js "SCCP.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sccp "Microsoft TechNet SCCP Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SCCP.iso
# updating MSTN-1997-06-SOFTLIB.iso
cp "~/TechNet/MSTN-1997-06-SOFTLIB.iso" SOFTLIB.iso
node dx.js "SOFTLIB.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-softlib "Microsoft TechNet SOFTLIB Disc (June 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SOFTLIB.iso
# updating MSTN-CD101-SQL2000RS_EVAL.iso
cp "~/TechNet/MSTN-CD101-SQL2000RS_EVAL.iso" SQL2000RS_EVAL.iso
node dx.js "SQL2000RS_EVAL.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sql2000rs_eval "Microsoft TechNet SQL2000RS_EVAL Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQL2000RS_EVAL.iso
# updating MSTN-CD152-SQL2005_CTP_EN_0223.02.iso
cp "~/TechNet/MSTN-CD152-SQL2005_CTP_EN_0223.02.iso" SQL2005_CTP_EN_0223.02.iso
node dx.js "SQL2005_CTP_EN_0223.02.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sql2005_ctp_en_0223.02 "Microsoft TechNet SQL2005_CTP_EN_0223.02 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQL2005_CTP_EN_0223.02.iso
# updating MSTN-CD161-SQL2005_CTP_EN_0223.03.iso
cp "~/TechNet/MSTN-CD161-SQL2005_CTP_EN_0223.03.iso" SQL2005_CTP_EN_0223.03.iso
node dx.js "SQL2005_CTP_EN_0223.03.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sql2005_ctp_en_0223.03 "Microsoft TechNet SQL2005_CTP_EN_0223.03 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQL2005_CTP_EN_0223.03.iso
# updating MSTN-CD170-SQL2005_CTP_EN_0223.04.iso
cp "~/TechNet/MSTN-CD170-SQL2005_CTP_EN_0223.04.iso" SQL2005_CTP_EN_0223.04.iso
node dx.js "SQL2005_CTP_EN_0223.04.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sql2005_ctp_en_0223.04 "Microsoft TechNet SQL2005_CTP_EN_0223.04 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQL2005_CTP_EN_0223.04.iso
# updating MSTN-CD189-SQLSRVRS.iso
cp "~/TechNet/MSTN-CD189-SQLSRVRS.iso" SQLSRVRS.iso
node dx.js "SQLSRVRS.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sqlsrvrs "Microsoft TechNet SQLSRVRS Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQLSRVRS.iso
# updating MSTN-CD190-SQLSRVRS.iso
cp "~/TechNet/MSTN-CD190-SQLSRVRS.iso" SQLSRVRS.iso
node dx.js "SQLSRVRS.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sqlsrvrs-1 "Microsoft TechNet SQLSRVRS Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQLSRVRS.iso
# updating MSTN-CD191-SQLTOOLS.iso
cp "~/TechNet/MSTN-CD191-SQLTOOLS.iso" SQLTOOLS.iso
node dx.js "SQLTOOLS.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sqltools "Microsoft TechNet SQLTOOLS Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQLTOOLS.iso
# updating MSTN-CD192-SQLTOOLS.iso
cp "~/TechNet/MSTN-CD192-SQLTOOLS.iso" SQLTOOLS.iso
node dx.js "SQLTOOLS.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sqltools-1 "Microsoft TechNet SQLTOOLS Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQLTOOLS.iso
# updating MSTN-CD153-SQLWKGPx86.iso
cp "~/TechNet/MSTN-CD153-SQLWKGPx86.iso" SQLWKGPX86.iso
node dx.js "SQLWKGPX86.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-sqlwkgpx86 "Microsoft TechNet SQLWKGPX86 Disc (August 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SQLWKGPX86.iso
# updating MSTN-CD069-SRK41.iso
cp "~/TechNet/MSTN-CD069-SRK41.iso" SRK41.iso
node dx.js "SRK41.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-srk41 "Microsoft TechNet SRK41 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt SRK41.iso
# updating MSTN-CD165-TECHNET_INDEX_1005.iso
cp "~/TechNet/MSTN-CD165-TECHNET_INDEX_1005.iso" TECHNET_INDEX_1005.iso
node dx.js "TECHNET_INDEX_1005.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-technet_index_1005 "Microsoft TechNet TECHNET_INDEX_1005 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TECHNET_INDEX_1005.iso
# updating MSTN-CD156-TECHNET_INDEX_2005-08.iso
cp "~/TechNet/MSTN-CD156-TECHNET_INDEX_2005-08.iso" TECHNET_INDEX_2005-08.iso
node dx.js "TECHNET_INDEX_2005-08.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-technet_index_2005-08 "Microsoft TechNet TECHNET_INDEX_2005-08 Disc (September 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TECHNET_INDEX_2005-08.iso
# updating MSTN-CD104-tn00403c.iso
cp "~/TechNet/MSTN-CD104-tn00403c.iso" TN00403C.iso
node dx.js "TN00403C.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn00403c "Microsoft TechNet TN00403C Disc (March 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN00403C.iso
# updating MSTN-CD111-tn00404c.iso
cp "~/TechNet/MSTN-CD111-tn00404c.iso" TN00404C.iso
node dx.js "TN00404C.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn00404c "Microsoft TechNet TN00404C Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN00404C.iso
# updating MSTN-CD051-tn0211a.iso
cp "~/TechNet/MSTN-CD051-tn0211a.iso" TN0211A.iso
node dx.js "TN0211A.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn0211a "Microsoft TechNet TN0211A Disc (November 2002)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN0211A.iso
# updating MSTN-CD057-tn0310a.iso
cp "~/TechNet/MSTN-CD057-tn0310a.iso" TN0310A.iso
node dx.js "TN0310A.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn0310a "Microsoft TechNet TN0310A Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN0310A.iso
# updating MSTN-CD082-tn0312a.iso
cp "~/TechNet/MSTN-CD082-tn0312a.iso" TN0312A.iso
node dx.js "TN0312A.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn0312a "Microsoft TechNet TN0312A Disc (December 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN0312A.iso
# updating MSTN-1997-11-TN9711.iso
cp "~/TechNet/MSTN-1997-11-TN9711.iso" TN9711.iso
node dx.js "TN9711.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn9711 "Microsoft TechNet TN9711 Disc (November 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN9711.iso
# updating MSTN-CD002-TN9809.iso
cp "~/TechNet/MSTN-CD002-TN9809.iso" TN9809.iso
node dx.js "TN9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn9809 "Microsoft TechNet TN9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN9809.iso
# updating MSTN-CD020-TN9908.iso
cp "~/TechNet/MSTN-CD020-TN9908.iso" TN9908.iso
node dx.js "TN9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn9908 "Microsoft TechNet TN9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN9908.iso
# updating MSTN-CD038-TN9911.iso
cp "~/TechNet/MSTN-CD038-TN9911.iso" TN9911.iso
node dx.js "TN9911.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn9911 "Microsoft TechNet TN9911 Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN9911.iso
# updating MSTN-1997-09-TNA9709.iso
cp "~/TechNet/MSTN-1997-09-TNA9709.iso" TNA9709.iso
node dx.js "TNA9709.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tna9709 "Microsoft TechNet TNA9709 Disc (September 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNA9709.iso
# updating MSTN-1997-09-TNB9709.iso
cp "~/TechNet/MSTN-1997-09-TNB9709.iso" TNB9709.iso
node dx.js "TNB9709.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnb9709 "Microsoft TechNet TNB9709 Disc (September 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNB9709.iso
# updating MSTN-1997-11-TNB9711.iso
cp "~/TechNet/MSTN-1997-11-TNB9711.iso" TNB9711.iso
node dx.js "TNB9711.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnb9711 "Microsoft TechNet TNB9711 Disc (November 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNB9711.iso
# updating MSTN-CD001-TNB9809.iso
cp "~/TechNet/MSTN-CD001-TNB9809.iso" TNB9809.iso
node dx.js "TNB9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnb9809 "Microsoft TechNet TNB9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNB9809.iso
# updating MSTN-CD021-TNB9908.iso
cp "~/TechNet/MSTN-CD021-TNB9908.iso" TNB9908.iso
node dx.js "TNB9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnb9908 "Microsoft TechNet TNB9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNB9908.iso
# updating MSTN-1997-01-TNCD1-9701.iso
cp "~/TechNet/MSTN-1997-01-TNCD1-9701.iso" TNCD1-9701.iso
node dx.js "TNCD1-9701.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tncd1-9701 "Microsoft TechNet TNCD1-9701 Disc (January 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNCD1-9701.iso
# updating MSTN-1997-01-TNCD2-9701.iso
cp "~/TechNet/MSTN-1997-01-TNCD2-9701.iso" TNCD2-9701.iso
node dx.js "TNCD2-9701.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tncd2-9701 "Microsoft TechNet TNCD2-9701 Disc (January 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNCD2-9701.iso
# updating MSTN-1996-02-TNET9602.iso
cp "~/TechNet/MSTN-1996-02-TNET9602.iso" TNET9602.iso
node dx.js "TNET9602.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnet9602 "Microsoft TechNet TNET9602 Disc (February 1996)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNET9602.iso
# updating MSTN-1996-04-TNET9604.iso
cp "~/TechNet/MSTN-1996-04-TNET9604.iso" TNET9604.iso
node dx.js "TNET9604.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnet9604 "Microsoft TechNet TNET9604 Disc (April 1996)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNET9604.iso
# updating MSTN-1996-02-TNI9602.iso
cp "~/TechNet/MSTN-1996-02-TNI9602.iso" TNI9602.iso
node dx.js "TNI9602.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tni9602 "Microsoft TechNet TNI9602 Disc (February 1996)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNI9602.iso
# updating MSTN-CD003-TNK9809.iso
cp "~/TechNet/MSTN-CD003-TNK9809.iso" TNK9809.iso
node dx.js "TNK9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnk9809 "Microsoft TechNet TNK9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNK9809.iso
# updating MSTN-1998-10-TNK9810.iso
cp "~/TechNet/MSTN-1998-10-TNK9810.iso" TNK9810.iso
node dx.js "TNK9810.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnk9810 "Microsoft TechNet TNK9810 Disc (October 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNK9810.iso
# updating MSTN-CD022-TNK9908.iso
cp "~/TechNet/MSTN-CD022-TNK9908.iso" TNK9908.iso
node dx.js "TNK9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnk9908 "Microsoft TechNet TNK9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNK9908.iso
# updating MSTN-1999-09-TNK9909.iso
cp "~/TechNet/MSTN-1999-09-TNK9909.iso" TNK9909.iso
node dx.js "TNK9909.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnk9909 "Microsoft TechNet TNK9909 Disc (September 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNK9909.iso
# updating MSTN-CD011-TNSA9809.iso
cp "~/TechNet/MSTN-CD011-TNSA9809.iso" TNSA9809.iso
node dx.js "TNSA9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsa9809 "Microsoft TechNet TNSA9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSA9809.iso
# updating MSTN-CD016-TNSB9809.iso
cp "~/TechNet/MSTN-CD016-TNSB9809.iso" TNSB9809.iso
node dx.js "TNSB9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsb9809 "Microsoft TechNet TNSB9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSB9809.iso
# updating MSTN-CD026-TNSB9908.iso
cp "~/TechNet/MSTN-CD026-TNSB9908.iso" TNSB9908.iso
node dx.js "TNSB9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsb9908 "Microsoft TechNet TNSB9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSB9908.iso
# updating MSTN-1997-10-TNSC9710.iso
cp "~/TechNet/MSTN-1997-10-TNSC9710.iso" TNSC9710.iso
node dx.js "TNSC9710.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsc9710 "Microsoft TechNet TNSC9710 Disc (October 1997)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSC9710.iso
# updating MSTN-CD017-TNSC9809.iso
cp "~/TechNet/MSTN-CD017-TNSC9809.iso" TNSC9809.iso
node dx.js "TNSC9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsc9809 "Microsoft TechNet TNSC9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSC9809.iso
# updating MSTN-CD025-TNSC9901.iso
cp "~/TechNet/MSTN-CD025-TNSC9901.iso" TNSC9901.iso
node dx.js "TNSC9901.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsc9901 "Microsoft TechNet TNSC9901 Disc (January 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSC9901.iso
# updating MSTN-CD013-TNSE9809.iso
cp "~/TechNet/MSTN-CD013-TNSE9809.iso" TNSE9809.iso
node dx.js "TNSE9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnse9809 "Microsoft TechNet TNSE9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSE9809.iso
# updating MSTN-CD015-TNSF9809.iso
cp "~/TechNet/MSTN-CD015-TNSF9809.iso" TNSF9809.iso
node dx.js "TNSF9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsf9809 "Microsoft TechNet TNSF9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSF9809.iso
# updating MSTN-CD014-tnsg9809.iso
cp "~/TechNet/MSTN-CD014-tnsg9809.iso" TNSG9809.iso
node dx.js "TNSG9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnsg9809 "Microsoft TechNet TNSG9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNSG9809.iso
# updating MSTN-CD004-TNUA9809.iso
cp "~/TechNet/MSTN-CD004-TNUA9809.iso" TNUA9809.iso
node dx.js "TNUA9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnua9809 "Microsoft TechNet TNUA9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUA9809.iso
# updating MSTN-CD005-TNUB9809.iso
cp "~/TechNet/MSTN-CD005-TNUB9809.iso" TNUB9809.iso
node dx.js "TNUB9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnub9809 "Microsoft TechNet TNUB9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUB9809.iso
# updating MSTN-CD006-TNUC9809.iso
cp "~/TechNet/MSTN-CD006-TNUC9809.iso" TNUC9809.iso
node dx.js "TNUC9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnuc9809 "Microsoft TechNet TNUC9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUC9809.iso
# updating MSTN-CD023-TNUC9908.iso
cp "~/TechNet/MSTN-CD023-TNUC9908.iso" TNUC9908.iso
node dx.js "TNUC9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnuc9908 "Microsoft TechNet TNUC9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUC9908.iso
# updating MSTN-CD007-TNUD9809.iso
cp "~/TechNet/MSTN-CD007-TNUD9809.iso" TNUD9809.iso
node dx.js "TNUD9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnud9809 "Microsoft TechNet TNUD9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUD9809.iso
# updating MSTN-CD018-TNUF9809.iso
cp "~/TechNet/MSTN-CD018-TNUF9809.iso" TNUF9809.iso
node dx.js "TNUF9809.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tnuf9809 "Microsoft TechNet TNUF9809 Disc (September 1998)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TNUF9809.iso
# updating MSTN-CD173-TN_INDEX_0511.iso
cp "~/TechNet/MSTN-CD173-TN_INDEX_0511.iso" TN_INDEX_0511.iso
node dx.js "TN_INDEX_0511.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0511 "Microsoft TechNet TN_INDEX_0511 Disc (November 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0511.iso
# updating MSTN-CD181-TN_INDEX_0512.iso
cp "~/TechNet/MSTN-CD181-TN_INDEX_0512.iso" TN_INDEX_0512.iso
node dx.js "TN_INDEX_0512.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0512 "Microsoft TechNet TN_INDEX_0512 Disc (December 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0512.iso
# updating MSTN-CD197-TN_INDEX_0601.iso
cp "~/TechNet/MSTN-CD197-TN_INDEX_0601.iso" TN_INDEX_0601.iso
node dx.js "TN_INDEX_0601.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0601 "Microsoft TechNet TN_INDEX_0601 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0601.iso
# updating MSTN-CD209-TN_INDEX_0602.iso
cp "~/TechNet/MSTN-CD209-TN_INDEX_0602.iso" TN_INDEX_0602.iso
node dx.js "TN_INDEX_0602.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0602 "Microsoft TechNet TN_INDEX_0602 Disc (February 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0602.iso
# updating MSTN-CD220-TN_INDEX_0603.iso
cp "~/TechNet/MSTN-CD220-TN_INDEX_0603.iso" TN_INDEX_0603.iso
node dx.js "TN_INDEX_0603.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0603 "Microsoft TechNet TN_INDEX_0603 Disc (March 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0603.iso
# updating MSTN-CD226-TN_INDEX_0604.iso
cp "~/TechNet/MSTN-CD226-TN_INDEX_0604.iso" TN_INDEX_0604.iso
node dx.js "TN_INDEX_0604.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0604 "Microsoft TechNet TN_INDEX_0604 Disc (April 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0604.iso
# updating MSTN-CD234-TN_INDEX_0605.iso
cp "~/TechNet/MSTN-CD234-TN_INDEX_0605.iso" TN_INDEX_0605.iso
node dx.js "TN_INDEX_0605.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0605 "Microsoft TechNet TN_INDEX_0605 Disc (May 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0605.iso
# updating MSTN-CD243-TN_INDEX_0606.iso
cp "~/TechNet/MSTN-CD243-TN_INDEX_0606.iso" TN_INDEX_0606.iso
node dx.js "TN_INDEX_0606.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0606 "Microsoft TechNet TN_INDEX_0606 Disc (June 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0606.iso
# updating MSTN-CD251-TN_INDEX_0607.iso
cp "~/TechNet/MSTN-CD251-TN_INDEX_0607.iso" TN_INDEX_0607.iso
node dx.js "TN_INDEX_0607.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0607 "Microsoft TechNet TN_INDEX_0607 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0607.iso
# updating MSTN-CD258-TN_INDEX_0608.iso
cp "~/TechNet/MSTN-CD258-TN_INDEX_0608.iso" TN_INDEX_0608.iso
node dx.js "TN_INDEX_0608.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0608 "Microsoft TechNet TN_INDEX_0608 Disc (August 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0608.iso
# updating MSTN-CD270-TN_INDEX_0609.iso
cp "~/TechNet/MSTN-CD270-TN_INDEX_0609.iso" TN_INDEX_0609.iso
node dx.js "TN_INDEX_0609.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0609 "Microsoft TechNet TN_INDEX_0609 Disc (September 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0609.iso
# updating MSTN-CD278-TN_INDEX_0610.iso
cp "~/TechNet/MSTN-CD278-TN_INDEX_0610.iso" TN_INDEX_0610.iso
node dx.js "TN_INDEX_0610.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0610 "Microsoft TechNet TN_INDEX_0610 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0610.iso
# updating MSTN-CD287-TN_INDEX_0611.iso
cp "~/TechNet/MSTN-CD287-TN_INDEX_0611.iso" TN_INDEX_0611.iso
node dx.js "TN_INDEX_0611.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0611 "Microsoft TechNet TN_INDEX_0611 Disc (November 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0611.iso
# updating MSTN-CD293-TN_INDEX_0612.iso
cp "~/TechNet/MSTN-CD293-TN_INDEX_0612.iso" TN_INDEX_0612.iso
node dx.js "TN_INDEX_0612.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0612 "Microsoft TechNet TN_INDEX_0612 Disc (December 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0612.iso
# updating MSTN-CD299-TN_INDEX_0701.iso
cp "~/TechNet/MSTN-CD299-TN_INDEX_0701.iso" TN_INDEX_0701.iso
node dx.js "TN_INDEX_0701.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0701 "Microsoft TechNet TN_INDEX_0701 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0701.iso
# updating MSTN-CD315-TN_INDEX_0703.iso
cp "~/TechNet/MSTN-CD315-TN_INDEX_0703.iso" TN_INDEX_0703.iso
node dx.js "TN_INDEX_0703.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0703 "Microsoft TechNet TN_INDEX_0703 Disc (March 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0703.iso
# updating MSTN-CD335-TN_INDEX_0707.iso
cp "~/TechNet/MSTN-CD335-TN_INDEX_0707.iso" TN_INDEX_0707.iso
node dx.js "TN_INDEX_0707.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0707 "Microsoft TechNet TN_INDEX_0707 Disc (July 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0707.iso
# updating MSTN-CD342-TN_INDEX_0708.iso
cp "~/TechNet/MSTN-CD342-TN_INDEX_0708.iso" TN_INDEX_0708.iso
node dx.js "TN_INDEX_0708.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0708 "Microsoft TechNet TN_INDEX_0708 Disc (August 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0708.iso
# updating MSTN-CD346-TN_INDEX_0712.iso
cp "~/TechNet/MSTN-CD346-TN_INDEX_0712.iso" TN_INDEX_0712.iso
node dx.js "TN_INDEX_0712.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-tn_index_0712 "Microsoft TechNet TN_INDEX_0712 Disc (December 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TN_INDEX_0712.iso
# updating MSTN-CD206-TTCD_JAN06.iso
cp "~/TechNet/MSTN-CD206-TTCD_JAN06.iso" TTCD_JAN06.iso
node dx.js "TTCD_JAN06.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_jan06 "Microsoft TechNet TTCD_JAN06 Disc (January 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_JAN06.iso
# updating MSTN-CD312-TTCD_JAN07.iso
cp "~/TechNet/MSTN-CD312-TTCD_JAN07.iso" TTCD_JAN07.iso
node dx.js "TTCD_JAN07.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_jan07 "Microsoft TechNet TTCD_JAN07 Disc (January 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_JAN07.iso
# updating MSTN-CD254-TTCD_JUL06.iso
cp "~/TechNet/MSTN-CD254-TTCD_JUL06.iso" TTCD_JUL06.iso
node dx.js "TTCD_JUL06.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_jul06 "Microsoft TechNet TTCD_JUL06 Disc (July 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_JUL06.iso
# updating MSTN-CD283-TTCD_OCT06.iso
cp "~/TechNet/MSTN-CD283-TTCD_OCT06.iso" TTCD_OCT06.iso
node dx.js "TTCD_OCT06.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_oct06 "Microsoft TechNet TTCD_OCT06 Disc (October 2006)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_OCT06.iso
# updating MSTN-CD345-TTCD_OCT07.iso
cp "~/TechNet/MSTN-CD345-TTCD_OCT07.iso" TTCD_OCT07.iso
node dx.js "TTCD_OCT07.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_oct07 "Microsoft TechNet TTCD_OCT07 Disc (October 2007)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_OCT07.iso
# updating MSTN-CD169-TTCD_OCT2005.iso
cp "~/TechNet/MSTN-CD169-TTCD_OCT2005.iso" TTCD_OCT2005.iso
node dx.js "TTCD_OCT2005.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttcd_oct2005 "Microsoft TechNet TTCD_OCT2005 Disc (October 2005)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTCD_OCT2005.iso
# updating MSTN-CD068-ttt25.iso
cp "~/TechNet/MSTN-CD068-ttt25.iso" TTT25.iso
node dx.js "TTT25.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttt25 "Microsoft TechNet TTT25 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTT25.iso
# updating MSTN-CD087-ttt26.iso
cp "~/TechNet/MSTN-CD087-ttt26.iso" TTT26.iso
node dx.js "TTT26.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttt26 "Microsoft TechNet TTT26 Disc (January 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTT26.iso
# updating MSTN-CD107-ttt27.iso
cp "~/TechNet/MSTN-CD107-ttt27.iso" TTT27.iso
node dx.js "TTT27.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttt27 "Microsoft TechNet TTT27 Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTT27.iso
# updating MSTN-CD125-ttt28.iso
cp "~/TechNet/MSTN-CD125-ttt28.iso" TTT28.iso
node dx.js "TTT28.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttt28 "Microsoft TechNet TTT28 Disc (July 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTT28.iso
# updating MSTN-CD106-ttt28.iso
cp "~/TechNet/MSTN-CD106-ttt28.iso" TTT28.iso
node dx.js "TTT28.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-ttt28-1 "Microsoft TechNet TTT28 Disc (April 2004)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt TTT28.iso
# updating MSTN-CD041-utility1.iso
cp "~/TechNet/MSTN-CD041-utility1.iso" UTILITY1.iso
node dx.js "UTILITY1.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-utility1 "Microsoft TechNet UTILITY1 Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt UTILITY1.iso
# updating MSTN-CD067-Visio_Std_2002.iso
cp "~/TechNet/MSTN-CD067-Visio_Std_2002.iso" VISIO_STD_2002.iso
node dx.js "VISIO_STD_2002.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-visio_std_2002 "Microsoft TechNet VISIO_STD_2002 Disc (October 2003)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt VISIO_STD_2002.iso
# updating MSTN-CD033-W2KASVA_USA.iso
cp "~/TechNet/MSTN-CD033-W2KASVA_USA.iso" W2KASVA_USA.iso
node dx.js "W2KASVA_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2kasva_usa "Microsoft TechNet W2KASVA_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KASVA_USA.iso
# updating MSTN-CD032-W2KASVI_USA.iso
cp "~/TechNet/MSTN-CD032-W2KASVI_USA.iso" W2KASVI_USA.iso
node dx.js "W2KASVI_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2kasvi_usa "Microsoft TechNet W2KASVI_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KASVI_USA.iso
# updating MSTN-CD029-W2KPROA_USA.iso
cp "~/TechNet/MSTN-CD029-W2KPROA_USA.iso" W2KPROA_USA.iso
node dx.js "W2KPROA_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2kproa_usa "Microsoft TechNet W2KPROA_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KPROA_USA.iso
# updating MSTN-CD028-W2KPROI_USA.iso
cp "~/TechNet/MSTN-CD028-W2KPROI_USA.iso" W2KPROI_USA.iso
node dx.js "W2KPROI_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2kproi_usa "Microsoft TechNet W2KPROI_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KPROI_USA.iso
# updating MSTN-CD031-W2KSRVA_USA.iso
cp "~/TechNet/MSTN-CD031-W2KSRVA_USA.iso" W2KSRVA_USA.iso
node dx.js "W2KSRVA_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2ksrva_usa "Microsoft TechNet W2KSRVA_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KSRVA_USA.iso
# updating MSTN-CD030-W2KSRVI_USA.iso
cp "~/TechNet/MSTN-CD030-W2KSRVI_USA.iso" W2KSRVI_USA.iso
node dx.js "W2KSRVI_USA.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-w2ksrvi_usa "Microsoft TechNet W2KSRVI_USA Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt W2KSRVI_USA.iso
# updating MSTN-CD027-Y2K9908.iso
cp "~/TechNet/MSTN-CD027-Y2K9908.iso" Y2K9908.iso
node dx.js "Y2K9908.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-y2k9908 "Microsoft TechNet Y2K9908 Disc (August 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt Y2K9908.iso
# updating MSTN-CD045-Y2K9911.iso
cp "~/TechNet/MSTN-CD045-Y2K9911.iso" Y2K9911.iso
node dx.js "Y2K9911.iso" --dir --truncate > dir.txt
while true; do
    python update.py ms-technet-y2k9911 "Microsoft TechNet Y2K9911 Disc (November 1999)" dir.txt
    if [ $? -eq 0 ]; then break; fi
    sleep 300
done
rm dir.txt Y2K9911.iso
