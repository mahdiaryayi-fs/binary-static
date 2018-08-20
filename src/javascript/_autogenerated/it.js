const texts_json = {};
texts_json['IT'] = {"Day":"Giorno","Month":"Mese","Year":"Anno","Sorry,_an_error_occurred_while_processing_your_request_":"Siamo spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.","Click_here_to_open_a_Real_Account":"Clicca qui per aprire un conto reale","Open_a_Real_Account":"Apri un conto reale","Click_here_to_open_a_Financial_Account":"Clicca qui per aprire un conto finanziario","Open_a_Financial_Account":"Apri un conto finanziario","Network_status":"Stato della rete","Connecting_to_server":"Connessione al server in corso","Virtual_Account":"Account Virtuale","Real_Account":"Account Reale","Investment_Account":"Account d'investimento","Gaming_Account":"Account di gioco","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato","Su":"Dom","Mo":"Lun","Tu":"Mar","We":"Noi","Th":"Gio","Fr":"Ven","Sa":"Sab","January":"Gennaio","February":"Febbraio","March":"Marzo","April":"Aprile","May":"Mag","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre","Jan":"Gen","Jun":"Giu","Jul":"Lug","Aug":"Ago","Sep":"Sett","Oct":"Ott","Dec":"Dic","Next":"Successivo","Previous":"Precedente","Hour":"Ora","Minute":"Minuto","Time_is_in_the_wrong_format_":"L'orario è in un formato errato.","Purchase_Time":"Orario d'acquisto","Charting_for_this_underlying_is_delayed":"I grafici per questo strumento sono differiti","Reset_Time":"Data di reset","year":"anno","month":"mese","week":"settimana","day":"giorno","days":"giorni","hour":"ora","hours":"ore","minute":"minuto","minutes":"minuti","second":"secondo","seconds":"secondi","ticks":"tick","Loss":"Perdita","Profit":"Profitto","Units":"Unità","Stake":"Puntata","Duration":"Durata","End_Time":"Orario di fine","Net_profit":"Profitto netto","Return":"Rendimento","Now":"Adesso","Contract_Confirmation":"Conferma del contratto","Your_transaction_reference_is":"Il tuo riferimento per le transazioni è","Rise/Fall":"Rialzo/Ribasso","Higher/Lower":"Superiore/Inferiore","In/Out":"Dentro/Fuori","Matches/Differs":"Combacia/Differisce","Even/Odd":"Pari/Dispari","Over/Under":"Sopra/Sotto","Up/Down":"Alto/Basso","Ends_Between/Ends_Outside":"Temina Dentro/Termina Fuori","Touch/No_Touch":"Tocca/Non Tocca","Stays_Between/Goes_Outside":"Resta Dentro/Esce","Asians":"Asiatiche","High/Low_Ticks":"Tick alti/bassi","Potential_Payout":"Payout potenziale","Maximum_Payout":"Payout massimo","Total_Cost":"Costo totale","Potential_Profit":"Profitto potenziale","Maximum_Profit":"Profitto massimo","View":"Mostra","Buy_price":"Prezzo d'acquisto","Final_price":"Prezzo finale","Long":"A lungo","Short":"Breve","Chart":"Grafico","Portfolio":"Portafoglio","Explanation":"Spiegazione","Last_Digit_Stats":"Statistiche sull'ultima cifra","Waiting_for_entry_tick_":"In attesa del tick d'ingresso.","Waiting_for_exit_tick_":"In attesa del tick d'uscita.","Please_log_in_":"Effettua il login.","All_markets_are_closed_now__Please_try_again_later_":"Al momento tutti i mercati sono chiusi. Si prega di riprovare più tardi.","Account_balance:":"Saldo dell'account:","Try_our_[_1]Volatility_Indices[_2]_":"Prova i nostri [_1]Indici di Volatilità[_2].","Try_our_other_markets_":"Prova i nostri altri mercati.","Session":"Sessione","Crypto":"Cripto","Close":"Chiudi","Payoff":"Risultato","Reset_Call":"Reimposta l'opzione Call","Reset_Put":"Reimposta l'opzione Put","Search___":"Cerca...","Select_Asset":"Seleziona asset","The_reset_time_is_[_1]":"La data di reset è [_1]","Purchase":"Acquisto","Purchase_request_sent":"Richiesta di acquisto inviata","Add_+/–_to_define_a_barrier_offset__For_example,_+0_005_means_a_barrier_that's_0_005_higher_than_the_entry_spot_":"Aggiungi +/– per definire una compensazione della barriera. Per esempio, +0,005 indica che una barriera è superiore di 0,005 rispetto al punto di entrata.","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"Il tuo account è stato completamente convalidato e sono stati rimossi i tuoi limiti di prelievo.","Your_withdrawal_limit_is_[_1]_[_2]_":"Il tuo limite di prelievo è [_1] [_2].","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Il tuo limite di prelievo è [_2] [_1] (oppure equivalente in altra valuta).","You_have_already_withdrawn_[_1]_[_2]_":"Hai già prelevato [_1] [_2].","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"Hai già prelevato l'equivalente di [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"Pertanto il tuo attuale prelievo massimo immediato (soggetto alla disponibilità di fondi sufficienti nell'account) è pari a [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Pertanto il tuo attuale prelievo massimo immediato (soggetto alla disponibilità di fondi sufficienti nell'account) è pari a [_1] [_2] (o equivalente in un'altra valuta).","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"Il tuo limite di prelievo giornaliero di [_1] è attualmente [_2] [_3] (oppure equivalente in un'altra valuta).","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"Hai già prelevato l'equivalente complessivo di [_1] [_2] negli ultimi [_3] giorni.","Contracts_where_the_barrier_is_the_same_as_entry_spot_":"I contratti in cui la barriera è uguale al punto di ingresso.","Contracts_where_the_barrier_is_different_from_the_entry_spot_":"I contratti in cui la barriera è diversa dal punto di ingresso.","ATM":"Bancomat","Duration_up_to_7_days":"Durata massima di 7 giorni","Duration_above_7_days":"Durata superiore ai 7 giorni","Major_Pairs":"Coppie principali","This_field_is_required_":"Questo campo è obbligatorio.","Please_select_the_checkbox_":"Seleziona la casella corrispondente.","Please_accept_the_terms_and_conditions_":"Accetta i termini e le condizioni.","Only_[_1]_are_allowed_":"Sono consentiti solo [_1].","letters":"lettere","numbers":"numeri","space":"spazio","Sorry,_an_error_occurred_while_processing_your_account_":"Siamo spiacenti, si è verificato un errore durante l'elaborazione del tuo account.","Your_changes_have_been_updated_successfully_":"Le tue modifiche sono state aggiornate con successo.","Your_settings_have_been_updated_successfully_":"Le tue impostazioni sono state aggiornate con successo.","Female":"Donna","Please_select_a_country":"Seleziona un paese","Please_confirm_that_all_the_information_above_is_true_and_complete_":"Ti chiediamo di confermare che tutte le informazioni sopra riportate sono veritiere e complete.","Your_application_to_be_treated_as_a_professional_client_is_being_processed_":"La tua richiesta di essere categorizzato come cliente professionale è in fase di elaborazione.","You_are_categorised_as_a_retail_client__Apply_to_be_treated_as_a_professional_trader_":"Sei categorizzato come cliente al dettaglio. Richiedi di essere categorizzato come trader professionista.","You_are_categorised_as_a_professional_client_":"Sei categorizzato come cliente professionista.","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"Il tuo token è scaduto o invalido. Clicca <a href=\"[_1]\">qui</a> per riavviare la procedura di verifica.","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"L'indirizzo email fornito è già in uso. Se hai dimenticato la password, prova il nostro <a href=\"[_1]\">strumento di recupero della password</a> o contatta il nostro servizio clienti.","Password_should_have_lower_and_uppercase_letters_with_numbers_":"La password deve contenere lettere minuscole e maiuscole con numeri.","Password_is_not_strong_enough_":"La password non è sufficientemente forte.","Your_session_duration_limit_will_end_in_[_1]_seconds_":"Il limite di durata della tua sessione terminerà tra [_1] secondi.","Invalid_email_address_":"Indirizzo email non valido.","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"Grazie per esserti registrato! Controlla la tua email per completare la procedura di registrazione.","Financial_Account":"Conto finanziario","Upgrade_now":"Aggiorna adesso","Please_select":"Seleziona","Minimum_of_[_1]_characters_required_":"Sono richiesti minimo [_1] caratteri.","Please_confirm_that_you_are_not_a_politically_exposed_person_":"Ti chiediamo di confermare che non sei una persona politicamente esposta.","Opens":"Apre","Closes":"Chiude","Settles":"Liquida","Upcoming_Events":"Prossimi eventi","Closes_early_(at_21:00)":"Chiude in anticipo (alle 21:00)","Closes_early_(at_18:00)":"Chiude in anticipo (alle 18:00)","New_Year's_Day":"Capodanno","Christmas_Day":"Giorno di Natale","Fridays":"Venerdì","today":"oggi","today,_Fridays":"oggi, Venerdì","Please_select_a_payment_agent":"Seleziona un agente di pagamento","Payment_Agent_services_are_not_available_in_your_country_or_in_your_preferred_currency_":"I servizi relativi agli agenti di pagamento non sono disponibili nel tuo paese o nella valuta selezionata.","Invalid_amount,_minimum_is":"Importo non valido, il minimo è","Invalid_amount,_maximum_is":"Importo non valido, il massimo è","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"La tua richiesta di prelevare [_1] [_2] dal tuo account [_3] all'account dell'Agente di pagamento [_4] è stata elaborata con successo.","Up_to_[_1]_decimal_places_are_allowed_":"Sono ammessi fino a [_1] decimali.","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"Il tuo token è scaduto o invalido. Clicca [_1]qui[_2] per riavviare la procedura di verifica.","New_token_created_":"Nuovo token creato.","The_maximum_number_of_tokens_([_1])_has_been_reached_":"Il numero massimo di token ([_1]) è stato raggiunto.","Name":"Nome","Last_Used":"Ultimo utilizzato","Scopes":"Scopi","Never_Used":"Mai utilizzato","Delete":"Elimina","Are_you_sure_that_you_want_to_permanently_delete_the_token":"Sei sicuro di voler eliminare definitivamente il token","Please_select_at_least_one_scope":"Seleziona almeno uno scopo","Guide":"Guida","Finish":"Termina","Select_your_market_and_underlying_asset":"Seleziona il tuo mercato e l'asset sottostante","Select_your_trade_type":"Seleziona la tua tipologia di trade","Adjust_trade_parameters":"Regola i parametri di trading","Predict_the_direction<br_/>and_purchase":"Prevedi la direzione<br />e acquista","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"Siamo spiacenti, questa funzione è disponibile solo sugli account virtuali.","[_1]_[_2]_has_been_credited_into_your_virtual_account:_[_3]_":"[_1] [_2] è stato accreditato sul tuo account virtuale: [_3].","years":"anni","months":"mesi","weeks":"settimane","Your_changes_have_been_updated_":"Le tue modifiche sono state aggiornate.","Please_enter_an_integer_value":"Inserisci un numero intero","Session_duration_limit_cannot_be_more_than_6_weeks_":"Il limite di durata della sessione non può essere superiore a 6 settimane.","You_did_not_change_anything_":"Non hai modificato nulla.","Please_select_a_valid_date_":"Seleziona una data valida.","Please_select_a_valid_time_":"Seleziona un orario valido.","Time_out_cannot_be_in_the_past_":"La scadenza non può essere nel passato.","Time_out_must_be_after_today_":"La scadenza non può essere nella giornata di oggi.","Time_out_cannot_be_more_than_6_weeks_":"La scadenza non può essere superiore alle 6 settimane.","Exclude_time_cannot_be_less_than_6_months_":"Il periodo di esclusione non può essere inferiore a 6 mesi.","Exclude_time_cannot_be_for_more_than_5_years_":"Il periodo di esclusione non può essere superiore a 5 anni.","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"Quando clicchi su \"OK\" verrai escluso dal trading sul sito fino alla data selezionata.","Timed_out_until":"Sessione sospesa fino a","Excluded_from_the_website_until":"Esclusione dal sito fino a","Ref_":"Rif.","Resale_not_offered":"La rivendita non è offerta","Date":"Data","Action":"Azione","Contract":"Contratto","Sale_Date":"Data della vendita","Sale_Price":"Prezzo di vendita","Total_Profit/Loss":"Profitto/Perdita totale","Your_account_has_no_trading_activity_":"Sul tuo account non c'è alcuna attività di trading.","Today":"Oggi","Details":"Dettagli","Sell":"Vendi","Buy":"Acquista","Virtual_money_credit_to_account":"Credito virtuale sull'account","This_feature_is_not_relevant_to_virtual-money_accounts_":"Questa funzione non è riferita agli account con denaro virtuale.","Japan":"Giappone","Questions":"Domande","True":"Vero","False":"Falso","There_was_some_invalid_character_in_an_input_field_":"Un campo di immissione testo conteneva uno o più caratteri non validi.","Please_follow_the_pattern_3_numbers,_a_dash,_followed_by_4_numbers_":"Segui il modello con 3 numeri, un trattino e 4 numeri.","Score":"Punteggio","Weekday":"Giorno feriale","Processing_your_request___":"Elaborazione in corso della tua richiesta...","Please_check_the_above_form_for_pending_errors_":"Ti chiediamo di controllare il modulo sopra a causa di errori in sospeso.","Asian_Up":"Rialzo Asiatiche","Asian_Down":"Ribasso Asiatiche","Digit_Matches":"Cifra uguale","Digit_Differs":"Cifra differente","Digit_Odd":"Cifra dispari","Digit_Even":"Cifra pari","Digit_Over":"Cifra superiore","Digit_Under":"Cifra inferiore","[_1]_[_2]_payout_if_[_3]_is_strictly_higher_than_or_equal_to_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] è molto più alto o uguale alla Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_is_strictly_lower_than_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] è molto più basso alla Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] non tocca la Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_touches_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] tocca la Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_ends_on_or_between_low_and_high_values_of_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina su o tra i valori inferiori e superiori del prezzo d'esercizio vicino a [_4].","[_1]_[_2]_payout_if_[_3]_ends_outside_low_and_high_values_of_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina al di fuori dei valori inferiori e superiori del prezzo d'esercizio vicino a [_4].","[_1]_[_2]_payout_if_[_3]_stays_between_low_and_high_values_of_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina tra i valori inferiori e superiori della Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_goes_outside_of_low_and_high_values_of_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina al di fuori dei valori inferiori e superiori della Barriera vicino a [_4].","Higher":"Superiore","Higher_or_equal":"Maggiore o uguale","Lower":"Inferiore","Lower_or_equal":"Inferiore o uguale","Touches":"Tocca","Does_Not_Touch":"Non tocca","Ends_Between":"Finisce tra","Ends_Outside":"Termina fuori","Stays_Between":"Resta Dentro","Goes_Outside":"Esce fuori","All_barriers_in_this_trading_window_are_expired":"Tutte le barriere in questa finestra di trading sono scadute","Remaining_time":"Tempo residuo","Market_is_closed__Please_try_again_later_":"Il mercato è chiuso. Si prega di riprovare più tardi.","This_symbol_is_not_active__Please_try_another_symbol_":"Questo simbolo non è attivo. Prova un altro simbolo.","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"Siamo spiacenti, il tuo account non è autorizzato per qualsiasi altro acquisto di contratti.","Lots":"Lotti","Payout_per_lot_=_1,000":"Payout per lotto = 1.000","This_page_is_not_available_in_the_selected_language_":"Questa pagina non è disponibile nella lingua selezionata.","Trading_Window":"Finestra di trading","Percentage":"Percentuale","Digit":"Cifra","Amount":"Importo","Deposit":"Deposita","Withdrawal":"Prelievo","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"La tua richiesta di trasferire [_1] [_2] da [_3] a [_4] è stata elaborata con successo.","Date_and_Time":"Data e orario","IP_Address":"Indirizzo IP","Status":"Stato","Successful":"Riuscito","Failed":"Non riuscito","Your_account_has_no_Login/Logout_activity_":"Sul tuo account non c'è alcuna attività di Login/Logout.","Please_enter_a_number_between_[_1]_":"Inserisci un numero compreso tra [_1].","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] giorni [_2] ore [_3] minuti","Your_trading_statistics_since_[_1]_":"Le tue statistiche di trading dal [_1].","Unlock_Cashier":"Sblocca Cassa","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"Come da tua richiesta, la cassa è bloccata. Per sbloccarla, inserisci la password.","Lock_Cashier":"Blocca la cassa","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"Può essere utilizzata una password aggiuntiva per limitare l'accesso alla cassa.","Update":"Aggiorna","Sorry,_you_have_entered_an_incorrect_cashier_password":"Siamo spiacenti, hai inserito una password della cassa non corretta","You_have_reached_the_withdrawal_limit_":"Hai raggiunto il limite di prelievo.","Start_Time":"Orario di inizio","Entry_Spot":"Punto d'ingresso","Low_Barrier":"Barriera inferiore","High_Barrier":"Barriera superiore","Reset_Barrier":"Reimpostare la barriera","Average":"Media","This_contract_won":"Questo contratto ha vinto","This_contract_lost":"Questo contratto ha perso","Barrier":"Barriera","Equals":"Equivale a","Not":"No","Description":"Descrizione","Credit/Debit":"Credito/Debito","Balance":"Saldo","Purchase_Price":"Prezzo d'acquisto","Profit/Loss":"Profitto/Perdita","Contract_Information":"Informazioni del contratto","Contract_Result":"Esito del contratto","Current":"Attuale","Open":"Apri","Closed":"Chiuso","Contract_has_not_started_yet":"Il contratto non è ancora iniziato","Spot_Time":"Orario di spot","Spot_Time_(GMT)":"Orario di spot (GMT)","Current_Time":"Orario attuale","Exit_Spot_Time":"Orario del prezzo di uscita","Exit_Spot":"Prezzo di uscita","Indicative":"Indicativo","There_was_an_error":"Si è verificato un errore","Sell_at_market":"Vendi sul mercato","You_have_sold_this_contract_at_[_1]_[_2]":"Hai venduto questo contratto a [_1] [_2]","Your_transaction_reference_number_is_[_1]":"Il tuo numero di riferimento per le transazioni è [_1]","Tick_[_1]_is_the_highest_tick":"Il tick [_1] è il tick più alto","Tick_[_1]_is_not_the_highest_tick":"Il tick [_1] non è il tick più alto","Tick_[_1]_is_the_lowest_tick":"Il tick [_1] è il tick più basso","Tick_[_1]_is_not_the_lowest_tick":"Il tick [_1] non è il tick più basso","Note":"Nota","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"Il Contratto verrá venduto al prezzo di mercato prevalente nel momento in cui i nostri server ricevono la richiesta. Tale prezzo può differire rispetto al prezzo indicato.","Contract_Type":"Tipo di contratto","Transaction_ID":"ID della transazione","Remaining_Time":"Tempo residuo","Barrier_Change":"Modifica della barriera","Audit":"Controllo","Audit_Page":"Pagina di controllo","View_Chart":"Visualizza grafico","Contract_Starts":"Il contratto inizia","Contract_Ends":"Il contratto termina","Start_Time_and_Entry_Spot":"Orario di Inizio e Entry Spot","Exit_Time_and_Exit_Spot":"Ora e prezzo di uscita","You_can_close_this_window_without_interrupting_your_trade_":"Puoi chiudere questa finestra senza interrompere il trade.","Selected_Tick":"Tick selezionato","Highest_Tick":"Tick più alto","Highest_Tick_Time":"Periodo del tick più alto","Lowest_Tick":"Tick più basso","Lowest_Tick_Time":"Periodo del tick più basso","Please_select_a_value":"Seleziona un valore","You_have_not_granted_access_to_any_applications_":"Non hai accesso ad alcuna applicazione.","Permissions":"Autorizzazioni","Never":"Mai","Revoke_access":"Revocare l'accesso","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"Sei sicuro di voler revocare definitivamente l'accesso all'applicazione","Transaction_performed_by_[_1]_(App_ID:_[_2])":"Transazione eseguita da [_1] (ID dell'app ID: [_2])","Admin":"Amministratore","Read":"Leggi","Payments":"Pagamenti","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] Per riavviare la procedura di ripristino della password, clicca sul link qui sotto.","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"La tua password è stata ripristinata con successo. Effettua il login sul tuo account utilizzando la tua nuova password.","Please_check_your_email_for_the_password_reset_link_":"Per il link di ripristino della password, controlla le tue email.","details":"dettagli","Withdraw":"Preleva","Insufficient_balance_":"Saldo non sufficiente.","This_is_a_staging_server_-_For_testing_purposes_only":"Questo è un server tecnico - Solo per scopo di test","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"Il server <a href=\"[_1]\">finale</a> è: [_2]","Sorry,_account_signup_is_not_available_in_your_country_":"Siamo spiacenti, la registrazione di un account non è disponibile nel tuo paese.","There_was_a_problem_accessing_the_server_":"Si è verificato un problema d'accesso al server.","There_was_a_problem_accessing_the_server_during_purchase_":"Durante l'acquisto si è verificato un problema d'accesso al server.","Should_be_a_valid_number_":"Deve essere un numero valido.","Should_be_more_than_[_1]":"Deve essere maggiore di [_1]","Should_be_less_than_[_1]":"Deve essere inferiore a [_1]","Should_be_between_[_1]_and_[_2]":"Deve essere compreso tra [_1] e [_2]","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Sono consentiti solo lettere, numeri, spazi, trattini, punti e apostrofi.","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Sono consentite solo lettere, spazi, trattini, punti e apostrofi.","Only_letters,_numbers,_and_hyphen_are_allowed_":"Sono consentiti solo lettere, numeri e trattini.","Only_numbers,_space,_and_hyphen_are_allowed_":"Sono consentiti solo numeri, spazi e trattini.","Only_numbers_and_spaces_are_allowed_":"Sono consentiti solo numeri e spazi.","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_-___'_#_;_:_(_)_,_@_/":"Sono consentiti solo lettere, numeri, spazi e questi caratteri speciali: - . ' # ; : ( ) , @ /","The_two_passwords_that_you_entered_do_not_match_":"Le due password inserite non combaciano.","[_1]_and_[_2]_cannot_be_the_same_":"[_1] e 2% non possono essere uguali.","You_should_enter_[_1]_characters_":"Dovresti inserire [_1] caratteri.","Indicates_required_field":"Indica un campo obbligatorio","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"Il codice di verifica è errato. Ti chiedo di utilizzare il link inviato alla tua email.","The_password_you_entered_is_one_of_the_world's_most_commonly_used_passwords__You_should_not_be_using_this_password_":"La password inserita è una delle password più comunemente usate del mondo. Non dovresti usare questa password.","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"Suggerimento: servirebbero circa [_1][_2] per decifrare la password.","thousand":"mila","million":"milioni","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"Deve iniziare con una lettera o un numero e può contenere la lineetta e il trattino basso.","Your_address_could_not_be_verified_by_our_automated_system__You_may_proceed_but_please_ensure_that_your_address_is_complete_":"Il nostro sistema automatizzato non ha potuto verificare il tuo indirizzo. È possibile procedere con le operazioni, ti invitiamo tuttavia ad assicurati che l'indirizzo sia completo.","Validate_address":"Convalida l'indirizzo","Congratulations!_Your_[_1]_Account_has_been_created_":"Congratulazioni! Il tuo account [_1] è stato creato.","The_[_1]_password_of_account_number_[_2]_has_been_changed_":"La password [_1] del conto numero [_2] è stata modificata.","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"Il deposito di [_1] da [_2] sul numero di account [_3] è stato effettuato. ID della transazione: [_4]","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"Il prelievo di [_1] dall'account numero [_2] su [_3] è stato eseguito. ID della transazione: [_4]","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_click_<a_href=\"[_1]\">here</a>_":"Come da tua richiesta, la cassa è bloccata. Per sbloccarla, clicca <a href=\"[_1]\">qui</a>.","Your_cashier_is_locked_":"La tua cassa é bloccata.","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"I fondi presenti sul conto Binary non sono sufficienti, <a href=\"[_1]\">aggiungi fondi</a>.","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"Siamo spiacenti, questa funzione non è disponibile nella tua giurisdizione.","You_have_reached_the_limit_":"Hai raggiunto il limite.","Main_password":"Password principale","Investor_password":"Password dell'investitore","Current_password":"Password attuale","New_password":"Nuova password","Demo_Standard":"Demo standard","Demo_Advanced":"Demo Avanzato","Advanced":"Avanzato","Demo_Volatility_Indices":"Indici di volatilità demo","Real_Standard":"Standard Reale","Real_Advanced":"Conto avanzato reale","Real_Volatility_Indices":"Indici di volatilità reali","MAM_Advanced":"MAM avanzato","MAM_Volatility_Indices":"Indici di volatilità MAM","Change_Password":"Modifica Password","Demo_Accounts":"Account demo","Demo_Account":"Conto demo","Real-Money_Accounts":"Conto monetario reale","Real-Money_Account":"Conto monetario reale","MAM_Accounts":"Conti MAM","Our_MT5_service_is_currently_unavailable_to_EU_residents_due_to_pending_regulatory_approval_":"Il nostro servizio MT5 non è attualmente disponibile per i residenti UE poiché in attesa di approvazione regolamentare.","Trading_Contracts_for_Difference_(CFDs)_on_Volatility_Indices_may_not_be_suitable_for_everyone__Please_ensure_that_you_fully_understand_the_risks_involved,_including_the_possibility_of_losing_all_the_funds_in_your_MT5_account__Gambling_can_be_addictive_–_please_play_responsibly_":"Il trading di contratti per differenza (CFDs) sugli indici di volatilità può non essere adatto a tutti. Assicurati di aver compreso appieno i rischi connessi, inclusa la possibilità di perdere tutti fondi nel tuo conto reale MT5. Il gioco d'azzardo può creare dipendenza, per questo ti invitiamo a giocare responsabilmente.","Do_you_wish_to_continue?":"Desideri continuare?","for_account_[_1]":"per il conto [_1]","Verify_Reset_Password":"Verifica la nuova password","Reset_Password":"Ripristina password","Please_check_your_email_for_further_instructions_":"Ti invitiamo a controllare il tuo indirizzo e-mail per ulteriori indicazioni.","Revoke_MAM":"Annulla MAM","Manager_successfully_revoked":"Revoca del gestore avvenuta con successo","Current_balance":"Saldo attuale","Withdrawal_limit":"Limite per i prelievi","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1]Convalida il tuo account[_2] ora per approfittare di tutti i metodi di pagamento disponibili.","Please_set_the_[_1]currency[_2]_of_your_account_":"Imposta la [_1]valuta[_2] del tuo account.","Please_set_your_30-day_turnover_limit_in_our_[_1]self-exclusion_facilities[_2]_to_remove_deposit_limits_":"Per rimuovere i limiti di deposito ti chiediamo di impostare il tuo limite di turnover per i 30 giorni, nelle [_1]funzioni di auto-esclusione[_2].","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"Prima di passare a un account con soldi reali, imposta il [_1]paese di residenza[_2].","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]compila il modulo della valutazione finanziaria[_2].","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]completa il profilo del tuo account[_2].","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]accetta i Termini e condizioni aggiornati[_2].","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Il tuo account è limitato. Per ricevere assistenza, [_1]contatta l'assistenza clienti[_2].","Connection_error:_Please_check_your_internet_connection_":"Errore di connessione: verifica la tua connessione internet.","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"Hai raggiunto il limite delle richieste per secondo. Per favore prova più tardi.","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1] richiede che la funzione di archiviazione web del tuo browser venga attivato in modo da funzionare adeguatamente. Si prega di attivarlo o uscire dalla modalità di navigazione privata.","We_are_reviewing_your_documents__For_more_details_[_1]contact_us[_2]_":"Stiamo esaminando i tuoi documenti. Per ulteriori informazioni [_1]contattaci[_2].","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"La funzione di deposito e prelievo è stata disabilitata per il tuo conto. Ti invitiamo a controllare il tuo indirizzo e-mail per ulteriori indicazioni.","Trading_and_deposits_have_been_disabled_on_your_account__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Le funzioni di trading e di deposito sono state disabilitate per il tuo conto. Ti preghiamo di [_1]contattare l'assistenza clienti[_2].","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"La funzione di prelievo è stata disabilitata per il tuo conto. Ti invitiamo a controllare il tuo indirizzo e-mail per ulteriori indicazioni.","Account_Authenticated":"Autenticazione del conto","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"Il tuo web browser ([_1]) non è aggiornato e potrebbe influire sulla tua esperienza di trading. Procedi a tuo rischio. [_2]Aggiorna il browser[_3]","Bid":"Offerta","Closed_Bid":"Offerta chiusa","Create":"Crea","Commodities":"Materie prime","Indices":"Indici","Stocks":"Azioni","Volatility_Indices":"Indici di Volatilità","Set_Currency":"Imposta la valuta","Please_choose_a_currency":"Scegli una valuta","Create_Account":"Crea un account","Accounts_List":"Elenco degli account","[_1]_Account":"Account [_1]","Investment":"Investimento","Gaming":"Gioco online","Virtual":"Virtuale","Real":"Reale","Counterparty":"Controparte","This_account_is_disabled":"Questo conto è disattivato","This_account_is_excluded_until_[_1]":"Questo conto è escluso fino a [_1]","Invalid_document_format:_\"[_1]\"":"Formato di documento non valido: \"[_1]\"","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_[_2]":"La dimensione del file ([_1]) supera il limite consentito. Dimensione massima consentita: [_2]","ID_number_is_required_for_[_1]_":"È necessario un numero identificativo per [_1].","Expiry_date_is_required_for_[_1]_":"La data di scadenza è necessaria per [_1].","Passport":"Passaporto","ID_card":"Carta d'identità","Driving_licence":"Patente di guida","Front_Side":"Fronte","Reverse_Side":"Retro","Front_and_reverse_side_photos_of_[_1]_are_required_":"Sono necessarie foto fronte e retro di [_1].","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1] La Verifica dell'identità o la Verifica della residenza[_2] non hanno soddisfatto i nostri requisiti. Controlla la tua e-mail per ulteriori istruzioni.","Following_file(s)_were_already_uploaded:_[_1]":"Uno o più dei seguenti file sono stati già caricati: [_1]","Checking":"Verifica in corso","Checked":"Verifica effettuata","Pending":"In sospeso","You_will_be_redirected_to_a_third-party_website_which_is_not_owned_by_Binary_com_":"Verrai reindirizzato a un sito esterno che non appartiene a Binary.com.","Click_OK_to_proceed_":"Clicca OK per procedere.","You_have_successfully_enabled_two-factor_authentication_for_your_account_":"L'autenticazione a due fattori per i tuo conto è stata abilitata con successo.","You_have_successfully_disabled_two-factor_authentication_for_your_account_":"L'autenticazione a due fattori per il tuo conto è stata disabilitata con successo.","Enable":"Abilita","Disable":"Disabilita"};