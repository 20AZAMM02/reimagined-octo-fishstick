function orderService(service) {

    const phone = "996709316141";

    const message =
        "Саламатсызбы! Мен «" +
        service +
        "» кызматына заказ бергим келет.";

    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}