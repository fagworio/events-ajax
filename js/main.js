$(function(){
    //Jquery elements
    const $cardCard = $('#event-card');
    const $datePicker = $('#datepicker');
    const $btnReset = $('#btn-reset');
    const $loadSpinner = $('#loader');
    
    //filters
    var filteredEvents = [];
    
    //URLS
    const EVENTS_URL = 'sample-data.json';

    //MESSAGES
    const NO_RESULTS = 'Sorry! No results were found for your search.';
    const ERROR_ON_LOAD_EVENTS = 'Oops, somethings is wrong with your ajax request!'

    $datePicker.datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showButtonPanel: false,
        dateFormat: 'dd/mm/yy',
        altFormat: "dd/mm/yy",
        onSelect: function(date) { 
            getEventsByDate(date);
            showLoadSpinner();
         }
    });
    
    $datePicker.mask('00/00/0000');

    loadEvents();
    resetSearch();
    
    function showLoadSpinner() {
        $loadSpinner.show();
    }

    function hideLoadSpinner() {
        $loadSpinner.hide();
    }

    function loadEvents() {
        $.ajax({
            type: 'GET',
            url: EVENTS_URL,
            beforeSend: showLoadSpinner,
            success: templateRender,
            complete: hideLoadSpinner,
            error: ()=> {
               infoMessage(ERROR_ON_LOAD_EVENTS, '#F7715D');
            }
        });
    }

    function resetSearch() {
        $btnReset.click((e)=>{
            e.preventDefault();
            $datePicker.val('');
            clearEvents();
            loadEvents();
        });
    }

    function getEventsByDate(date) {
        if (date.length > 0) {
            $.ajax({
                type: 'GET',
                url: EVENTS_URL,
                success: (events)=> {
                    getEvents(events, date);
                },
                error: ()=> {
                    infoMessage(ERROR_ON_LOAD_EVENTS, '#F7715D');
                }
            }).done(()=>{
                hideLoadSpinner();
                showFilterResults();
            });
        }
    }

    function getEvents(events, date) {
        $.each(events, (i, event) => {
            event.forEach(item => {
                let startDate = moment.unix(item.start).format('MM/DD/YYYY');
                if(date === startDate) {
                    filteredEvents.push(item);
                }
            })
        })
    }

    function showFilterResults() {
        if(filteredEvents.length !== 0) { 
            clearEvents();
            filteredEvents.forEach((item)=>{
                $cardCard.append(templateGenerator(item));
            })
            filteredEvents = [];
        } else {
            infoMessage(NO_RESULTS, '#F7715D');
        }
    }

    function clearEvents() {
        $cardCard.find('article').remove();
    }

    function infoMessage(message = 'No results found!', color = '#F7715D') {
        let messageELement = `
                <article class="no-results fade-in">
                    <h1 style="color: ${color}">${message}</h1>
                <article>`;

        $cardCard.find('article').remove();
        $cardCard.append(messageELement);
    }

    function templateRender(events) {
        $.each(events, (i, event) => {
                event.forEach(item => {               
                $cardCard.append(templateGenerator(item));
            });
        })
    }

    function templateGenerator(item) {
        let cardTemplate =  `
                <article class="card col fade-in">
                    <h1 class="card__title">${item.title}</h1>
                    <img class="card__image" 
                        src="img/${item.image.length ? item.image : 'event-default.png' }" 
                        alt="${item.title}" title="${item.title}">
                    <h3 class="card__sub-title">Description:</h3>
                    <p class="card__desc">${item.description}</p>
                    <div class="date">
                        <div class="date__inner">
                            <i class="date__inner--icon far fa-calendar-alt"></i>
                            <h3 class="date__inner--title">Start:</h3>
                            <p class="date__inner--start">
                                ${moment.unix(item.start).format('MM/DD/YYYY')} 
                            </p>
                        </div>
                        <div class="date__inner">
                            <i class="date__inner--icon far fa-calendar-alt"></i>
                            <h3 class="date__inner--title">End:</h3>
                            <p class="date__inner--end">
                                ${moment.unix(item.end).format('MM/DD/YYYY')} 
                            </p>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="recurrence">
                        <i class="event-icon fas fa-sync-alt"></i>
                        <h3 class="event-title">Recurrence:</h3>
                        <p class="event-desc">${item.recurrence}</p>
                    </div>
                    <div class="costs">
                        <i class="event-icon fas fa-ticket-alt"></i>
                        <h3 class="event-title">Costs:</h3>
                        <p class="event-desc">${item.costs}</p>
                    </div>
                    <div class="link">
                        <i class="event-icon fas fa-external-link-square-alt"></i>
                        <h3 class="event-title">Link:</h3>
                        <p class="event-desc"><a href="${item.link}" target="_blank">${item.link}</a></p>
                    </div>
                    <div class="venue">
                        <i class="event-icon fas fa-map-marked-alt"></i>
                        <h3 class="event-title">Venue:</h3>
                        <p class="event-desc">Venue: ${item.venue.name + ', ' + item.venue.street + ', ' + item.venue.city + ', ' + item.venue.zip}</p>
                    </div>
                    <div class="category">
                        <i class="event-icon fas fa-tags"></i>
                        <h3 class="event-title">Category:</h3>
                        <p class="event-desc">${item.category}</p>
                    </div>
                </article>`;

            return cardTemplate;
    }
});