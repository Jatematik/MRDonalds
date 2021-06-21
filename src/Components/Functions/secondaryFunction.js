export default function formatCurrency(format) {
    return format.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    });
}