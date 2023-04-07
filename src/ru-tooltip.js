/**
 * Tooltip
 */
{
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipLinks = document.querySelectorAll('.ru-tooltip-link');

    tooltipLinks.forEach(function (link) {
      const tooltipContentId = link.getAttribute('aria-describedby');
      const tooltipContent = document.getElementById(tooltipContentId);
      let originalParent;

      tooltipContent.querySelector('h3').style.display = 'none';

      link.addEventListener('click', function (event) {
        event.preventDefault();
      });

      link.addEventListener('mouseover', function () {
        originalParent = tooltipContent.parentNode;
        document.body.appendChild(tooltipContent);
        tooltipContent.style.display = 'block';
        positionTooltip(link, tooltipContent);
      });

      link.addEventListener('mouseout', function () {
        tooltipContent.style.display = 'none';
        originalParent.appendChild(tooltipContent);
      });

      function positionTooltip(link, tooltip) {
        const linkRect = link.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const linkCenter = linkRect.left + (linkRect.width / 2);
        const leftPosition = linkCenter - (tooltip.offsetWidth / 2);
        const topPosition = linkRect.bottom + scrollY;

        tooltip.style.left = `${leftPosition}px`;
        tooltip.style.top = `${topPosition}px`;
      }
    });
  });
}
