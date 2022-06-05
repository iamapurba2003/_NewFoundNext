import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";
import ErrorAlert from "../../Components/UI/error-alert";

export default function EventDetailPage() {
    const router = useRouter();
    console.log(router.query);
    const eventId = router.query.eventid;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No Event Found!!</p>
            </ErrorAlert>
        );
    }
    return (
        <React.Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </React.Fragment>
    );
}
